import type { NextConfigComplete } from '../server/config-shared';
import type { ExperimentalPPRConfig } from '../server/lib/experimental/ppr';
import type { AppBuildManifest } from './webpack/plugins/app-build-manifest-plugin';
import type { ServerRuntime } from '../types';
import type { BuildManifest } from '../server/get-page-files';
import type { CustomRoutes } from '../lib/load-custom-routes';
import type { MiddlewareManifest } from './webpack/plugins/middleware-plugin';
import type { WebpackLayerName } from '../lib/constants';
import '../server/require-hook';
import '../server/node-polyfill-crypto';
import '../server/node-environment';
import type { PageExtensions } from './page-extensions-type';
import type { FallbackMode } from '../lib/fallback';
import type { OutgoingHttpHeaders } from 'http';
import type { AppSegmentConfig } from './segment-config/app/app-segment-config';
import type { AppSegment } from './segment-config/app/app-segments';
import type { PrerenderedRoute } from './static-paths/types';
import type { CacheControl } from '../server/lib/cache-control';
export type ROUTER_TYPE = 'pages' | 'app';
export declare function unique<T>(main: ReadonlyArray<T>, sub: ReadonlyArray<T>): T[];
export declare function difference<T>(main: ReadonlyArray<T> | ReadonlySet<T>, sub: ReadonlyArray<T> | ReadonlySet<T>): T[];
type ComputeFilesGroup = {
    files: ReadonlyArray<string>;
    size: {
        total: number;
    };
};
type ComputeFilesManifest = {
    unique: ComputeFilesGroup;
    common: ComputeFilesGroup;
};
type ComputeFilesManifestResult = {
    router: {
        pages: ComputeFilesManifest;
        app?: ComputeFilesManifest;
    };
    sizes: Map<string, number>;
};
export declare function computeFromManifest(manifests: {
    build: BuildManifest;
    app?: AppBuildManifest;
}, distPath: string, gzipSize?: boolean, pageInfos?: Map<string, PageInfo>): Promise<ComputeFilesManifestResult>;
export declare function isMiddlewareFilename(file?: string | null): file is "middleware" | "src/middleware";
export declare function isInstrumentationHookFilename(file?: string | null): file is "instrumentation" | "src/instrumentation";
export interface PageInfo {
    isHybridAmp?: boolean;
    size: number;
    totalSize: number;
    isStatic: boolean;
    isSSG: boolean;
    /**
     * If true, it means that the route has partial prerendering enabled.
     */
    isRoutePPREnabled: boolean;
    ssgPageRoutes: string[] | null;
    initialCacheControl: CacheControl | undefined;
    pageDuration: number | undefined;
    ssgPageDurations: number[] | undefined;
    runtime: ServerRuntime;
    hasEmptyPrelude?: boolean;
    hasPostponed?: boolean;
    isDynamicAppRoute?: boolean;
}
export type PageInfos = Map<string, PageInfo>;
export interface RoutesUsingEdgeRuntime {
    [route: string]: 0;
}
export declare function collectRoutesUsingEdgeRuntime(input: PageInfos): RoutesUsingEdgeRuntime;
export declare function printTreeView(lists: {
    pages: ReadonlyArray<string>;
    app: ReadonlyArray<string> | undefined;
}, pageInfos: Map<string, PageInfo>, { distPath, buildId, pagesDir, pageExtensions, buildManifest, appBuildManifest, middlewareManifest, useStaticPages404, gzipSize, }: {
    distPath: string;
    buildId: string;
    pagesDir?: string;
    pageExtensions: PageExtensions;
    buildManifest: BuildManifest;
    appBuildManifest?: AppBuildManifest;
    middlewareManifest: MiddlewareManifest;
    useStaticPages404: boolean;
    gzipSize?: boolean;
}): Promise<void>;
export declare function printCustomRoutes({ redirects, rewrites, headers, }: CustomRoutes): void;
export declare function getJsPageSizeInKb(routerType: ROUTER_TYPE, page: string, distPath: string, buildManifest: BuildManifest, appBuildManifest?: AppBuildManifest, gzipSize?: boolean, cachedStats?: ComputeFilesManifestResult): Promise<[number, number]>;
type PageIsStaticResult = {
    isRoutePPREnabled?: boolean;
    isStatic?: boolean;
    isAmpOnly?: boolean;
    isHybridAmp?: boolean;
    hasServerProps?: boolean;
    hasStaticProps?: boolean;
    prerenderedRoutes: PrerenderedRoute[] | undefined;
    prerenderFallbackMode: FallbackMode | undefined;
    rootParamKeys: readonly string[] | undefined;
    isNextImageImported?: boolean;
    traceIncludes?: string[];
    traceExcludes?: string[];
    appConfig?: AppSegmentConfig;
};
export declare function isPageStatic({ dir, page, distDir, configFileName, runtimeEnvConfig, httpAgentOptions, locales, defaultLocale, parentId, pageRuntime, edgeInfo, pageType, dynamicIO, authInterrupts, originalAppPath, isrFlushToDisk, maxMemoryCacheSize, nextConfigOutput, cacheHandler, cacheHandlers, cacheLifeProfiles, pprConfig, buildId, sriEnabled, }: {
    dir: string;
    page: string;
    distDir: string;
    dynamicIO: boolean;
    authInterrupts: boolean;
    configFileName: string;
    runtimeEnvConfig: any;
    httpAgentOptions: NextConfigComplete['httpAgentOptions'];
    locales?: readonly string[];
    defaultLocale?: string;
    parentId?: any;
    edgeInfo?: any;
    pageType?: 'pages' | 'app';
    pageRuntime?: ServerRuntime;
    originalAppPath?: string;
    isrFlushToDisk?: boolean;
    maxMemoryCacheSize?: number;
    cacheHandler?: string;
    cacheHandlers?: Record<string, string | undefined>;
    cacheLifeProfiles?: {
        [profile: string]: import('../server/use-cache/cache-life').CacheLife;
    };
    nextConfigOutput: 'standalone' | 'export' | undefined;
    pprConfig: ExperimentalPPRConfig | undefined;
    buildId: string;
    sriEnabled: boolean;
}): Promise<PageIsStaticResult>;
type ReducedAppConfig = Pick<AppSegmentConfig, 'revalidate' | 'dynamic' | 'fetchCache' | 'preferredRegion' | 'experimental_ppr' | 'runtime' | 'maxDuration'>;
/**
 * Collect the app config from the generate param segments. This only gets a
 * subset of the config options.
 *
 * @param segments the generate param segments
 * @returns the reduced app config
 */
export declare function reduceAppConfig(segments: Pick<AppSegment, 'config'>[]): ReducedAppConfig;
export declare function hasCustomGetInitialProps({ page, distDir, runtimeEnvConfig, checkingApp, sriEnabled, }: {
    page: string;
    distDir: string;
    runtimeEnvConfig: any;
    checkingApp: boolean;
    sriEnabled: boolean;
}): Promise<boolean>;
export declare function getDefinedNamedExports({ page, distDir, runtimeEnvConfig, sriEnabled, }: {
    page: string;
    distDir: string;
    runtimeEnvConfig: any;
    sriEnabled: boolean;
}): Promise<ReadonlyArray<string>>;
export declare function detectConflictingPaths(combinedPages: string[], ssgPages: Set<string>, additionalGeneratedSSGPaths: Map<string, string[]>): void;
export declare function copyTracedFiles(dir: string, distDir: string, pageKeys: readonly string[], appPageKeys: readonly string[] | undefined, tracingRoot: string, serverConfig: NextConfigComplete, middlewareManifest: MiddlewareManifest, hasNodeMiddleware: boolean, hasInstrumentationHook: boolean, staticPages: Set<string>): Promise<void>;
export declare function isReservedPage(page: string): boolean;
export declare function isAppBuiltinNotFoundPage(page: string): boolean;
export declare function isCustomErrorPage(page: string): page is "/500" | "/404";
export declare function isMiddlewareFile(file: string): file is "/middleware" | "/src/middleware";
export declare function isInstrumentationHookFile(file: string): file is "/instrumentation" | "/src/instrumentation";
export declare function getPossibleInstrumentationHookFilenames(folder: string, extensions: string[]): string[];
export declare function getPossibleMiddlewareFilenames(folder: string, extensions: string[]): string[];
export declare class NestedMiddlewareError extends Error {
    constructor(nestedFileNames: string[], mainDir: string, pagesOrAppDir: string);
}
export declare function getSupportedBrowsers(dir: string, isDevelopment: boolean): string[];
export declare function isWebpackServerOnlyLayer(layer: WebpackLayerName | null | undefined): boolean;
export declare function isWebpackClientOnlyLayer(layer: WebpackLayerName | null | undefined): boolean;
export declare function isWebpackDefaultLayer(layer: WebpackLayerName | null | undefined): boolean;
export declare function isWebpackBundledLayer(layer: WebpackLayerName | null | undefined): boolean;
export declare function isWebpackAppPagesLayer(layer: WebpackLayerName | null | undefined): boolean;
export declare function collectMeta({ status, headers, }: {
    status?: number;
    headers?: OutgoingHttpHeaders;
}): {
    status?: number;
    headers?: Record<string, string>;
};
export {};
