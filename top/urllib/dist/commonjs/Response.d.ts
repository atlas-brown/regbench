import type { Readable } from 'node:stream';
import type { IncomingHttpHeaders } from './IncomingHttpHeaders.js';
export type SocketInfo = {
    id: number;
    localAddress: string;
    localPort: number;
    remoteAddress: string;
    remotePort: number;
    remoteFamily: string;
    bytesWritten: number;
    bytesRead: number;
    handledRequests: number;
    handledResponses: number;
    connectedTime?: Date;
    connectErrorTime?: Date;
    lastRequestEndTime?: Date;
    attemptedRemoteAddresses?: string[];
    connectProtocol?: string;
    connectHost?: string;
    connectPort?: string;
};
/**
 * https://eggjs.org/en/core/httpclient.html#timing-boolean
 */
export type Timing = {
    queuing: number;
    dnslookup: number;
    connected: number;
    requestHeadersSent: number;
    requestSent: number;
    waiting: number;
    contentDownload: number;
};
export type RawResponseWithMeta = Readable & {
    status: number;
    statusCode: number;
    statusText: string;
    /**
     * @alias statusText
     * @deprecated use `statusText` instead
     **/
    statusMessage: string;
    headers: IncomingHttpHeaders;
    timing: Timing;
    socket: SocketInfo;
    size: number;
    aborted: boolean;
    rt: number;
    keepAliveSocket: boolean;
    requestUrls: string[];
    retries: number;
    socketErrorRetries: number;
};
export type HttpClientResponse<T = any> = {
    opaque: unknown;
    data: T;
    status: number;
    statusCode: number;
    statusText: string;
    headers: IncomingHttpHeaders;
    url: string;
    redirected: boolean;
    requestUrls: string[];
    res: RawResponseWithMeta;
};
