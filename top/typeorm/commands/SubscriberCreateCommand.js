"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberCreateCommand = void 0;
const tslib_1 = require("tslib");
const ansis_1 = tslib_1.__importDefault(require("ansis"));
const path_1 = tslib_1.__importDefault(require("path"));
const PlatformTools_1 = require("../platform/PlatformTools");
const CommandUtils_1 = require("./CommandUtils");
/**
 * Generates a new subscriber.
 */
class SubscriberCreateCommand {
    constructor() {
        this.command = "subscriber:create <path>";
        this.describe = "Generates a new subscriber.";
    }
    builder(args) {
        return args.positional("path", {
            type: "string",
            describe: "Path of the subscriber file",
            demandOption: true,
        });
    }
    async handler(args) {
        try {
            const fullPath = args.path.startsWith("/")
                ? args.path
                : path_1.default.resolve(process.cwd(), args.path);
            const filename = path_1.default.basename(fullPath);
            const fileContent = SubscriberCreateCommand.getTemplate(filename);
            const fileExists = await CommandUtils_1.CommandUtils.fileExists(fullPath + ".ts");
            if (fileExists) {
                throw new Error(`File "${fullPath}.ts" already exists`);
            }
            await CommandUtils_1.CommandUtils.createFile(fullPath + ".ts", fileContent);
            console.log(ansis_1.default.green(`Subscriber ${ansis_1.default.blue `${fullPath}.ts`} has been created successfully.`));
        }
        catch (error) {
            PlatformTools_1.PlatformTools.logCmdErr("Error during subscriber creation:", error);
            process.exit(1);
        }
    }
    // -------------------------------------------------------------------------
    // Protected Static Methods
    // -------------------------------------------------------------------------
    /**
     * Gets contents of the entity file.
     */
    static getTemplate(name) {
        return `import { EventSubscriber, EntitySubscriberInterface } from "typeorm"

@EventSubscriber()
export class ${name} implements EntitySubscriberInterface {

}
`;
    }
}
exports.SubscriberCreateCommand = SubscriberCreateCommand;

//# sourceMappingURL=SubscriberCreateCommand.js.map
