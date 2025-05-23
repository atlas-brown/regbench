/*! firebase-admin v13.4.0 */
"use strict";
/*!
 * Copyright 2019 Google Inc.
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
exports.FirebaseSecurityRulesError = void 0;
const error_1 = require("../utils/error");
class FirebaseSecurityRulesError extends error_1.PrefixedFirebaseError {
    constructor(code, message) {
        super('security-rules', code, message);
    }
}
exports.FirebaseSecurityRulesError = FirebaseSecurityRulesError;
