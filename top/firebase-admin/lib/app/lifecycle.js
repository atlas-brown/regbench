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
exports.FIREBASE_CONFIG_VAR = exports.defaultAppStore = exports.AppStore = void 0;
exports.initializeApp = initializeApp;
exports.getApp = getApp;
exports.getApps = getApps;
exports.deleteApp = deleteApp;
const fs = require("fs");
const validator = require("../utils/validator");
const error_1 = require("../utils/error");
const credential_internal_1 = require("./credential-internal");
const firebase_app_1 = require("./firebase-app");
const DEFAULT_APP_NAME = '[DEFAULT]';
class AppStore {
    constructor() {
        this.appStore = new Map();
    }
    initializeApp(options, appName = DEFAULT_APP_NAME) {
        if (typeof options === 'undefined') {
            options = loadOptionsFromEnvVar();
            options.credential = (0, credential_internal_1.getApplicationDefault)();
        }
        if (typeof appName !== 'string' || appName === '') {
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_NAME, `Invalid Firebase app name "${appName}" provided. App name must be a non-empty string.`);
        }
        else if (this.appStore.has(appName)) {
            if (appName === DEFAULT_APP_NAME) {
                throw new error_1.FirebaseAppError(error_1.AppErrorCodes.DUPLICATE_APP, 'The default Firebase app already exists. This means you called initializeApp() ' +
                    'more than once without providing an app name as the second argument. In most cases ' +
                    'you only need to call initializeApp() once. But if you do want to initialize ' +
                    'multiple apps, pass a second argument to initializeApp() to give each app a unique ' +
                    'name.');
            }
            else {
                throw new error_1.FirebaseAppError(error_1.AppErrorCodes.DUPLICATE_APP, `Firebase app named "${appName}" already exists. This means you called initializeApp() ` +
                    'more than once with the same app name as the second argument. Make sure you provide a ' +
                    'unique name every time you call initializeApp().');
            }
        }
        const app = new firebase_app_1.FirebaseApp(options, appName, this);
        this.appStore.set(app.name, app);
        return app;
    }
    getApp(appName = DEFAULT_APP_NAME) {
        if (typeof appName !== 'string' || appName === '') {
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_NAME, `Invalid Firebase app name "${appName}" provided. App name must be a non-empty string.`);
        }
        else if (!this.appStore.has(appName)) {
            let errorMessage = (appName === DEFAULT_APP_NAME)
                ? 'The default Firebase app does not exist. ' : `Firebase app named "${appName}" does not exist. `;
            errorMessage += 'Make sure you call initializeApp() before using any of the Firebase services.';
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.NO_APP, errorMessage);
        }
        return this.appStore.get(appName);
    }
    getApps() {
        // Return a copy so the caller cannot mutate the array
        return Array.from(this.appStore.values());
    }
    deleteApp(app) {
        if (typeof app !== 'object' || app === null || !('options' in app)) {
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_ARGUMENT, 'Invalid app argument.');
        }
        // Make sure the given app already exists.
        const existingApp = getApp(app.name);
        // Delegate delete operation to the App instance itself. That will also remove the App
        // instance from the AppStore.
        return existingApp.delete();
    }
    clearAllApps() {
        const promises = [];
        this.getApps().forEach((app) => {
            promises.push(this.deleteApp(app));
        });
        return Promise.all(promises).then();
    }
    /**
     * Removes the specified App instance from the store. This is currently called by the
     * {@link FirebaseApp.delete} method. Can be removed once the app deletion is handled
     * entirely by the {@link deleteApp} top-level function.
     */
    removeApp(appName) {
        this.appStore.delete(appName);
    }
}
exports.AppStore = AppStore;
exports.defaultAppStore = new AppStore();
function initializeApp(options, appName = DEFAULT_APP_NAME) {
    return exports.defaultAppStore.initializeApp(options, appName);
}
function getApp(appName = DEFAULT_APP_NAME) {
    return exports.defaultAppStore.getApp(appName);
}
function getApps() {
    return exports.defaultAppStore.getApps();
}
/**
 * Renders this given `App` unusable and frees the resources of
 * all associated services (though it does *not* clean up any backend
 * resources). When running the SDK locally, this method
 * must be called to ensure graceful termination of the process.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 */
function deleteApp(app) {
    return exports.defaultAppStore.deleteApp(app);
}
/**
 * Constant holding the environment variable name with the default config.
 * If the environment variable contains a string that starts with '{' it will be parsed as JSON,
 * otherwise it will be assumed to be pointing to a file.
 */
exports.FIREBASE_CONFIG_VAR = 'FIREBASE_CONFIG';
/**
 * Parse the file pointed to by the FIREBASE_CONFIG_VAR, if it exists.
 * Or if the FIREBASE_CONFIG_ENV contains a valid JSON object, parse it directly.
 * If the environment variable contains a string that starts with '{' it will be parsed as JSON,
 * otherwise it will be assumed to be pointing to a file.
 */
function loadOptionsFromEnvVar() {
    const config = process.env[exports.FIREBASE_CONFIG_VAR];
    if (!validator.isNonEmptyString(config)) {
        return {};
    }
    try {
        const contents = config.startsWith('{') ? config : fs.readFileSync(config, 'utf8');
        return JSON.parse(contents);
    }
    catch (error) {
        // Throw a nicely formed error message if the file contents cannot be parsed
        throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_OPTIONS, 'Failed to parse app options file: ' + error);
    }
}
