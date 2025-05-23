/*! firebase-admin v13.4.0 */
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
import { App, AppOptions } from './core';
export declare class AppStore {
    private readonly appStore;
    initializeApp(options?: AppOptions, appName?: string): App;
    getApp(appName?: string): App;
    getApps(): App[];
    deleteApp(app: App): Promise<void>;
    clearAllApps(): Promise<void>;
    /**
     * Removes the specified App instance from the store. This is currently called by the
     * {@link FirebaseApp.delete} method. Can be removed once the app deletion is handled
     * entirely by the {@link deleteApp} top-level function.
     */
    removeApp(appName: string): void;
}
export declare const defaultAppStore: AppStore;
export declare function initializeApp(options?: AppOptions, appName?: string): App;
export declare function getApp(appName?: string): App;
export declare function getApps(): App[];
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
export declare function deleteApp(app: App): Promise<void>;
/**
 * Constant holding the environment variable name with the default config.
 * If the environment variable contains a string that starts with '{' it will be parsed as JSON,
 * otherwise it will be assumed to be pointing to a file.
 */
export declare const FIREBASE_CONFIG_VAR = "FIREBASE_CONFIG";
