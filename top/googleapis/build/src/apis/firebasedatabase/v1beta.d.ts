/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace firebasedatabase_v1beta {
    export interface Options extends GlobalOptions {
        version: 'v1beta';
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
     * Firebase Realtime Database Management API
     *
     * The Firebase Realtime Database API enables programmatic provisioning and management of Realtime Database instances.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const firebasedatabase = google.firebasedatabase('v1beta');
     * ```
     */
    export class Firebasedatabase {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
     */
    export interface Schema$DatabaseInstance {
        /**
         * Output only. Output Only. The globally unique hostname of the database.
         */
        databaseUrl?: string | null;
        /**
         * The fully qualified resource name of the database instance, in the form: `projects/{project-number\}/locations/{location-id\}/instances/{database-id\}`.
         */
        name?: string | null;
        /**
         * Output only. The resource name of the project this instance belongs to. For example: `projects/{project-number\}`.
         */
        project?: string | null;
        /**
         * Output only. The database's lifecycle state. Read-only.
         */
        state?: string | null;
        /**
         * Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.
         */
        type?: string | null;
    }
    /**
     * The request sent to the DisableDatabaseInstance method.
     */
    export interface Schema$DisableDatabaseInstanceRequest {
    }
    /**
     * The response from the ListDatabaseInstances method.
     */
    export interface Schema$ListDatabaseInstancesResponse {
        /**
         * List of each DatabaseInstance that is in the parent Firebase project.
         */
        instances?: Schema$DatabaseInstance[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListDatabaseInstances` to find the next group of database instances. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * The request sent to the ReenableDatabaseInstance method.
     */
    export interface Schema$ReenableDatabaseInstanceRequest {
    }
    /**
     * The request sent to UndeleteDatabaseInstance method.
     */
    export interface Schema$UndeleteDatabaseInstanceRequest {
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        instances: Resource$Projects$Locations$Instances;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations$Instances {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Instances$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Instances$Create, options?: MethodOptions): GaxiosPromise<Schema$DatabaseInstance>;
        create(params: Params$Resource$Projects$Locations$Instances$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Instances$Create, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        create(params: Params$Resource$Projects$Locations$Instances$Create, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        create(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        /**
         * Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Instances$Delete, options?: MethodOptions): GaxiosPromise<Schema$DatabaseInstance>;
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        delete(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        /**
         * Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        disable(params: Params$Resource$Projects$Locations$Instances$Disable, options: StreamMethodOptions): GaxiosPromise<Readable>;
        disable(params?: Params$Resource$Projects$Locations$Instances$Disable, options?: MethodOptions): GaxiosPromise<Schema$DatabaseInstance>;
        disable(params: Params$Resource$Projects$Locations$Instances$Disable, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        disable(params: Params$Resource$Projects$Locations$Instances$Disable, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        disable(params: Params$Resource$Projects$Locations$Instances$Disable, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        disable(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        /**
         * Gets the DatabaseInstance identified by the specified resource name.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Instances$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Instances$Get, options?: MethodOptions): GaxiosPromise<Schema$DatabaseInstance>;
        get(params: Params$Resource$Projects$Locations$Instances$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Instances$Get, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        get(params: Params$Resource$Projects$Locations$Instances$Get, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        get(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        /**
         * Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Instances$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Instances$List, options?: MethodOptions): GaxiosPromise<Schema$ListDatabaseInstancesResponse>;
        list(params: Params$Resource$Projects$Locations$Instances$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Instances$List, options: MethodOptions | BodyResponseCallback<Schema$ListDatabaseInstancesResponse>, callback: BodyResponseCallback<Schema$ListDatabaseInstancesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Instances$List, callback: BodyResponseCallback<Schema$ListDatabaseInstancesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDatabaseInstancesResponse>): void;
        /**
         * Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reenable(params: Params$Resource$Projects$Locations$Instances$Reenable, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reenable(params?: Params$Resource$Projects$Locations$Instances$Reenable, options?: MethodOptions): GaxiosPromise<Schema$DatabaseInstance>;
        reenable(params: Params$Resource$Projects$Locations$Instances$Reenable, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reenable(params: Params$Resource$Projects$Locations$Instances$Reenable, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        reenable(params: Params$Resource$Projects$Locations$Instances$Reenable, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        reenable(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        /**
         * Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        undelete(params: Params$Resource$Projects$Locations$Instances$Undelete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        undelete(params?: Params$Resource$Projects$Locations$Instances$Undelete, options?: MethodOptions): GaxiosPromise<Schema$DatabaseInstance>;
        undelete(params: Params$Resource$Projects$Locations$Instances$Undelete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        undelete(params: Params$Resource$Projects$Locations$Instances$Undelete, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        undelete(params: Params$Resource$Projects$Locations$Instances$Undelete, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        undelete(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
    }
    export interface Params$Resource$Projects$Locations$Instances$Create extends StandardParameters {
        /**
         * The globally unique identifier of the database instance.
         */
        databaseId?: string;
        /**
         * Required. The parent project for which to create a database instance, in the form: `projects/{project-number\}/locations/{location-id\}`.
         */
        parent?: string;
        /**
         * When set to true, the request will be validated but not submitted.
         */
        validateOnly?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DatabaseInstance;
    }
    export interface Params$Resource$Projects$Locations$Instances$Delete extends StandardParameters {
        /**
         * Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number\}/locations/{location-id\}/instances/{database-id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Instances$Disable extends StandardParameters {
        /**
         * Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number\}/locations/{location-id\}/instances/{database-id\}`
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DisableDatabaseInstanceRequest;
    }
    export interface Params$Resource$Projects$Locations$Instances$Get extends StandardParameters {
        /**
         * Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number\}/locations/{location-id\}/instances/{database-id\}`. `database-id` is a globally unique identifier across all parent collections. For convenience, this method allows you to supply `-` as a wildcard character in place of specific collections under `projects` and `locations`. The resulting wildcarding form of the method is: `projects/-/locations/-/instances/{database-id\}`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Instances$List extends StandardParameters {
        /**
         * The maximum number of database instances to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListDatabaseInstances` indicating where in the set of database instances to resume listing.
         */
        pageToken?: string;
        /**
         * Required. The parent project for which to list database instances, in the form: `projects/{project-number\}/locations/{location-id\}` To list across all locations, use a parent in the form: `projects/{project-number\}/locations/-`
         */
        parent?: string;
        /**
         * Indicate that DatabaseInstances in the `DELETED` state should also be returned.
         */
        showDeleted?: boolean;
    }
    export interface Params$Resource$Projects$Locations$Instances$Reenable extends StandardParameters {
        /**
         * Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number\}/locations/{location-id\}/instances/{database-id\}`
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ReenableDatabaseInstanceRequest;
    }
    export interface Params$Resource$Projects$Locations$Instances$Undelete extends StandardParameters {
        /**
         * Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number\}/locations/{location-id\}/instances/{database-id\}`
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UndeleteDatabaseInstanceRequest;
    }
    export {};
}
