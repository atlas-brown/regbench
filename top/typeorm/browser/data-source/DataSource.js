import { registerQueryBuilders } from "../query-builder";
import { DefaultNamingStrategy } from "../naming-strategy/DefaultNamingStrategy";
import { CannotConnectAlreadyConnectedError, CannotExecuteNotConnectedError, EntityMetadataNotFoundError, QueryRunnerProviderAlreadyReleasedError, TypeORMError, } from "../error";
import { MigrationExecutor } from "../migration/MigrationExecutor";
import { EntityMetadataValidator } from "../metadata-builder/EntityMetadataValidator";
import { EntityManagerFactory } from "../entity-manager/EntityManagerFactory";
import { DriverFactory } from "../driver/DriverFactory";
import { ConnectionMetadataBuilder } from "../connection/ConnectionMetadataBuilder";
import { SelectQueryBuilder } from "../query-builder/SelectQueryBuilder";
import { LoggerFactory } from "../logger/LoggerFactory";
import { QueryResultCacheFactory } from "../cache/QueryResultCacheFactory";
import { RelationLoader } from "../query-builder/RelationLoader";
import { ObjectUtils } from "../util/ObjectUtils";
import { RelationIdLoader } from "../query-builder/RelationIdLoader";
import { DriverUtils } from "../driver/DriverUtils";
import { InstanceChecker } from "../util/InstanceChecker";
import { buildSqlTag } from "../util/SqlTagUtils";
registerQueryBuilders();
/**
 * DataSource is a pre-defined connection configuration to a specific database.
 * You can have multiple data sources connected (with multiple connections in it),
 * connected to multiple databases in your application.
 *
 * Before, it was called `Connection`, but now `Connection` is deprecated
 * because `Connection` isn't the best name for what it's actually is.
 */
export class DataSource {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(options) {
        this["@instanceof"] = Symbol.for("DataSource");
        /**
         * Migration instances that are registered for this connection.
         */
        this.migrations = [];
        /**
         * Entity subscriber instances that are registered for this connection.
         */
        this.subscribers = [];
        /**
         * All entity metadatas that are registered for this connection.
         */
        this.entityMetadatas = [];
        /**
         * All entity metadatas that are registered for this connection.
         * This is a copy of #.entityMetadatas property -> used for more performant searches.
         */
        this.entityMetadatasMap = new Map();
        registerQueryBuilders();
        this.name = options.name || "default";
        this.options = options;
        this.logger = new LoggerFactory().create(this.options.logger, this.options.logging);
        this.driver = new DriverFactory().create(this);
        this.manager = this.createEntityManager();
        this.namingStrategy =
            options.namingStrategy || new DefaultNamingStrategy();
        this.metadataTableName = options.metadataTableName || "typeorm_metadata";
        this.queryResultCache = options.cache
            ? new QueryResultCacheFactory(this).create()
            : undefined;
        this.relationLoader = new RelationLoader(this);
        this.relationIdLoader = new RelationIdLoader(this);
        this.isInitialized = false;
    }
    // -------------------------------------------------------------------------
    // Public Accessors
    // -------------------------------------------------------------------------
    /**
     Indicates if DataSource is initialized or not.
     *
     * @deprecated use .isInitialized instead
     */
    get isConnected() {
        return this.isInitialized;
    }
    /**
     * Gets the mongodb entity manager that allows to perform mongodb-specific repository operations
     * with any entity in this connection.
     *
     * Available only in mongodb connections.
     */
    get mongoManager() {
        if (!InstanceChecker.isMongoEntityManager(this.manager))
            throw new TypeORMError(`MongoEntityManager is only available for MongoDB databases.`);
        return this.manager;
    }
    /**
     * Gets a sql.js specific Entity Manager that allows to perform special load and save operations
     *
     * Available only in connection with the sqljs driver.
     */
    get sqljsManager() {
        if (!InstanceChecker.isSqljsEntityManager(this.manager))
            throw new TypeORMError(`SqljsEntityManager is only available for Sqljs databases.`);
        return this.manager;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Updates current connection options with provided options.
     */
    setOptions(options) {
        Object.assign(this.options, options);
        if (options.logger || options.logging) {
            this.logger = new LoggerFactory().create(options.logger || this.options.logger, options.logging || this.options.logging);
        }
        if (options.namingStrategy) {
            this.namingStrategy = options.namingStrategy;
        }
        if (options.cache) {
            this.queryResultCache = new QueryResultCacheFactory(this).create();
        }
        // todo: we must update the database in the driver as well, if it was set by setOptions method
        //  in the future we need to refactor the code and remove "database" from the driver, and instead
        //  use database (and options) from a single place - data source.
        if (options.database) {
            this.driver.database = DriverUtils.buildDriverOptions(this.options).database;
        }
        // todo: need to take a look if we need to update schema and other "poor" properties
        return this;
    }
    /**
     * Performs connection to the database.
     * This method should be called once on application bootstrap.
     * This method not necessarily creates database connection (depend on database type),
     * but it also can setup a connection pool with database to use.
     */
    async initialize() {
        if (this.isInitialized)
            throw new CannotConnectAlreadyConnectedError(this.name);
        // connect to the database via its driver
        await this.driver.connect();
        // connect to the cache-specific database if cache is enabled
        if (this.queryResultCache)
            await this.queryResultCache.connect();
        // set connected status for the current connection
        ObjectUtils.assign(this, { isInitialized: true });
        try {
            // build all metadatas registered in the current connection
            await this.buildMetadatas();
            await this.driver.afterConnect();
            // if option is set - drop schema once connection is done
            if (this.options.dropSchema)
                await this.dropDatabase();
            // if option is set - automatically synchronize a schema
            if (this.options.migrationsRun)
                await this.runMigrations({
                    transaction: this.options.migrationsTransactionMode,
                });
            // if option is set - automatically synchronize a schema
            if (this.options.synchronize)
                await this.synchronize();
        }
        catch (error) {
            // if for some reason build metadata fail (for example validation error during entity metadata check)
            // connection needs to be closed
            await this.destroy();
            throw error;
        }
        return this;
    }
    /**
     * Performs connection to the database.
     * This method should be called once on application bootstrap.
     * This method not necessarily creates database connection (depend on database type),
     * but it also can setup a connection pool with database to use.
     *
     * @deprecated use .initialize method instead
     */
    async connect() {
        return this.initialize();
    }
    /**
     * Closes connection with the database.
     * Once connection is closed, you cannot use repositories or perform any operations except opening connection again.
     */
    async destroy() {
        if (!this.isInitialized)
            throw new CannotExecuteNotConnectedError(this.name);
        await this.driver.disconnect();
        // disconnect from the cache-specific database if cache was enabled
        if (this.queryResultCache)
            await this.queryResultCache.disconnect();
        ObjectUtils.assign(this, { isInitialized: false });
    }
    /**
     * Closes connection with the database.
     * Once connection is closed, you cannot use repositories or perform any operations except opening connection again.
     *
     * @deprecated use .destroy method instead
     */
    async close() {
        return this.destroy();
    }
    /**
     * Creates database schema for all entities registered in this connection.
     * Can be used only after connection to the database is established.
     *
     * @param dropBeforeSync If set to true then it drops the database with all its tables and data
     */
    async synchronize(dropBeforeSync = false) {
        if (!this.isInitialized)
            throw new CannotExecuteNotConnectedError(this.name);
        if (dropBeforeSync)
            await this.dropDatabase();
        const schemaBuilder = this.driver.createSchemaBuilder();
        await schemaBuilder.build();
    }
    /**
     * Drops the database and all its data.
     * Be careful with this method on production since this method will erase all your database tables and their data.
     * Can be used only after connection to the database is established.
     */
    // TODO rename
    async dropDatabase() {
        const queryRunner = this.createQueryRunner();
        try {
            if (this.driver.options.type === "mssql" ||
                DriverUtils.isMySQLFamily(this.driver) ||
                this.driver.options.type === "aurora-mysql" ||
                DriverUtils.isSQLiteFamily(this.driver)) {
                const databases = [];
                this.entityMetadatas.forEach((metadata) => {
                    if (metadata.database &&
                        databases.indexOf(metadata.database) === -1)
                        databases.push(metadata.database);
                });
                if (databases.length === 0 && this.driver.database) {
                    databases.push(this.driver.database);
                }
                if (databases.length === 0) {
                    await queryRunner.clearDatabase();
                }
                else {
                    for (const database of databases) {
                        await queryRunner.clearDatabase(database);
                    }
                }
            }
            else {
                await queryRunner.clearDatabase();
            }
        }
        finally {
            await queryRunner.release();
        }
    }
    /**
     * Runs all pending migrations.
     * Can be used only after connection to the database is established.
     */
    async runMigrations(options) {
        if (!this.isInitialized)
            throw new CannotExecuteNotConnectedError(this.name);
        const migrationExecutor = new MigrationExecutor(this);
        migrationExecutor.transaction =
            options?.transaction ||
                this.options?.migrationsTransactionMode ||
                "all";
        migrationExecutor.fake = (options && options.fake) || false;
        const successMigrations = await migrationExecutor.executePendingMigrations();
        return successMigrations;
    }
    /**
     * Reverts last executed migration.
     * Can be used only after connection to the database is established.
     */
    async undoLastMigration(options) {
        if (!this.isInitialized)
            throw new CannotExecuteNotConnectedError(this.name);
        const migrationExecutor = new MigrationExecutor(this);
        migrationExecutor.transaction =
            (options && options.transaction) || "all";
        migrationExecutor.fake = (options && options.fake) || false;
        await migrationExecutor.undoLastMigration();
    }
    /**
     * Lists all migrations and whether they have been run.
     * Returns true if there are pending migrations
     */
    async showMigrations() {
        if (!this.isInitialized) {
            throw new CannotExecuteNotConnectedError(this.name);
        }
        const migrationExecutor = new MigrationExecutor(this);
        return await migrationExecutor.showMigrations();
    }
    /**
     * Checks if entity metadata exist for the given entity class, target name or table name.
     */
    hasMetadata(target) {
        return !!this.findMetadata(target);
    }
    /**
     * Gets entity metadata for the given entity class or schema name.
     */
    getMetadata(target) {
        const metadata = this.findMetadata(target);
        if (!metadata)
            throw new EntityMetadataNotFoundError(target);
        return metadata;
    }
    /**
     * Gets repository for the given entity.
     */
    getRepository(target) {
        return this.manager.getRepository(target);
    }
    /**
     * Gets tree repository for the given entity class or name.
     * Only tree-type entities can have a TreeRepository, like ones decorated with @Tree decorator.
     */
    getTreeRepository(target) {
        return this.manager.getTreeRepository(target);
    }
    /**
     * Gets mongodb-specific repository for the given entity class or name.
     * Works only if connection is mongodb-specific.
     */
    getMongoRepository(target) {
        if (!(this.driver.options.type === "mongodb"))
            throw new TypeORMError(`You can use getMongoRepository only for MongoDB connections.`);
        return this.manager.getRepository(target);
    }
    /**
     * Gets custom entity repository marked with @EntityRepository decorator.
     *
     * @deprecated use Repository.extend function to create a custom repository
     */
    getCustomRepository(customRepository) {
        return this.manager.getCustomRepository(customRepository);
    }
    async transaction(isolationOrRunInTransaction, runInTransactionParam) {
        return this.manager.transaction(isolationOrRunInTransaction, runInTransactionParam);
    }
    /**
     * Executes raw SQL query and returns raw database results.
     *
     * @see [Official docs](https://typeorm.io/data-source-api) for examples.
     */
    async query(query, parameters, queryRunner) {
        if (InstanceChecker.isMongoEntityManager(this.manager))
            throw new TypeORMError(`Queries aren't supported by MongoDB.`);
        if (queryRunner && queryRunner.isReleased)
            throw new QueryRunnerProviderAlreadyReleasedError();
        const usedQueryRunner = queryRunner || this.createQueryRunner();
        try {
            return await usedQueryRunner.query(query, parameters); // await is needed here because we are using finally
        }
        finally {
            if (!queryRunner)
                await usedQueryRunner.release();
        }
    }
    /**
     * Tagged template function that executes raw SQL query and returns raw database results.
     * Template expressions are automatically transformed into database parameters.
     * Raw query execution is supported only by relational databases (MongoDB is not supported).
     * Note: Don't call this as a regular function, it is meant to be used with backticks to tag a template literal.
     * Example: dataSource.sql`SELECT * FROM table_name WHERE id = ${id}`
     */
    async sql(strings, ...values) {
        const { query, parameters } = buildSqlTag({
            driver: this.driver,
            strings: strings,
            expressions: values,
        });
        return await this.query(query, parameters);
    }
    /**
     * Creates a new query builder that can be used to build a SQL query.
     */
    createQueryBuilder(entityOrRunner, alias, queryRunner) {
        if (InstanceChecker.isMongoEntityManager(this.manager))
            throw new TypeORMError(`Query Builder is not supported by MongoDB.`);
        if (alias) {
            alias = DriverUtils.buildAlias(this.driver, undefined, alias);
            const metadata = this.getMetadata(entityOrRunner);
            return new SelectQueryBuilder(this, queryRunner)
                .select(alias)
                .from(metadata.target, alias);
        }
        else {
            return new SelectQueryBuilder(this, entityOrRunner);
        }
    }
    /**
     * Creates a query runner used for perform queries on a single database connection.
     * Using query runners you can control your queries to execute using single database connection and
     * manually control your database transaction.
     *
     * Mode is used in replication mode and indicates whatever you want to connect
     * to master database or any of slave databases.
     * If you perform writes you must use master database,
     * if you perform reads you can use slave databases.
     */
    createQueryRunner(mode = "master") {
        const queryRunner = this.driver.createQueryRunner(mode);
        const manager = this.createEntityManager(queryRunner);
        Object.assign(queryRunner, { manager: manager });
        return queryRunner;
    }
    /**
     * Gets entity metadata of the junction table (many-to-many table).
     */
    getManyToManyMetadata(entityTarget, relationPropertyPath) {
        const relationMetadata = this.getMetadata(entityTarget).findRelationWithPropertyPath(relationPropertyPath);
        if (!relationMetadata)
            throw new TypeORMError(`Relation "${relationPropertyPath}" was not found in ${entityTarget} entity.`);
        if (!relationMetadata.isManyToMany)
            throw new TypeORMError(`Relation "${entityTarget}#${relationPropertyPath}" does not have a many-to-many relationship.` +
                `You can use this method only on many-to-many relations.`);
        return relationMetadata.junctionEntityMetadata;
    }
    /**
     * Creates an Entity Manager for the current connection with the help of the EntityManagerFactory.
     */
    createEntityManager(queryRunner) {
        return new EntityManagerFactory().create(this, queryRunner);
    }
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    /**
     * Finds exist entity metadata by the given entity class, target name or table name.
     */
    findMetadata(target) {
        const metadataFromMap = this.entityMetadatasMap.get(target);
        if (metadataFromMap)
            return metadataFromMap;
        for (const [_, metadata] of this.entityMetadatasMap) {
            if (InstanceChecker.isEntitySchema(target) &&
                metadata.name === target.options.name) {
                return metadata;
            }
            if (typeof target === "string") {
                if (target.indexOf(".") !== -1) {
                    if (metadata.tablePath === target) {
                        return metadata;
                    }
                }
                else {
                    if (metadata.name === target ||
                        metadata.tableName === target) {
                        return metadata;
                    }
                }
            }
            if (ObjectUtils.isObjectWithName(target) &&
                typeof target.name === "string") {
                if (target.name.indexOf(".") !== -1) {
                    if (metadata.tablePath === target.name) {
                        return metadata;
                    }
                }
                else {
                    if (metadata.name === target.name ||
                        metadata.tableName === target.name) {
                        return metadata;
                    }
                }
            }
        }
        return undefined;
    }
    /**
     * Builds metadatas for all registered classes inside this connection.
     */
    async buildMetadatas() {
        const connectionMetadataBuilder = new ConnectionMetadataBuilder(this);
        const entityMetadataValidator = new EntityMetadataValidator();
        // create subscribers instances if they are not disallowed from high-level (for example they can disallowed from migrations run process)
        const flattenedSubscribers = ObjectUtils.mixedListToArray(this.options.subscribers || []);
        const subscribers = await connectionMetadataBuilder.buildSubscribers(flattenedSubscribers);
        ObjectUtils.assign(this, { subscribers: subscribers });
        // build entity metadatas
        const flattenedEntities = ObjectUtils.mixedListToArray(this.options.entities || []);
        const entityMetadatas = await connectionMetadataBuilder.buildEntityMetadatas(flattenedEntities);
        ObjectUtils.assign(this, {
            entityMetadatas: entityMetadatas,
            entityMetadatasMap: new Map(entityMetadatas.map((metadata) => [metadata.target, metadata])),
        });
        // create migration instances
        const flattenedMigrations = ObjectUtils.mixedListToArray(this.options.migrations || []);
        const migrations = await connectionMetadataBuilder.buildMigrations(flattenedMigrations);
        ObjectUtils.assign(this, { migrations: migrations });
        // validate all created entity metadatas to make sure user created entities are valid and correct
        entityMetadataValidator.validateMany(this.entityMetadatas.filter((metadata) => metadata.tableType !== "view"), this.driver);
        // set current data source to the entities
        for (const entityMetadata of entityMetadatas) {
            if (InstanceChecker.isBaseEntityConstructor(entityMetadata.target)) {
                entityMetadata.target.useDataSource(this);
            }
        }
    }
    /**
     * Get the replication mode SELECT queries should use for this datasource by default
     */
    defaultReplicationModeForReads() {
        if ("replication" in this.driver.options &&
            this.driver.options.replication) {
            const value = this.driver.options.replication.defaultMode;
            if (value) {
                return value;
            }
        }
        return "slave";
    }
}

//# sourceMappingURL=DataSource.js.map
