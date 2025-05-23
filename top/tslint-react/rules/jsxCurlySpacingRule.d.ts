/**
 * @license
 * Copyright 2016 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as Lint from "tslint";
import * as ts from "typescript";
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_NO_ENDING_SPACE: (token: string) => string;
    static FAILURE_NO_BEGINNING_SPACE: (token: string) => string;
    static FAILURE_FORBIDDEN_SPACES_BEGINNING: (token: string) => string;
    static FAILURE_FORBIDDEN_SPACES_END: (token: string) => string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
