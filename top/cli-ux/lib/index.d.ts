import * as Errors from '@oclif/core/lib/errors';
import { ActionBase } from './action/base';
import { config, Config } from './config';
import { ExitError } from './exit';
import { IPromptOptions } from './prompt';
import * as Table from './styled/table';
export declare const ux: {
    config: Config;
    warn: typeof Errors.warn;
    error: typeof Errors.error;
    exit: typeof Errors.exit;
    readonly prompt: typeof import("./prompt").prompt;
    /**
     * "press anykey to continue"
     */
    readonly anykey: typeof import("./prompt").anykey;
    readonly confirm: typeof import("./prompt").confirm;
    readonly action: ActionBase;
    readonly prideAction: ActionBase;
    styledObject(obj: any, keys?: string[] | undefined): void;
    readonly styledHeader: typeof import("./styled/header").default;
    readonly styledJSON: typeof import("./styled/json").default;
    readonly table: typeof Table.table;
    readonly tree: typeof import("./styled/tree").default;
    readonly open: typeof import("./open").default;
    readonly wait: (ms?: number) => Promise<unknown>;
    readonly progress: typeof import("./styled/progress").default;
    done(): Promise<void>;
    trace(format: string, ...args: string[]): void;
    debug(format: string, ...args: string[]): void;
    info(format: string, ...args: string[]): void;
    log(format?: string | undefined, ...args: string[]): void;
    url(text: string, uri: string, params?: {}): void;
    annotation(text: string, annotation: string): void;
    flush(): Promise<void>;
};
export default ux;
export declare const cli: {
    config: Config;
    warn: typeof Errors.warn;
    error: typeof Errors.error;
    exit: typeof Errors.exit;
    readonly prompt: typeof import("./prompt").prompt;
    /**
     * "press anykey to continue"
     */
    readonly anykey: typeof import("./prompt").anykey;
    readonly confirm: typeof import("./prompt").confirm;
    readonly action: ActionBase;
    readonly prideAction: ActionBase;
    styledObject(obj: any, keys?: string[] | undefined): void;
    readonly styledHeader: typeof import("./styled/header").default;
    readonly styledJSON: typeof import("./styled/json").default;
    readonly table: typeof Table.table;
    readonly tree: typeof import("./styled/tree").default;
    readonly open: typeof import("./open").default;
    readonly wait: (ms?: number) => Promise<unknown>;
    readonly progress: typeof import("./styled/progress").default;
    done(): Promise<void>;
    trace(format: string, ...args: string[]): void;
    debug(format: string, ...args: string[]): void;
    info(format: string, ...args: string[]): void;
    log(format?: string | undefined, ...args: string[]): void;
    url(text: string, uri: string, params?: {}): void;
    annotation(text: string, annotation: string): void;
    flush(): Promise<void>;
};
export { config, ActionBase, Config, ExitError, IPromptOptions, Table, };
