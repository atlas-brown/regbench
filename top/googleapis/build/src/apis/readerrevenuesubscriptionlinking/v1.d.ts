/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace readerrevenuesubscriptionlinking_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Reader Revenue Subscription Linking API
     *
     * readerrevenuesubscriptionlinking.googleapis.com API.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const readerrevenuesubscriptionlinking = google.readerrevenuesubscriptionlinking('v1');
     * ```
     */
    export class Readerrevenuesubscriptionlinking {
        context: APIRequestContext;
        publications: Resource$Publications;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Response to deleting a reader of a publication.
     */
    export interface Schema$DeleteReaderResponse {
    }
    /**
     * A single entitlement for a publication reader
     */
    export interface Schema$Entitlement {
        /**
         * The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit.
         */
        detail?: string | null;
        /**
         * Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. The max expire_time is 398 days from now().
         */
        expireTime?: string | null;
        /**
         * Required. The publication's product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. "dailybugle.com:basic"
         */
        productId?: string | null;
        /**
         * A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google.
         */
        subscriptionToken?: string | null;
    }
    /**
     * A reader of a publication.
     */
    export interface Schema$Reader {
        /**
         * Output only. Time the publication reader was created and associated with a Google user.
         */
        createTime?: string | null;
        /**
         * Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id.
         */
        name?: string | null;
    }
    /**
     * A singleton containing all of a reader's entitlements for a publication.
     */
    export interface Schema$ReaderEntitlements {
        /**
         * All of the entitlements for a publication reader.
         */
        entitlements?: Schema$Entitlement[];
        /**
         * Output only. The resource name of the singleton.
         */
        name?: string | null;
    }
    export class Resource$Publications {
        context: APIRequestContext;
        readers: Resource$Publications$Readers;
        constructor(context: APIRequestContext);
    }
    export class Resource$Publications$Readers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Publications$Readers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Publications$Readers$Delete, options?: MethodOptions): GaxiosPromise<Schema$DeleteReaderResponse>;
        delete(params: Params$Resource$Publications$Readers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Publications$Readers$Delete, options: MethodOptions | BodyResponseCallback<Schema$DeleteReaderResponse>, callback: BodyResponseCallback<Schema$DeleteReaderResponse>): void;
        delete(params: Params$Resource$Publications$Readers$Delete, callback: BodyResponseCallback<Schema$DeleteReaderResponse>): void;
        delete(callback: BodyResponseCallback<Schema$DeleteReaderResponse>): void;
        /**
         * Gets a reader of a publication. Returns NOT_FOUND if the reader does not exist.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Publications$Readers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Publications$Readers$Get, options?: MethodOptions): GaxiosPromise<Schema$Reader>;
        get(params: Params$Resource$Publications$Readers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Publications$Readers$Get, options: MethodOptions | BodyResponseCallback<Schema$Reader>, callback: BodyResponseCallback<Schema$Reader>): void;
        get(params: Params$Resource$Publications$Readers$Get, callback: BodyResponseCallback<Schema$Reader>): void;
        get(callback: BodyResponseCallback<Schema$Reader>): void;
        /**
         * Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getEntitlements(params: Params$Resource$Publications$Readers$Getentitlements, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getEntitlements(params?: Params$Resource$Publications$Readers$Getentitlements, options?: MethodOptions): GaxiosPromise<Schema$ReaderEntitlements>;
        getEntitlements(params: Params$Resource$Publications$Readers$Getentitlements, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getEntitlements(params: Params$Resource$Publications$Readers$Getentitlements, options: MethodOptions | BodyResponseCallback<Schema$ReaderEntitlements>, callback: BodyResponseCallback<Schema$ReaderEntitlements>): void;
        getEntitlements(params: Params$Resource$Publications$Readers$Getentitlements, callback: BodyResponseCallback<Schema$ReaderEntitlements>): void;
        getEntitlements(callback: BodyResponseCallback<Schema$ReaderEntitlements>): void;
        /**
         * Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updateEntitlements(params: Params$Resource$Publications$Readers$Updateentitlements, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateEntitlements(params?: Params$Resource$Publications$Readers$Updateentitlements, options?: MethodOptions): GaxiosPromise<Schema$ReaderEntitlements>;
        updateEntitlements(params: Params$Resource$Publications$Readers$Updateentitlements, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateEntitlements(params: Params$Resource$Publications$Readers$Updateentitlements, options: MethodOptions | BodyResponseCallback<Schema$ReaderEntitlements>, callback: BodyResponseCallback<Schema$ReaderEntitlements>): void;
        updateEntitlements(params: Params$Resource$Publications$Readers$Updateentitlements, callback: BodyResponseCallback<Schema$ReaderEntitlements>): void;
        updateEntitlements(callback: BodyResponseCallback<Schema$ReaderEntitlements>): void;
    }
    export interface Params$Resource$Publications$Readers$Delete extends StandardParameters {
        /**
         * If set to true, any entitlements under the reader will also be purged.
         */
        force?: boolean;
        /**
         * Required. The resource name of the reader. Format: publications/{publication_id\}/readers/{ppid\}
         */
        name?: string;
    }
    export interface Params$Resource$Publications$Readers$Get extends StandardParameters {
        /**
         * Required. The resource name of the reader. Format: publications/{publication_id\}/readers/{ppid\}
         */
        name?: string;
    }
    export interface Params$Resource$Publications$Readers$Getentitlements extends StandardParameters {
        /**
         * Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id\}/readers/{reader_id\}/entitlements
         */
        name?: string;
    }
    export interface Params$Resource$Publications$Readers$Updateentitlements extends StandardParameters {
        /**
         * Output only. The resource name of the singleton.
         */
        name?: string;
        /**
         * Optional. The list of fields to update. Defaults to all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ReaderEntitlements;
    }
    export {};
}
