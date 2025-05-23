/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace cloudcontrolspartner_v1 {
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
     * Cloud Controls Partner API
     *
     * Provides insights about your customers and their Assured Workloads based on your Sovereign Controls by Partners offering.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const cloudcontrolspartner = google.cloudcontrolspartner('v1');
     * ```
     */
    export class Cloudcontrolspartner {
        context: APIRequestContext;
        organizations: Resource$Organizations;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Details about the Access request.
     */
    export interface Schema$AccessApprovalRequest {
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/accessApprovalRequests/{access_approval_request\}`
         */
        name?: string | null;
        /**
         * The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.
         */
        requestedExpirationTime?: string | null;
        /**
         * The justification for which approval is being requested.
         */
        requestedReason?: Schema$AccessReason;
        /**
         * The time at which approval was requested.
         */
        requestTime?: string | null;
    }
    /**
     * Reason for the access.
     */
    export interface Schema$AccessReason {
        /**
         * More detail about certain reason types. See comments for each type above.
         */
        detail?: string | null;
        /**
         * Type of access justification.
         */
        type?: string | null;
    }
    /**
     * Information around the error that occurred if the connection state is anything other than available or unspecified
     */
    export interface Schema$ConnectionError {
        /**
         * The error domain for the error
         */
        errorDomain?: string | null;
        /**
         * The error message for the error
         */
        errorMessage?: string | null;
    }
    /**
     * Remediation instructions to resolve violation via cloud console
     */
    export interface Schema$Console {
        /**
         * Additional urls for more information about steps
         */
        additionalLinks?: string[] | null;
        /**
         * Link to console page where violations can be resolved
         */
        consoleUris?: string[] | null;
        /**
         * Steps to resolve violation via cloud console
         */
        steps?: string[] | null;
    }
    /**
     * Contains metadata around a Cloud Controls Partner Customer
     */
    export interface Schema$Customer {
        /**
         * Output only. Container for customer onboarding steps
         */
        customerOnboardingState?: Schema$CustomerOnboardingState;
        /**
         * Required. Display name for the customer
         */
        displayName?: string | null;
        /**
         * Output only. Indicates whether a customer is fully onboarded
         */
        isOnboarded?: boolean | null;
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}`
         */
        name?: string | null;
        /**
         * Output only. The customer organization domain, extracted from CRM Organization’s display_name field. e.g. "google.com"
         */
        organizationDomain?: string | null;
    }
    /**
     * Container for customer onboarding steps
     */
    export interface Schema$CustomerOnboardingState {
        /**
         * List of customer onboarding steps
         */
        onboardingSteps?: Schema$CustomerOnboardingStep[];
    }
    /**
     * Container for customer onboarding information
     */
    export interface Schema$CustomerOnboardingStep {
        /**
         * Output only. Current state of the step
         */
        completionState?: string | null;
        /**
         * The completion time of the onboarding step
         */
        completionTime?: string | null;
        /**
         * The starting time of the onboarding step
         */
        startTime?: string | null;
        /**
         * The onboarding step
         */
        step?: string | null;
    }
    /**
     * Details about the EKM connection
     */
    export interface Schema$EkmConnection {
        /**
         * The connection error that occurred if any
         */
        connectionError?: Schema$ConnectionError;
        /**
         * Resource name of the EKM connection in the format: projects/{project\}/locations/{location\}/ekmConnections/{ekm_connection\}
         */
        connectionName?: string | null;
        /**
         * Output only. The connection state
         */
        connectionState?: string | null;
    }
    /**
     * The EKM connections associated with a workload
     */
    export interface Schema$EkmConnections {
        /**
         * The EKM connections associated with the workload
         */
        ekmConnections?: Schema$EkmConnection[];
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/ekmConnections`
         */
        name?: string | null;
    }
    /**
     * Holds information needed by Mudbray to use partner EKMs for workloads.
     */
    export interface Schema$EkmMetadata {
        /**
         * Endpoint for sending requests to the EKM for key provisioning during Assured Workload creation.
         */
        ekmEndpointUri?: string | null;
        /**
         * The Cloud EKM partner.
         */
        ekmSolution?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * Remediation instructions to resolve violation via gcloud cli
     */
    export interface Schema$Gcloud {
        /**
         * Additional urls for more information about steps
         */
        additionalLinks?: string[] | null;
        /**
         * Gcloud command to resolve violation
         */
        gcloudCommands?: string[] | null;
        /**
         * Steps to resolve violation via gcloud cli
         */
        steps?: string[] | null;
    }
    /**
     * Instructions to remediate violation
     */
    export interface Schema$Instructions {
        /**
         * Remediation instructions to resolve violation via cloud console
         */
        consoleInstructions?: Schema$Console;
        /**
         * Remediation instructions to resolve violation via gcloud cli
         */
        gcloudInstructions?: Schema$Gcloud;
    }
    /**
     * Response message for list access requests.
     */
    export interface Schema$ListAccessApprovalRequestsResponse {
        /**
         * List of access approval requests
         */
        accessApprovalRequests?: Schema$AccessApprovalRequest[];
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * Response message for list customer Customers requests
     */
    export interface Schema$ListCustomersResponse {
        /**
         * List of customers
         */
        customers?: Schema$Customer[];
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * Response message for list customer violation requests
     */
    export interface Schema$ListViolationsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * Workloads that could not be reached due to permission errors or any other error. Ref: https://google.aip.dev/217
         */
        unreachable?: string[] | null;
        /**
         * List of violation
         */
        violations?: Schema$Violation[];
    }
    /**
     * Response message for list customer workloads requests.
     */
    export interface Schema$ListWorkloadsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
        /**
         * List of customer workloads
         */
        workloads?: Schema$Workload[];
    }
    /**
     * Represents the metadata of the long-running operation.
     */
    export interface Schema$OperationMetadata {
        /**
         * Output only. API version used to start the operation.
         */
        apiVersion?: string | null;
        /**
         * Output only. The time the operation was created.
         */
        createTime?: string | null;
        /**
         * Output only. The time the operation finished running.
         */
        endTime?: string | null;
        /**
         * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         */
        requestedCancellation?: boolean | null;
        /**
         * Output only. Human-readable status of the operation, if any.
         */
        statusMessage?: string | null;
        /**
         * Output only. Server-defined resource path for the target of the operation.
         */
        target?: string | null;
        /**
         * Output only. Name of the verb executed by the operation.
         */
        verb?: string | null;
    }
    /**
     * Message describing Partner resource
     */
    export interface Schema$Partner {
        /**
         * Output only. Time the resource was created
         */
        createTime?: string | null;
        /**
         * List of Google Cloud supported EKM partners supported by the partner
         */
        ekmSolutions?: Schema$EkmMetadata[];
        /**
         * Identifier. The resource name of the partner. Format: `organizations/{organization\}/locations/{location\}/partner` Example: "organizations/123456/locations/us-central1/partner"
         */
        name?: string | null;
        /**
         * List of Google Cloud regions that the partner sells services to customers. Valid Google Cloud regions found here: https://cloud.google.com/compute/docs/regions-zones
         */
        operatedCloudRegions?: string[] | null;
        /**
         * Google Cloud project ID in the partner's Google Cloud organization for receiving enhanced Logs for Partners.
         */
        partnerProjectId?: string | null;
        /**
         * List of SKUs the partner is offering
         */
        skus?: Schema$Sku[];
        /**
         * Output only. The last time the resource was updated
         */
        updateTime?: string | null;
    }
    /**
     * The permissions granted to the partner for a workload
     */
    export interface Schema$PartnerPermissions {
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/partnerPermissions`
         */
        name?: string | null;
        /**
         * The partner permissions granted for the workload
         */
        partnerPermissions?: string[] | null;
    }
    /**
     * Represents remediation guidance to resolve compliance violation for AssuredWorkload
     */
    export interface Schema$Remediation {
        /**
         * Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values
         */
        compliantValues?: string[] | null;
        /**
         * Required. Remediation instructions to resolve violations
         */
        instructions?: Schema$Instructions;
        /**
         * Output only. Remediation type based on the type of org policy values violated
         */
        remediationType?: string | null;
    }
    /**
     * Represents the SKU a partner owns inside Google Cloud to sell to customers.
     */
    export interface Schema$Sku {
        /**
         * Display name of the product identified by the SKU. A partner may want to show partner branded names for their offerings such as local sovereign cloud solutions.
         */
        displayName?: string | null;
        /**
         * Argentum product SKU, that is associated with the partner offerings to customers used by Syntro for billing purposes. SKUs can represent resold Google products or support services.
         */
        id?: string | null;
    }
    /**
     * Details of resource Violation
     */
    export interface Schema$Violation {
        /**
         * Output only. Time of the event which triggered the Violation.
         */
        beginTime?: string | null;
        /**
         * Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.
         */
        category?: string | null;
        /**
         * Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.
         */
        description?: string | null;
        /**
         * The folder_id of the violation
         */
        folderId?: string | null;
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/violations/{violation\}`
         */
        name?: string | null;
        /**
         * Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: `projects/{project_number\}/policies/{constraint_name\}` `folders/{folder_id\}/policies/{constraint_name\}` `organizations/{organization_id\}/policies/{constraint_name\}`
         */
        nonCompliantOrgPolicy?: string | null;
        /**
         * Output only. Compliance violation remediation
         */
        remediation?: Schema$Remediation;
        /**
         * Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.
         */
        resolveTime?: string | null;
        /**
         * Output only. State of the violation
         */
        state?: string | null;
        /**
         * Output only. The last time when the Violation record was updated.
         */
        updateTime?: string | null;
    }
    /**
     * Contains metadata around the [Workload resource](https://cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/Workload) in the Assured Workloads API.
     */
    export interface Schema$Workload {
        /**
         * Output only. Time the resource was created.
         */
        createTime?: string | null;
        /**
         * Output only. The name of container folder of the assured workload
         */
        folder?: string | null;
        /**
         * Output only. Folder id this workload is associated with
         */
        folderId?: string | null;
        /**
         * Indicates whether a workload is fully onboarded.
         */
        isOnboarded?: boolean | null;
        /**
         * The project id of the key management project for the workload
         */
        keyManagementProjectId?: string | null;
        /**
         * The Google Cloud location of the workload
         */
        location?: string | null;
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}`
         */
        name?: string | null;
        /**
         * Partner associated with this workload.
         */
        partner?: string | null;
        /**
         * Container for workload onboarding steps.
         */
        workloadOnboardingState?: Schema$WorkloadOnboardingState;
    }
    /**
     * Container for workload onboarding steps.
     */
    export interface Schema$WorkloadOnboardingState {
        /**
         * List of workload onboarding steps.
         */
        onboardingSteps?: Schema$WorkloadOnboardingStep[];
    }
    /**
     * Container for workload onboarding information.
     */
    export interface Schema$WorkloadOnboardingStep {
        /**
         * Output only. The completion state of the onboarding step.
         */
        completionState?: string | null;
        /**
         * The completion time of the onboarding step.
         */
        completionTime?: string | null;
        /**
         * The starting time of the onboarding step.
         */
        startTime?: string | null;
        /**
         * The onboarding step.
         */
        step?: string | null;
    }
    export class Resource$Organizations {
        context: APIRequestContext;
        locations: Resource$Organizations$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Organizations$Locations {
        context: APIRequestContext;
        customers: Resource$Organizations$Locations$Customers;
        constructor(context: APIRequestContext);
        /**
         * Get details of a Partner.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getPartner(params: Params$Resource$Organizations$Locations$Getpartner, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getPartner(params?: Params$Resource$Organizations$Locations$Getpartner, options?: MethodOptions): GaxiosPromise<Schema$Partner>;
        getPartner(params: Params$Resource$Organizations$Locations$Getpartner, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getPartner(params: Params$Resource$Organizations$Locations$Getpartner, options: MethodOptions | BodyResponseCallback<Schema$Partner>, callback: BodyResponseCallback<Schema$Partner>): void;
        getPartner(params: Params$Resource$Organizations$Locations$Getpartner, callback: BodyResponseCallback<Schema$Partner>): void;
        getPartner(callback: BodyResponseCallback<Schema$Partner>): void;
    }
    export interface Params$Resource$Organizations$Locations$Getpartner extends StandardParameters {
        /**
         * Required. Format: `organizations/{organization\}/locations/{location\}/partner`
         */
        name?: string;
    }
    export class Resource$Organizations$Locations$Customers {
        context: APIRequestContext;
        workloads: Resource$Organizations$Locations$Customers$Workloads;
        constructor(context: APIRequestContext);
        /**
         * Creates a new customer.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Organizations$Locations$Customers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Organizations$Locations$Customers$Create, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        create(params: Params$Resource$Organizations$Locations$Customers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Organizations$Locations$Customers$Create, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        create(params: Params$Resource$Organizations$Locations$Customers$Create, callback: BodyResponseCallback<Schema$Customer>): void;
        create(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * Delete details of a single customer
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Organizations$Locations$Customers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Organizations$Locations$Customers$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Organizations$Locations$Customers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Organizations$Locations$Customers$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Organizations$Locations$Customers$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets details of a single customer
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Organizations$Locations$Customers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Organizations$Locations$Customers$Get, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        get(params: Params$Resource$Organizations$Locations$Customers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Organizations$Locations$Customers$Get, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        get(params: Params$Resource$Organizations$Locations$Customers$Get, callback: BodyResponseCallback<Schema$Customer>): void;
        get(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * Lists customers of a partner identified by its Google Cloud organization ID
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Organizations$Locations$Customers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Organizations$Locations$Customers$List, options?: MethodOptions): GaxiosPromise<Schema$ListCustomersResponse>;
        list(params: Params$Resource$Organizations$Locations$Customers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$List, options: MethodOptions | BodyResponseCallback<Schema$ListCustomersResponse>, callback: BodyResponseCallback<Schema$ListCustomersResponse>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$List, callback: BodyResponseCallback<Schema$ListCustomersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListCustomersResponse>): void;
        /**
         * Update details of a single customer
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Organizations$Locations$Customers$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Organizations$Locations$Customers$Patch, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        patch(params: Params$Resource$Organizations$Locations$Customers$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Organizations$Locations$Customers$Patch, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        patch(params: Params$Resource$Organizations$Locations$Customers$Patch, callback: BodyResponseCallback<Schema$Customer>): void;
        patch(callback: BodyResponseCallback<Schema$Customer>): void;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Create extends StandardParameters {
        /**
         * Required. The customer id to use for the customer, which will become the final component of the customer's resource name. The specified value must be a valid Google cloud organization id.
         */
        customerId?: string;
        /**
         * Required. Parent resource Format: `organizations/{organization\}/locations/{location\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Delete extends StandardParameters {
        /**
         * Required. name of the resource to be deleted format: name=organizations/x/locations/x/customers/x
         */
        name?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Get extends StandardParameters {
        /**
         * Required. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}`
         */
        name?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$List extends StandardParameters {
        /**
         * Optional. Filtering results
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results
         */
        orderBy?: string;
        /**
         * The maximum number of Customers to return. The service may return fewer than this value. If unspecified, at most 500 Customers will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListCustomers` call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
        /**
         * Required. Parent resource Format: `organizations/{organization\}/locations/{location\}`
         */
        parent?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Patch extends StandardParameters {
        /**
         * Identifier. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}`
         */
        name?: string;
        /**
         * Optional. The list of fields to update
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    export class Resource$Organizations$Locations$Customers$Workloads {
        context: APIRequestContext;
        accessApprovalRequests: Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests;
        violations: Resource$Organizations$Locations$Customers$Workloads$Violations;
        constructor(context: APIRequestContext);
        /**
         * Gets details of a single workload
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Organizations$Locations$Customers$Workloads$Get, options?: MethodOptions): GaxiosPromise<Schema$Workload>;
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Get, options: MethodOptions | BodyResponseCallback<Schema$Workload>, callback: BodyResponseCallback<Schema$Workload>): void;
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Get, callback: BodyResponseCallback<Schema$Workload>): void;
        get(callback: BodyResponseCallback<Schema$Workload>): void;
        /**
         * Gets the EKM connections associated with a workload
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getEkmConnections(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getekmconnections, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getEkmConnections(params?: Params$Resource$Organizations$Locations$Customers$Workloads$Getekmconnections, options?: MethodOptions): GaxiosPromise<Schema$EkmConnections>;
        getEkmConnections(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getekmconnections, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getEkmConnections(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getekmconnections, options: MethodOptions | BodyResponseCallback<Schema$EkmConnections>, callback: BodyResponseCallback<Schema$EkmConnections>): void;
        getEkmConnections(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getekmconnections, callback: BodyResponseCallback<Schema$EkmConnections>): void;
        getEkmConnections(callback: BodyResponseCallback<Schema$EkmConnections>): void;
        /**
         * Gets the partner permissions granted for a workload
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getPartnerPermissions(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getpartnerpermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getPartnerPermissions(params?: Params$Resource$Organizations$Locations$Customers$Workloads$Getpartnerpermissions, options?: MethodOptions): GaxiosPromise<Schema$PartnerPermissions>;
        getPartnerPermissions(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getpartnerpermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getPartnerPermissions(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getpartnerpermissions, options: MethodOptions | BodyResponseCallback<Schema$PartnerPermissions>, callback: BodyResponseCallback<Schema$PartnerPermissions>): void;
        getPartnerPermissions(params: Params$Resource$Organizations$Locations$Customers$Workloads$Getpartnerpermissions, callback: BodyResponseCallback<Schema$PartnerPermissions>): void;
        getPartnerPermissions(callback: BodyResponseCallback<Schema$PartnerPermissions>): void;
        /**
         * Lists customer workloads for a given customer org id
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Organizations$Locations$Customers$Workloads$List, options?: MethodOptions): GaxiosPromise<Schema$ListWorkloadsResponse>;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$List, options: MethodOptions | BodyResponseCallback<Schema$ListWorkloadsResponse>, callback: BodyResponseCallback<Schema$ListWorkloadsResponse>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$List, callback: BodyResponseCallback<Schema$ListWorkloadsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListWorkloadsResponse>): void;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$Get extends StandardParameters {
        /**
         * Required. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}`
         */
        name?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$Getekmconnections extends StandardParameters {
        /**
         * Required. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/ekmConnections`
         */
        name?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$Getpartnerpermissions extends StandardParameters {
        /**
         * Required. Name of the resource to get in the format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/partnerPermissions`
         */
        name?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$List extends StandardParameters {
        /**
         * Optional. Filtering results.
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results.
         */
        orderBy?: string;
        /**
         * The maximum number of workloads to return. The service may return fewer than this value. If unspecified, at most 500 workloads will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListWorkloads` call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
        /**
         * Required. Parent resource Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}`
         */
        parent?: string;
    }
    export class Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deprecated: Only returns access approval requests directly associated with an assured workload folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests$List, options?: MethodOptions): GaxiosPromise<Schema$ListAccessApprovalRequestsResponse>;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccessApprovalRequestsResponse>, callback: BodyResponseCallback<Schema$ListAccessApprovalRequestsResponse>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests$List, callback: BodyResponseCallback<Schema$ListAccessApprovalRequestsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccessApprovalRequestsResponse>): void;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$Accessapprovalrequests$List extends StandardParameters {
        /**
         * Optional. Filtering results.
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results.
         */
        orderBy?: string;
        /**
         * Optional. The maximum number of access requests to return. The service may return fewer than this value. If unspecified, at most 500 access requests will be returned.
         */
        pageSize?: number;
        /**
         * Optional. A page token, received from a previous `ListAccessApprovalRequests` call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
        /**
         * Required. Parent resource Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}`
         */
        parent?: string;
    }
    export class Resource$Organizations$Locations$Customers$Workloads$Violations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets details of a single Violation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$Get, options?: MethodOptions): GaxiosPromise<Schema$Violation>;
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$Get, options: MethodOptions | BodyResponseCallback<Schema$Violation>, callback: BodyResponseCallback<Schema$Violation>): void;
        get(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$Get, callback: BodyResponseCallback<Schema$Violation>): void;
        get(callback: BodyResponseCallback<Schema$Violation>): void;
        /**
         * Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of {customer\} & {workload\}. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}`
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$List, options?: MethodOptions): GaxiosPromise<Schema$ListViolationsResponse>;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$List, options: MethodOptions | BodyResponseCallback<Schema$ListViolationsResponse>, callback: BodyResponseCallback<Schema$ListViolationsResponse>): void;
        list(params: Params$Resource$Organizations$Locations$Customers$Workloads$Violations$List, callback: BodyResponseCallback<Schema$ListViolationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListViolationsResponse>): void;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$Violations$Get extends StandardParameters {
        /**
         * Required. Format: `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}/violations/{violation\}`
         */
        name?: string;
    }
    export interface Params$Resource$Organizations$Locations$Customers$Workloads$Violations$List extends StandardParameters {
        /**
         * Optional. Filtering results
         */
        filter?: string;
        /**
         * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
         */
        'interval.endTime'?: string;
        /**
         * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
         */
        'interval.startTime'?: string;
        /**
         * Optional. Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Optional. The maximum number of customers row to return. The service may return fewer than this value. If unspecified, at most 10 customers will be returned.
         */
        pageSize?: number;
        /**
         * Optional. A page token, received from a previous `ListViolations` call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
        /**
         * Required. Parent resource Format `organizations/{organization\}/locations/{location\}/customers/{customer\}/workloads/{workload\}`
         */
        parent?: string;
    }
    export {};
}
