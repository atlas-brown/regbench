"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationGenerateCommand = void 0;
const tslib_1 = require("tslib");
const sqlFormatter_1 = require("@sqltools/formatter/lib/sqlFormatter");
const ansis_1 = tslib_1.__importDefault(require("ansis"));
const path_1 = tslib_1.__importDefault(require("path"));
const process_1 = tslib_1.__importDefault(require("process"));
const PlatformTools_1 = require("../platform/PlatformTools");
const StringUtils_1 = require("../util/StringUtils");
const CommandUtils_1 = require("./CommandUtils");
/**
 * Generates a new migration file with sql needs to be executed to update schema.
 */
class MigrationGenerateCommand {
    constructor() {
        this.command = "migration:generate <path>";
        this.describe = "Generates a new migration file with sql needs to be executed to update schema.";
    }
    builder(args) {
        return args
            .positional("path", {
            type: "string",
            describe: "Path of the migration file",
            demandOption: true,
        })
            .option("dataSource", {
            alias: "d",
            type: "string",
            describe: "Path to the file where your DataSource instance is defined.",
            demandOption: true,
        })
            .option("p", {
            alias: "pretty",
            type: "boolean",
            default: false,
            describe: "Pretty-print generated SQL",
        })
            .option("o", {
            alias: "outputJs",
            type: "boolean",
            default: false,
            describe: "Generate a migration file on Javascript instead of Typescript",
        })
            .option("esm", {
            type: "boolean",
            default: false,
            describe: "Generate a migration file on ESM instead of CommonJS",
        })
            .option("dr", {
            alias: "dryrun",
            type: "boolean",
            default: false,
            describe: "Prints out the contents of the migration instead of writing it to a file",
        })
            .option("ch", {
            alias: "check",
            type: "boolean",
            default: false,
            describe: "Verifies that the current database is up to date and that no migrations are needed. Otherwise exits with code 1.",
        })
            .option("t", {
            alias: "timestamp",
            type: "number",
            default: false,
            describe: "Custom timestamp for the migration name",
        });
    }
    async handler(args) {
        const timestamp = CommandUtils_1.CommandUtils.getTimestamp(args.timestamp);
        const extension = args.outputJs ? ".js" : ".ts";
        const fullPath = args.path.startsWith("/")
            ? args.path
            : path_1.default.resolve(process_1.default.cwd(), args.path);
        const filename = timestamp + "-" + path_1.default.basename(fullPath) + extension;
        let dataSource = undefined;
        try {
            dataSource = await CommandUtils_1.CommandUtils.loadDataSource(path_1.default.resolve(process_1.default.cwd(), args.dataSource));
            dataSource.setOptions({
                synchronize: false,
                migrationsRun: false,
                dropSchema: false,
                logging: false,
            });
            await dataSource.initialize();
            const upSqls = [], downSqls = [];
            try {
                const sqlInMemory = await dataSource.driver
                    .createSchemaBuilder()
                    .log();
                if (args.pretty) {
                    sqlInMemory.upQueries.forEach((upQuery) => {
                        upQuery.query = MigrationGenerateCommand.prettifyQuery(upQuery.query);
                    });
                    sqlInMemory.downQueries.forEach((downQuery) => {
                        downQuery.query =
                            MigrationGenerateCommand.prettifyQuery(downQuery.query);
                    });
                }
                sqlInMemory.upQueries.forEach((upQuery) => {
                    upSqls.push("        await queryRunner.query(`" +
                        upQuery.query.replaceAll("`", "\\`") +
                        "`" +
                        MigrationGenerateCommand.queryParams(upQuery.parameters) +
                        ");");
                });
                sqlInMemory.downQueries.forEach((downQuery) => {
                    downSqls.push("        await queryRunner.query(`" +
                        downQuery.query.replaceAll("`", "\\`") +
                        "`" +
                        MigrationGenerateCommand.queryParams(downQuery.parameters) +
                        ");");
                });
            }
            finally {
                await dataSource.destroy();
            }
            if (!upSqls.length) {
                if (args.check) {
                    console.log(ansis_1.default.green `No changes in database schema were found`);
                    process_1.default.exit(0);
                }
                else {
                    console.log(ansis_1.default.yellow `No changes in database schema were found - cannot generate a migration. To create a new empty migration use "typeorm migration:create" command`);
                    process_1.default.exit(1);
                }
            }
            else if (!args.path) {
                console.log(ansis_1.default.yellow `Please specify a migration path`);
                process_1.default.exit(1);
            }
            const fileContent = args.outputJs
                ? MigrationGenerateCommand.getJavascriptTemplate(path_1.default.basename(fullPath), timestamp, upSqls, downSqls.reverse(), args.esm)
                : MigrationGenerateCommand.getTemplate(path_1.default.basename(fullPath), timestamp, upSqls, downSqls.reverse());
            if (args.check) {
                console.log(ansis_1.default.yellow `Unexpected changes in database schema were found in check mode:\n\n${ansis_1.default.white(fileContent)}`);
                process_1.default.exit(1);
            }
            if (args.dryrun) {
                console.log(ansis_1.default.green(`Migration ${ansis_1.default.blue(fullPath + extension)} has content:\n\n${ansis_1.default.white(fileContent)}`));
            }
            else {
                const migrationFileName = path_1.default.dirname(fullPath) + "/" + filename;
                await CommandUtils_1.CommandUtils.createFile(migrationFileName, fileContent);
                console.log(ansis_1.default.green `Migration ${ansis_1.default.blue(migrationFileName)} has been generated successfully.`);
                if (args.exitProcess !== false) {
                    process_1.default.exit(0);
                }
            }
        }
        catch (err) {
            PlatformTools_1.PlatformTools.logCmdErr("Error during migration generation:", err);
            process_1.default.exit(1);
        }
    }
    // -------------------------------------------------------------------------
    // Protected Static Methods
    // -------------------------------------------------------------------------
    /**
     * Formats query parameters for migration queries if parameters actually exist
     */
    static queryParams(parameters) {
        if (!parameters || !parameters.length) {
            return "";
        }
        return `, ${JSON.stringify(parameters)}`;
    }
    /**
     * Gets contents of the migration file.
     */
    static getTemplate(name, timestamp, upSqls, downSqls) {
        const migrationName = `${(0, StringUtils_1.camelCase)(name, true)}${timestamp}`;
        return `import { MigrationInterface, QueryRunner } from "typeorm";

export class ${migrationName} implements MigrationInterface {
    name = '${migrationName}'

    public async up(queryRunner: QueryRunner): Promise<void> {
${upSqls.join(`
`)}
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
${downSqls.join(`
`)}
    }

}
`;
    }
    /**
     * Gets contents of the migration file in Javascript.
     */
    static getJavascriptTemplate(name, timestamp, upSqls, downSqls, esm) {
        const migrationName = `${(0, StringUtils_1.camelCase)(name, true)}${timestamp}`;
        const exportMethod = esm ? "export" : "module.exports =";
        return `/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
${exportMethod} class ${migrationName} {
    name = '${migrationName}'

    async up(queryRunner) {
${upSqls.join(`
`)}
    }

    async down(queryRunner) {
${downSqls.join(`
`)}
    }
}
`;
    }
    /**
     *
     */
    static prettifyQuery(query) {
        const formattedQuery = (0, sqlFormatter_1.format)(query, { indent: "    " });
        return ("\n" + formattedQuery.replace(/^/gm, "            ") + "\n        ");
    }
}
exports.MigrationGenerateCommand = MigrationGenerateCommand;

//# sourceMappingURL=MigrationGenerateCommand.js.map
