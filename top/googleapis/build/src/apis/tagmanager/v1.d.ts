/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace tagmanager_v1 {
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
     * Tag Manager API
     *
     * This API allows clients to access and modify container and tag configuration.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const tagmanager = google.tagmanager('v1');
     * ```
     */
    export class Tagmanager {
        context: APIRequestContext;
        accounts: Resource$Accounts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Represents a Google Tag Manager Account.
     */
    export interface Schema$Account {
        /**
         * The Account ID uniquely identifies the GTM Account.
         */
        accountId?: string | null;
        /**
         * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
         */
        fingerprint?: string | null;
        /**
         * Account display name.
         */
        name?: string | null;
        /**
         * Whether the account shares data anonymously with Google and others.
         */
        shareData?: boolean | null;
    }
    /**
     * Defines the Google Tag Manager Account access permissions.
     */
    export interface Schema$AccountAccess {
        /**
         * List of Account permissions. Valid account permissions are read and manage.
         */
        permission?: string[] | null;
    }
    /**
     * Represents a predicate.
     */
    export interface Schema$Condition {
        /**
         * A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true.
         */
        parameter?: Schema$Parameter[];
        /**
         * The type of operator for this condition.
         */
        type?: string | null;
    }
    /**
     * Represents a Google Tag Manager Container.
     */
    export interface Schema$Container {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The Container ID uniquely identifies the GTM Container.
         */
        containerId?: string | null;
        /**
         * Optional list of domain names associated with the Container.
         */
        domainName?: string[] | null;
        /**
         * List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId.
         */
        enabledBuiltInVariable?: string[] | null;
        /**
         * The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
         */
        fingerprint?: string | null;
        /**
         * Container display name.
         */
        name?: string | null;
        /**
         * Container Notes.
         */
        notes?: string | null;
        /**
         * Container Public ID.
         */
        publicId?: string | null;
        /**
         * Container Country ID.
         */
        timeZoneCountryId?: string | null;
        /**
         * Container Time Zone ID.
         */
        timeZoneId?: string | null;
        /**
         * List of Usage Contexts for the Container. Valid values include: web, android, ios.
         */
        usageContext?: string[] | null;
    }
    /**
     * Defines the Google Tag Manager Container access permissions.
     */
    export interface Schema$ContainerAccess {
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * List of Container permissions. Valid container permissions are: read, edit, delete, publish.
         */
        permission?: string[] | null;
    }
    /**
     * Represents a Google Tag Manager Container Version.
     */
    export interface Schema$ContainerVersion {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The container that this version was taken from.
         */
        container?: Schema$Container;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The Container Version ID uniquely identifies the GTM Container Version.
         */
        containerVersionId?: string | null;
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean | null;
        /**
         * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
         */
        fingerprint?: string | null;
        /**
         * The folders in the container that this version was taken from.
         */
        folder?: Schema$Folder[];
        /**
         * Container version display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this container version in the container.
         */
        notes?: string | null;
        /**
         * The tags in the container that this version was taken from.
         */
        tag?: Schema$Tag[];
        /**
         * The triggers in the container that this version was taken from.
         */
        trigger?: Schema$Trigger[];
        /**
         * The variables in the container that this version was taken from.
         */
        variable?: Schema$Variable[];
    }
    /**
     * Represents a Google Tag Manager Container Version Header.
     */
    export interface Schema$ContainerVersionHeader {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The Container Version ID uniquely identifies the GTM Container Version.
         */
        containerVersionId?: string | null;
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean | null;
        /**
         * Container version display name.
         */
        name?: string | null;
        /**
         * Number of tags in the container version.
         */
        numTags?: string | null;
        /**
         * Number of triggers in the container version.
         */
        numTriggers?: string | null;
        /**
         * Number of variables in the container version.
         */
        numVariables?: string | null;
    }
    /**
     * Options for new container versions.
     */
    export interface Schema$CreateContainerVersionRequestVersionOptions {
        /**
         * The name of the container version to be created.
         */
        name?: string | null;
        /**
         * The notes of the container version to be created.
         */
        notes?: string | null;
        /**
         * The creation of this version may be for quick preview and shouldn't be saved.
         */
        quickPreview?: boolean | null;
    }
    /**
     * Create container versions response.
     */
    export interface Schema$CreateContainerVersionResponse {
        /**
         * Compiler errors or not.
         */
        compilerError?: boolean | null;
        /**
         * The container version created.
         */
        containerVersion?: Schema$ContainerVersion;
    }
    /**
     * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
     */
    export interface Schema$Environment {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The environment authorization code.
         */
        authorizationCode?: string | null;
        /**
         * The last update time-stamp for the authorization code.
         */
        authorizationTimestampMs?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        containerVersionId?: string | null;
        /**
         * The environment description. Can be set or changed only on USER type environments.
         */
        description?: string | null;
        /**
         * Whether or not to enable debug by default on for the environment.
         */
        enableDebug?: boolean | null;
        /**
         * GTM Environment ID uniquely identifies the GTM Environment.
         */
        environmentId?: string | null;
        /**
         * The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
         */
        fingerprint?: string | null;
        /**
         * The environment display name. Can be set or changed only on USER type environments.
         */
        name?: string | null;
        /**
         * The type of this environment.
         */
        type?: string | null;
        /**
         * Default preview page url for the environment.
         */
        url?: string | null;
    }
    /**
     * Represents a Google Tag Manager Folder.
     */
    export interface Schema$Folder {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
         */
        fingerprint?: string | null;
        /**
         * The Folder ID uniquely identifies the GTM Folder.
         */
        folderId?: string | null;
        /**
         * Folder display name.
         */
        name?: string | null;
    }
    /**
     * Represents a Google Tag Manager Folder's contents.
     */
    export interface Schema$FolderEntities {
        /**
         * The list of tags inside the folder.
         */
        tag?: Schema$Tag[];
        /**
         * The list of triggers inside the folder.
         */
        trigger?: Schema$Trigger[];
        /**
         * The list of variables inside the folder.
         */
        variable?: Schema$Variable[];
    }
    /**
     * List Accounts Response.
     */
    export interface Schema$ListAccountsResponse {
        /**
         * List of GTM Accounts that a user has access to.
         */
        accounts?: Schema$Account[];
    }
    /**
     * List AccountUsers Response.
     */
    export interface Schema$ListAccountUsersResponse {
        /**
         * All GTM AccountUsers of a GTM Account.
         */
        userAccess?: Schema$UserAccess[];
    }
    /**
     * List Containers Response.
     */
    export interface Schema$ListContainersResponse {
        /**
         * All Containers of a GTM Account.
         */
        containers?: Schema$Container[];
    }
    /**
     * List container versions response.
     */
    export interface Schema$ListContainerVersionsResponse {
        /**
         * All versions of a GTM Container.
         */
        containerVersion?: Schema$ContainerVersion[];
        /**
         * All container version headers of a GTM Container.
         */
        containerVersionHeader?: Schema$ContainerVersionHeader[];
    }
    /**
     * List Environments Response.
     */
    export interface Schema$ListEnvironmentsResponse {
        /**
         * All Environments of a GTM Container.
         */
        environments?: Schema$Environment[];
    }
    /**
     * List Folders Response.
     */
    export interface Schema$ListFoldersResponse {
        /**
         * All GTM Folders of a GTM Container.
         */
        folders?: Schema$Folder[];
    }
    /**
     * List Tags Response.
     */
    export interface Schema$ListTagsResponse {
        /**
         * All GTM Tags of a GTM Container.
         */
        tags?: Schema$Tag[];
    }
    /**
     * List triggers response.
     */
    export interface Schema$ListTriggersResponse {
        /**
         * All GTM Triggers of a GTM Container.
         */
        triggers?: Schema$Trigger[];
    }
    /**
     * List Variables Response.
     */
    export interface Schema$ListVariablesResponse {
        /**
         * All GTM Variables of a GTM Container.
         */
        variables?: Schema$Variable[];
    }
    /**
     * Represents a Google Tag Manager Parameter.
     */
    export interface Schema$Parameter {
        /**
         * The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values.
         */
        key?: string | null;
        /**
         * This list parameter's parameters (keys will be ignored).
         */
        list?: Schema$Parameter[];
        /**
         * This map parameter's parameters (must have keys; keys must be unique).
         */
        map?: Schema$Parameter[];
        /**
         * The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name
         */
        type?: string | null;
        /**
         * A parameter's value (may contain variable references). as appropriate to the specified type.
         */
        value?: string | null;
    }
    /**
     * Publish container version response.
     */
    export interface Schema$PublishContainerVersionResponse {
        /**
         * Compiler errors or not.
         */
        compilerError?: boolean | null;
        /**
         * The container version created.
         */
        containerVersion?: Schema$ContainerVersion;
    }
    export interface Schema$SetupTag {
        /**
         * If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
         */
        stopOnSetupFailure?: boolean | null;
        /**
         * The name of the setup tag.
         */
        tagName?: string | null;
    }
    /**
     * Represents a Google Tag Manager Tag.
     */
    export interface Schema$Tag {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire.
         */
        blockingTriggerId?: string[] | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
         */
        fingerprint?: string | null;
        /**
         * Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false.
         */
        firingTriggerId?: string[] | null;
        /**
         * If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode).
         */
        liveOnly?: boolean | null;
        /**
         * Tag display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this tag in the container.
         */
        notes?: string | null;
        /**
         * The tag's parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * True if the tag is paused.
         */
        paused?: boolean | null;
        /**
         * User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0.
         */
        priority?: Schema$Parameter;
        /**
         * The end timestamp in milliseconds to schedule a tag.
         */
        scheduleEndMs?: string | null;
        /**
         * The start timestamp in milliseconds to schedule a tag.
         */
        scheduleStartMs?: string | null;
        /**
         * The list of setup tags. Currently we only allow one.
         */
        setupTag?: Schema$SetupTag[];
        /**
         * Option to fire this tag.
         */
        tagFiringOption?: string | null;
        /**
         * The Tag ID uniquely identifies the GTM Tag.
         */
        tagId?: string | null;
        /**
         * The list of teardown tags. Currently we only allow one.
         */
        teardownTag?: Schema$TeardownTag[];
        /**
         * GTM Tag Type.
         */
        type?: string | null;
    }
    export interface Schema$TeardownTag {
        /**
         * If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
         */
        stopTeardownOnFailure?: boolean | null;
        /**
         * The name of the teardown tag.
         */
        tagName?: string | null;
    }
    /**
     * Represents a Google Tag Manager Trigger
     */
    export interface Schema$Trigger {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * Used in the case of auto event tracking.
         */
        autoEventFilter?: Schema$Condition[];
        /**
         * Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers.
         */
        checkValidation?: Schema$Parameter;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger.
         */
        continuousTimeMinMilliseconds?: Schema$Parameter;
        /**
         * Used in the case of custom event, which is fired iff all Conditions are true.
         */
        customEventFilter?: Schema$Condition[];
        /**
         * Name of the GTM event that is fired. Only valid for Timer triggers.
         */
        eventName?: Schema$Parameter;
        /**
         * The trigger will only fire iff all Conditions are true.
         */
        filter?: Schema$Condition[];
        /**
         * The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
         */
        fingerprint?: string | null;
        /**
         * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers.
         */
        horizontalScrollPercentageList?: Schema$Parameter;
        /**
         * Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers.
         */
        interval?: Schema$Parameter;
        /**
         * Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger.
         */
        intervalSeconds?: Schema$Parameter;
        /**
         * Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers.
         */
        limit?: Schema$Parameter;
        /**
         * Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger.
         */
        maxTimerLengthSeconds?: Schema$Parameter;
        /**
         * Trigger display name.
         */
        name?: string | null;
        /**
         * Additional parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger.
         */
        selector?: Schema$Parameter;
        /**
         * A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger.
         */
        totalTimeMinMilliseconds?: Schema$Parameter;
        /**
         * The Trigger ID uniquely identifies the GTM Trigger.
         */
        triggerId?: string | null;
        /**
         * Defines the data layer event that causes this trigger.
         */
        type?: string | null;
        /**
         * Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers.
         */
        uniqueTriggerId?: Schema$Parameter;
        /**
         * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers.
         */
        verticalScrollPercentageList?: Schema$Parameter;
        /**
         * A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger.
         */
        visibilitySelector?: Schema$Parameter;
        /**
         * A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger.
         */
        visiblePercentageMax?: Schema$Parameter;
        /**
         * A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger.
         */
        visiblePercentageMin?: Schema$Parameter;
        /**
         * Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers.
         */
        waitForTags?: Schema$Parameter;
        /**
         * How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers.
         */
        waitForTagsTimeout?: Schema$Parameter;
    }
    /**
     * Represents a user's permissions to an account and its container.
     */
    export interface Schema$UserAccess {
        /**
         * GTM Account access permissions.
         */
        accountAccess?: Schema$AccountAccess;
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container access permissions.
         */
        containerAccess?: Schema$ContainerAccess[];
        /**
         * User's email address.
         */
        emailAddress?: string | null;
        /**
         * Account Permission ID.
         */
        permissionId?: string | null;
    }
    /**
     * Represents a Google Tag Manager Variable.
     */
    export interface Schema$Variable {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set.
         */
        disablingTriggerId?: string[] | null;
        /**
         * For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set.
         */
        enablingTriggerId?: string[] | null;
        /**
         * The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
         */
        fingerprint?: string | null;
        /**
         * Variable display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this variable in the container.
         */
        notes?: string | null;
        /**
         * The variable's parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * The end timestamp in milliseconds to schedule a variable.
         */
        scheduleEndMs?: string | null;
        /**
         * The start timestamp in milliseconds to schedule a variable.
         */
        scheduleStartMs?: string | null;
        /**
         * GTM Variable Type.
         */
        type?: string | null;
        /**
         * The Variable ID uniquely identifies the GTM Variable.
         */
        variableId?: string | null;
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        containers: Resource$Accounts$Containers;
        permissions: Resource$Accounts$Permissions;
        constructor(context: APIRequestContext);
        /**
         * Gets a GTM Account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Lists all GTM Accounts that a user has access to.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$ListAccountsResponse>;
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountsResponse>, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        /**
         * Updates a GTM Account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Update, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        update(params: Params$Resource$Accounts$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        update(params: Params$Resource$Accounts$Update, callback: BodyResponseCallback<Schema$Account>): void;
        update(callback: BodyResponseCallback<Schema$Account>): void;
    }
    export interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
    }
    export interface Params$Resource$Accounts$List extends StandardParameters {
    }
    export interface Params$Resource$Accounts$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the account in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    export class Resource$Accounts$Containers {
        context: APIRequestContext;
        environments: Resource$Accounts$Containers$Environments;
        folders: Resource$Accounts$Containers$Folders;
        move_folders: Resource$Accounts$Containers$Move_folders;
        reauthorize_environments: Resource$Accounts$Containers$Reauthorize_environments;
        tags: Resource$Accounts$Containers$Tags;
        triggers: Resource$Accounts$Containers$Triggers;
        variables: Resource$Accounts$Containers$Variables;
        versions: Resource$Accounts$Containers$Versions;
        constructor(context: APIRequestContext);
        /**
         * Creates a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Create, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        create(params: Params$Resource$Accounts$Containers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Create, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        create(params: Params$Resource$Accounts$Containers$Create, callback: BodyResponseCallback<Schema$Container>): void;
        create(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * Deletes a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Get, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        get(params: Params$Resource$Accounts$Containers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Get, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        get(params: Params$Resource$Accounts$Containers$Get, callback: BodyResponseCallback<Schema$Container>): void;
        get(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * Lists all Containers that belongs to a GTM Account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$List, options?: MethodOptions): GaxiosPromise<Schema$ListContainersResponse>;
        list(params: Params$Resource$Accounts$Containers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainersResponse>, callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$List, callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        /**
         * Updates a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Update, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        update(params: Params$Resource$Accounts$Containers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Update, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        update(params: Params$Resource$Accounts$Containers$Update, callback: BodyResponseCallback<Schema$Container>): void;
        update(callback: BodyResponseCallback<Schema$Container>): void;
    }
    export interface Params$Resource$Accounts$Containers$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    export interface Params$Resource$Accounts$Containers$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the container in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    export class Resource$Accounts$Containers$Environments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Environment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Environments$Create, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, callback: BodyResponseCallback<Schema$Environment>): void;
        create(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * Deletes a GTM Environment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Environments$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Environment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Environments$Get, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, callback: BodyResponseCallback<Schema$Environment>): void;
        get(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * Lists all GTM Environments of a GTM Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Environments$List, options?: MethodOptions): GaxiosPromise<Schema$ListEnvironmentsResponse>;
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: MethodOptions | BodyResponseCallback<Schema$ListEnvironmentsResponse>, callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Environments$List, callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        /**
         * Updates a GTM Environment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Environments$Update, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, callback: BodyResponseCallback<Schema$Environment>): void;
        update(callback: BodyResponseCallback<Schema$Environment>): void;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the environment in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export class Resource$Accounts$Containers$Folders {
        context: APIRequestContext;
        entities: Resource$Accounts$Containers$Folders$Entities;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Folders$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Folders$Create, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        create(params: Params$Resource$Accounts$Containers$Folders$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Folders$Create, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        create(params: Params$Resource$Accounts$Containers$Folders$Create, callback: BodyResponseCallback<Schema$Folder>): void;
        create(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * Deletes a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Folders$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Folders$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Folders$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Folders$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Folders$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Folders$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Folders$Get, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        get(params: Params$Resource$Accounts$Containers$Folders$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Folders$Get, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        get(params: Params$Resource$Accounts$Containers$Folders$Get, callback: BodyResponseCallback<Schema$Folder>): void;
        get(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * Lists all GTM Folders of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Folders$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Folders$List, options?: MethodOptions): GaxiosPromise<Schema$ListFoldersResponse>;
        list(params: Params$Resource$Accounts$Containers$Folders$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Folders$List, options: MethodOptions | BodyResponseCallback<Schema$ListFoldersResponse>, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Folders$List, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        /**
         * Updates a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Folders$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Folders$Update, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        update(params: Params$Resource$Accounts$Containers$Folders$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Folders$Update, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        update(params: Params$Resource$Accounts$Containers$Folders$Update, callback: BodyResponseCallback<Schema$Folder>): void;
        update(callback: BodyResponseCallback<Schema$Folder>): void;
    }
    export interface Params$Resource$Accounts$Containers$Folders$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export interface Params$Resource$Accounts$Containers$Folders$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Folders$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Folders$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Folders$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the folder in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export class Resource$Accounts$Containers$Folders$Entities {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * List all entities in a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Folders$Entities$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Folders$Entities$List, options?: MethodOptions): GaxiosPromise<Schema$FolderEntities>;
        list(params: Params$Resource$Accounts$Containers$Folders$Entities$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Folders$Entities$List, options: MethodOptions | BodyResponseCallback<Schema$FolderEntities>, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        list(params: Params$Resource$Accounts$Containers$Folders$Entities$List, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        list(callback: BodyResponseCallback<Schema$FolderEntities>): void;
    }
    export interface Params$Resource$Accounts$Containers$Folders$Entities$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
    }
    export class Resource$Accounts$Containers$Move_folders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Moves entities to a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Move_folders$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Move_folders$Update, options?: MethodOptions): GaxiosPromise<void>;
        update(params: Params$Resource$Accounts$Containers$Move_folders$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Move_folders$Update, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        update(params: Params$Resource$Accounts$Containers$Move_folders$Update, callback: BodyResponseCallback<void>): void;
        update(callback: BodyResponseCallback<void>): void;
    }
    export interface Params$Resource$Accounts$Containers$Move_folders$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
        /**
         * The tags to be moved to the folder.
         */
        tagId?: string[];
        /**
         * The triggers to be moved to the folder.
         */
        triggerId?: string[];
        /**
         * The variables to be moved to the folder.
         */
        variableId?: string[];
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export class Resource$Accounts$Containers$Reauthorize_environments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Re-generates the authorization code for a GTM Environment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        update(params: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        update(params: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, callback: BodyResponseCallback<Schema$Environment>): void;
        update(callback: BodyResponseCallback<Schema$Environment>): void;
    }
    export interface Params$Resource$Accounts$Containers$Reauthorize_environments$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export class Resource$Accounts$Containers$Tags {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Tags$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Tags$Create, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        create(params: Params$Resource$Accounts$Containers$Tags$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Tags$Create, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        create(params: Params$Resource$Accounts$Containers$Tags$Create, callback: BodyResponseCallback<Schema$Tag>): void;
        create(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * Deletes a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Tags$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Tags$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Tags$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Tags$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Tags$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Tags$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Tags$Get, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        get(params: Params$Resource$Accounts$Containers$Tags$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Tags$Get, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        get(params: Params$Resource$Accounts$Containers$Tags$Get, callback: BodyResponseCallback<Schema$Tag>): void;
        get(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * Lists all GTM Tags of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Tags$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Tags$List, options?: MethodOptions): GaxiosPromise<Schema$ListTagsResponse>;
        list(params: Params$Resource$Accounts$Containers$Tags$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Tags$List, options: MethodOptions | BodyResponseCallback<Schema$ListTagsResponse>, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Tags$List, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        /**
         * Updates a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Tags$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Tags$Update, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        update(params: Params$Resource$Accounts$Containers$Tags$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Tags$Update, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        update(params: Params$Resource$Accounts$Containers$Tags$Update, callback: BodyResponseCallback<Schema$Tag>): void;
        update(callback: BodyResponseCallback<Schema$Tag>): void;
    }
    export interface Params$Resource$Accounts$Containers$Tags$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    export interface Params$Resource$Accounts$Containers$Tags$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Tag ID.
         */
        tagId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Tags$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Tag ID.
         */
        tagId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Tags$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Tags$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the tag in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Tag ID.
         */
        tagId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    export class Resource$Accounts$Containers$Triggers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Triggers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Triggers$Create, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        create(params: Params$Resource$Accounts$Containers$Triggers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Triggers$Create, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(params: Params$Resource$Accounts$Containers$Triggers$Create, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * Deletes a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Triggers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Triggers$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Triggers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Triggers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Triggers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Triggers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Triggers$Get, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        get(params: Params$Resource$Accounts$Containers$Triggers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Triggers$Get, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(params: Params$Resource$Accounts$Containers$Triggers$Get, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * Lists all GTM Triggers of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Triggers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Triggers$List, options?: MethodOptions): GaxiosPromise<Schema$ListTriggersResponse>;
        list(params: Params$Resource$Accounts$Containers$Triggers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Triggers$List, options: MethodOptions | BodyResponseCallback<Schema$ListTriggersResponse>, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Triggers$List, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        /**
         * Updates a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Triggers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Triggers$Update, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        update(params: Params$Resource$Accounts$Containers$Triggers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Triggers$Update, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(params: Params$Resource$Accounts$Containers$Triggers$Update, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(callback: BodyResponseCallback<Schema$Trigger>): void;
    }
    export interface Params$Resource$Accounts$Containers$Triggers$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    export interface Params$Resource$Accounts$Containers$Triggers$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Trigger ID.
         */
        triggerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Triggers$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Trigger ID.
         */
        triggerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Triggers$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Triggers$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the trigger in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Trigger ID.
         */
        triggerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    export class Resource$Accounts$Containers$Variables {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Variables$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Variables$Create, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        create(params: Params$Resource$Accounts$Containers$Variables$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Variables$Create, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        create(params: Params$Resource$Accounts$Containers$Variables$Create, callback: BodyResponseCallback<Schema$Variable>): void;
        create(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * Deletes a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Variables$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Variables$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Variables$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Variables$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Variables$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Variables$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Variables$Get, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        get(params: Params$Resource$Accounts$Containers$Variables$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Variables$Get, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        get(params: Params$Resource$Accounts$Containers$Variables$Get, callback: BodyResponseCallback<Schema$Variable>): void;
        get(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * Lists all GTM Variables of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Variables$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Variables$List, options?: MethodOptions): GaxiosPromise<Schema$ListVariablesResponse>;
        list(params: Params$Resource$Accounts$Containers$Variables$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Variables$List, options: MethodOptions | BodyResponseCallback<Schema$ListVariablesResponse>, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Variables$List, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        /**
         * Updates a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Variables$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Variables$Update, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        update(params: Params$Resource$Accounts$Containers$Variables$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Variables$Update, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        update(params: Params$Resource$Accounts$Containers$Variables$Update, callback: BodyResponseCallback<Schema$Variable>): void;
        update(callback: BodyResponseCallback<Schema$Variable>): void;
    }
    export interface Params$Resource$Accounts$Containers$Variables$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    export interface Params$Resource$Accounts$Containers$Variables$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Variable ID.
         */
        variableId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Variables$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Variable ID.
         */
        variableId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Variables$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Variables$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the variable in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Variable ID.
         */
        variableId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    export class Resource$Accounts$Containers$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a Container Version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Versions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Versions$Create, options?: MethodOptions): GaxiosPromise<Schema$CreateContainerVersionResponse>;
        create(params: Params$Resource$Accounts$Containers$Versions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Versions$Create, options: MethodOptions | BodyResponseCallback<Schema$CreateContainerVersionResponse>, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create(params: Params$Resource$Accounts$Containers$Versions$Create, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create(callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        /**
         * Deletes a Container Version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Versions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Container Version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Versions$Get, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        get(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Lists all Container Versions of a GTM Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Versions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Versions$List, options?: MethodOptions): GaxiosPromise<Schema$ListContainerVersionsResponse>;
        list(params: Params$Resource$Accounts$Containers$Versions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Versions$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainerVersionsResponse>, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Versions$List, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        /**
         * Publishes a Container Version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: StreamMethodOptions): GaxiosPromise<Readable>;
        publish(params?: Params$Resource$Accounts$Containers$Versions$Publish, options?: MethodOptions): GaxiosPromise<Schema$PublishContainerVersionResponse>;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: MethodOptions | BodyResponseCallback<Schema$PublishContainerVersionResponse>, callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        publish(callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        /**
         * Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        restore(params: Params$Resource$Accounts$Containers$Versions$Restore, options: StreamMethodOptions): GaxiosPromise<Readable>;
        restore(params?: Params$Resource$Accounts$Containers$Versions$Restore, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        restore(params: Params$Resource$Accounts$Containers$Versions$Restore, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        restore(params: Params$Resource$Accounts$Containers$Versions$Restore, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        restore(params: Params$Resource$Accounts$Containers$Versions$Restore, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        restore(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Undeletes a Container Version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        undelete(params?: Params$Resource$Accounts$Containers$Versions$Undelete, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        undelete(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Updates a Container Version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Versions$Update, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        update(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateContainerVersionRequestVersionOptions;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID. Specify published to retrieve the currently published version.
         */
        containerVersionId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Retrieve headers only when true.
         */
        headers?: boolean;
        /**
         * Also retrieve deleted (archived) versions when true.
         */
        includeDeleted?: boolean;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Publish extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the container version in storage.
         */
        fingerprint?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Restore extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Undelete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the container version in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContainerVersion;
    }
    export class Resource$Accounts$Permissions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a user's Account & Container Permissions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Permissions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Permissions$Create, options?: MethodOptions): GaxiosPromise<Schema$UserAccess>;
        create(params: Params$Resource$Accounts$Permissions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Permissions$Create, options: MethodOptions | BodyResponseCallback<Schema$UserAccess>, callback: BodyResponseCallback<Schema$UserAccess>): void;
        create(params: Params$Resource$Accounts$Permissions$Create, callback: BodyResponseCallback<Schema$UserAccess>): void;
        create(callback: BodyResponseCallback<Schema$UserAccess>): void;
        /**
         * Removes a user from the account, revoking access to it and all of its containers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Permissions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Permissions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Permissions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Permissions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Permissions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a user's Account & Container Permissions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Permissions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Permissions$Get, options?: MethodOptions): GaxiosPromise<Schema$UserAccess>;
        get(params: Params$Resource$Accounts$Permissions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Permissions$Get, options: MethodOptions | BodyResponseCallback<Schema$UserAccess>, callback: BodyResponseCallback<Schema$UserAccess>): void;
        get(params: Params$Resource$Accounts$Permissions$Get, callback: BodyResponseCallback<Schema$UserAccess>): void;
        get(callback: BodyResponseCallback<Schema$UserAccess>): void;
        /**
         * List all users that have access to the account along with Account and Container Permissions granted to each of them.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Permissions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Permissions$List, options?: MethodOptions): GaxiosPromise<Schema$ListAccountUsersResponse>;
        list(params: Params$Resource$Accounts$Permissions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Permissions$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountUsersResponse>, callback: BodyResponseCallback<Schema$ListAccountUsersResponse>): void;
        list(params: Params$Resource$Accounts$Permissions$List, callback: BodyResponseCallback<Schema$ListAccountUsersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountUsersResponse>): void;
        /**
         * Updates a user's Account & Container Permissions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Permissions$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Permissions$Update, options?: MethodOptions): GaxiosPromise<Schema$UserAccess>;
        update(params: Params$Resource$Accounts$Permissions$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Permissions$Update, options: MethodOptions | BodyResponseCallback<Schema$UserAccess>, callback: BodyResponseCallback<Schema$UserAccess>): void;
        update(params: Params$Resource$Accounts$Permissions$Update, callback: BodyResponseCallback<Schema$UserAccess>): void;
        update(callback: BodyResponseCallback<Schema$UserAccess>): void;
    }
    export interface Params$Resource$Accounts$Permissions$Create extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserAccess;
    }
    export interface Params$Resource$Accounts$Permissions$Delete extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM User ID.
         */
        permissionId?: string;
    }
    export interface Params$Resource$Accounts$Permissions$Get extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM User ID.
         */
        permissionId?: string;
    }
    export interface Params$Resource$Accounts$Permissions$List extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
    }
    export interface Params$Resource$Accounts$Permissions$Update extends StandardParameters {
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM User ID.
         */
        permissionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserAccess;
    }
    export {};
}
