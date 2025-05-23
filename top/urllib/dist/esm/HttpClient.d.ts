import diagnosticsChannel from 'node:diagnostics_channel';
import { EventEmitter } from 'node:events';
import { LookupFunction } from 'node:net';
import { Dispatcher } from 'undici';
import { CheckAddressFunction } from './HttpAgent.js';
import { RequestURL, RequestOptions, RequestMeta } from './Request.js';
import { RawResponseWithMeta, HttpClientResponse } from './Response.js';
export declare const PROTO_RE: RegExp;
export interface UndiciTimingInfo {
    startTime: number;
    redirectStartTime: number;
    redirectEndTime: number;
    postRedirectStartTime: number;
    finalServiceWorkerStartTime: number;
    finalNetworkResponseStartTime: number;
    finalNetworkRequestStartTime: number;
    endTime: number;
    encodedBodySize: number;
    decodedBodySize: number;
    finalConnectionTimingInfo: {
        domainLookupStartTime: number;
        domainLookupEndTime: number;
        connectionStartTime: number;
        connectionEndTime: number;
        secureConnectionStartTime: number;
    };
}
export interface UnidiciTimingInfo extends UndiciTimingInfo {
}
export type ClientOptions = {
    defaultArgs?: RequestOptions;
    /** Allow to use HTTP2 first. Default is `false` */
    allowH2?: boolean;
    /**
     * Custom DNS lookup function, default is `dns.lookup`.
     */
    lookup?: LookupFunction;
    /**
      * check request address to protect from SSRF and similar attacks.
      * It receive two arguments(ip and family) and should return true or false to identified the address is legal or not.
      * It rely on lookup and have the same version requirement.
      */
    checkAddress?: CheckAddressFunction;
    connect?: {
        key?: string | Buffer;
        /**
        * A string or Buffer containing the certificate key of the client in PEM format.
        * Notes: This is necessary only if using the client certificate authentication
        */
        cert?: string | Buffer;
        /**
        * If `true`, the server certificate is verified against the list of supplied CAs.
        * An 'error' event is emitted if verification fails.
        * Default: `true`
        */
        rejectUnauthorized?: boolean;
        /**
         * socketPath string | null (optional) - Default: null - An IPC endpoint, either Unix domain socket or Windows named pipe
         */
        socketPath?: string | null;
        /**
         * connect timeout, default is 10000ms
         */
        timeout?: number;
    };
};
export declare const VERSION = "VERSION";
export declare const HEADER_USER_AGENT: string;
export type RequestContext = {
    retries: number;
    socketErrorRetries: number;
    requestStartTime?: number;
    redirects: number;
    history: string[];
};
export declare const channels: {
    request: diagnosticsChannel.Channel<unknown, unknown>;
    response: diagnosticsChannel.Channel<unknown, unknown>;
    fetchRequest: diagnosticsChannel.Channel<unknown, unknown>;
    fetchResponse: diagnosticsChannel.Channel<unknown, unknown>;
};
export type RequestDiagnosticsMessage = {
    request: RequestMeta;
};
export type ResponseDiagnosticsMessage = {
    request: RequestMeta;
    response: RawResponseWithMeta;
    error?: Error;
};
export interface PoolStat {
    /** Number of open socket connections in this pool. */
    connected: number;
    /** Number of open socket connections in this pool that do not have an active request. */
    free: number;
    /** Number of pending requests across all clients in this pool. */
    pending: number;
    /** Number of queued requests across all clients in this pool. */
    queued: number;
    /** Number of currently active requests across all clients in this pool. */
    running: number;
    /** Number of active, pending, or queued requests across all clients in this pool. */
    size: number;
}
export declare class HttpClient extends EventEmitter {
    #private;
    constructor(clientOptions?: ClientOptions);
    getDispatcher(): Dispatcher;
    setDispatcher(dispatcher: Dispatcher): void;
    getDispatcherPoolStats(): Record<string, PoolStat>;
    request<T = any>(url: RequestURL, options?: RequestOptions): Promise<HttpClientResponse<T>>;
    curl<T = any>(url: RequestURL, options?: RequestOptions): Promise<HttpClientResponse<T>>;
}
