/*! firebase-admin v13.4.0 */
/*!
 * Copyright 2020 Google Inc.
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
import { PrefixedFirebaseError } from '../utils/error';
export type RemoteConfigErrorCode = 'aborted' | 'already-exists' | 'failed-precondition' | 'internal-error' | 'invalid-argument' | 'not-found' | 'out-of-range' | 'permission-denied' | 'resource-exhausted' | 'unauthenticated' | 'unknown-error';
/**
 * Firebase Remote Config error code structure. This extends PrefixedFirebaseError.
 *
 * @param {RemoteConfigErrorCode} code The error code.
 * @param {string} message The error message.
 * @constructor
 */
export declare class FirebaseRemoteConfigError extends PrefixedFirebaseError {
    constructor(code: RemoteConfigErrorCode, message: string);
}
