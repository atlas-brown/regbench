/*! firebase-admin v13.4.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
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
import { App } from '../app/index';
import { TenantManager } from './tenant-manager';
import { BaseAuth } from './base-auth';
import { ProjectConfigManager } from './project-config-manager';
/**
 * Auth service bound to the provided app.
 * An Auth instance can have multiple tenants.
 */
export declare class Auth extends BaseAuth {
    private readonly tenantManager_;
    private readonly projectConfigManager_;
    private readonly app_;
    /**
     * Returns the app associated with this Auth instance.
     *
     * @returns The app associated with this Auth instance.
     */
    get app(): App;
    /**
     * Returns the tenant manager instance associated with the current project.
     *
     * @returns The tenant manager instance associated with the current project.
     */
    tenantManager(): TenantManager;
    /**
     * Returns the project config manager instance associated with the current project.
     *
     * @returns The project config manager instance associated with the current project.
     */
    projectConfigManager(): ProjectConfigManager;
}
