import yargs from "yargs";
/**
 * Generates a new subscriber.
 */
export declare class SubscriberCreateCommand implements yargs.CommandModule {
    command: string;
    describe: string;
    builder(args: yargs.Argv): yargs.Argv<{
        path: string;
    }>;
    handler(args: yargs.Arguments): Promise<void>;
    /**
     * Gets contents of the entity file.
     */
    protected static getTemplate(name: string): string;
}
