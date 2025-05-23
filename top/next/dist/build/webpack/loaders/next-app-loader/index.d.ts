import type webpack from 'next/dist/compiled/webpack/webpack';
import { type ValueOf } from '../../../../shared/lib/constants';
import type { ModuleTuple, CollectedMetadata } from '../metadata/types';
import type { NextConfig } from '../../../../server/config-shared';
import type { PageExtensions } from '../../../page-extensions-type';
export type AppLoaderOptions = {
    name: string;
    page: string;
    pagePath: string;
    appDir: string;
    appPaths: readonly string[] | null;
    preferredRegion: string | string[] | undefined;
    pageExtensions: PageExtensions;
    assetPrefix: string;
    rootDir?: string;
    tsconfigPath?: string;
    isDev?: true;
    basePath: string;
    nextConfigOutput?: NextConfig['output'];
    nextConfigExperimentalUseEarlyImport?: true;
    middlewareConfig: string;
};
type AppLoader = webpack.LoaderDefinitionFunction<AppLoaderOptions>;
declare const FILE_TYPES: {
    readonly 'not-found': "not-found";
    readonly forbidden: "forbidden";
    readonly unauthorized: "unauthorized";
    readonly layout: "layout";
    readonly template: "template";
    readonly error: "error";
    readonly loading: "loading";
    readonly 'global-error': "global-error";
};
export type MetadataResolver = (dir: string, filename: string, extensions: readonly string[]) => Promise<string | undefined>;
export type AppDirModules = {
    readonly [moduleKey in ValueOf<typeof FILE_TYPES>]?: ModuleTuple;
} & {
    readonly page?: ModuleTuple;
} & {
    readonly metadata?: CollectedMetadata;
} & {
    readonly defaultPage?: ModuleTuple;
};
declare const nextAppLoader: AppLoader;
export default nextAppLoader;
