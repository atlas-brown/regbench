/*! firebase-admin v13.4.0 */
"use strict";
/*!
 * @license
 * Copyright 2021 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueue = exports.Functions = void 0;
exports.getFunctions = getFunctions;
/**
 * Firebase Functions service.
 *
 * @packageDocumentation
 */
const app_1 = require("../app");
const functions_1 = require("./functions");
var functions_2 = require("./functions");
Object.defineProperty(exports, "Functions", { enumerable: true, get: function () { return functions_2.Functions; } });
Object.defineProperty(exports, "TaskQueue", { enumerable: true, get: function () { return functions_2.TaskQueue; } });
/**
 * Gets the {@link Functions} service for the default app
 * or a given app.
 *
 * `getFunctions()` can be called with no arguments to access the default
 * app's `Functions` service or as `getFunctions(app)` to access the
 * `Functions` service associated with a specific app.
 *
 * @example
 * ```javascript
 * // Get the `Functions` service for the default app
 * const defaultFunctions = getFunctions();
 * ```
 *
 * @example
 * ```javascript
 * // Get the `Functions` service for a given app
 * const otherFunctions = getFunctions(otherApp);
 * ```
 *
 * @param app - Optional app for which to return the `Functions` service.
 *   If not provided, the default `Functions` service is returned.
 *
 * @returns The default `Functions` service if no app is provided, or the `Functions`
 *   service associated with the provided app.
 */
function getFunctions(app) {
    if (typeof app === 'undefined') {
        app = (0, app_1.getApp)();
    }
    const firebaseApp = app;
    return firebaseApp.getOrInitService('functions', (app) => new functions_1.Functions(app));
}
