import yargs from "yargs";
/**
 * Generates a new migration file with sql needs to be executed to update schema.
 */
export declare class MigrationGenerateCommand implements yargs.CommandModule {
    command: string;
    describe: string;
    builder(args: yargs.Argv): yargs.Argv<{
        path: string;
    } & {
        dataSource: string;
    } & {
        p: boolean;
    } & {
        o: boolean;
    } & {
        esm: boolean;
    } & {
        dr: boolean;
    } & {
        ch: boolean;
    } & {
        t: number | boolean;
    }>;
    handler(args: yargs.Arguments<any & {
        path: string;
    }>): Promise<void>;
    /**
     * Formats query parameters for migration queries if parameters actually exist
     */
    protected static queryParams(parameters: any[] | undefined): string;
    /**
     * Gets contents of the migration file.
     */
    protected static getTemplate(name: string, timestamp: number, upSqls: string[], downSqls: string[]): string;
    /**
     * Gets contents of the migration file in Javascript.
     */
    protected static getJavascriptTemplate(name: string, timestamp: number, upSqls: string[], downSqls: string[], esm: boolean): string;
    /**
     *
     */
    protected static prettifyQuery(query: string): string;
}
