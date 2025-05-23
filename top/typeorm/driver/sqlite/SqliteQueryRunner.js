"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqliteQueryRunner = void 0;
const ConnectionIsNotSetError_1 = require("../../error/ConnectionIsNotSetError");
const QueryFailedError_1 = require("../../error/QueryFailedError");
const QueryRunnerAlreadyReleasedError_1 = require("../../error/QueryRunnerAlreadyReleasedError");
const QueryResult_1 = require("../../query-runner/QueryResult");
const Broadcaster_1 = require("../../subscriber/Broadcaster");
const BroadcasterResult_1 = require("../../subscriber/BroadcasterResult");
const AbstractSqliteQueryRunner_1 = require("../sqlite-abstract/AbstractSqliteQueryRunner");
/**
 * Runs queries on a single sqlite database connection.
 *
 * Does not support compose primary keys with autoincrement field.
 * todo: need to throw exception for this case.
 */
class SqliteQueryRunner extends AbstractSqliteQueryRunner_1.AbstractSqliteQueryRunner {
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
        const connection = this.driver.connection;
        const options = connection.options;
        const maxQueryExecutionTime = this.driver.options.maxQueryExecutionTime;
        const broadcaster = this.broadcaster;
        if (!connection.isInitialized) {
            throw new ConnectionIsNotSetError_1.ConnectionIsNotSetError("sqlite");
        }
        const databaseConnection = await this.connect();
        this.driver.connection.logger.logQuery(query, parameters, this);
        await broadcaster.broadcast("BeforeQuery", query, parameters);
        const broadcasterResult = new BroadcasterResult_1.BroadcasterResult();
        return new Promise(async (ok, fail) => {
            try {
                const queryStartTime = Date.now();
                const isInsertQuery = query.startsWith("INSERT ");
                const isDeleteQuery = query.startsWith("DELETE ");
                const isUpdateQuery = query.startsWith("UPDATE ");
                const execute = async () => {
                    if (isInsertQuery || isDeleteQuery || isUpdateQuery) {
                        await databaseConnection.run(query, parameters, handler);
                    }
                    else {
                        await databaseConnection.all(query, parameters, handler);
                    }
                };
                const self = this;
                const handler = function (err, rows) {
                    if (err && err.toString().indexOf("SQLITE_BUSY:") !== -1) {
                        if (typeof options.busyErrorRetry === "number" &&
                            options.busyErrorRetry > 0) {
                            setTimeout(execute, options.busyErrorRetry);
                            return;
                        }
                    }
                    // log slow queries if maxQueryExecution time is set
                    const queryEndTime = Date.now();
                    const queryExecutionTime = queryEndTime - queryStartTime;
                    if (maxQueryExecutionTime &&
                        queryExecutionTime > maxQueryExecutionTime)
                        connection.logger.logQuerySlow(queryExecutionTime, query, parameters, self);
                    if (err) {
                        connection.logger.logQueryError(err, query, parameters, self);
                        broadcaster.broadcastAfterQueryEvent(broadcasterResult, query, parameters, false, undefined, undefined, err);
                        return fail(new QueryFailedError_1.QueryFailedError(query, parameters, err));
                    }
                    else {
                        const result = new QueryResult_1.QueryResult();
                        if (isInsertQuery) {
                            result.raw = this["lastID"];
                        }
                        else {
                            result.raw = rows;
                        }
                        broadcaster.broadcastAfterQueryEvent(broadcasterResult, query, parameters, true, queryExecutionTime, result.raw, undefined);
                        if (Array.isArray(rows)) {
                            result.records = rows;
                        }
                        result.affected = this["changes"];
                        if (useStructuredResult) {
                            ok(result);
                        }
                        else {
                            ok(result.raw);
                        }
                    }
                };
                await execute();
            }
            catch (err) {
                fail(err);
            }
            finally {
                await broadcasterResult.wait();
            }
        });
    }
}
exports.SqliteQueryRunner = SqliteQueryRunner;

//# sourceMappingURL=SqliteQueryRunner.js.map
