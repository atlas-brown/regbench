import { ConnectionIsNotSetError } from "../../error/ConnectionIsNotSetError";
import { DriverPackageNotInstalledError } from "../../error/DriverPackageNotInstalledError";
import { MongoQueryRunner } from "./MongoQueryRunner";
import { PlatformTools } from "../../platform/PlatformTools";
import { MongoSchemaBuilder } from "../../schema-builder/MongoSchemaBuilder";
import { ObjectUtils } from "../../util/ObjectUtils";
import { ApplyValueTransformers } from "../../util/ApplyValueTransformers";
import { DriverUtils } from "../DriverUtils";
import { TypeORMError } from "../../error";
import { InstanceChecker } from "../../util/InstanceChecker";
/**
 * Organizes communication with MongoDB.
 */
export class MongoDriver {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(connection) {
        this.connection = connection;
        /**
         * Indicates if replication is enabled.
         */
        this.isReplicated = false;
        /**
         * Indicates if tree tables are supported by this driver.
         */
        this.treeSupport = false;
        /**
         * Represent transaction support by this driver
         */
        this.transactionSupport = "none";
        /**
         * Mongodb does not need to have column types because they are not used in schema sync.
         */
        this.supportedDataTypes = [];
        /**
         * Gets list of spatial column data types.
         */
        this.spatialTypes = [];
        /**
         * Gets list of column data types that support length by a driver.
         */
        this.withLengthColumnTypes = [];
        /**
         * Gets list of column data types that support precision by a driver.
         */
        this.withPrecisionColumnTypes = [];
        /**
         * Gets list of column data types that support scale by a driver.
         */
        this.withScaleColumnTypes = [];
        /**
         * Mongodb does not need to have a strong defined mapped column types because they are not used in schema sync.
         */
        this.mappedDataTypes = {
            createDate: "int",
            createDateDefault: "",
            updateDate: "int",
            updateDateDefault: "",
            deleteDate: "int",
            deleteDateNullable: true,
            version: "int",
            treeLevel: "int",
            migrationId: "int",
            migrationName: "int",
            migrationTimestamp: "int",
            cacheId: "int",
            cacheIdentifier: "int",
            cacheTime: "int",
            cacheDuration: "int",
            cacheQuery: "int",
            cacheResult: "int",
            metadataType: "int",
            metadataDatabase: "int",
            metadataSchema: "int",
            metadataTable: "int",
            metadataName: "int",
            metadataValue: "int",
        };
        this.cteCapabilities = {
            enabled: false,
        };
        // -------------------------------------------------------------------------
        // Protected Properties
        // -------------------------------------------------------------------------
        /**
         * Valid mongo connection options
         * NOTE: Keep in sync with MongoConnectionOptions
         */
        this.validOptionNames = [
            "appName",
            "authMechanism",
            "authSource",
            "autoEncryption",
            "checkServerIdentity",
            "compressors",
            "connectTimeoutMS",
            "directConnection",
            "family",
            "forceServerObjectId",
            "ignoreUndefined",
            "keepAlive",
            "keepAliveInitialDelay",
            "localThresholdMS",
            "maxStalenessSeconds",
            "minPoolSize",
            "monitorCommands",
            "noDelay",
            "pkFactory",
            "promoteBuffers",
            "promoteLongs",
            "promoteValues",
            "raw",
            "readConcern",
            "readPreference",
            "readPreferenceTags",
            "replicaSet",
            "retryWrites",
            "serializeFunctions",
            "socketTimeoutMS",
            "ssl",
            "sslCA",
            "sslCRL",
            "sslCert",
            "sslKey",
            "sslPass",
            "sslValidate",
            "tls",
            "tlsAllowInvalidCertificates",
            "tlsCAFile",
            "tlsCertificateKeyFile",
            "tlsCertificateKeyFilePassword",
            "w",
            "writeConcern",
            "wtimeoutMS",
            // Undocumented deprecated options
            // todo: remove next major version
            "appname",
            "fsync",
            "j",
            "useNewUrlParser",
            "useUnifiedTopology",
            "wtimeout",
        ];
        this.options = connection.options;
        // validate options to make sure everything is correct and driver will be able to establish connection
        this.validateOptions(connection.options);
        // load mongodb package
        this.loadDependencies();
        this.database = DriverUtils.buildMongoDBDriverOptions(this.options).database;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Performs connection to the database.
     */
    async connect() {
        const options = DriverUtils.buildMongoDBDriverOptions(this.options);
        const client = await this.mongodb.MongoClient.connect(this.buildConnectionUrl(options), this.buildConnectionOptions(options));
        this.queryRunner = new MongoQueryRunner(this.connection, client);
        ObjectUtils.assign(this.queryRunner, {
            manager: this.connection.manager,
        });
    }
    afterConnect() {
        return Promise.resolve();
    }
    /**
     * Closes connection with the database.
     */
    async disconnect() {
        if (!this.queryRunner)
            throw new ConnectionIsNotSetError("mongodb");
        // const handler = (err: any) => (err ? fail(err) : ok())
        this.queryRunner.databaseConnection.close();
        this.queryRunner = undefined;
        // return ok()
    }
    /**
     * Creates a schema builder used to build and sync a schema.
     */
    createSchemaBuilder() {
        return new MongoSchemaBuilder(this.connection);
    }
    /**
     * Creates a query runner used to execute database queries.
     */
    createQueryRunner(mode) {
        return this.queryRunner;
    }
    /**
     * Replaces parameters in the given sql with special escaping character
     * and an array of parameter names to be passed to a query.
     */
    escapeQueryWithParameters(sql, parameters, nativeParameters) {
        throw new TypeORMError(`This operation is not supported by Mongodb driver.`);
    }
    /**
     * Escapes a column name.
     */
    escape(columnName) {
        return columnName;
    }
    /**
     * Build full table name with database name, schema name and table name.
     * E.g. myDB.mySchema.myTable
     */
    buildTableName(tableName, schema, database) {
        return tableName;
    }
    /**
     * Parse a target table name or other types and return a normalized table definition.
     */
    parseTableName(target) {
        if (InstanceChecker.isEntityMetadata(target)) {
            return {
                tableName: target.tableName,
            };
        }
        if (InstanceChecker.isTable(target) || InstanceChecker.isView(target)) {
            return {
                tableName: target.name,
            };
        }
        if (InstanceChecker.isTableForeignKey(target)) {
            return {
                tableName: target.referencedTableName,
            };
        }
        return {
            tableName: target,
        };
    }
    /**
     * Prepares given value to a value to be persisted, based on its column type and metadata.
     */
    preparePersistentValue(value, columnMetadata) {
        if (columnMetadata.transformer)
            value = ApplyValueTransformers.transformTo(columnMetadata.transformer, value);
        return value;
    }
    /**
     * Prepares given value to a value to be persisted, based on its column type or metadata.
     */
    prepareHydratedValue(value, columnMetadata) {
        if (columnMetadata.transformer)
            value = ApplyValueTransformers.transformFrom(columnMetadata.transformer, value);
        return value;
    }
    /**
     * Creates a database type from a given column metadata.
     */
    normalizeType(column) {
        throw new TypeORMError(`MongoDB is schema-less, not supported by this driver.`);
    }
    /**
     * Normalizes "default" value of the column.
     */
    normalizeDefault(columnMetadata) {
        throw new TypeORMError(`MongoDB is schema-less, not supported by this driver.`);
    }
    /**
     * Normalizes "isUnique" value of the column.
     */
    normalizeIsUnique(column) {
        throw new TypeORMError(`MongoDB is schema-less, not supported by this driver.`);
    }
    /**
     * Calculates column length taking into account the default length values.
     */
    getColumnLength(column) {
        throw new TypeORMError(`MongoDB is schema-less, not supported by this driver.`);
    }
    /**
     * Normalizes "default" value of the column.
     */
    createFullType(column) {
        throw new TypeORMError(`MongoDB is schema-less, not supported by this driver.`);
    }
    /**
     * Obtains a new database connection to a master server.
     * Used for replication.
     * If replication is not setup then returns default connection's database connection.
     */
    obtainMasterConnection() {
        return Promise.resolve();
    }
    /**
     * Obtains a new database connection to a slave server.
     * Used for replication.
     * If replication is not setup then returns master (default) connection's database connection.
     */
    obtainSlaveConnection() {
        return Promise.resolve();
    }
    /**
     * Creates generated map of values generated or returned by database after INSERT query.
     */
    createGeneratedMap(metadata, insertedId) {
        return metadata.objectIdColumn.createValueMap(insertedId);
    }
    /**
     * Differentiate columns of this table and columns from the given column metadatas columns
     * and returns only changed.
     */
    findChangedColumns(tableColumns, columnMetadatas) {
        throw new TypeORMError(`MongoDB is schema-less, not supported by this driver.`);
    }
    /**
     * Returns true if driver supports RETURNING / OUTPUT statement.
     */
    isReturningSqlSupported() {
        return false;
    }
    /**
     * Returns true if driver supports uuid values generation on its own.
     */
    isUUIDGenerationSupported() {
        return false;
    }
    /**
     * Returns true if driver supports fulltext indices.
     */
    isFullTextColumnTypeSupported() {
        return false;
    }
    /**
     * Creates an escaped parameter.
     */
    createParameter(parameterName, index) {
        return "";
    }
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    /**
     * Validate driver options to make sure everything is correct and driver will be able to establish connection.
     */
    validateOptions(options) {
        // todo: fix
        // if (!options.url) {
        //     if (!options.database)
        //         throw new DriverOptionNotSetError("database");
        // }
    }
    /**
     * Loads all driver dependencies.
     */
    loadDependencies() {
        try {
            const mongodb = this.options.driver || PlatformTools.load("mongodb");
            this.mongodb = mongodb;
        }
        catch (e) {
            throw new DriverPackageNotInstalledError("MongoDB", "mongodb");
        }
    }
    /**
     * Builds connection url that is passed to underlying driver to perform connection to the mongodb database.
     */
    buildConnectionUrl(options) {
        const schemaUrlPart = options.type.toLowerCase();
        const credentialsUrlPart = options.username && options.password
            ? `${encodeURIComponent(options.username)}:${encodeURIComponent(options.password)}@`
            : "";
        const portUrlPart = schemaUrlPart === "mongodb+srv" ? "" : `:${options.port || "27017"}`;
        let connectionString;
        if (options.replicaSet) {
            connectionString = `${schemaUrlPart}://${credentialsUrlPart}${options.hostReplicaSet ||
                options.host + portUrlPart ||
                "127.0.0.1" + portUrlPart}/${options.database || ""}`;
        }
        else {
            connectionString = `${schemaUrlPart}://${credentialsUrlPart}${options.host || "127.0.0.1"}${portUrlPart}/${options.database || ""}`;
        }
        return connectionString;
    }
    /**
     * Build connection options from MongoConnectionOptions
     */
    buildConnectionOptions(options) {
        const mongoOptions = {};
        for (const optionName of this.validOptionNames) {
            if (optionName in options) {
                mongoOptions[optionName] = options[optionName];
            }
        }
        mongoOptions.driverInfo = {
            name: "TypeORM",
        };
        if ("poolSize" in options) {
            mongoOptions["maxPoolSize"] = options["poolSize"];
        }
        Object.assign(mongoOptions, options.extra);
        return mongoOptions;
    }
}

//# sourceMappingURL=MongoDriver.js.map
