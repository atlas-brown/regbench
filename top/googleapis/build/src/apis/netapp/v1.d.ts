/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace netapp_v1 {
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
     * NetApp API
     *
     * Google Cloud NetApp Volumes is a fully-managed, cloud-based data storage service that provides advanced data management capabilities and highly scalable performance with global availability.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const netapp = google.netapp('v1');
     * ```
     */
    export class Netapp {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * ActiveDirectory is the public representation of the active directory config.
     */
    export interface Schema$ActiveDirectory {
        /**
         * Optional. Users to be added to the Built-in Admininstrators group.
         */
        administrators?: string[] | null;
        /**
         * If enabled, AES encryption will be enabled for SMB communication.
         */
        aesEncryption?: boolean | null;
        /**
         * Optional. Users to be added to the Built-in Backup Operator active directory group.
         */
        backupOperators?: string[] | null;
        /**
         * Output only. Create time of the active directory.
         */
        createTime?: string | null;
        /**
         * Description of the active directory.
         */
        description?: string | null;
        /**
         * Required. Comma separated list of DNS server IP addresses for the Active Directory domain.
         */
        dns?: string | null;
        /**
         * Required. Name of the Active Directory domain
         */
        domain?: string | null;
        /**
         * If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
         */
        encryptDcConnections?: boolean | null;
        /**
         * Name of the active directory machine. This optional parameter is used only while creating kerberos volume
         */
        kdcHostname?: string | null;
        /**
         * KDC server IP address for the active directory machine.
         */
        kdcIp?: string | null;
        /**
         * Labels for the active directory.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Specifies whether or not the LDAP traffic needs to be signed.
         */
        ldapSigning?: boolean | null;
        /**
         * Identifier. The resource name of the active directory. Format: `projects/{project_number\}/locations/{location_id\}/activeDirectories/{active_directory_id\}`.
         */
        name?: string | null;
        /**
         * Required. NetBIOSPrefix is used as a prefix for SMB server name.
         */
        netBiosPrefix?: string | null;
        /**
         * If enabled, will allow access to local users and LDAP users. If access is needed for only LDAP users, it has to be disabled.
         */
        nfsUsersWithLdap?: boolean | null;
        /**
         * The Organizational Unit (OU) within the Windows Active Directory the user belongs to.
         */
        organizationalUnit?: string | null;
        /**
         * Required. Password of the Active Directory domain administrator.
         */
        password?: string | null;
        /**
         * Optional. Domain users to be given the SeSecurityPrivilege.
         */
        securityOperators?: string[] | null;
        /**
         * The Active Directory site the service will limit Domain Controller discovery too.
         */
        site?: string | null;
        /**
         * Output only. The state of the AD.
         */
        state?: string | null;
        /**
         * Output only. The state details of the Active Directory.
         */
        stateDetails?: string | null;
        /**
         * Required. Username of the Active Directory domain administrator.
         */
        username?: string | null;
    }
    /**
     * A NetApp Backup.
     */
    export interface Schema$Backup {
        /**
         * Output only. Region in which backup is stored. Format: `projects/{project_id\}/locations/{location\}`
         */
        backupRegion?: string | null;
        /**
         * Output only. Type of backup, manually created or created by a backup policy.
         */
        backupType?: string | null;
        /**
         * Output only. Total size of all backups in a chain in bytes = baseline backup size + sum(incremental backup size)
         */
        chainStorageBytes?: string | null;
        /**
         * Output only. The time when the backup was created.
         */
        createTime?: string | null;
        /**
         * A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
         */
        description?: string | null;
        /**
         * Resource labels to represent user provided metadata.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Identifier. The resource name of the backup. Format: `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}/backups/{backup_id\}`.
         */
        name?: string | null;
        /**
         * Output only. Reserved for future use
         */
        satisfiesPzi?: boolean | null;
        /**
         * Output only. Reserved for future use
         */
        satisfiesPzs?: boolean | null;
        /**
         * If specified, backup will be created from the given snapshot. If not specified, there will be a new snapshot taken to initiate the backup creation. Format: `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/snapshots/{snapshot_id\}`
         */
        sourceSnapshot?: string | null;
        /**
         * Volume full name of this backup belongs to. Format: `projects/{projects_id\}/locations/{location\}/volumes/{volume_id\}`
         */
        sourceVolume?: string | null;
        /**
         * Output only. The backup state.
         */
        state?: string | null;
        /**
         * Output only. Region of the volume from which the backup was created. Format: `projects/{project_id\}/locations/{location\}`
         */
        volumeRegion?: string | null;
        /**
         * Output only. Size of the file system when the backup was created. When creating a new volume from the backup, the volume capacity will have to be at least as big.
         */
        volumeUsageBytes?: string | null;
    }
    /**
     * BackupConfig contains backup related config on a volume.
     */
    export interface Schema$BackupConfig {
        /**
         * Output only. Total size of all backups in a chain in bytes = baseline backup size + sum(incremental backup size).
         */
        backupChainBytes?: string | null;
        /**
         * Optional. When specified, schedule backups will be created based on the policy configuration.
         */
        backupPolicies?: string[] | null;
        /**
         * Optional. Name of backup vault. Format: projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}
         */
        backupVault?: string | null;
        /**
         * Optional. When set to true, scheduled backup is enabled on the volume. This field should be nil when there's no backup policy attached.
         */
        scheduledBackupEnabled?: boolean | null;
    }
    /**
     * Backup Policy.
     */
    export interface Schema$BackupPolicy {
        /**
         * Output only. The total number of volumes assigned by this backup policy.
         */
        assignedVolumeCount?: number | null;
        /**
         * Output only. The time when the backup policy was created.
         */
        createTime?: string | null;
        /**
         * Number of daily backups to keep. Note that the minimum daily backup limit is 2.
         */
        dailyBackupLimit?: number | null;
        /**
         * Description of the backup policy.
         */
        description?: string | null;
        /**
         * If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this policy attached and enforced on volume level. If not specified, default is true.
         */
        enabled?: boolean | null;
        /**
         * Resource labels to represent user provided metadata.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
         */
        monthlyBackupLimit?: number | null;
        /**
         * Identifier. The resource name of the backup policy. Format: `projects/{project_id\}/locations/{location\}/backupPolicies/{backup_policy_id\}`.
         */
        name?: string | null;
        /**
         * Output only. The backup policy state.
         */
        state?: string | null;
        /**
         * Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
         */
        weeklyBackupLimit?: number | null;
    }
    /**
     * A NetApp BackupVault.
     */
    export interface Schema$BackupVault {
        /**
         * Optional. Region where the backups are stored. Format: `projects/{project_id\}/locations/{location\}`
         */
        backupRegion?: string | null;
        /**
         * Optional. Type of backup vault to be created. Default is IN_REGION.
         */
        backupVaultType?: string | null;
        /**
         * Output only. Create time of the backup vault.
         */
        createTime?: string | null;
        /**
         * Description of the backup vault.
         */
        description?: string | null;
        /**
         * Output only. Name of the Backup vault created in backup region. Format: `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`
         */
        destinationBackupVault?: string | null;
        /**
         * Resource labels to represent user provided metadata.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Identifier. The resource name of the backup vault. Format: `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`.
         */
        name?: string | null;
        /**
         * Output only. Name of the Backup vault created in source region. Format: `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`
         */
        sourceBackupVault?: string | null;
        /**
         * Output only. Region in which the backup vault is created. Format: `projects/{project_id\}/locations/{location\}`
         */
        sourceRegion?: string | null;
        /**
         * Output only. The backup vault state.
         */
        state?: string | null;
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    export interface Schema$CancelOperationRequest {
    }
    /**
     * Make a snapshot every day e.g. at 04:00, 05:20, 23:50
     */
    export interface Schema$DailySchedule {
        /**
         * Set the hour to start the snapshot (0-23), defaults to midnight (0).
         */
        hour?: number | null;
        /**
         * Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0).
         */
        minute?: number | null;
        /**
         * The maximum number of Snapshots to keep for the hourly schedule
         */
        snapshotsToKeep?: number | null;
    }
    /**
     * DestinationVolumeParameters specify input parameters used for creating destination volume.
     */
    export interface Schema$DestinationVolumeParameters {
        /**
         * Description for the destination volume.
         */
        description?: string | null;
        /**
         * Destination volume's share name. If not specified, source volume's share name will be used.
         */
        shareName?: string | null;
        /**
         * Required. Existing destination StoragePool name.
         */
        storagePool?: string | null;
        /**
         * Optional. Tiering policy for the volume.
         */
        tieringPolicy?: Schema$TieringPolicy;
        /**
         * Desired destination volume resource id. If not specified, source volume's resource id will be used. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
         */
        volumeId?: string | null;
    }
    /**
     * EncryptVolumesRequest specifies the KMS config to encrypt existing volumes.
     */
    export interface Schema$EncryptVolumesRequest {
    }
    /**
     * EstablishPeeringRequest establishes cluster and svm peerings between the source and the destination replications.
     */
    export interface Schema$EstablishPeeringRequest {
        /**
         * Required. Name of the user's local source cluster to be peered with the destination cluster.
         */
        peerClusterName?: string | null;
        /**
         * Optional. List of IPv4 ip addresses to be used for peering.
         */
        peerIpAddresses?: string[] | null;
        /**
         * Required. Name of the user's local source vserver svm to be peered with the destination vserver svm.
         */
        peerSvmName?: string | null;
        /**
         * Required. Name of the user's local source volume to be peered with the destination volume.
         */
        peerVolumeName?: string | null;
    }
    /**
     * Defines the export policy for the volume.
     */
    export interface Schema$ExportPolicy {
        /**
         * Required. List of export policy rules
         */
        rules?: Schema$SimpleExportPolicyRule[];
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$GoogleProtobufEmpty {
    }
    /**
     * Make a snapshot every hour e.g. at 04:00, 05:00, 06:00.
     */
    export interface Schema$HourlySchedule {
        /**
         * Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0).
         */
        minute?: number | null;
        /**
         * The maximum number of Snapshots to keep for the hourly schedule
         */
        snapshotsToKeep?: number | null;
    }
    /**
     * HybridPeeringDetails contains details about the hybrid peering.
     */
    export interface Schema$HybridPeeringDetails {
        /**
         * Optional. Copy-paste-able commands to be used on user's ONTAP to accept peering requests.
         */
        command?: string | null;
        /**
         * Optional. Expiration time for the peering command to be executed on user's ONTAP.
         */
        commandExpiryTime?: string | null;
        /**
         * Optional. Temporary passphrase generated to accept cluster peering command.
         */
        passphrase?: string | null;
        /**
         * Optional. Name of the user's local source cluster to be peered with the destination cluster.
         */
        peerClusterName?: string | null;
        /**
         * Optional. Name of the user's local source vserver svm to be peered with the destination vserver svm.
         */
        peerSvmName?: string | null;
        /**
         * Optional. Name of the user's local source volume to be peered with the destination volume.
         */
        peerVolumeName?: string | null;
        /**
         * Optional. IP address of the subnet.
         */
        subnetIp?: string | null;
    }
    /**
     * The Hybrid Replication parameters for the volume.
     */
    export interface Schema$HybridReplicationParameters {
        /**
         * Optional. Name of source cluster location associated with the Hybrid replication. This is a free-form field for the display purpose only.
         */
        clusterLocation?: string | null;
        /**
         * Optional. Description of the replication.
         */
        description?: string | null;
        /**
         * Optional. Labels to be added to the replication as the key value pairs.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Required. Name of the user's local source cluster to be peered with the destination cluster.
         */
        peerClusterName?: string | null;
        /**
         * Required. List of node ip addresses to be peered with.
         */
        peerIpAddresses?: string[] | null;
        /**
         * Required. Name of the user's local source vserver svm to be peered with the destination vserver svm.
         */
        peerSvmName?: string | null;
        /**
         * Required. Name of the user's local source volume to be peered with the destination volume.
         */
        peerVolumeName?: string | null;
        /**
         * Required. Desired name for the replication of this volume.
         */
        replication?: string | null;
    }
    /**
     * KmsConfig is the customer managed encryption key(CMEK) configuration.
     */
    export interface Schema$KmsConfig {
        /**
         * Output only. Create time of the KmsConfig.
         */
        createTime?: string | null;
        /**
         * Required. Customer managed crypto key resource full name. Format: projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/{key\}.
         */
        cryptoKeyName?: string | null;
        /**
         * Description of the KmsConfig.
         */
        description?: string | null;
        /**
         * Output only. Instructions to provide the access to the customer provided encryption key.
         */
        instructions?: string | null;
        /**
         * Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Identifier. Name of the KmsConfig.
         */
        name?: string | null;
        /**
         * Output only. The Service account which will have access to the customer provided encryption key.
         */
        serviceAccount?: string | null;
        /**
         * Output only. State of the KmsConfig.
         */
        state?: string | null;
        /**
         * Output only. State details of the KmsConfig.
         */
        stateDetails?: string | null;
    }
    /**
     * ListActiveDirectoriesResponse contains all the active directories requested.
     */
    export interface Schema$ListActiveDirectoriesResponse {
        /**
         * The list of active directories.
         */
        activeDirectories?: Schema$ActiveDirectory[];
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListBackupPoliciesResponse contains all the backup policies requested.
     */
    export interface Schema$ListBackupPoliciesResponse {
        /**
         * The list of backup policies.
         */
        backupPolicies?: Schema$BackupPolicy[];
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListBackupsResponse is the result of ListBackupsRequest.
     */
    export interface Schema$ListBackupsResponse {
        /**
         * A list of backups in the project.
         */
        backups?: Schema$Backup[];
        /**
         * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListBackupVaultsResponse is the result of ListBackupVaultsRequest.
     */
    export interface Schema$ListBackupVaultsResponse {
        /**
         * A list of backupVaults in the project for the specified location.
         */
        backupVaults?: Schema$BackupVault[];
        /**
         * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListKmsConfigsResponse is the response to a ListKmsConfigsRequest.
     */
    export interface Schema$ListKmsConfigsResponse {
        /**
         * The list of KmsConfigs
         */
        kmsConfigs?: Schema$KmsConfig[];
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    export interface Schema$ListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$Location[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    export interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * ListQuotaRulesResponse is the response to a ListQuotaRulesRequest.
     */
    export interface Schema$ListQuotaRulesResponse {
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * List of quota rules
         */
        quotaRules?: Schema$QuotaRule[];
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListReplicationsResponse is the result of ListReplicationsRequest.
     */
    export interface Schema$ListReplicationsResponse {
        /**
         * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * A list of replications in the project for the specified volume.
         */
        replications?: Schema$Replication[];
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListSnapshotsResponse is the result of ListSnapshotsRequest.
     */
    export interface Schema$ListSnapshotsResponse {
        /**
         * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * A list of snapshots in the project for the specified volume.
         */
        snapshots?: Schema$Snapshot[];
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * ListStoragePoolsResponse is the response to a ListStoragePoolsRequest.
     */
    export interface Schema$ListStoragePoolsResponse {
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * The list of StoragePools
         */
        storagePools?: Schema$StoragePool[];
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
    }
    /**
     * Message for response to listing Volumes
     */
    export interface Schema$ListVolumesResponse {
        /**
         * A token identifying a page of results the server should return.
         */
        nextPageToken?: string | null;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[] | null;
        /**
         * The list of Volume
         */
        volumes?: Schema$Volume[];
    }
    /**
     * A resource that represents a Google Cloud location.
     */
    export interface Schema$Location {
        /**
         * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
         */
        displayName?: string | null;
        /**
         * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The canonical id for this location. For example: `"us-east1"`.
         */
        locationId?: string | null;
        /**
         * Service-specific metadata. For example the available capacity at the given location.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
         */
        name?: string | null;
    }
    /**
     * Metadata for a given google.cloud.location.Location.
     */
    export interface Schema$LocationMetadata {
        /**
         * Output only. Supported flex performance in a location.
         */
        supportedFlexPerformance?: string[] | null;
        /**
         * Output only. Supported service levels in a location.
         */
        supportedServiceLevels?: string[] | null;
    }
    /**
     * Make a snapshot once a month e.g. at 2nd 04:00, 7th 05:20, 24th 23:50
     */
    export interface Schema$MonthlySchedule {
        /**
         * Set the day or days of the month to make a snapshot (1-31). Accepts a comma separated number of days. Defaults to '1'.
         */
        daysOfMonth?: string | null;
        /**
         * Set the hour to start the snapshot (0-23), defaults to midnight (0).
         */
        hour?: number | null;
        /**
         * Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0).
         */
        minute?: number | null;
        /**
         * The maximum number of Snapshots to keep for the hourly schedule
         */
        snapshotsToKeep?: number | null;
    }
    /**
     * View only mount options for a volume.
     */
    export interface Schema$MountOption {
        /**
         * Export string
         */
        export?: string | null;
        /**
         * Full export string
         */
        exportFull?: string | null;
        /**
         * Instructions for mounting
         */
        instructions?: string | null;
        /**
         * Output only. IP Address.
         */
        ipAddress?: string | null;
        /**
         * Protocol to mount with.
         */
        protocol?: string | null;
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
         */
        name?: string | null;
        /**
         * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
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
         * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been canceled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
     * QuotaRule specifies the maximum disk space a user or group can use within a volume. They can be used for creating default and individual quota rules.
     */
    export interface Schema$QuotaRule {
        /**
         * Output only. Create time of the quota rule
         */
        createTime?: string | null;
        /**
         * Optional. Description of the quota rule
         */
        description?: string | null;
        /**
         * Required. The maximum allowed disk space in MiB.
         */
        diskLimitMib?: number | null;
        /**
         * Optional. Labels of the quota rule
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Identifier. The resource name of the quota rule. Format: `projects/{project_number\}/locations/{location_id\}/volumes/volumes/{volume_id\}/quotaRules/{quota_rule_id\}`.
         */
        name?: string | null;
        /**
         * Output only. State of the quota rule
         */
        state?: string | null;
        /**
         * Output only. State details of the quota rule
         */
        stateDetails?: string | null;
        /**
         * Optional. The quota rule applies to the specified user or group, identified by a Unix UID/GID, Windows SID, or null for default.
         */
        target?: string | null;
        /**
         * Required. The type of quota rule.
         */
        type?: string | null;
    }
    /**
     * Replication is a nested resource under Volume, that describes a cross-region replication relationship between 2 volumes in different regions.
     */
    export interface Schema$Replication {
        /**
         * Optional. Location of the user cluster.
         */
        clusterLocation?: string | null;
        /**
         * Output only. Replication create time.
         */
        createTime?: string | null;
        /**
         * A description about this replication relationship.
         */
        description?: string | null;
        /**
         * Output only. Full name of destination volume resource. Example : "projects/{project\}/locations/{location\}/volumes/{volume_id\}"
         */
        destinationVolume?: string | null;
        /**
         * Required. Input only. Destination volume parameters
         */
        destinationVolumeParameters?: Schema$DestinationVolumeParameters;
        /**
         * Output only. Condition of the relationship. Can be one of the following: - true: The replication relationship is healthy. It has not missed the most recent scheduled transfer. - false: The replication relationship is not healthy. It has missed the most recent scheduled transfer.
         */
        healthy?: boolean | null;
        /**
         * Output only. Hybrid peering details.
         */
        hybridPeeringDetails?: Schema$HybridPeeringDetails;
        /**
         * Output only. Type of the hybrid replication.
         */
        hybridReplicationType?: string | null;
        /**
         * Resource labels to represent user provided metadata.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. Indicates the state of mirroring.
         */
        mirrorState?: string | null;
        /**
         * Identifier. The resource name of the Replication. Format: `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}`.
         */
        name?: string | null;
        /**
         * Required. Indicates the schedule for replication.
         */
        replicationSchedule?: string | null;
        /**
         * Output only. Indicates whether this points to source or destination.
         */
        role?: string | null;
        /**
         * Output only. Full name of source volume resource. Example : "projects/{project\}/locations/{location\}/volumes/{volume_id\}"
         */
        sourceVolume?: string | null;
        /**
         * Output only. State of the replication.
         */
        state?: string | null;
        /**
         * Output only. State details of the replication.
         */
        stateDetails?: string | null;
        /**
         * Output only. Replication transfer statistics.
         */
        transferStats?: Schema$TransferStats;
    }
    /**
     * The RestoreParameters if volume is created from a snapshot or backup.
     */
    export interface Schema$RestoreParameters {
        /**
         * Full name of the backup resource. Format: projects/{project\}/locations/{location\}/backupVaults/{backup_vault_id\}/backups/{backup_id\}
         */
        sourceBackup?: string | null;
        /**
         * Full name of the snapshot resource. Format: projects/{project\}/locations/{location\}/volumes/{volume\}/snapshots/{snapshot\}
         */
        sourceSnapshot?: string | null;
    }
    /**
     * ResumeReplicationRequest resumes a stopped replication.
     */
    export interface Schema$ResumeReplicationRequest {
    }
    /**
     * ReverseReplicationDirectionRequest reverses direction of replication. Source becomes destination and destination becomes source.
     */
    export interface Schema$ReverseReplicationDirectionRequest {
    }
    /**
     * RevertVolumeRequest reverts the given volume to the specified snapshot.
     */
    export interface Schema$RevertVolumeRequest {
        /**
         * Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id\} of the fully qualified name like projects/{project_id\}/locations/{location_id\}/volumes/{volume_id\}/snapshots/{snapshot_id\}
         */
        snapshotId?: string | null;
    }
    /**
     * An export policy rule describing various export options.
     */
    export interface Schema$SimpleExportPolicyRule {
        /**
         * Access type (ReadWrite, ReadOnly, None)
         */
        accessType?: string | null;
        /**
         * Comma separated list of allowed clients IP addresses
         */
        allowedClients?: string | null;
        /**
         * Whether Unix root access will be granted.
         */
        hasRootAccess?: string | null;
        /**
         * If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.
         */
        kerberos5iReadOnly?: boolean | null;
        /**
         * If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value be ignored if this is enabled.
         */
        kerberos5iReadWrite?: boolean | null;
        /**
         * If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.
         */
        kerberos5pReadOnly?: boolean | null;
        /**
         * If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value be ignored if this is enabled.
         */
        kerberos5pReadWrite?: boolean | null;
        /**
         * If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.
         */
        kerberos5ReadOnly?: boolean | null;
        /**
         * If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value be ignored if this is enabled.
         */
        kerberos5ReadWrite?: boolean | null;
        /**
         * NFS V3 protocol.
         */
        nfsv3?: boolean | null;
        /**
         * NFS V4 protocol.
         */
        nfsv4?: boolean | null;
    }
    /**
     * Snapshot is a point-in-time version of a Volume's content.
     */
    export interface Schema$Snapshot {
        /**
         * Output only. The time when the snapshot was created.
         */
        createTime?: string | null;
        /**
         * A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.
         */
        description?: string | null;
        /**
         * Resource labels to represent user provided metadata.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Identifier. The resource name of the snapshot. Format: `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/snapshots/{snapshot_id\}`.
         */
        name?: string | null;
        /**
         * Output only. The snapshot state.
         */
        state?: string | null;
        /**
         * Output only. State details of the storage pool
         */
        stateDetails?: string | null;
        /**
         * Output only. Current storage usage for the snapshot in bytes.
         */
        usedBytes?: number | null;
    }
    /**
     * Snapshot Policy for a volume.
     */
    export interface Schema$SnapshotPolicy {
        /**
         * Daily schedule policy.
         */
        dailySchedule?: Schema$DailySchedule;
        /**
         * If enabled, make snapshots automatically according to the schedules. Default is false.
         */
        enabled?: boolean | null;
        /**
         * Hourly schedule policy.
         */
        hourlySchedule?: Schema$HourlySchedule;
        /**
         * Monthly schedule policy.
         */
        monthlySchedule?: Schema$MonthlySchedule;
        /**
         * Weekly schedule policy.
         */
        weeklySchedule?: Schema$WeeklySchedule;
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details. There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    /**
     * StopReplicationRequest stops a replication until resumed.
     */
    export interface Schema$StopReplicationRequest {
        /**
         * Indicates whether to stop replication forcefully while data transfer is in progress. Warning! if force is true, this will abort any current transfers and can lead to data loss due to partial transfer. If force is false, stop replication will fail while data transfer is in progress and you will need to retry later.
         */
        force?: boolean | null;
    }
    /**
     * StoragePool is a container for volumes with a service level and capacity. Volumes can be created in a pool of sufficient available capacity. StoragePool capacity is what you are billed for.
     */
    export interface Schema$StoragePool {
        /**
         * Optional. Specifies the Active Directory to be used for creating a SMB volume.
         */
        activeDirectory?: string | null;
        /**
         * Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.
         */
        allowAutoTiering?: boolean | null;
        /**
         * Required. Capacity in GIB of the pool
         */
        capacityGib?: string | null;
        /**
         * Output only. Create time of the storage pool
         */
        createTime?: string | null;
        /**
         * Optional. Description of the storage pool
         */
        description?: string | null;
        /**
         * Output only. Specifies the current pool encryption key source.
         */
        encryptionType?: string | null;
        /**
         * Deprecated. Used to allow SO pool to access AD or DNS server from other regions.
         */
        globalAccessAllowed?: boolean | null;
        /**
         * Optional. Specifies the KMS config to be used for volume encryption.
         */
        kmsConfig?: string | null;
        /**
         * Optional. Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Optional. Flag indicating if the pool is NFS LDAP enabled or not.
         */
        ldapEnabled?: boolean | null;
        /**
         * Identifier. Name of the storage pool
         */
        name?: string | null;
        /**
         * Required. VPC Network name. Format: projects/{project\}/global/networks/{network\}
         */
        network?: string | null;
        /**
         * Optional. This field is not implemented. The values provided in this field are ignored.
         */
        psaRange?: string | null;
        /**
         * Optional. Specifies the replica zone for regional storagePool.
         */
        replicaZone?: string | null;
        /**
         * Output only. Reserved for future use
         */
        satisfiesPzi?: boolean | null;
        /**
         * Output only. Reserved for future use
         */
        satisfiesPzs?: boolean | null;
        /**
         * Required. Service level of the storage pool
         */
        serviceLevel?: string | null;
        /**
         * Output only. State of the storage pool
         */
        state?: string | null;
        /**
         * Output only. State details of the storage pool
         */
        stateDetails?: string | null;
        /**
         * Output only. Allocated size of all volumes in GIB in the storage pool
         */
        volumeCapacityGib?: string | null;
        /**
         * Output only. Volume count of the storage pool
         */
        volumeCount?: number | null;
        /**
         * Optional. Specifies the active zone for regional storagePool.
         */
        zone?: string | null;
    }
    /**
     * SwitchActiveReplicaZoneRequest switch the active/replica zone for a regional storagePool.
     */
    export interface Schema$SwitchActiveReplicaZoneRequest {
    }
    /**
     * SyncReplicationRequest syncs the replication from source to destination.
     */
    export interface Schema$SyncReplicationRequest {
    }
    /**
     * Defines tiering policy for the volume.
     */
    export interface Schema$TieringPolicy {
        /**
         * Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183. Default is 31.
         */
        coolingThresholdDays?: number | null;
        /**
         * Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED.
         */
        tierAction?: string | null;
    }
    /**
     * TransferStats reports all statistics related to replication transfer.
     */
    export interface Schema$TransferStats {
        /**
         * Lag duration indicates the duration by which Destination region volume content lags behind the primary region volume content.
         */
        lagDuration?: string | null;
        /**
         * Last transfer size in bytes.
         */
        lastTransferBytes?: string | null;
        /**
         * Time taken during last transfer.
         */
        lastTransferDuration?: string | null;
        /**
         * Time when last transfer completed.
         */
        lastTransferEndTime?: string | null;
        /**
         * A message describing the cause of the last transfer failure.
         */
        lastTransferError?: string | null;
        /**
         * Cumulative time taken across all transfers for the replication relationship.
         */
        totalTransferDuration?: string | null;
        /**
         * Cumulative bytes trasferred so far for the replication relatinonship.
         */
        transferBytes?: string | null;
        /**
         * Time when progress was updated last.
         */
        updateTime?: string | null;
    }
    /**
     * ValidateDirectoryServiceRequest validates the directory service policy attached to the storage pool.
     */
    export interface Schema$ValidateDirectoryServiceRequest {
        /**
         * Type of directory service policy attached to the storage pool.
         */
        directoryServiceType?: string | null;
    }
    /**
     * VerifyKmsConfigRequest specifies the KMS config to be validated.
     */
    export interface Schema$VerifyKmsConfigRequest {
    }
    /**
     * VerifyKmsConfigResponse contains the information if the config is correctly and error message.
     */
    export interface Schema$VerifyKmsConfigResponse {
        /**
         * Output only. Error message if config is not healthy.
         */
        healthError?: string | null;
        /**
         * Output only. If the customer key configured correctly to the encrypt volume.
         */
        healthy?: boolean | null;
        /**
         * Output only. Instructions for the customers to provide the access to the encryption key.
         */
        instructions?: string | null;
    }
    /**
     * Volume provides a filesystem that you can mount.
     */
    export interface Schema$Volume {
        /**
         * Output only. Specifies the ActiveDirectory name of a SMB volume.
         */
        activeDirectory?: string | null;
        /**
         * BackupConfig of the volume.
         */
        backupConfig?: Schema$BackupConfig;
        /**
         * Required. Capacity in GIB of the volume
         */
        capacityGib?: string | null;
        /**
         * Output only. Size of the volume cold tier data in GiB.
         */
        coldTierSizeGib?: string | null;
        /**
         * Output only. Create time of the volume
         */
        createTime?: string | null;
        /**
         * Optional. Description of the volume
         */
        description?: string | null;
        /**
         * Output only. Specified the current volume encryption key source.
         */
        encryptionType?: string | null;
        /**
         * Optional. Export policy of the volume
         */
        exportPolicy?: Schema$ExportPolicy;
        /**
         * Output only. Indicates whether the volume is part of a replication relationship.
         */
        hasReplication?: boolean | null;
        /**
         * Optional. The Hybrid Replication parameters for the volume.
         */
        hybridReplicationParameters?: Schema$HybridReplicationParameters;
        /**
         * Optional. Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
         */
        kerberosEnabled?: boolean | null;
        /**
         * Output only. Specifies the KMS config to be used for volume encryption.
         */
        kmsConfig?: string | null;
        /**
         * Optional. Labels as key value pairs
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.
         */
        largeCapacity?: boolean | null;
        /**
         * Output only. Flag indicating if the volume is NFS LDAP enabled or not.
         */
        ldapEnabled?: boolean | null;
        /**
         * Output only. Mount options of this volume
         */
        mountOptions?: Schema$MountOption[];
        /**
         * Optional. Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints. Only the volume with large_capacity will be allowed to have multiple endpoints.
         */
        multipleEndpoints?: boolean | null;
        /**
         * Identifier. Name of the volume
         */
        name?: string | null;
        /**
         * Output only. VPC Network name. Format: projects/{project\}/global/networks/{network\}
         */
        network?: string | null;
        /**
         * Required. Protocols required for the volume
         */
        protocols?: string[] | null;
        /**
         * Output only. This field is not implemented. The values provided in this field are ignored.
         */
        psaRange?: string | null;
        /**
         * Output only. Specifies the replica zone for regional volume.
         */
        replicaZone?: string | null;
        /**
         * Optional. Specifies the source of the volume to be created from.
         */
        restoreParameters?: Schema$RestoreParameters;
        /**
         * Optional. List of actions that are restricted on this volume.
         */
        restrictedActions?: string[] | null;
        /**
         * Optional. Security Style of the Volume
         */
        securityStyle?: string | null;
        /**
         * Output only. Service level of the volume
         */
        serviceLevel?: string | null;
        /**
         * Required. Share name of the volume
         */
        shareName?: string | null;
        /**
         * Optional. SMB share settings for the volume.
         */
        smbSettings?: string[] | null;
        /**
         * Optional. Snap_reserve specifies percentage of volume storage reserved for snapshot storage. Default is 0 percent.
         */
        snapReserve?: number | null;
        /**
         * Optional. Snapshot_directory if enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots.
         */
        snapshotDirectory?: boolean | null;
        /**
         * Optional. SnapshotPolicy for a volume.
         */
        snapshotPolicy?: Schema$SnapshotPolicy;
        /**
         * Output only. State of the volume
         */
        state?: string | null;
        /**
         * Output only. State details of the volume
         */
        stateDetails?: string | null;
        /**
         * Required. StoragePool name of the volume
         */
        storagePool?: string | null;
        /**
         * Tiering policy for the volume.
         */
        tieringPolicy?: Schema$TieringPolicy;
        /**
         * Optional. Default unix style permission (e.g. 777) the mount point will be created with. Applicable for NFS protocol types only.
         */
        unixPermissions?: string | null;
        /**
         * Output only. Used capacity in GIB of the volume. This is computed periodically and it does not represent the realtime usage.
         */
        usedGib?: string | null;
        /**
         * Output only. Specifies the active zone for regional volume.
         */
        zone?: string | null;
    }
    /**
     * Make a snapshot every week e.g. at Monday 04:00, Wednesday 05:20, Sunday 23:50
     */
    export interface Schema$WeeklySchedule {
        /**
         * Set the day or days of the week to make a snapshot. Accepts a comma separated days of the week. Defaults to 'Sunday'.
         */
        day?: string | null;
        /**
         * Set the hour to start the snapshot (0-23), defaults to midnight (0).
         */
        hour?: number | null;
        /**
         * Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0).
         */
        minute?: number | null;
        /**
         * The maximum number of Snapshots to keep for the hourly schedule
         */
        snapshotsToKeep?: number | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        activeDirectories: Resource$Projects$Locations$Activedirectories;
        backupPolicies: Resource$Projects$Locations$Backuppolicies;
        backupVaults: Resource$Projects$Locations$Backupvaults;
        kmsConfigs: Resource$Projects$Locations$Kmsconfigs;
        operations: Resource$Projects$Locations$Operations;
        storagePools: Resource$Projects$Locations$Storagepools;
        volumes: Resource$Projects$Locations$Volumes;
        constructor(context: APIRequestContext);
        /**
         * Gets information about a location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$Location>): void;
        get(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Lists information about the supported locations for this service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$List extends StandardParameters {
        /**
         * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
         */
        extraLocationTypes?: string[];
        /**
         * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The maximum number of results to return. If not set, the service selects a default.
         */
        pageSize?: number;
        /**
         * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Activedirectories {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * CreateActiveDirectory Creates the active directory specified in the request.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Activedirectories$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Activedirectories$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Activedirectories$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Activedirectories$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Activedirectories$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Delete the active directory specified in the request.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Activedirectories$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Activedirectories$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Activedirectories$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Activedirectories$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Activedirectories$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Describes a specified active directory.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Activedirectories$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Activedirectories$Get, options?: MethodOptions): GaxiosPromise<Schema$ActiveDirectory>;
        get(params: Params$Resource$Projects$Locations$Activedirectories$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Activedirectories$Get, options: MethodOptions | BodyResponseCallback<Schema$ActiveDirectory>, callback: BodyResponseCallback<Schema$ActiveDirectory>): void;
        get(params: Params$Resource$Projects$Locations$Activedirectories$Get, callback: BodyResponseCallback<Schema$ActiveDirectory>): void;
        get(callback: BodyResponseCallback<Schema$ActiveDirectory>): void;
        /**
         * Lists active directories.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Activedirectories$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Activedirectories$List, options?: MethodOptions): GaxiosPromise<Schema$ListActiveDirectoriesResponse>;
        list(params: Params$Resource$Projects$Locations$Activedirectories$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Activedirectories$List, options: MethodOptions | BodyResponseCallback<Schema$ListActiveDirectoriesResponse>, callback: BodyResponseCallback<Schema$ListActiveDirectoriesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Activedirectories$List, callback: BodyResponseCallback<Schema$ListActiveDirectoriesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListActiveDirectoriesResponse>): void;
        /**
         * Update the parameters of an active directories.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Activedirectories$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Activedirectories$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Activedirectories$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Activedirectories$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Activedirectories$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Activedirectories$Create extends StandardParameters {
        /**
         * Required. ID of the active directory to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter , the last a letter or a number, and a 63 character maximum.
         */
        activeDirectoryId?: string;
        /**
         * Required. Value for parent.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ActiveDirectory;
    }
    export interface Params$Resource$Projects$Locations$Activedirectories$Delete extends StandardParameters {
        /**
         * Required. Name of the active directory.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Activedirectories$Get extends StandardParameters {
        /**
         * Required. Name of the active directory.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Activedirectories$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. Parent value for ListActiveDirectoriesRequest
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Activedirectories$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the active directory. Format: `projects/{project_number\}/locations/{location_id\}/activeDirectories/{active_directory_id\}`.
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the Active Directory resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ActiveDirectory;
    }
    export class Resource$Projects$Locations$Backuppolicies {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates new backup policy
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Backuppolicies$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Backuppolicies$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Backuppolicies$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Backuppolicies$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Backuppolicies$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Warning! This operation will permanently delete the backup policy.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Backuppolicies$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Backuppolicies$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Backuppolicies$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Backuppolicies$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Backuppolicies$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns the description of the specified backup policy by backup_policy_id.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Backuppolicies$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Backuppolicies$Get, options?: MethodOptions): GaxiosPromise<Schema$BackupPolicy>;
        get(params: Params$Resource$Projects$Locations$Backuppolicies$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Backuppolicies$Get, options: MethodOptions | BodyResponseCallback<Schema$BackupPolicy>, callback: BodyResponseCallback<Schema$BackupPolicy>): void;
        get(params: Params$Resource$Projects$Locations$Backuppolicies$Get, callback: BodyResponseCallback<Schema$BackupPolicy>): void;
        get(callback: BodyResponseCallback<Schema$BackupPolicy>): void;
        /**
         * Returns list of all available backup policies.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Backuppolicies$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Backuppolicies$List, options?: MethodOptions): GaxiosPromise<Schema$ListBackupPoliciesResponse>;
        list(params: Params$Resource$Projects$Locations$Backuppolicies$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Backuppolicies$List, options: MethodOptions | BodyResponseCallback<Schema$ListBackupPoliciesResponse>, callback: BodyResponseCallback<Schema$ListBackupPoliciesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Backuppolicies$List, callback: BodyResponseCallback<Schema$ListBackupPoliciesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListBackupPoliciesResponse>): void;
        /**
         * Updates settings of a specific backup policy.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Backuppolicies$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Backuppolicies$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Backuppolicies$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Backuppolicies$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Backuppolicies$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Backuppolicies$Create extends StandardParameters {
        /**
         * Required. The ID to use for the backup policy. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        backupPolicyId?: string;
        /**
         * Required. The location to create the backup policies of, in the format `projects/{project_id\}/locations/{location\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BackupPolicy;
    }
    export interface Params$Resource$Projects$Locations$Backuppolicies$Delete extends StandardParameters {
        /**
         * Required. The backup policy resource name, in the format `projects/{project_id\}/locations/{location\}/backupPolicies/{backup_policy_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backuppolicies$Get extends StandardParameters {
        /**
         * Required. The backupPolicy resource name, in the format `projects/{project_id\}/locations/{location\}/backupPolicies/{backup_policy_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backuppolicies$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. Parent value for ListBackupPoliciesRequest
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Backuppolicies$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the backup policy. Format: `projects/{project_id\}/locations/{location\}/backupPolicies/{backup_policy_id\}`.
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the Backup Policy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BackupPolicy;
    }
    export class Resource$Projects$Locations$Backupvaults {
        context: APIRequestContext;
        backups: Resource$Projects$Locations$Backupvaults$Backups;
        constructor(context: APIRequestContext);
        /**
         * Creates new backup vault
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Backupvaults$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Backupvaults$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Backupvaults$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Backupvaults$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Backupvaults$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Warning! This operation will permanently delete the backup vault.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Backupvaults$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns the description of the specified backup vault
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Backupvaults$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Backupvaults$Get, options?: MethodOptions): GaxiosPromise<Schema$BackupVault>;
        get(params: Params$Resource$Projects$Locations$Backupvaults$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Backupvaults$Get, options: MethodOptions | BodyResponseCallback<Schema$BackupVault>, callback: BodyResponseCallback<Schema$BackupVault>): void;
        get(params: Params$Resource$Projects$Locations$Backupvaults$Get, callback: BodyResponseCallback<Schema$BackupVault>): void;
        get(callback: BodyResponseCallback<Schema$BackupVault>): void;
        /**
         * Returns list of all available backup vaults.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Backupvaults$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Backupvaults$List, options?: MethodOptions): GaxiosPromise<Schema$ListBackupVaultsResponse>;
        list(params: Params$Resource$Projects$Locations$Backupvaults$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Backupvaults$List, options: MethodOptions | BodyResponseCallback<Schema$ListBackupVaultsResponse>, callback: BodyResponseCallback<Schema$ListBackupVaultsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Backupvaults$List, callback: BodyResponseCallback<Schema$ListBackupVaultsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListBackupVaultsResponse>): void;
        /**
         * Updates the settings of a specific backup vault.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Backupvaults$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Create extends StandardParameters {
        /**
         * Required. The ID to use for the backupVault. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        backupVaultId?: string;
        /**
         * Required. The location to create the backup vaults, in the format `projects/{project_id\}/locations/{location\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BackupVault;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Delete extends StandardParameters {
        /**
         * Required. The backupVault resource name, in the format `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Get extends StandardParameters {
        /**
         * Required. The backupVault resource name, in the format `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$List extends StandardParameters {
        /**
         * List filter.
         */
        filter?: string;
        /**
         * Sort results. Supported values are "name", "name desc" or "" (unsorted).
         */
        orderBy?: string;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value to use if there are additional results to retrieve for this list request.
         */
        pageToken?: string;
        /**
         * Required. The location for which to retrieve backupVault information, in the format `projects/{project_id\}/locations/{location\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the backup vault. Format: `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`.
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BackupVault;
    }
    export class Resource$Projects$Locations$Backupvaults$Backups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request. If no snapshot specified, there'll be a new snapshot taken to initiate the backup creation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Backupvaults$Backups$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Warning! This operation will permanently delete the backup.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Backupvaults$Backups$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns the description of the specified backup
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Backupvaults$Backups$Get, options?: MethodOptions): GaxiosPromise<Schema$Backup>;
        get(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Get, options: MethodOptions | BodyResponseCallback<Schema$Backup>, callback: BodyResponseCallback<Schema$Backup>): void;
        get(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Get, callback: BodyResponseCallback<Schema$Backup>): void;
        get(callback: BodyResponseCallback<Schema$Backup>): void;
        /**
         * Returns descriptions of all backups for a backupVault.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Backupvaults$Backups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Backupvaults$Backups$List, options?: MethodOptions): GaxiosPromise<Schema$ListBackupsResponse>;
        list(params: Params$Resource$Projects$Locations$Backupvaults$Backups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Backupvaults$Backups$List, options: MethodOptions | BodyResponseCallback<Schema$ListBackupsResponse>, callback: BodyResponseCallback<Schema$ListBackupsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Backupvaults$Backups$List, callback: BodyResponseCallback<Schema$ListBackupsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListBackupsResponse>): void;
        /**
         * Update backup with full spec.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Backupvaults$Backups$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Backupvaults$Backups$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Backups$Create extends StandardParameters {
        /**
         * Required. The ID to use for the backup. The ID must be unique within the specified backupVault. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        backupId?: string;
        /**
         * Required. The NetApp backupVault to create the backups of, in the format `projects/x/locations/x/backupVaults/{backup_vault_id\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Backup;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Backups$Delete extends StandardParameters {
        /**
         * Required. The backup resource name, in the format `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}/backups/{backup_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Backups$Get extends StandardParameters {
        /**
         * Required. The backup resource name, in the format `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}/backups/{backup_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Backups$List extends StandardParameters {
        /**
         * The standard list filter. If specified, backups will be returned based on the attribute name that matches the filter expression. If empty, then no backups are filtered out. See https://google.aip.dev/160
         */
        filter?: string;
        /**
         * Sort results. Supported values are "name", "name desc" or "" (unsorted).
         */
        orderBy?: string;
        /**
         * The maximum number of items to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value to use if there are additional results to retrieve for this list request.
         */
        pageToken?: string;
        /**
         * Required. The backupVault for which to retrieve backup information, in the format `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}`. To retrieve backup information for all locations, use "-" for the `{location\}` value. To retrieve backup information for all backupVaults, use "-" for the `{backup_vault_id\}` value. To retrieve backup information for a volume, use "-" for the `{backup_vault_id\}` value and specify volume full name with the filter.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Backupvaults$Backups$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the backup. Format: `projects/{project_id\}/locations/{location\}/backupVaults/{backup_vault_id\}/backups/{backup_id\}`.
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Backup;
    }
    export class Resource$Projects$Locations$Kmsconfigs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new KMS config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Kmsconfigs$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Kmsconfigs$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Kmsconfigs$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Kmsconfigs$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Kmsconfigs$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Warning! This operation will permanently delete the Kms config.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Kmsconfigs$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Kmsconfigs$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Kmsconfigs$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Kmsconfigs$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Kmsconfigs$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        encrypt(params: Params$Resource$Projects$Locations$Kmsconfigs$Encrypt, options: StreamMethodOptions): GaxiosPromise<Readable>;
        encrypt(params?: Params$Resource$Projects$Locations$Kmsconfigs$Encrypt, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        encrypt(params: Params$Resource$Projects$Locations$Kmsconfigs$Encrypt, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        encrypt(params: Params$Resource$Projects$Locations$Kmsconfigs$Encrypt, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        encrypt(params: Params$Resource$Projects$Locations$Kmsconfigs$Encrypt, callback: BodyResponseCallback<Schema$Operation>): void;
        encrypt(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns the description of the specified KMS config by kms_config_id.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Kmsconfigs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Kmsconfigs$Get, options?: MethodOptions): GaxiosPromise<Schema$KmsConfig>;
        get(params: Params$Resource$Projects$Locations$Kmsconfigs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Kmsconfigs$Get, options: MethodOptions | BodyResponseCallback<Schema$KmsConfig>, callback: BodyResponseCallback<Schema$KmsConfig>): void;
        get(params: Params$Resource$Projects$Locations$Kmsconfigs$Get, callback: BodyResponseCallback<Schema$KmsConfig>): void;
        get(callback: BodyResponseCallback<Schema$KmsConfig>): void;
        /**
         * Returns descriptions of all KMS configs owned by the caller.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Kmsconfigs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Kmsconfigs$List, options?: MethodOptions): GaxiosPromise<Schema$ListKmsConfigsResponse>;
        list(params: Params$Resource$Projects$Locations$Kmsconfigs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Kmsconfigs$List, options: MethodOptions | BodyResponseCallback<Schema$ListKmsConfigsResponse>, callback: BodyResponseCallback<Schema$ListKmsConfigsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Kmsconfigs$List, callback: BodyResponseCallback<Schema$ListKmsConfigsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListKmsConfigsResponse>): void;
        /**
         * Updates the Kms config properties with the full spec
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Kmsconfigs$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Kmsconfigs$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Kmsconfigs$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Kmsconfigs$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Kmsconfigs$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Verifies KMS config reachability.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        verify(params: Params$Resource$Projects$Locations$Kmsconfigs$Verify, options: StreamMethodOptions): GaxiosPromise<Readable>;
        verify(params?: Params$Resource$Projects$Locations$Kmsconfigs$Verify, options?: MethodOptions): GaxiosPromise<Schema$VerifyKmsConfigResponse>;
        verify(params: Params$Resource$Projects$Locations$Kmsconfigs$Verify, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        verify(params: Params$Resource$Projects$Locations$Kmsconfigs$Verify, options: MethodOptions | BodyResponseCallback<Schema$VerifyKmsConfigResponse>, callback: BodyResponseCallback<Schema$VerifyKmsConfigResponse>): void;
        verify(params: Params$Resource$Projects$Locations$Kmsconfigs$Verify, callback: BodyResponseCallback<Schema$VerifyKmsConfigResponse>): void;
        verify(callback: BodyResponseCallback<Schema$VerifyKmsConfigResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$Create extends StandardParameters {
        /**
         * Required. Id of the requesting KmsConfig. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        kmsConfigId?: string;
        /**
         * Required. Value for parent.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$KmsConfig;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$Delete extends StandardParameters {
        /**
         * Required. Name of the KmsConfig.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$Encrypt extends StandardParameters {
        /**
         * Required. Name of the KmsConfig.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EncryptVolumesRequest;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$Get extends StandardParameters {
        /**
         * Required. Name of the KmsConfig
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$List extends StandardParameters {
        /**
         * List filter.
         */
        filter?: string;
        /**
         * Sort results. Supported values are "name", "name desc" or "" (unsorted).
         */
        orderBy?: string;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value to use if there are additional results to retrieve for this list request.
         */
        pageToken?: string;
        /**
         * Required. Parent value
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$Patch extends StandardParameters {
        /**
         * Identifier. Name of the KmsConfig.
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the KmsConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$KmsConfig;
    }
    export interface Params$Resource$Projects$Locations$Kmsconfigs$Verify extends StandardParameters {
        /**
         * Required. Name of the KMS Config to be verified.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$VerifyKmsConfigRequest;
    }
    export class Resource$Projects$Locations$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Locations$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Operations$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
        /**
         * The name of the operation resource to be deleted.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Storagepools {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new storage pool.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Storagepools$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Storagepools$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Storagepools$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Storagepools$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Storagepools$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Warning! This operation will permanently delete the storage pool.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Storagepools$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Storagepools$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Storagepools$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Storagepools$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Storagepools$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns the description of the specified storage pool by poolId.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Storagepools$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Storagepools$Get, options?: MethodOptions): GaxiosPromise<Schema$StoragePool>;
        get(params: Params$Resource$Projects$Locations$Storagepools$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Storagepools$Get, options: MethodOptions | BodyResponseCallback<Schema$StoragePool>, callback: BodyResponseCallback<Schema$StoragePool>): void;
        get(params: Params$Resource$Projects$Locations$Storagepools$Get, callback: BodyResponseCallback<Schema$StoragePool>): void;
        get(callback: BodyResponseCallback<Schema$StoragePool>): void;
        /**
         * Returns descriptions of all storage pools owned by the caller.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Storagepools$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Storagepools$List, options?: MethodOptions): GaxiosPromise<Schema$ListStoragePoolsResponse>;
        list(params: Params$Resource$Projects$Locations$Storagepools$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Storagepools$List, options: MethodOptions | BodyResponseCallback<Schema$ListStoragePoolsResponse>, callback: BodyResponseCallback<Schema$ListStoragePoolsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Storagepools$List, callback: BodyResponseCallback<Schema$ListStoragePoolsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListStoragePoolsResponse>): void;
        /**
         * Updates the storage pool properties with the full spec
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Storagepools$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Storagepools$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Storagepools$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Storagepools$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Storagepools$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * This operation will switch the active/replica zone for a regional storagePool.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        switch(params: Params$Resource$Projects$Locations$Storagepools$Switch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        switch(params?: Params$Resource$Projects$Locations$Storagepools$Switch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        switch(params: Params$Resource$Projects$Locations$Storagepools$Switch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        switch(params: Params$Resource$Projects$Locations$Storagepools$Switch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        switch(params: Params$Resource$Projects$Locations$Storagepools$Switch, callback: BodyResponseCallback<Schema$Operation>): void;
        switch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        validateDirectoryService(params: Params$Resource$Projects$Locations$Storagepools$Validatedirectoryservice, options: StreamMethodOptions): GaxiosPromise<Readable>;
        validateDirectoryService(params?: Params$Resource$Projects$Locations$Storagepools$Validatedirectoryservice, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        validateDirectoryService(params: Params$Resource$Projects$Locations$Storagepools$Validatedirectoryservice, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        validateDirectoryService(params: Params$Resource$Projects$Locations$Storagepools$Validatedirectoryservice, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        validateDirectoryService(params: Params$Resource$Projects$Locations$Storagepools$Validatedirectoryservice, callback: BodyResponseCallback<Schema$Operation>): void;
        validateDirectoryService(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$Create extends StandardParameters {
        /**
         * Required. Value for parent.
         */
        parent?: string;
        /**
         * Required. Id of the requesting storage pool. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        storagePoolId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StoragePool;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$Delete extends StandardParameters {
        /**
         * Required. Name of the storage pool
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$Get extends StandardParameters {
        /**
         * Required. Name of the storage pool
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$List extends StandardParameters {
        /**
         * Optional. List filter.
         */
        filter?: string;
        /**
         * Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
         */
        orderBy?: string;
        /**
         * Optional. The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * Optional. The next_page_token value to use if there are additional results to retrieve for this list request.
         */
        pageToken?: string;
        /**
         * Required. Parent value
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$Patch extends StandardParameters {
        /**
         * Identifier. Name of the storage pool
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the StoragePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StoragePool;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$Switch extends StandardParameters {
        /**
         * Required. Name of the storage pool
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SwitchActiveReplicaZoneRequest;
    }
    export interface Params$Resource$Projects$Locations$Storagepools$Validatedirectoryservice extends StandardParameters {
        /**
         * Required. Name of the storage pool
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ValidateDirectoryServiceRequest;
    }
    export class Resource$Projects$Locations$Volumes {
        context: APIRequestContext;
        quotaRules: Resource$Projects$Locations$Volumes$Quotarules;
        replications: Resource$Projects$Locations$Volumes$Replications;
        snapshots: Resource$Projects$Locations$Volumes$Snapshots;
        constructor(context: APIRequestContext);
        /**
         * Creates a new Volume in a given project and location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Volumes$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Volumes$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Volumes$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a single Volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Volumes$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Volumes$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Volumes$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Volumes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Volumes$Get, options?: MethodOptions): GaxiosPromise<Schema$Volume>;
        get(params: Params$Resource$Projects$Locations$Volumes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Get, options: MethodOptions | BodyResponseCallback<Schema$Volume>, callback: BodyResponseCallback<Schema$Volume>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Get, callback: BodyResponseCallback<Schema$Volume>): void;
        get(callback: BodyResponseCallback<Schema$Volume>): void;
        /**
         * Lists Volumes in a given project.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Volumes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Volumes$List, options?: MethodOptions): GaxiosPromise<Schema$ListVolumesResponse>;
        list(params: Params$Resource$Projects$Locations$Volumes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$List, options: MethodOptions | BodyResponseCallback<Schema$ListVolumesResponse>, callback: BodyResponseCallback<Schema$ListVolumesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$List, callback: BodyResponseCallback<Schema$ListVolumesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVolumesResponse>): void;
        /**
         * Updates the parameters of a single Volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Volumes$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Volumes$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Volumes$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Revert an existing volume to a specified snapshot. Warning! This operation will permanently revert all changes made after the snapshot was created.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Projects$Locations$Volumes$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Projects$Locations$Volumes$Revert, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        revert(params: Params$Resource$Projects$Locations$Volumes$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Projects$Locations$Volumes$Revert, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        revert(params: Params$Resource$Projects$Locations$Volumes$Revert, callback: BodyResponseCallback<Schema$Operation>): void;
        revert(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Create extends StandardParameters {
        /**
         * Required. Value for parent.
         */
        parent?: string;
        /**
         * Required. Id of the requesting volume. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        volumeId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Volume;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Delete extends StandardParameters {
        /**
         * If this field is set as true, CCFE will not block the volume resource deletion even if it has any snapshots resource. (Otherwise, the request will only work if the volume has no snapshots.)
         */
        force?: boolean;
        /**
         * Required. Name of the volume
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Get extends StandardParameters {
        /**
         * Required. Name of the volume
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$List extends StandardParameters {
        /**
         * Filtering results
         */
        filter?: string;
        /**
         * Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. Parent value for ListVolumesRequest
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Patch extends StandardParameters {
        /**
         * Identifier. Name of the volume
         */
        name?: string;
        /**
         * Required. Field mask is used to specify the fields to be overwritten in the Volume resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Volume;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Revert extends StandardParameters {
        /**
         * Required. The resource name of the volume, in the format of projects/{project_id\}/locations/{location\}/volumes/{volume_id\}.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RevertVolumeRequest;
    }
    export class Resource$Projects$Locations$Volumes$Quotarules {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new quota rule.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Volumes$Quotarules$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a quota rule.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Volumes$Quotarules$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Returns details of the specified quota rule.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Volumes$Quotarules$Get, options?: MethodOptions): GaxiosPromise<Schema$QuotaRule>;
        get(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Get, options: MethodOptions | BodyResponseCallback<Schema$QuotaRule>, callback: BodyResponseCallback<Schema$QuotaRule>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Get, callback: BodyResponseCallback<Schema$QuotaRule>): void;
        get(callback: BodyResponseCallback<Schema$QuotaRule>): void;
        /**
         * Returns list of all quota rules in a location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Volumes$Quotarules$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Volumes$Quotarules$List, options?: MethodOptions): GaxiosPromise<Schema$ListQuotaRulesResponse>;
        list(params: Params$Resource$Projects$Locations$Volumes$Quotarules$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$Quotarules$List, options: MethodOptions | BodyResponseCallback<Schema$ListQuotaRulesResponse>, callback: BodyResponseCallback<Schema$ListQuotaRulesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$Quotarules$List, callback: BodyResponseCallback<Schema$ListQuotaRulesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListQuotaRulesResponse>): void;
        /**
         * Updates a quota rule.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Volumes$Quotarules$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Quotarules$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Quotarules$Create extends StandardParameters {
        /**
         * Required. Parent value for CreateQuotaRuleRequest
         */
        parent?: string;
        /**
         * Required. ID of the quota rule to create. Must be unique within the parent resource. Must contain only letters, numbers, underscore and hyphen, with the first character a letter or underscore, the last a letter or underscore or a number, and a 63 character maximum.
         */
        quotaRuleId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$QuotaRule;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Quotarules$Delete extends StandardParameters {
        /**
         * Required. Name of the quota rule.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Quotarules$Get extends StandardParameters {
        /**
         * Required. Name of the quota rule
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Quotarules$List extends StandardParameters {
        /**
         * Optional. Filtering results
         */
        filter?: string;
        /**
         * Optional. Hint for how to order the results
         */
        orderBy?: string;
        /**
         * Optional. Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
         */
        pageSize?: number;
        /**
         * Optional. A token identifying a page of results the server should return.
         */
        pageToken?: string;
        /**
         * Required. Parent value for ListQuotaRulesRequest
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Quotarules$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the quota rule. Format: `projects/{project_number\}/locations/{location_id\}/volumes/volumes/{volume_id\}/quotaRules/{quota_rule_id\}`.
         */
        name?: string;
        /**
         * Optional. Field mask is used to specify the fields to be overwritten in the Quota Rule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$QuotaRule;
    }
    export class Resource$Projects$Locations$Volumes$Replications {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Create a new replication for a volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Volumes$Replications$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Volumes$Replications$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Volumes$Replications$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Replications$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Replications$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a replication.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Volumes$Replications$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Volumes$Replications$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Volumes$Replications$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Replications$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Replications$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Establish replication peering.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        establishPeering(params: Params$Resource$Projects$Locations$Volumes$Replications$Establishpeering, options: StreamMethodOptions): GaxiosPromise<Readable>;
        establishPeering(params?: Params$Resource$Projects$Locations$Volumes$Replications$Establishpeering, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        establishPeering(params: Params$Resource$Projects$Locations$Volumes$Replications$Establishpeering, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        establishPeering(params: Params$Resource$Projects$Locations$Volumes$Replications$Establishpeering, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        establishPeering(params: Params$Resource$Projects$Locations$Volumes$Replications$Establishpeering, callback: BodyResponseCallback<Schema$Operation>): void;
        establishPeering(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Describe a replication for a volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Volumes$Replications$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Volumes$Replications$Get, options?: MethodOptions): GaxiosPromise<Schema$Replication>;
        get(params: Params$Resource$Projects$Locations$Volumes$Replications$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Replications$Get, options: MethodOptions | BodyResponseCallback<Schema$Replication>, callback: BodyResponseCallback<Schema$Replication>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Replications$Get, callback: BodyResponseCallback<Schema$Replication>): void;
        get(callback: BodyResponseCallback<Schema$Replication>): void;
        /**
         * Returns descriptions of all replications for a volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Volumes$Replications$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Volumes$Replications$List, options?: MethodOptions): GaxiosPromise<Schema$ListReplicationsResponse>;
        list(params: Params$Resource$Projects$Locations$Volumes$Replications$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$Replications$List, options: MethodOptions | BodyResponseCallback<Schema$ListReplicationsResponse>, callback: BodyResponseCallback<Schema$ListReplicationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$Replications$List, callback: BodyResponseCallback<Schema$ListReplicationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListReplicationsResponse>): void;
        /**
         * Updates the settings of a specific replication.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Volumes$Replications$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Volumes$Replications$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Volumes$Replications$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Replications$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Replications$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Resume Cross Region Replication.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        resume(params: Params$Resource$Projects$Locations$Volumes$Replications$Resume, options: StreamMethodOptions): GaxiosPromise<Readable>;
        resume(params?: Params$Resource$Projects$Locations$Volumes$Replications$Resume, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        resume(params: Params$Resource$Projects$Locations$Volumes$Replications$Resume, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        resume(params: Params$Resource$Projects$Locations$Volumes$Replications$Resume, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        resume(params: Params$Resource$Projects$Locations$Volumes$Replications$Resume, callback: BodyResponseCallback<Schema$Operation>): void;
        resume(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Reverses direction of replication. Source becomes destination and destination becomes source.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reverseDirection(params: Params$Resource$Projects$Locations$Volumes$Replications$Reversedirection, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reverseDirection(params?: Params$Resource$Projects$Locations$Volumes$Replications$Reversedirection, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        reverseDirection(params: Params$Resource$Projects$Locations$Volumes$Replications$Reversedirection, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reverseDirection(params: Params$Resource$Projects$Locations$Volumes$Replications$Reversedirection, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        reverseDirection(params: Params$Resource$Projects$Locations$Volumes$Replications$Reversedirection, callback: BodyResponseCallback<Schema$Operation>): void;
        reverseDirection(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Stop Cross Region Replication.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        stop(params: Params$Resource$Projects$Locations$Volumes$Replications$Stop, options: StreamMethodOptions): GaxiosPromise<Readable>;
        stop(params?: Params$Resource$Projects$Locations$Volumes$Replications$Stop, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        stop(params: Params$Resource$Projects$Locations$Volumes$Replications$Stop, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        stop(params: Params$Resource$Projects$Locations$Volumes$Replications$Stop, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        stop(params: Params$Resource$Projects$Locations$Volumes$Replications$Stop, callback: BodyResponseCallback<Schema$Operation>): void;
        stop(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Syncs the replication. This will invoke one time volume data transfer from source to destination.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        sync(params: Params$Resource$Projects$Locations$Volumes$Replications$Sync, options: StreamMethodOptions): GaxiosPromise<Readable>;
        sync(params?: Params$Resource$Projects$Locations$Volumes$Replications$Sync, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        sync(params: Params$Resource$Projects$Locations$Volumes$Replications$Sync, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        sync(params: Params$Resource$Projects$Locations$Volumes$Replications$Sync, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        sync(params: Params$Resource$Projects$Locations$Volumes$Replications$Sync, callback: BodyResponseCallback<Schema$Operation>): void;
        sync(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Create extends StandardParameters {
        /**
         * Required. The NetApp volume to create the replications of, in the format `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}`
         */
        parent?: string;
        /**
         * Required. ID of the replication to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        replicationId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Replication;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Delete extends StandardParameters {
        /**
         * Required. The replication resource name, in the format `projects/x/locations/x/volumes/x/replications/{replication_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Establishpeering extends StandardParameters {
        /**
         * Required. The resource name of the replication, in the format of projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EstablishPeeringRequest;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Get extends StandardParameters {
        /**
         * Required. The replication resource name, in the format `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$List extends StandardParameters {
        /**
         * List filter.
         */
        filter?: string;
        /**
         * Sort results. Supported values are "name", "name desc" or "" (unsorted).
         */
        orderBy?: string;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value to use if there are additional results to retrieve for this list request.
         */
        pageToken?: string;
        /**
         * Required. The volume for which to retrieve replication information, in the format `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the Replication. Format: `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}`.
         */
        name?: string;
        /**
         * Required. Mask of fields to update. At least one path must be supplied in this field.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Replication;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Resume extends StandardParameters {
        /**
         * Required. The resource name of the replication, in the format of projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ResumeReplicationRequest;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Reversedirection extends StandardParameters {
        /**
         * Required. The resource name of the replication, in the format of projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ReverseReplicationDirectionRequest;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Stop extends StandardParameters {
        /**
         * Required. The resource name of the replication, in the format of projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StopReplicationRequest;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Replications$Sync extends StandardParameters {
        /**
         * Required. The resource name of the replication, in the format of projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/replications/{replication_id\}.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SyncReplicationRequest;
    }
    export class Resource$Projects$Locations$Volumes$Snapshots {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Create a new snapshot for a volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a snapshot.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Describe a snapshot for a volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Get, options?: MethodOptions): GaxiosPromise<Schema$Snapshot>;
        get(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get, options: MethodOptions | BodyResponseCallback<Schema$Snapshot>, callback: BodyResponseCallback<Schema$Snapshot>): void;
        get(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get, callback: BodyResponseCallback<Schema$Snapshot>): void;
        get(callback: BodyResponseCallback<Schema$Snapshot>): void;
        /**
         * Returns descriptions of all snapshots for a volume.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Volumes$Snapshots$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Volumes$Snapshots$List, options?: MethodOptions): GaxiosPromise<Schema$ListSnapshotsResponse>;
        list(params: Params$Resource$Projects$Locations$Volumes$Snapshots$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$Snapshots$List, options: MethodOptions | BodyResponseCallback<Schema$ListSnapshotsResponse>, callback: BodyResponseCallback<Schema$ListSnapshotsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Volumes$Snapshots$List, callback: BodyResponseCallback<Schema$ListSnapshotsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSnapshotsResponse>): void;
        /**
         * Updates the settings of a specific snapshot.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Projects$Locations$Volumes$Snapshots$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Create extends StandardParameters {
        /**
         * Required. The NetApp volume to create the snapshots of, in the format `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}`
         */
        parent?: string;
        /**
         * Required. ID of the snapshot to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
         */
        snapshotId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Snapshot;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Delete extends StandardParameters {
        /**
         * Required. The snapshot resource name, in the format `projects/x/locations/x/volumes/x/snapshots/{snapshot_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Get extends StandardParameters {
        /**
         * Required. The snapshot resource name, in the format `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/snapshots/{snapshot_id\}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Snapshots$List extends StandardParameters {
        /**
         * List filter.
         */
        filter?: string;
        /**
         * Sort results. Supported values are "name", "name desc" or "" (unsorted).
         */
        orderBy?: string;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value to use if there are additional results to retrieve for this list request.
         */
        pageToken?: string;
        /**
         * Required. The volume for which to retrieve snapshot information, in the format `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Patch extends StandardParameters {
        /**
         * Identifier. The resource name of the snapshot. Format: `projects/{project_id\}/locations/{location\}/volumes/{volume_id\}/snapshots/{snapshot_id\}`.
         */
        name?: string;
        /**
         * Required. Mask of fields to update. At least one path must be supplied in this field.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Snapshot;
    }
    export {};
}
