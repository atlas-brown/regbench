/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace tagmanager_v2 {
    export interface Options extends GlobalOptions {
        version: 'v2';
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
     * const tagmanager = google.tagmanager('v2');
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
         * Read-only Account feature set
         */
        features?: Schema$AccountFeatures;
        /**
         * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
         */
        fingerprint?: string | null;
        /**
         * Account display name.
         */
        name?: string | null;
        /**
         * GTM Account's API relative path.
         */
        path?: string | null;
        /**
         * Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service.
         */
        shareData?: boolean | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
    }
    /**
     * Defines the Google Tag Manager Account access permissions.
     */
    export interface Schema$AccountAccess {
        /**
         * Whether the user has no access, user access, or admin access to an account.
         */
        permission?: string | null;
    }
    export interface Schema$AccountFeatures {
        /**
         * Whether this Account supports multiple Containers.
         */
        supportMultipleContainers?: boolean | null;
        /**
         * Whether this Account supports user permissions managed by GTM.
         */
        supportUserPermissions?: boolean | null;
    }
    /**
     * Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
     */
    export interface Schema$BuiltInVariable {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Name of the built-in variable to be used to refer to the built-in variable.
         */
        name?: string | null;
        /**
         * GTM BuiltInVariable's API relative path.
         */
        path?: string | null;
        /**
         * Type of built-in variable.
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    export interface Schema$Client {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The Client ID uniquely identifies the GTM client.
         */
        clientId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.
         */
        fingerprint?: string | null;
        /**
         * Client display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this tag in the container.
         */
        notes?: string | null;
        /**
         * The client's parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM client's API relative path.
         */
        path?: string | null;
        /**
         * Priority determines relative firing order.
         */
        priority?: number | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * Client type.
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
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
     * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
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
         * List of domain names associated with the Container.
         */
        domainName?: string[] | null;
        /**
         * Read-only Container feature set.
         */
        features?: Schema$ContainerFeatures;
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
         * GTM Container's API relative path.
         */
        path?: string | null;
        /**
         * Container Public ID.
         */
        publicId?: string | null;
        /**
         * List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match.
         */
        taggingServerUrls?: string[] | null;
        /**
         * All Tag IDs that refer to this Container.
         */
        tagIds?: string[] | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * List of Usage Contexts for the Container. Valid values include: web, android, or ios.
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
         * List of Container permissions.
         */
        permission?: string | null;
    }
    export interface Schema$ContainerFeatures {
        /**
         * Whether this Container supports built-in variables
         */
        supportBuiltInVariables?: boolean | null;
        /**
         * Whether this Container supports clients.
         */
        supportClients?: boolean | null;
        /**
         * Whether this Container supports environments.
         */
        supportEnvironments?: boolean | null;
        /**
         * Whether this Container supports folders.
         */
        supportFolders?: boolean | null;
        /**
         * Whether this Container supports Google tag config.
         */
        supportGtagConfigs?: boolean | null;
        /**
         * Whether this Container supports tags.
         */
        supportTags?: boolean | null;
        /**
         * Whether this Container supports templates.
         */
        supportTemplates?: boolean | null;
        /**
         * Whether this Container supports transformations.
         */
        supportTransformations?: boolean | null;
        /**
         * Whether this Container supports triggers.
         */
        supportTriggers?: boolean | null;
        /**
         * Whether this Container supports user permissions managed by GTM.
         */
        supportUserPermissions?: boolean | null;
        /**
         * Whether this Container supports variables.
         */
        supportVariables?: boolean | null;
        /**
         * Whether this Container supports Container versions.
         */
        supportVersions?: boolean | null;
        /**
         * Whether this Container supports workspaces.
         */
        supportWorkspaces?: boolean | null;
        /**
         * Whether this Container supports zones.
         */
        supportZones?: boolean | null;
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
         * The built-in variables in the container that this version was taken from.
         */
        builtInVariable?: Schema$BuiltInVariable[];
        /**
         * The clients in the container that this version was taken from.
         */
        client?: Schema$Client[];
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
         * The custom templates in the container that this version was taken from.
         */
        customTemplate?: Schema$CustomTemplate[];
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean | null;
        /**
         * Container version description.
         */
        description?: string | null;
        /**
         * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
         */
        fingerprint?: string | null;
        /**
         * The folders in the container that this version was taken from.
         */
        folder?: Schema$Folder[];
        /**
         * The Google tag configs in the container that this version was taken from.
         */
        gtagConfig?: Schema$GtagConfig[];
        /**
         * Container version display name.
         */
        name?: string | null;
        /**
         * GTM Container Version's API relative path.
         */
        path?: string | null;
        /**
         * The tags in the container that this version was taken from.
         */
        tag?: Schema$Tag[];
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The transformations in the container that this version was taken from.
         */
        transformation?: Schema$Transformation[];
        /**
         * The triggers in the container that this version was taken from.
         */
        trigger?: Schema$Trigger[];
        /**
         * The variables in the container that this version was taken from.
         */
        variable?: Schema$Variable[];
        /**
         * The zones in the container that this version was taken from.
         */
        zone?: Schema$Zone[];
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
         * Number of clients in the container version.
         */
        numClients?: string | null;
        /**
         * Number of custom templates in the container version.
         */
        numCustomTemplates?: string | null;
        /**
         * Number of Google tag configs in the container version.
         */
        numGtagConfigs?: string | null;
        /**
         * Number of tags in the container version.
         */
        numTags?: string | null;
        /**
         * Number of transformations in the container version.
         */
        numTransformations?: string | null;
        /**
         * Number of triggers in the container version.
         */
        numTriggers?: string | null;
        /**
         * Number of variables in the container version.
         */
        numVariables?: string | null;
        /**
         * Number of zones in the container version.
         */
        numZones?: string | null;
        /**
         * GTM Container Version's API relative path.
         */
        path?: string | null;
    }
    export interface Schema$CreateBuiltInVariableResponse {
        /**
         * List of created built-in variables.
         */
        builtInVariable?: Schema$BuiltInVariable[];
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
        /**
         * Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
         */
        newWorkspacePath?: string | null;
        /**
         * Whether version creation failed when syncing the workspace to the latest container version.
         */
        syncStatus?: Schema$SyncStatus;
    }
    /**
     * Represents a Google Tag Manager Custom Template's contents.
     */
    export interface Schema$CustomTemplate {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.
         */
        fingerprint?: string | null;
        /**
         * A reference to the Community Template Gallery entry.
         */
        galleryReference?: Schema$GalleryReference;
        /**
         * Custom Template display name.
         */
        name?: string | null;
        /**
         * GTM Custom Template's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The custom template in text format.
         */
        templateData?: string | null;
        /**
         * The Custom Template ID uniquely identifies the GTM custom template.
         */
        templateId?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a Google Tag Destination.
     */
    export interface Schema$Destination {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Destination ID.
         */
        destinationId?: string | null;
        /**
         * The Destination link ID uniquely identifies the Destination.
         */
        destinationLinkId?: string | null;
        /**
         * The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified.
         */
        fingerprint?: string | null;
        /**
         * Destination display name.
         */
        name?: string | null;
        /**
         * Destination's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI.
         */
        tagManagerUrl?: string | null;
    }
    /**
     * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
     */
    export interface Schema$Entity {
        /**
         * The built in variable being represented by the entity.
         */
        builtInVariable?: Schema$BuiltInVariable;
        /**
         * Represents how the entity has been changed in the workspace.
         */
        changeStatus?: string | null;
        /**
         * The client being represented by the entity.
         */
        client?: Schema$Client;
        /**
         * The custom template being represented by the entity.
         */
        customTemplate?: Schema$CustomTemplate;
        /**
         * The folder being represented by the entity.
         */
        folder?: Schema$Folder;
        /**
         * The gtag config being represented by the entity.
         */
        gtagConfig?: Schema$GtagConfig;
        /**
         * The tag being represented by the entity.
         */
        tag?: Schema$Tag;
        /**
         * The transformation being represented by the entity.
         */
        transformation?: Schema$Transformation;
        /**
         * The trigger being represented by the entity.
         */
        trigger?: Schema$Trigger;
        /**
         * The variable being represented by the entity.
         */
        variable?: Schema$Variable;
        /**
         * The zone being represented by the entity.
         */
        zone?: Schema$Zone;
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
        authorizationTimestamp?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Represents a link to a container version.
         */
        containerVersionId?: string | null;
        /**
         * The environment description. Can be set or changed only on USER type environments.
         */
        description?: string | null;
        /**
         * Whether or not to enable debug by default for the environment.
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
         * GTM Environment's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The type of this environment.
         */
        type?: string | null;
        /**
         * Default preview page url for the environment.
         */
        url?: string | null;
        /**
         * Represents a link to a quick preview of a workspace.
         */
        workspaceId?: string | null;
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
        /**
         * User notes on how to apply this folder in the container.
         */
        notes?: string | null;
        /**
         * GTM Folder's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a Google Tag Manager Folder's contents.
     */
    export interface Schema$FolderEntities {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
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
     * Represents the link between a custom template and an entry on the Community Template Gallery site.
     */
    export interface Schema$GalleryReference {
        /**
         * ID for the gallery template that is generated once during first sync and travels with the template redirects.
         */
        galleryTemplateId?: string | null;
        /**
         * The name of the host for the community gallery template.
         */
        host?: string | null;
        /**
         * If a user has manually edited the community gallery template.
         */
        isModified?: boolean | null;
        /**
         * The name of the owner for the community gallery template.
         */
        owner?: string | null;
        /**
         * The name of the repository for the community gallery template.
         */
        repository?: string | null;
        /**
         * The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.
         */
        signature?: string | null;
        /**
         * The developer id of the community gallery template. This value is set whenever the template is created from the gallery.
         */
        templateDeveloperId?: string | null;
        /**
         * The version of the community gallery template.
         */
        version?: string | null;
    }
    export interface Schema$GetContainerSnippetResponse {
        /**
         * Server container config param for manually provisioning a tagging server.
         */
        containerConfig?: string | null;
        /**
         * Tagging snippet for a Container.
         */
        snippet?: string | null;
    }
    /**
     * The changes that have occurred in the workspace since the base container version.
     */
    export interface Schema$GetWorkspaceStatusResponse {
        /**
         * The merge conflict after sync.
         */
        mergeConflict?: Schema$MergeConflict[];
        /**
         * Entities that have been changed in the workspace.
         */
        workspaceChange?: Schema$Entity[];
    }
    /**
     * Represents a Google tag configuration.
     */
    export interface Schema$GtagConfig {
        /**
         * Google tag account ID.
         */
        accountId?: string | null;
        /**
         * Google tag container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.
         */
        fingerprint?: string | null;
        /**
         * The ID uniquely identifies the Google tag config.
         */
        gtagConfigId?: string | null;
        /**
         * The Google tag config's parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Google tag config's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * Google tag config type.
         */
        type?: string | null;
        /**
         * Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.
         */
        workspaceId?: string | null;
    }
    /**
     * List Accounts Response.
     */
    export interface Schema$ListAccountsResponse {
        /**
         * List of GTM Accounts that a user has access to.
         */
        account?: Schema$Account[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListClientsResponse {
        /**
         * All GTM Clients of a GTM Container.
         */
        client?: Schema$Client[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Containers Response.
     */
    export interface Schema$ListContainersResponse {
        /**
         * All Containers of a GTM Account.
         */
        container?: Schema$Container[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List container versions response.
     */
    export interface Schema$ListContainerVersionsResponse {
        /**
         * All container version headers of a GTM Container.
         */
        containerVersionHeader?: Schema$ContainerVersionHeader[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListDestinationsResponse {
        /**
         * All Destinations linked to a GTM Container.
         */
        destination?: Schema$Destination[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * A list of enabled built-in variables.
     */
    export interface Schema$ListEnabledBuiltInVariablesResponse {
        /**
         * All GTM BuiltInVariables of a GTM container.
         */
        builtInVariable?: Schema$BuiltInVariable[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Environments Response.
     */
    export interface Schema$ListEnvironmentsResponse {
        /**
         * All Environments of a GTM Container.
         */
        environment?: Schema$Environment[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Folders Response.
     */
    export interface Schema$ListFoldersResponse {
        /**
         * All GTM Folders of a GTM Container.
         */
        folder?: Schema$Folder[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListGtagConfigResponse {
        /**
         * All Google tag configs in a Container.
         */
        gtagConfig?: Schema$GtagConfig[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Tags Response.
     */
    export interface Schema$ListTagsResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Tags of a GTM Container.
         */
        tag?: Schema$Tag[];
    }
    export interface Schema$ListTemplatesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Custom Templates of a GTM Container.
         */
        template?: Schema$CustomTemplate[];
    }
    export interface Schema$ListTransformationsResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Transformations of a GTM Container.
         */
        transformation?: Schema$Transformation[];
    }
    /**
     * List triggers response.
     */
    export interface Schema$ListTriggersResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Triggers of a GTM Container.
         */
        trigger?: Schema$Trigger[];
    }
    /**
     * List user permissions response.
     */
    export interface Schema$ListUserPermissionsResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM UserPermissions of a GTM Account.
         */
        userPermission?: Schema$UserPermission[];
    }
    /**
     * List Variables Response.
     */
    export interface Schema$ListVariablesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Variables of a GTM Container.
         */
        variable?: Schema$Variable[];
    }
    /**
     * A list of workspaces in a container.
     */
    export interface Schema$ListWorkspacesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All Workspaces of a GTM Container.
         */
        workspace?: Schema$Workspace[];
    }
    export interface Schema$ListZonesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Zones of a GTM Container.
         */
        zone?: Schema$Zone[];
    }
    /**
     * Represents a merge conflict.
     */
    export interface Schema$MergeConflict {
        /**
         * The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version.
         */
        entityInBaseVersion?: Schema$Entity;
        /**
         * The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status.
         */
        entityInWorkspace?: Schema$Entity;
    }
    /**
     * Represents a Google Tag Manager Parameter.
     */
    export interface Schema$Parameter {
        /**
         * Whether or not a reference type parameter is strongly or weakly referenced. Only used by Transformations.
         */
        isWeakReference?: boolean | null;
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
    /**
     * Response to quick previewing a workspace.
     */
    export interface Schema$QuickPreviewResponse {
        /**
         * Were there compiler errors or not.
         */
        compilerError?: boolean | null;
        /**
         * The quick previewed container version.
         */
        containerVersion?: Schema$ContainerVersion;
        /**
         * Whether quick previewing failed when syncing the workspace to the latest container version.
         */
        syncStatus?: Schema$SyncStatus;
    }
    /**
     * The result of reverting a built-in variable in a workspace.
     */
    export interface Schema$RevertBuiltInVariableResponse {
        /**
         * Whether the built-in variable is enabled after reversion.
         */
        enabled?: boolean | null;
    }
    /**
     * The result of reverting a client in a workspace.
     */
    export interface Schema$RevertClientResponse {
        /**
         * Client as it appears in the latest container version since the last workspace synchronization operation. If no client is present, that means the client was deleted in the latest container version.
         */
        client?: Schema$Client;
    }
    /**
     * The result of reverting folder changes in a workspace.
     */
    export interface Schema$RevertFolderResponse {
        /**
         * Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version.
         */
        folder?: Schema$Folder;
    }
    /**
     * The result of reverting a tag in a workspace.
     */
    export interface Schema$RevertTagResponse {
        /**
         * Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version.
         */
        tag?: Schema$Tag;
    }
    /**
     * The result of reverting a template in a workspace.
     */
    export interface Schema$RevertTemplateResponse {
        /**
         * Template as it appears in the latest container version since the last workspace synchronization operation. If no template is present, that means the template was deleted in the latest container version.
         */
        template?: Schema$CustomTemplate;
    }
    /**
     * The result of reverting a transformation in a workspace.
     */
    export interface Schema$RevertTransformationResponse {
        /**
         * Transformation as it appears in the latest container version since the last workspace synchronization operation. If no transformation is present, that means the transformation was deleted in the latest container version.
         */
        transformation?: Schema$Transformation;
    }
    /**
     * The result of reverting a trigger in a workspace.
     */
    export interface Schema$RevertTriggerResponse {
        /**
         * Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version.
         */
        trigger?: Schema$Trigger;
    }
    /**
     * The result of reverting a variable in a workspace.
     */
    export interface Schema$RevertVariableResponse {
        /**
         * Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version.
         */
        variable?: Schema$Variable;
    }
    /**
     * The result of reverting a zone in a workspace.
     */
    export interface Schema$RevertZoneResponse {
        /**
         * Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is present, that means the zone was deleted in the latest container version.
         */
        zone?: Schema$Zone;
    }
    /**
     * Represents a reference to atag that fires before another tag in order to set up dependencies.
     */
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
     * The status of a workspace after synchronization.
     */
    export interface Schema$SyncStatus {
        /**
         * Synchornization operation detected a merge conflict.
         */
        mergeConflict?: boolean | null;
        /**
         * An error occurred during the synchronization operation.
         */
        syncError?: boolean | null;
    }
    /**
     * A response after synchronizing the workspace to the latest container version.
     */
    export interface Schema$SyncWorkspaceResponse {
        /**
         * The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.
         */
        mergeConflict?: Schema$MergeConflict[];
        /**
         * Indicates whether synchronization caused a merge conflict or sync error.
         */
        syncStatus?: Schema$SyncStatus;
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
         * Consent settings of a tag.
         */
        consentSettings?: Schema$TagConsentSetting;
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
         * A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references.
         */
        monitoringMetadata?: Schema$Parameter;
        /**
         * If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified.
         */
        monitoringMetadataTagNameKey?: string | null;
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
         * GTM Tag's API relative path.
         */
        path?: string | null;
        /**
         * Indicates whether the tag is paused, which prevents the tag from firing.
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
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The list of teardown tags. Currently we only allow one.
         */
        teardownTag?: Schema$TeardownTag[];
        /**
         * GTM Tag Type.
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    export interface Schema$TagConsentSetting {
        /**
         * The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted.
         */
        consentStatus?: string | null;
        /**
         * The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING.
         */
        consentType?: Schema$Parameter;
    }
    /**
     * Represents a tag that fires after another tag in order to tear down dependencies.
     */
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
     * Represents a Google Tag Manager Transformation.
     */
    export interface Schema$Transformation {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Transformation as computed at storage time. This value is recomputed whenever the transformation is modified.
         */
        fingerprint?: string | null;
        /**
         * Transformation display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this transformation in the container.
         */
        notes?: string | null;
        /**
         * The transformation's parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM transformation's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The Transformation ID uniquely identifies the GTM transformation.
         */
        transformationId?: string | null;
        /**
         * Transformation type.
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
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
         * User notes on how to apply this trigger in the container.
         */
        notes?: string | null;
        /**
         * Additional parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM Trigger's API relative path.
         */
        path?: string | null;
        /**
         * A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger.
         */
        selector?: Schema$Parameter;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
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
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a user's permissions to an account and its container.
     */
    export interface Schema$UserPermission {
        /**
         * GTM Account access permissions.
         */
        accountAccess?: Schema$AccountAccess;
        /**
         * The Account ID uniquely identifies the GTM Account.
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
         * GTM UserPermission's API relative path.
         */
        path?: string | null;
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
         * Option to convert a variable value to other value.
         */
        formatValue?: Schema$VariableFormatValue;
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
         * GTM Variable's API relative path.
         */
        path?: string | null;
        /**
         * The end timestamp in milliseconds to schedule a variable.
         */
        scheduleEndMs?: string | null;
        /**
         * The start timestamp in milliseconds to schedule a variable.
         */
        scheduleStartMs?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * GTM Variable Type.
         */
        type?: string | null;
        /**
         * The Variable ID uniquely identifies the GTM Variable.
         */
        variableId?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    export interface Schema$VariableFormatValue {
        /**
         * The option to convert a string-type variable value to either lowercase or uppercase.
         */
        caseConversionType?: string | null;
        /**
         * The value to convert if a variable value is false.
         */
        convertFalseToValue?: Schema$Parameter;
        /**
         * The value to convert if a variable value is null.
         */
        convertNullToValue?: Schema$Parameter;
        /**
         * The value to convert if a variable value is true.
         */
        convertTrueToValue?: Schema$Parameter;
        /**
         * The value to convert if a variable value is undefined.
         */
        convertUndefinedToValue?: Schema$Parameter;
    }
    /**
     * Represents a Google Tag Manager Container Workspace.
     */
    export interface Schema$Workspace {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Workspace description.
         */
        description?: string | null;
        /**
         * The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
         */
        fingerprint?: string | null;
        /**
         * Workspace display name.
         */
        name?: string | null;
        /**
         * GTM Workspace's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The Workspace ID uniquely identifies the GTM Workspace.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a Google Tag Manager Zone's contents.
     */
    export interface Schema$Zone {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * This Zone's boundary.
         */
        boundary?: Schema$ZoneBoundary;
        /**
         * Containers that are children of this Zone.
         */
        childContainer?: Schema$ZoneChildContainer[];
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
         */
        fingerprint?: string | null;
        /**
         * Zone display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this zone in the container.
         */
        notes?: string | null;
        /**
         * GTM Zone's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * This Zone's type restrictions.
         */
        typeRestriction?: Schema$ZoneTypeRestriction;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
        /**
         * The Zone ID uniquely identifies the GTM Zone.
         */
        zoneId?: string | null;
    }
    /**
     * Represents a Zone's boundaries.
     */
    export interface Schema$ZoneBoundary {
        /**
         * The conditions that, when conjoined, make up the boundary.
         */
        condition?: Schema$Condition[];
        /**
         * Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
         */
        customEvaluationTriggerId?: string[] | null;
    }
    /**
     * Represents a child container of a Zone.
     */
    export interface Schema$ZoneChildContainer {
        /**
         * The zone's nickname for the child container.
         */
        nickname?: string | null;
        /**
         * The child container's public id.
         */
        publicId?: string | null;
    }
    /**
     * Represents a Zone's type restrictions.
     */
    export interface Schema$ZoneTypeRestriction {
        /**
         * True if type restrictions have been enabled for this Zone.
         */
        enable?: boolean | null;
        /**
         * List of type public ids that have been whitelisted for use in this Zone.
         */
        whitelistedTypeId?: string[] | null;
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        containers: Resource$Accounts$Containers;
        user_permissions: Resource$Accounts$User_permissions;
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
         * GTM Account's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * Also retrieve accounts associated with Google Tag when true.
         */
        includeGoogleTags?: boolean;
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Accounts$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the account in storage.
         */
        fingerprint?: string;
        /**
         * GTM Account's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    export class Resource$Accounts$Containers {
        context: APIRequestContext;
        destinations: Resource$Accounts$Containers$Destinations;
        environments: Resource$Accounts$Containers$Environments;
        versions: Resource$Accounts$Containers$Versions;
        version_headers: Resource$Accounts$Containers$Version_headers;
        workspaces: Resource$Accounts$Containers$Workspaces;
        constructor(context: APIRequestContext);
        /**
         * Combines Containers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        combine(params: Params$Resource$Accounts$Containers$Combine, options: StreamMethodOptions): GaxiosPromise<Readable>;
        combine(params?: Params$Resource$Accounts$Containers$Combine, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        combine(params: Params$Resource$Accounts$Containers$Combine, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        combine(params: Params$Resource$Accounts$Containers$Combine, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        combine(params: Params$Resource$Accounts$Containers$Combine, callback: BodyResponseCallback<Schema$Container>): void;
        combine(callback: BodyResponseCallback<Schema$Container>): void;
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
         * Looks up a Container by destination ID or tag ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        lookup(params: Params$Resource$Accounts$Containers$Lookup, options: StreamMethodOptions): GaxiosPromise<Readable>;
        lookup(params?: Params$Resource$Accounts$Containers$Lookup, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        lookup(params: Params$Resource$Accounts$Containers$Lookup, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        lookup(params: Params$Resource$Accounts$Containers$Lookup, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        lookup(params: Params$Resource$Accounts$Containers$Lookup, callback: BodyResponseCallback<Schema$Container>): void;
        lookup(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * Move Tag ID out of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        move_tag_id(params: Params$Resource$Accounts$Containers$Move_tag_id, options: StreamMethodOptions): GaxiosPromise<Readable>;
        move_tag_id(params?: Params$Resource$Accounts$Containers$Move_tag_id, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        move_tag_id(params: Params$Resource$Accounts$Containers$Move_tag_id, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        move_tag_id(params: Params$Resource$Accounts$Containers$Move_tag_id, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        move_tag_id(params: Params$Resource$Accounts$Containers$Move_tag_id, callback: BodyResponseCallback<Schema$Container>): void;
        move_tag_id(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * Gets the tagging snippet for a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        snippet(params: Params$Resource$Accounts$Containers$Snippet, options: StreamMethodOptions): GaxiosPromise<Readable>;
        snippet(params?: Params$Resource$Accounts$Containers$Snippet, options?: MethodOptions): GaxiosPromise<Schema$GetContainerSnippetResponse>;
        snippet(params: Params$Resource$Accounts$Containers$Snippet, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        snippet(params: Params$Resource$Accounts$Containers$Snippet, options: MethodOptions | BodyResponseCallback<Schema$GetContainerSnippetResponse>, callback: BodyResponseCallback<Schema$GetContainerSnippetResponse>): void;
        snippet(params: Params$Resource$Accounts$Containers$Snippet, callback: BodyResponseCallback<Schema$GetContainerSnippetResponse>): void;
        snippet(callback: BodyResponseCallback<Schema$GetContainerSnippetResponse>): void;
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
    export interface Params$Resource$Accounts$Containers$Combine extends StandardParameters {
        /**
         * Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
         */
        allowUserPermissionFeatureUpdate?: boolean;
        /**
         * ID of container that will be merged into the current container.
         */
        containerId?: string;
        /**
         * GTM Container's API relative path.
         */
        path?: string;
        /**
         * Specify the source of config setting after combine
         */
        settingSource?: string;
    }
    export interface Params$Resource$Accounts$Containers$Create extends StandardParameters {
        /**
         * GTM Account's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    export interface Params$Resource$Accounts$Containers$Delete extends StandardParameters {
        /**
         * GTM Container's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Get extends StandardParameters {
        /**
         * GTM Container's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Account's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Lookup extends StandardParameters {
        /**
         * Destination ID linked to a GTM Container, e.g. AW-123456789. Only one of destination_id or tag_id should be set.
         */
        destinationId?: string;
        /**
         * Tag ID for a GTM Container, e.g. GTM-123456789. Only one of destination_id or tag_id should be set.
         */
        tagId?: string;
    }
    export interface Params$Resource$Accounts$Containers$Move_tag_id extends StandardParameters {
        /**
         * Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
         */
        allowUserPermissionFeatureUpdate?: boolean;
        /**
         * Whether or not to copy tag settings from this tag to the new tag.
         */
        copySettings?: boolean;
        /**
         * Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail.
         */
        copyTermsOfService?: boolean;
        /**
         * Whether or not to copy users from this tag to the new tag.
         */
        copyUsers?: boolean;
        /**
         * GTM Container's API relative path.
         */
        path?: string;
        /**
         * Tag ID to be removed from the current Container.
         */
        tagId?: string;
        /**
         * The name for the newly created tag.
         */
        tagName?: string;
    }
    export interface Params$Resource$Accounts$Containers$Snippet extends StandardParameters {
        /**
         * Container snippet's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the container in storage.
         */
        fingerprint?: string;
        /**
         * GTM Container's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    export class Resource$Accounts$Containers$Destinations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets a Destination.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Destinations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Destinations$Get, options?: MethodOptions): GaxiosPromise<Schema$Destination>;
        get(params: Params$Resource$Accounts$Containers$Destinations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Destinations$Get, options: MethodOptions | BodyResponseCallback<Schema$Destination>, callback: BodyResponseCallback<Schema$Destination>): void;
        get(params: Params$Resource$Accounts$Containers$Destinations$Get, callback: BodyResponseCallback<Schema$Destination>): void;
        get(callback: BodyResponseCallback<Schema$Destination>): void;
        /**
         * Adds a Destination to this Container and removes it from the Container to which it is currently linked.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        link(params: Params$Resource$Accounts$Containers$Destinations$Link, options: StreamMethodOptions): GaxiosPromise<Readable>;
        link(params?: Params$Resource$Accounts$Containers$Destinations$Link, options?: MethodOptions): GaxiosPromise<Schema$Destination>;
        link(params: Params$Resource$Accounts$Containers$Destinations$Link, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        link(params: Params$Resource$Accounts$Containers$Destinations$Link, options: MethodOptions | BodyResponseCallback<Schema$Destination>, callback: BodyResponseCallback<Schema$Destination>): void;
        link(params: Params$Resource$Accounts$Containers$Destinations$Link, callback: BodyResponseCallback<Schema$Destination>): void;
        link(callback: BodyResponseCallback<Schema$Destination>): void;
        /**
         * Lists all Destinations linked to a GTM Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Destinations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Destinations$List, options?: MethodOptions): GaxiosPromise<Schema$ListDestinationsResponse>;
        list(params: Params$Resource$Accounts$Containers$Destinations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Destinations$List, options: MethodOptions | BodyResponseCallback<Schema$ListDestinationsResponse>, callback: BodyResponseCallback<Schema$ListDestinationsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Destinations$List, callback: BodyResponseCallback<Schema$ListDestinationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDestinationsResponse>): void;
    }
    export interface Params$Resource$Accounts$Containers$Destinations$Get extends StandardParameters {
        /**
         * Google Tag Destination's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Destinations$Link extends StandardParameters {
        /**
         * Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
         */
        allowUserPermissionFeatureUpdate?: boolean;
        /**
         * Destination ID to be linked to the current container.
         */
        destinationId?: string;
        /**
         * GTM parent Container's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Destinations$List extends StandardParameters {
        /**
         * GTM parent Container's API relative path.
         */
        parent?: string;
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
         * Re-generates the authorization code for a GTM Environment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reauthorize(params?: Params$Resource$Accounts$Containers$Environments$Reauthorize, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, callback: BodyResponseCallback<Schema$Environment>): void;
        reauthorize(callback: BodyResponseCallback<Schema$Environment>): void;
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
         * GTM Container's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Delete extends StandardParameters {
        /**
         * GTM Environment's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Get extends StandardParameters {
        /**
         * GTM Environment's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Container's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Reauthorize extends StandardParameters {
        /**
         * GTM Environment's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the environment in storage.
         */
        fingerprint?: string;
        /**
         * GTM Environment's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export class Resource$Accounts$Containers$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
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
         * Gets the live (i.e. published) container version
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        live(params: Params$Resource$Accounts$Containers$Versions$Live, options: StreamMethodOptions): GaxiosPromise<Readable>;
        live(params?: Params$Resource$Accounts$Containers$Versions$Live, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        live(params: Params$Resource$Accounts$Containers$Versions$Live, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        live(params: Params$Resource$Accounts$Containers$Versions$Live, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        live(params: Params$Resource$Accounts$Containers$Versions$Live, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        live(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
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
         * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, options: StreamMethodOptions): GaxiosPromise<Readable>;
        set_latest(params?: Params$Resource$Accounts$Containers$Versions$Set_latest, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        set_latest(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
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
    export interface Params$Resource$Accounts$Containers$Versions$Delete extends StandardParameters {
        /**
         * GTM ContainerVersion's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Get extends StandardParameters {
        /**
         * The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
         */
        containerVersionId?: string;
        /**
         * GTM ContainerVersion's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Live extends StandardParameters {
        /**
         * GTM Container's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Publish extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the container version in storage.
         */
        fingerprint?: string;
        /**
         * GTM ContainerVersion's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Set_latest extends StandardParameters {
        /**
         * GTM ContainerVersion's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Undelete extends StandardParameters {
        /**
         * GTM ContainerVersion's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the container version in storage.
         */
        fingerprint?: string;
        /**
         * GTM ContainerVersion's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContainerVersion;
    }
    export class Resource$Accounts$Containers$Version_headers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the latest container version header
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, options: StreamMethodOptions): GaxiosPromise<Readable>;
        latest(params?: Params$Resource$Accounts$Containers$Version_headers$Latest, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersionHeader>;
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersionHeader>, callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
        latest(callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
        /**
         * Lists all Container Versions of a GTM Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Version_headers$List, options?: MethodOptions): GaxiosPromise<Schema$ListContainerVersionsResponse>;
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainerVersionsResponse>, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
    }
    export interface Params$Resource$Accounts$Containers$Version_headers$Latest extends StandardParameters {
        /**
         * GTM Container's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Version_headers$List extends StandardParameters {
        /**
         * Also retrieve deleted (archived) versions when true.
         */
        includeDeleted?: boolean;
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Container's API relative path.
         */
        parent?: string;
    }
    export class Resource$Accounts$Containers$Workspaces {
        context: APIRequestContext;
        built_in_variables: Resource$Accounts$Containers$Workspaces$Built_in_variables;
        clients: Resource$Accounts$Containers$Workspaces$Clients;
        folders: Resource$Accounts$Containers$Workspaces$Folders;
        gtag_config: Resource$Accounts$Containers$Workspaces$Gtag_config;
        tags: Resource$Accounts$Containers$Workspaces$Tags;
        templates: Resource$Accounts$Containers$Workspaces$Templates;
        transformations: Resource$Accounts$Containers$Workspaces$Transformations;
        triggers: Resource$Accounts$Containers$Workspaces$Triggers;
        variables: Resource$Accounts$Containers$Workspaces$Variables;
        zones: Resource$Accounts$Containers$Workspaces$Zones;
        constructor(context: APIRequestContext);
        /**
         * Creates a Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Create, options?: MethodOptions): GaxiosPromise<Schema$Workspace>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, options: MethodOptions | BodyResponseCallback<Schema$Workspace>, callback: BodyResponseCallback<Schema$Workspace>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, callback: BodyResponseCallback<Schema$Workspace>): void;
        create(callback: BodyResponseCallback<Schema$Workspace>): void;
        /**
         * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create_version(params?: Params$Resource$Accounts$Containers$Workspaces$Create_version, options?: MethodOptions): GaxiosPromise<Schema$CreateContainerVersionResponse>;
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, options: MethodOptions | BodyResponseCallback<Schema$CreateContainerVersionResponse>, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create_version(callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        /**
         * Deletes a Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Get, options?: MethodOptions): GaxiosPromise<Schema$Workspace>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, options: MethodOptions | BodyResponseCallback<Schema$Workspace>, callback: BodyResponseCallback<Schema$Workspace>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, callback: BodyResponseCallback<Schema$Workspace>): void;
        get(callback: BodyResponseCallback<Schema$Workspace>): void;
        /**
         * Finds conflicting and modified entities in the workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getStatus(params?: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options?: MethodOptions): GaxiosPromise<Schema$GetWorkspaceStatusResponse>;
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options: MethodOptions | BodyResponseCallback<Schema$GetWorkspaceStatusResponse>, callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
        getStatus(callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
        /**
         * Lists all Workspaces that belong to a GTM Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$List, options?: MethodOptions): GaxiosPromise<Schema$ListWorkspacesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, options: MethodOptions | BodyResponseCallback<Schema$ListWorkspacesResponse>, callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
        /**
         * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options: StreamMethodOptions): GaxiosPromise<Readable>;
        quick_preview(params?: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options?: MethodOptions): GaxiosPromise<Schema$QuickPreviewResponse>;
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options: MethodOptions | BodyResponseCallback<Schema$QuickPreviewResponse>, callback: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, callback: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
        quick_preview(callback: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
        /**
         * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options: StreamMethodOptions): GaxiosPromise<Readable>;
        resolve_conflict(params?: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options?: MethodOptions): GaxiosPromise<void>;
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, callback: BodyResponseCallback<void>): void;
        resolve_conflict(callback: BodyResponseCallback<void>): void;
        /**
         * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, options: StreamMethodOptions): GaxiosPromise<Readable>;
        sync(params?: Params$Resource$Accounts$Containers$Workspaces$Sync, options?: MethodOptions): GaxiosPromise<Schema$SyncWorkspaceResponse>;
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, options: MethodOptions | BodyResponseCallback<Schema$SyncWorkspaceResponse>, callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
        sync(callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
        /**
         * Updates a Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Update, options?: MethodOptions): GaxiosPromise<Schema$Workspace>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, options: MethodOptions | BodyResponseCallback<Schema$Workspace>, callback: BodyResponseCallback<Schema$Workspace>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, callback: BodyResponseCallback<Schema$Workspace>): void;
        update(callback: BodyResponseCallback<Schema$Workspace>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Create extends StandardParameters {
        /**
         * GTM parent Container's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Workspace;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Create_version extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateContainerVersionRequestVersionOptions;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Delete extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Get extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Getstatus extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM parent Container's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Quick_preview extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
         */
        fingerprint?: string;
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Entity;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Sync extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the workspace in storage.
         */
        fingerprint?: string;
        /**
         * GTM Workspace's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Workspace;
    }
    export class Resource$Accounts$Containers$Workspaces$Built_in_variables {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates one or more GTM Built-In Variables.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options?: MethodOptions): GaxiosPromise<Schema$CreateBuiltInVariableResponse>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options: MethodOptions | BodyResponseCallback<Schema$CreateBuiltInVariableResponse>, callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>): void;
        create(callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>): void;
        /**
         * Deletes one or more GTM Built-In Variables.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Lists all the enabled Built-In Variables of a GTM Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options?: MethodOptions): GaxiosPromise<Schema$ListEnabledBuiltInVariablesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options: MethodOptions | BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>, callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>): void;
        /**
         * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertBuiltInVariableResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertBuiltInVariableResponse>, callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * The types of built-in variables to enable.
         */
        type?: string[];
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete extends StandardParameters {
        /**
         * GTM BuiltInVariable's API relative path.
         */
        path?: string;
        /**
         * The types of built-in variables to delete.
         */
        type?: string[];
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert extends StandardParameters {
        /**
         * GTM BuiltInVariable's API relative path.
         */
        path?: string;
        /**
         * The type of built-in variable to revert.
         */
        type?: string;
    }
    export class Resource$Accounts$Containers$Workspaces$Clients {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Client.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options?: MethodOptions): GaxiosPromise<Schema$Client>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options: MethodOptions | BodyResponseCallback<Schema$Client>, callback: BodyResponseCallback<Schema$Client>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, callback: BodyResponseCallback<Schema$Client>): void;
        create(callback: BodyResponseCallback<Schema$Client>): void;
        /**
         * Deletes a GTM Client.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Client.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options?: MethodOptions): GaxiosPromise<Schema$Client>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options: MethodOptions | BodyResponseCallback<Schema$Client>, callback: BodyResponseCallback<Schema$Client>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, callback: BodyResponseCallback<Schema$Client>): void;
        get(callback: BodyResponseCallback<Schema$Client>): void;
        /**
         * Lists all GTM Clients of a GTM container workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options?: MethodOptions): GaxiosPromise<Schema$ListClientsResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options: MethodOptions | BodyResponseCallback<Schema$ListClientsResponse>, callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
        /**
         * Reverts changes to a GTM Client in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertClientResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertClientResponse>, callback: BodyResponseCallback<Schema$RevertClientResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, callback: BodyResponseCallback<Schema$RevertClientResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertClientResponse>): void;
        /**
         * Updates a GTM Client.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options?: MethodOptions): GaxiosPromise<Schema$Client>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options: MethodOptions | BodyResponseCallback<Schema$Client>, callback: BodyResponseCallback<Schema$Client>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, callback: BodyResponseCallback<Schema$Client>): void;
        update(callback: BodyResponseCallback<Schema$Client>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Client;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Delete extends StandardParameters {
        /**
         * GTM Client's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Get extends StandardParameters {
        /**
         * GTM Client's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the client in storage.
         */
        fingerprint?: string;
        /**
         * GTM Client's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the client in storage.
         */
        fingerprint?: string;
        /**
         * GTM Client's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Client;
    }
    export class Resource$Accounts$Containers$Workspaces$Folders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, callback: BodyResponseCallback<Schema$Folder>): void;
        create(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * Deletes a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * List all entities in a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options: StreamMethodOptions): GaxiosPromise<Readable>;
        entities(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options?: MethodOptions): GaxiosPromise<Schema$FolderEntities>;
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options: MethodOptions | BodyResponseCallback<Schema$FolderEntities>, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        entities(callback: BodyResponseCallback<Schema$FolderEntities>): void;
        /**
         * Gets a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, callback: BodyResponseCallback<Schema$Folder>): void;
        get(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * Lists all GTM Folders of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options?: MethodOptions): GaxiosPromise<Schema$ListFoldersResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options: MethodOptions | BodyResponseCallback<Schema$ListFoldersResponse>, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        /**
         * Moves entities to a GTM Folder. If {folder_id\} in the request path equals 0, this will instead move entities out of the folder they currently belong to.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options: StreamMethodOptions): GaxiosPromise<Readable>;
        move_entities_to_folder(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options?: MethodOptions): GaxiosPromise<void>;
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, callback: BodyResponseCallback<void>): void;
        move_entities_to_folder(callback: BodyResponseCallback<void>): void;
        /**
         * Reverts changes to a GTM Folder in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertFolderResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertFolderResponse>, callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
        /**
         * Updates a GTM Folder.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, callback: BodyResponseCallback<Schema$Folder>): void;
        update(callback: BodyResponseCallback<Schema$Folder>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Delete extends StandardParameters {
        /**
         * GTM Folder's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Entities extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Folder's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Get extends StandardParameters {
        /**
         * GTM Folder's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder extends StandardParameters {
        /**
         * GTM Folder's API relative path.
         */
        path?: string;
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
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the tag in storage.
         */
        fingerprint?: string;
        /**
         * GTM Folder's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the folder in storage.
         */
        fingerprint?: string;
        /**
         * GTM Folder's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export class Resource$Accounts$Containers$Workspaces$Gtag_config {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a Google tag config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Create, options?: MethodOptions): GaxiosPromise<Schema$GtagConfig>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Create, options: MethodOptions | BodyResponseCallback<Schema$GtagConfig>, callback: BodyResponseCallback<Schema$GtagConfig>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Create, callback: BodyResponseCallback<Schema$GtagConfig>): void;
        create(callback: BodyResponseCallback<Schema$GtagConfig>): void;
        /**
         * Deletes a Google tag config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Google tag config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Get, options?: MethodOptions): GaxiosPromise<Schema$GtagConfig>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Get, options: MethodOptions | BodyResponseCallback<Schema$GtagConfig>, callback: BodyResponseCallback<Schema$GtagConfig>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Get, callback: BodyResponseCallback<Schema$GtagConfig>): void;
        get(callback: BodyResponseCallback<Schema$GtagConfig>): void;
        /**
         * Lists all Google tag configs in a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$List, options?: MethodOptions): GaxiosPromise<Schema$ListGtagConfigResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$List, options: MethodOptions | BodyResponseCallback<Schema$ListGtagConfigResponse>, callback: BodyResponseCallback<Schema$ListGtagConfigResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$List, callback: BodyResponseCallback<Schema$ListGtagConfigResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListGtagConfigResponse>): void;
        /**
         * Updates a Google tag config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Update, options?: MethodOptions): GaxiosPromise<Schema$GtagConfig>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Update, options: MethodOptions | BodyResponseCallback<Schema$GtagConfig>, callback: BodyResponseCallback<Schema$GtagConfig>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Update, callback: BodyResponseCallback<Schema$GtagConfig>): void;
        update(callback: BodyResponseCallback<Schema$GtagConfig>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Create extends StandardParameters {
        /**
         * Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GtagConfig;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Delete extends StandardParameters {
        /**
         * Google tag config's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Get extends StandardParameters {
        /**
         * Google tag config's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Gtag_config$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Gtag_config$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the config in storage.
         */
        fingerprint?: string;
        /**
         * Google tag config's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GtagConfig;
    }
    export class Resource$Accounts$Containers$Workspaces$Tags {
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
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, callback: BodyResponseCallback<Schema$Tag>): void;
        create(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * Deletes a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, callback: BodyResponseCallback<Schema$Tag>): void;
        get(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * Lists all GTM Tags of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options?: MethodOptions): GaxiosPromise<Schema$ListTagsResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options: MethodOptions | BodyResponseCallback<Schema$ListTagsResponse>, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        /**
         * Reverts changes to a GTM Tag in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTagResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTagResponse>, callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
        /**
         * Updates a GTM Tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, callback: BodyResponseCallback<Schema$Tag>): void;
        update(callback: BodyResponseCallback<Schema$Tag>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Delete extends StandardParameters {
        /**
         * GTM Tag's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Get extends StandardParameters {
        /**
         * GTM Tag's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of thetag in storage.
         */
        fingerprint?: string;
        /**
         * GTM Tag's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the tag in storage.
         */
        fingerprint?: string;
        /**
         * GTM Tag's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    export class Resource$Accounts$Containers$Workspaces$Templates {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Custom Template.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        create(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        /**
         * Deletes a GTM Template.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Template.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        get(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        /**
         * Imports a GTM Custom Template from Gallery.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        import_from_gallery(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Import_from_gallery, options: StreamMethodOptions): GaxiosPromise<Readable>;
        import_from_gallery(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Import_from_gallery, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        import_from_gallery(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Import_from_gallery, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        import_from_gallery(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Import_from_gallery, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        import_from_gallery(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Import_from_gallery, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        import_from_gallery(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        /**
         * Lists all GTM Templates of a GTM container workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options?: MethodOptions): GaxiosPromise<Schema$ListTemplatesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options: MethodOptions | BodyResponseCallback<Schema$ListTemplatesResponse>, callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
        /**
         * Reverts changes to a GTM Template in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTemplateResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTemplateResponse>, callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
        /**
         * Updates a GTM Template.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        update(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CustomTemplate;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Delete extends StandardParameters {
        /**
         * GTM Custom Template's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Get extends StandardParameters {
        /**
         * GTM Custom Template's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Import_from_gallery extends StandardParameters {
        /**
         * Must be set to true to allow Gallery template to be imported into the workspace. If this bit is false, the import operation will fail.
         */
        acknowledgePermissions?: boolean;
        /**
         * Owner of the Gallery template to import
         */
        galleryOwner?: string;
        /**
         * Repository of the Gallery template to import
         */
        galleryRepository?: string;
        /**
         * SHA version of the Gallery template to import. Defaulted to the latest SHA version if not provided.
         */
        gallerySha?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the template in storage.
         */
        fingerprint?: string;
        /**
         * GTM Custom Template's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the templates in storage.
         */
        fingerprint?: string;
        /**
         * GTM Custom Template's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CustomTemplate;
    }
    export class Resource$Accounts$Containers$Workspaces$Transformations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Transformation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Transformations$Create, options?: MethodOptions): GaxiosPromise<Schema$Transformation>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Create, options: MethodOptions | BodyResponseCallback<Schema$Transformation>, callback: BodyResponseCallback<Schema$Transformation>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Create, callback: BodyResponseCallback<Schema$Transformation>): void;
        create(callback: BodyResponseCallback<Schema$Transformation>): void;
        /**
         * Deletes a GTM Transformation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Transformations$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Transformation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Transformations$Get, options?: MethodOptions): GaxiosPromise<Schema$Transformation>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Get, options: MethodOptions | BodyResponseCallback<Schema$Transformation>, callback: BodyResponseCallback<Schema$Transformation>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Get, callback: BodyResponseCallback<Schema$Transformation>): void;
        get(callback: BodyResponseCallback<Schema$Transformation>): void;
        /**
         * Lists all GTM Transformations of a GTM container workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Transformations$List, options?: MethodOptions): GaxiosPromise<Schema$ListTransformationsResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$List, options: MethodOptions | BodyResponseCallback<Schema$ListTransformationsResponse>, callback: BodyResponseCallback<Schema$ListTransformationsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$List, callback: BodyResponseCallback<Schema$ListTransformationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTransformationsResponse>): void;
        /**
         * Reverts changes to a GTM Transformation in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Transformations$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTransformationResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTransformationResponse>, callback: BodyResponseCallback<Schema$RevertTransformationResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Revert, callback: BodyResponseCallback<Schema$RevertTransformationResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTransformationResponse>): void;
        /**
         * Updates a GTM Transformation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Transformations$Update, options?: MethodOptions): GaxiosPromise<Schema$Transformation>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Update, options: MethodOptions | BodyResponseCallback<Schema$Transformation>, callback: BodyResponseCallback<Schema$Transformation>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Transformations$Update, callback: BodyResponseCallback<Schema$Transformation>): void;
        update(callback: BodyResponseCallback<Schema$Transformation>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Transformations$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Transformation;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Transformations$Delete extends StandardParameters {
        /**
         * GTM Transformation's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Transformations$Get extends StandardParameters {
        /**
         * GTM Transformation's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Transformations$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Transformations$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the transformation in storage.
         */
        fingerprint?: string;
        /**
         * GTM Transformation's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Transformations$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the transformation in storage.
         */
        fingerprint?: string;
        /**
         * GTM Transformation's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Transformation;
    }
    export class Resource$Accounts$Containers$Workspaces$Triggers {
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
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * Deletes a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * Lists all GTM Triggers of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options?: MethodOptions): GaxiosPromise<Schema$ListTriggersResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options: MethodOptions | BodyResponseCallback<Schema$ListTriggersResponse>, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        /**
         * Reverts changes to a GTM Trigger in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTriggerResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTriggerResponse>, callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
        /**
         * Updates a GTM Trigger.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(callback: BodyResponseCallback<Schema$Trigger>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete extends StandardParameters {
        /**
         * GTM Trigger's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Get extends StandardParameters {
        /**
         * GTM Trigger's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the trigger in storage.
         */
        fingerprint?: string;
        /**
         * GTM Trigger's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the trigger in storage.
         */
        fingerprint?: string;
        /**
         * GTM Trigger's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    export class Resource$Accounts$Containers$Workspaces$Variables {
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
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, callback: BodyResponseCallback<Schema$Variable>): void;
        create(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * Deletes a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, callback: BodyResponseCallback<Schema$Variable>): void;
        get(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * Lists all GTM Variables of a Container.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options?: MethodOptions): GaxiosPromise<Schema$ListVariablesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options: MethodOptions | BodyResponseCallback<Schema$ListVariablesResponse>, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        /**
         * Reverts changes to a GTM Variable in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertVariableResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertVariableResponse>, callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
        /**
         * Updates a GTM Variable.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, callback: BodyResponseCallback<Schema$Variable>): void;
        update(callback: BodyResponseCallback<Schema$Variable>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Delete extends StandardParameters {
        /**
         * GTM Variable's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Get extends StandardParameters {
        /**
         * GTM Variable's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the variable in storage.
         */
        fingerprint?: string;
        /**
         * GTM Variable's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the variable in storage.
         */
        fingerprint?: string;
        /**
         * GTM Variable's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    export class Resource$Accounts$Containers$Workspaces$Zones {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Zone.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options?: MethodOptions): GaxiosPromise<Schema$Zone>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options: MethodOptions | BodyResponseCallback<Schema$Zone>, callback: BodyResponseCallback<Schema$Zone>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, callback: BodyResponseCallback<Schema$Zone>): void;
        create(callback: BodyResponseCallback<Schema$Zone>): void;
        /**
         * Deletes a GTM Zone.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Zone.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options?: MethodOptions): GaxiosPromise<Schema$Zone>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options: MethodOptions | BodyResponseCallback<Schema$Zone>, callback: BodyResponseCallback<Schema$Zone>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, callback: BodyResponseCallback<Schema$Zone>): void;
        get(callback: BodyResponseCallback<Schema$Zone>): void;
        /**
         * Lists all GTM Zones of a GTM container workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options?: MethodOptions): GaxiosPromise<Schema$ListZonesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options: MethodOptions | BodyResponseCallback<Schema$ListZonesResponse>, callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
        /**
         * Reverts changes to a GTM Zone in a GTM Workspace.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertZoneResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertZoneResponse>, callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
        /**
         * Updates a GTM Zone.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options?: MethodOptions): GaxiosPromise<Schema$Zone>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options: MethodOptions | BodyResponseCallback<Schema$Zone>, callback: BodyResponseCallback<Schema$Zone>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, callback: BodyResponseCallback<Schema$Zone>): void;
        update(callback: BodyResponseCallback<Schema$Zone>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Zone;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Delete extends StandardParameters {
        /**
         * GTM Zone's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Get extends StandardParameters {
        /**
         * GTM Zone's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the zone in storage.
         */
        fingerprint?: string;
        /**
         * GTM Zone's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the zone in storage.
         */
        fingerprint?: string;
        /**
         * GTM Zone's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Zone;
    }
    export class Resource$Accounts$User_permissions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a user's Account & Container access.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$User_permissions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$User_permissions$Create, options?: MethodOptions): GaxiosPromise<Schema$UserPermission>;
        create(params: Params$Resource$Accounts$User_permissions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$User_permissions$Create, options: MethodOptions | BodyResponseCallback<Schema$UserPermission>, callback: BodyResponseCallback<Schema$UserPermission>): void;
        create(params: Params$Resource$Accounts$User_permissions$Create, callback: BodyResponseCallback<Schema$UserPermission>): void;
        create(callback: BodyResponseCallback<Schema$UserPermission>): void;
        /**
         * Removes a user from the account, revoking access to it and all of its containers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$User_permissions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$User_permissions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$User_permissions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$User_permissions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$User_permissions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a user's Account & Container access.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$User_permissions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$User_permissions$Get, options?: MethodOptions): GaxiosPromise<Schema$UserPermission>;
        get(params: Params$Resource$Accounts$User_permissions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$User_permissions$Get, options: MethodOptions | BodyResponseCallback<Schema$UserPermission>, callback: BodyResponseCallback<Schema$UserPermission>): void;
        get(params: Params$Resource$Accounts$User_permissions$Get, callback: BodyResponseCallback<Schema$UserPermission>): void;
        get(callback: BodyResponseCallback<Schema$UserPermission>): void;
        /**
         * List all users that have access to the account along with Account and Container user access granted to each of them.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$User_permissions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$User_permissions$List, options?: MethodOptions): GaxiosPromise<Schema$ListUserPermissionsResponse>;
        list(params: Params$Resource$Accounts$User_permissions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$User_permissions$List, options: MethodOptions | BodyResponseCallback<Schema$ListUserPermissionsResponse>, callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>): void;
        list(params: Params$Resource$Accounts$User_permissions$List, callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>): void;
        /**
         * Updates a user's Account & Container access.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$User_permissions$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$User_permissions$Update, options?: MethodOptions): GaxiosPromise<Schema$UserPermission>;
        update(params: Params$Resource$Accounts$User_permissions$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$User_permissions$Update, options: MethodOptions | BodyResponseCallback<Schema$UserPermission>, callback: BodyResponseCallback<Schema$UserPermission>): void;
        update(params: Params$Resource$Accounts$User_permissions$Update, callback: BodyResponseCallback<Schema$UserPermission>): void;
        update(callback: BodyResponseCallback<Schema$UserPermission>): void;
    }
    export interface Params$Resource$Accounts$User_permissions$Create extends StandardParameters {
        /**
         * GTM Account's API relative path.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserPermission;
    }
    export interface Params$Resource$Accounts$User_permissions$Delete extends StandardParameters {
        /**
         * GTM UserPermission's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$User_permissions$Get extends StandardParameters {
        /**
         * GTM UserPermission's API relative path.
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$User_permissions$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Account's API relative path.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$User_permissions$Update extends StandardParameters {
        /**
         * GTM UserPermission's API relative path.
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserPermission;
    }
    export {};
}
