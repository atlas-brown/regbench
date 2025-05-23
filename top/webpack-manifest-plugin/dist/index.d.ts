import type { Compiler, WebpackPluginInstance, ChunkGraph } from 'webpack';
import { FileDescriptor } from './helpers';
import { getCompilerHooks } from './hooks';
export type Manifest = Record<string, any>;
export interface InternalOptions {
    [key: string]: any;
    assetHookStage: number;
    basePath: string;
    fileName: string;
    filter: (file: FileDescriptor) => Boolean;
    generate: (seed: Record<any, any>, files: FileDescriptor[], entries: Record<string, string[]>, chunkGraph: ChunkGraph) => Manifest;
    map: (file: FileDescriptor) => FileDescriptor;
    publicPath: string;
    removeKeyHash: RegExp | false;
    seed: Record<any, any>;
    serialize: (manifest: Manifest) => string;
    sort: (fileA: FileDescriptor, fileB: FileDescriptor) => Number;
    transformExtensions: RegExp;
    useEntryKeys: Boolean;
    useLegacyEmit: Boolean;
    writeToFileEmit: Boolean;
}
export type ManifestPluginOptions = Partial<InternalOptions>;
export type EmitCountMap = Map<any, any>;
declare class WebpackManifestPlugin implements WebpackPluginInstance {
    private options;
    constructor(opts: ManifestPluginOptions);
    apply(compiler: Compiler): void;
}
export { getCompilerHooks, WebpackManifestPlugin };
