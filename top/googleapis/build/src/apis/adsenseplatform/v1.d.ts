/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace adsenseplatform_v1 {
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
     * AdSense Platform API
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const adsenseplatform = google.adsenseplatform('v1');
     * ```
     */
    export class Adsenseplatform {
        context: APIRequestContext;
        platforms: Resource$Platforms;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Representation of an Account.
     */
    export interface Schema$Account {
        /**
         * Output only. Creation time of the account.
         */
        createTime?: string | null;
        /**
         * Required. An opaque token that uniquely identifies the account among all the platform's accounts. This string may contain at most 64 non-whitespace ASCII characters, but otherwise has no predefined structure. However, it is expected to be a platform-specific identifier for the user creating the account, so that only a single account can be created for any given user. This field must not contain any information that is recognizable as personally identifiable information. e.g. it should not be an email address or login name. Once an account has been created, a second attempt to create an account using the same creation_request_id will result in an ALREADY_EXISTS error.
         */
        creationRequestId?: string | null;
        /**
         * Display name of this account.
         */
        displayName?: string | null;
        /**
         * Output only. Resource name of the account. Format: platforms/pub-[0-9]+/accounts/pub-[0-9]+
         */
        name?: string | null;
        /**
         * Required. Input only. CLDR region code of the country/region of the address. Set this to country code of the child account if known, otherwise to your own country code.
         */
        regionCode?: string | null;
        /**
         * Output only. Approval state of the account.
         */
        state?: string | null;
        /**
         * Required. The IANA TZ timezone code of this account. For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. This field is used for reporting. It is recommended to set it to the same value for all child accounts.
         */
        timeZone?: Schema$TimeZone;
    }
    /**
     * Address data.
     */
    export interface Schema$Address {
        /**
         * First line of address. Max length 64 bytes or 30 characters.
         */
        address1?: string | null;
        /**
         * Second line of address. Max length 64 bytes or 30 characters.
         */
        address2?: string | null;
        /**
         * City. Max length 60 bytes or 30 characters.
         */
        city?: string | null;
        /**
         * Name of the company. Max length 255 bytes or 34 characters.
         */
        company?: string | null;
        /**
         * Contact name of the company. Max length 128 bytes or 34 characters.
         */
        contact?: string | null;
        /**
         * Fax number with international code (i.e. +441234567890).
         */
        fax?: string | null;
        /**
         * Phone number with international code (i.e. +441234567890).
         */
        phone?: string | null;
        /**
         * Country/Region code. The region is specified as a CLDR region code (e.g. "US", "FR").
         */
        regionCode?: string | null;
        /**
         * State. Max length 60 bytes or 30 characters.
         */
        state?: string | null;
        /**
         * Zip/post code. Max length 10 bytes or 10 characters.
         */
        zip?: string | null;
    }
    /**
     * Request definition for the account close rpc.
     */
    export interface Schema$CloseAccountRequest {
    }
    /**
     * Response definition for the account close rpc.
     */
    export interface Schema$CloseAccountResponse {
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * A platform sub-account event to record spam signals.
     */
    export interface Schema$Event {
        /**
         * Required. Information associated with the event.
         */
        eventInfo?: Schema$EventInfo;
        /**
         * Required. Event timestamp.
         */
        eventTime?: string | null;
        /**
         * Required. Event type.
         */
        eventType?: string | null;
    }
    /**
     * Private information for partner recorded events (PII).
     */
    export interface Schema$EventInfo {
        /**
         * The billing address of the publisher associated with this event, if available.
         */
        billingAddress?: Schema$Address;
        /**
         * Required. The email address that is associated with the publisher when performing the event.
         */
        email?: string | null;
    }
    /**
     * Response definition for the list accounts rpc.
     */
    export interface Schema$ListAccountsResponse {
        /**
         * The Accounts returned in the list response. Represented by a partial view of the Account resource, populating `name` and `creation_request_id`.
         */
        accounts?: Schema$Account[];
        /**
         * Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response definition for the site list rpc.
     */
    export interface Schema$ListSitesResponse {
        /**
         * Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this.
         */
        nextPageToken?: string | null;
        /**
         * The sites returned in this list response.
         */
        sites?: Schema$Site[];
    }
    /**
     * Response definition for the lookup account rpc.
     */
    export interface Schema$LookupAccountResponse {
        /**
         * The name of the Account Format: platforms/{platform\}/accounts/{account_id\}
         */
        name?: string | null;
    }
    /**
     * Response definition for the site request review rpc.
     */
    export interface Schema$RequestSiteReviewResponse {
    }
    /**
     * Representation of a Site.
     */
    export interface Schema$Site {
        /**
         * Domain/sub-domain of the site. Must be a valid domain complying with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and formatted as punycode [RFC 3492](https://www.ietf.org/rfc/rfc3492.txt) in case the domain contains unicode characters.
         */
        domain?: string | null;
        /**
         * Output only. Resource name of a site. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
         */
        name?: string | null;
        /**
         * Output only. State of a site.
         */
        state?: string | null;
    }
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     */
    export interface Schema$TimeZone {
        /**
         * IANA Time Zone Database time zone. For example "America/New_York".
         */
        id?: string | null;
        /**
         * Optional. IANA Time Zone Database version number. For example "2019a".
         */
        version?: string | null;
    }
    export class Resource$Platforms {
        context: APIRequestContext;
        accounts: Resource$Platforms$Accounts;
        constructor(context: APIRequestContext);
    }
    export class Resource$Platforms$Accounts {
        context: APIRequestContext;
        events: Resource$Platforms$Accounts$Events;
        sites: Resource$Platforms$Accounts$Sites;
        constructor(context: APIRequestContext);
        /**
         * Closes a sub-account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        close(params: Params$Resource$Platforms$Accounts$Close, options: StreamMethodOptions): GaxiosPromise<Readable>;
        close(params?: Params$Resource$Platforms$Accounts$Close, options?: MethodOptions): GaxiosPromise<Schema$CloseAccountResponse>;
        close(params: Params$Resource$Platforms$Accounts$Close, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        close(params: Params$Resource$Platforms$Accounts$Close, options: MethodOptions | BodyResponseCallback<Schema$CloseAccountResponse>, callback: BodyResponseCallback<Schema$CloseAccountResponse>): void;
        close(params: Params$Resource$Platforms$Accounts$Close, callback: BodyResponseCallback<Schema$CloseAccountResponse>): void;
        close(callback: BodyResponseCallback<Schema$CloseAccountResponse>): void;
        /**
         * Creates a sub-account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Platforms$Accounts$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Platforms$Accounts$Create, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        create(params: Params$Resource$Platforms$Accounts$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Platforms$Accounts$Create, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        create(params: Params$Resource$Platforms$Accounts$Create, callback: BodyResponseCallback<Schema$Account>): void;
        create(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Gets information about the selected sub-account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Platforms$Accounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Platforms$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        get(params: Params$Resource$Platforms$Accounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Platforms$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Platforms$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Lists a partial view of sub-accounts for a specific parent account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Platforms$Accounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Platforms$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$ListAccountsResponse>;
        list(params: Params$Resource$Platforms$Accounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Platforms$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountsResponse>, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(params: Params$Resource$Platforms$Accounts$List, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        /**
         * Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        lookup(params: Params$Resource$Platforms$Accounts$Lookup, options: StreamMethodOptions): GaxiosPromise<Readable>;
        lookup(params?: Params$Resource$Platforms$Accounts$Lookup, options?: MethodOptions): GaxiosPromise<Schema$LookupAccountResponse>;
        lookup(params: Params$Resource$Platforms$Accounts$Lookup, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        lookup(params: Params$Resource$Platforms$Accounts$Lookup, options: MethodOptions | BodyResponseCallback<Schema$LookupAccountResponse>, callback: BodyResponseCallback<Schema$LookupAccountResponse>): void;
        lookup(params: Params$Resource$Platforms$Accounts$Lookup, callback: BodyResponseCallback<Schema$LookupAccountResponse>): void;
        lookup(callback: BodyResponseCallback<Schema$LookupAccountResponse>): void;
    }
    export interface Params$Resource$Platforms$Accounts$Close extends StandardParameters {
        /**
         * Required. Account to close. Format: platforms/{platform\}/accounts/{account_id\}
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CloseAccountRequest;
    }
    export interface Params$Resource$Platforms$Accounts$Create extends StandardParameters {
        /**
         * Required. Platform to create an account for. Format: platforms/{platform\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    export interface Params$Resource$Platforms$Accounts$Get extends StandardParameters {
        /**
         * Required. Account to get information about. Format: platforms/{platform\}/accounts/{account_id\}
         */
        name?: string;
    }
    export interface Params$Resource$Platforms$Accounts$List extends StandardParameters {
        /**
         * Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
         */
        pageSize?: number;
        /**
         * Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
        /**
         * Required. Platform who parents the accounts. Format: platforms/{platform\}
         */
        parent?: string;
    }
    export interface Params$Resource$Platforms$Accounts$Lookup extends StandardParameters {
        /**
         * Optional. The creation_request_id provided when calling createAccount.
         */
        creationRequestId?: string;
        /**
         * Required. Platform who parents the account. Format: platforms/{platform\}
         */
        parent?: string;
    }
    export class Resource$Platforms$Accounts$Events {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an account event.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Platforms$Accounts$Events$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Platforms$Accounts$Events$Create, options?: MethodOptions): GaxiosPromise<Schema$Event>;
        create(params: Params$Resource$Platforms$Accounts$Events$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Platforms$Accounts$Events$Create, options: MethodOptions | BodyResponseCallback<Schema$Event>, callback: BodyResponseCallback<Schema$Event>): void;
        create(params: Params$Resource$Platforms$Accounts$Events$Create, callback: BodyResponseCallback<Schema$Event>): void;
        create(callback: BodyResponseCallback<Schema$Event>): void;
    }
    export interface Params$Resource$Platforms$Accounts$Events$Create extends StandardParameters {
        /**
         * Required. Account to log events about. Format: platforms/{platform\}/accounts/{account\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Event;
    }
    export class Resource$Platforms$Accounts$Sites {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a site for a specified account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Platforms$Accounts$Sites$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Platforms$Accounts$Sites$Create, options?: MethodOptions): GaxiosPromise<Schema$Site>;
        create(params: Params$Resource$Platforms$Accounts$Sites$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Platforms$Accounts$Sites$Create, options: MethodOptions | BodyResponseCallback<Schema$Site>, callback: BodyResponseCallback<Schema$Site>): void;
        create(params: Params$Resource$Platforms$Accounts$Sites$Create, callback: BodyResponseCallback<Schema$Site>): void;
        create(callback: BodyResponseCallback<Schema$Site>): void;
        /**
         * Deletes a site from a specified account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Platforms$Accounts$Sites$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Platforms$Accounts$Sites$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Platforms$Accounts$Sites$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Platforms$Accounts$Sites$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Platforms$Accounts$Sites$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets a site from a specified sub-account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Platforms$Accounts$Sites$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Platforms$Accounts$Sites$Get, options?: MethodOptions): GaxiosPromise<Schema$Site>;
        get(params: Params$Resource$Platforms$Accounts$Sites$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Platforms$Accounts$Sites$Get, options: MethodOptions | BodyResponseCallback<Schema$Site>, callback: BodyResponseCallback<Schema$Site>): void;
        get(params: Params$Resource$Platforms$Accounts$Sites$Get, callback: BodyResponseCallback<Schema$Site>): void;
        get(callback: BodyResponseCallback<Schema$Site>): void;
        /**
         * Lists sites for a specific account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Platforms$Accounts$Sites$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Platforms$Accounts$Sites$List, options?: MethodOptions): GaxiosPromise<Schema$ListSitesResponse>;
        list(params: Params$Resource$Platforms$Accounts$Sites$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Platforms$Accounts$Sites$List, options: MethodOptions | BodyResponseCallback<Schema$ListSitesResponse>, callback: BodyResponseCallback<Schema$ListSitesResponse>): void;
        list(params: Params$Resource$Platforms$Accounts$Sites$List, callback: BodyResponseCallback<Schema$ListSitesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSitesResponse>): void;
        /**
         * Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        requestReview(params: Params$Resource$Platforms$Accounts$Sites$Requestreview, options: StreamMethodOptions): GaxiosPromise<Readable>;
        requestReview(params?: Params$Resource$Platforms$Accounts$Sites$Requestreview, options?: MethodOptions): GaxiosPromise<Schema$RequestSiteReviewResponse>;
        requestReview(params: Params$Resource$Platforms$Accounts$Sites$Requestreview, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        requestReview(params: Params$Resource$Platforms$Accounts$Sites$Requestreview, options: MethodOptions | BodyResponseCallback<Schema$RequestSiteReviewResponse>, callback: BodyResponseCallback<Schema$RequestSiteReviewResponse>): void;
        requestReview(params: Params$Resource$Platforms$Accounts$Sites$Requestreview, callback: BodyResponseCallback<Schema$RequestSiteReviewResponse>): void;
        requestReview(callback: BodyResponseCallback<Schema$RequestSiteReviewResponse>): void;
    }
    export interface Params$Resource$Platforms$Accounts$Sites$Create extends StandardParameters {
        /**
         * Required. Account to create site. Format: platforms/{platform\}/accounts/{account_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Site;
    }
    export interface Params$Resource$Platforms$Accounts$Sites$Delete extends StandardParameters {
        /**
         * Required. The name of the site to delete. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
         */
        name?: string;
    }
    export interface Params$Resource$Platforms$Accounts$Sites$Get extends StandardParameters {
        /**
         * Required. The name of the site to retrieve. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
         */
        name?: string;
    }
    export interface Params$Resource$Platforms$Accounts$Sites$List extends StandardParameters {
        /**
         * The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The account which owns the sites. Format: platforms/{platform\}/accounts/{account\}
         */
        parent?: string;
    }
    export interface Params$Resource$Platforms$Accounts$Sites$Requestreview extends StandardParameters {
        /**
         * Required. The name of the site to submit for review. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
         */
        name?: string;
    }
    export {};
}
