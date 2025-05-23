"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CordovaQueryRunner = void 0;
const error_1 = require("../../error");
const QueryFailedError_1 = require("../../error/QueryFailedError");
const QueryRunnerAlreadyReleasedError_1 = require("../../error/QueryRunnerAlreadyReleasedError");
const QueryResult_1 = require("../../query-runner/QueryResult");
const Broadcaster_1 = require("../../subscriber/Broadcaster");
const BroadcasterResult_1 = require("../../subscriber/BroadcasterResult");
const AbstractSqliteQueryRunner_1 = require("../sqlite-abstract/AbstractSqliteQueryRunner");
/**
 * Runs queries on a single sqlite database connection.
 */
class CordovaQueryRunner extends AbstractSqliteQueryRunner_1.AbstractSqliteQueryRunner {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(driver) {
        super();
        this.driver = driver;
        this.connection = driver.connection;
        this.broadcaster = new Broadcaster_1.Broadcaster(this);
    }
    /**
     * Called before migrations are run.
     */
    async beforeMigration() {
        await this.query(`PRAGMA foreign_keys = OFF`);
    }
    /**
     * Called after migrations are run.
     */
    async afterMigration() {
        await this.query(`PRAGMA foreign_keys = ON`);
    }
    /**
     * Executes a given SQL query.
     */
    async query(query, parameters, useStructuredResult = false) {
        if (this.isReleased)
            throw new QueryRunnerAlreadyReleasedError_1.QueryRunnerAlreadyReleasedError();
        const databaseConnection = await this.connect();
        this.driver.connection.logger.logQuery(query, parameters, this);
        await this.broadcaster.broadcast("BeforeQuery", query, parameters);
        const broadcasterResult = new BroadcasterResult_1.BroadcasterResult();
        const queryStartTime = Date.now();
        try {
            const raw = await new Promise(async (ok, fail) => {
                databaseConnection.executeSql(query, parameters, (raw) => ok(raw), (err) => fail(err));
            });
            // log slow queries if maxQueryExecution time is set
            const maxQueryExecutionTime = this.driver.options.maxQueryExecutionTime;
            const queryEndTime = Date.now();
            const queryExecutionTime = queryEndTime - queryStartTime;
            this.broadcaster.broadcastAfterQueryEvent(broadcasterResult, query, parameters, true, queryExecutionTime, raw, undefined);
            if (maxQueryExecutionTime &&
                queryExecutionTime > maxQueryExecutionTime) {
                this.driver.connection.logger.logQuerySlow(queryExecutionTime, query, parameters, this);
            }
            const result = new QueryResult_1.QueryResult();
            if (query.substr(0, 11) === "INSERT INTO") {
                result.raw = raw.insertId;
            }
            else {
                const resultSet = [];
                for (let i = 0; i < raw.rows.length; i++) {
                    resultSet.push(raw.rows.item(i));
                }
                result.records = resultSet;
                result.raw = resultSet;
            }
            if (useStructuredResult) {
                return result;
            }
            else {
                return result.raw;
            }
        }
        catch (err) {
            this.driver.connection.logger.logQueryError(err, query, parameters, this);
            this.broadcaster.broadcastAfterQueryEvent(broadcasterResult, query, parameters, false, undefined, undefined, err);
            throw new QueryFailedError_1.QueryFailedError(query, parameters, err);
        }
        finally {
            await broadcasterResult.wait();
        }
    }
    /**
     * Insert a new row with given values into the given table.
     * Returns value of the generated column if given and generate column exist in the table.
     // todo: implement new syntax
    async insert(tableName: string, keyValues: ObjectLiteral): Promise<InsertResult> {
        const keys = Object.keys(keyValues);
        const columns = keys.map(key => `"${key}"`).join(", ");
        const values = keys.map(key => "?").join(",");
        const generatedColumns = this.connection.hasMetadata(tableName) ? this.connection.getMetadata(tableName).generatedColumns : [];
        const sql = columns.length > 0 ? (`INSERT INTO "${tableName}"(${columns}) VALUES (${values})`) : `INSERT INTO "${tableName}" DEFAULT VALUES`;
        const parameters = keys.map(key => keyValues[key]);

        return new Promise<InsertResult>(async (ok, fail) => {
            this.driver.connection.logger.logQuery(sql, parameters, this);
            const __this = this;
            const databaseConnection = await this.connect();
            databaseConnection.executeSql(sql, parameters, (resultSet: any) => {
                const generatedMap = generatedColumns.reduce((map, generatedColumn) => {
                    const value = generatedColumn.isPrimary && generatedColumn.generationStrategy === "increment" && resultSet.insertId ? resultSet.insertId : keyValues[generatedColumn.databaseName];
                    if (!value) return map;
                    return OrmUtils.mergeDeep(map, generatedColumn.createValueMap(value));
                }, {} as ObjectLiteral);

                ok({
                    result: undefined,
                    generatedMap: Object.keys(generatedMap).length > 0 ? generatedMap : undefined
                });
            }, (err: any) => {
                __this.driver.connection.logger.logQueryError(err, sql, parameters, this);
                fail(err);
            });
        });
    }*/
    /**
     * Would start a transaction but this driver does not support transactions.
     */
    async startTransaction() {
        throw new error_1.TypeORMError("Transactions are not supported by the Cordova driver");
    }
    /**
     * Would start a transaction but this driver does not support transactions.
     */
    async commitTransaction() {
        throw new error_1.TypeORMError("Transactions are not supported by the Cordova driver");
    }
    /**
     * Would start a transaction but this driver does not support transactions.
     */
    async rollbackTransaction() {
        throw new error_1.TypeORMError("Transactions are not supported by the Cordova driver");
    }
    /**
     * Removes all tables from the currently connected database.
     * Be careful with using this method and avoid using it in production or migrations
     * (because it can clear all your database).
     */
    async clearDatabase() {
        await this.query(`PRAGMA foreign_keys = OFF`);
        try {
            const selectViewDropsQuery = `SELECT 'DROP VIEW "' || name || '";' as query FROM "sqlite_master" WHERE "type" = 'view'`;
            const dropViewQueries = await this.query(selectViewDropsQuery);
            const selectTableDropsQuery = `SELECT 'DROP TABLE "' || name || '";' as query FROM "sqlite_master" WHERE "type" = 'table' AND "name" != 'sqlite_sequence'`;
            const dropTableQueries = await this.query(selectTableDropsQuery);
            await Promise.all(dropViewQueries.map((q) => this.query(q["query"])));
            await Promise.all(dropTableQueries.map((q) => this.query(q["query"])));
        }
        finally {
            await this.query(`PRAGMA foreign_keys = ON`);
        }
    }
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    /**
     * Parametrizes given object of values. Used to create column=value queries.
     */
    parametrize(objectLiteral, startIndex = 0) {
        return Object.keys(objectLiteral).map((key, index) => `"${key}"` + "=?");
    }
}
exports.CordovaQueryRunner = CordovaQueryRunner;

//# sourceMappingURL=CordovaQueryRunner.js.map
