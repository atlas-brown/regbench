"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPlus = exports.merchantapi_reviews_v1beta = exports.merchantapi_reports_v1beta = exports.merchantapi_quota_v1beta = exports.merchantapi_promotions_v1beta = exports.merchantapi_products_v1beta = exports.merchantapi_notifications_v1beta = exports.merchantapi_lfp_v1beta = exports.merchantapi_inventories_v1beta = exports.merchantapi_datasources_v1beta = exports.merchantapi_conversions_v1beta = exports.merchantapi_accounts_v1beta = exports.auth = exports.merchantapi = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const accounts_v1beta_1 = require("./accounts_v1beta");
Object.defineProperty(exports, "merchantapi_accounts_v1beta", { enumerable: true, get: function () { return accounts_v1beta_1.merchantapi_accounts_v1beta; } });
const conversions_v1beta_1 = require("./conversions_v1beta");
Object.defineProperty(exports, "merchantapi_conversions_v1beta", { enumerable: true, get: function () { return conversions_v1beta_1.merchantapi_conversions_v1beta; } });
const datasources_v1beta_1 = require("./datasources_v1beta");
Object.defineProperty(exports, "merchantapi_datasources_v1beta", { enumerable: true, get: function () { return datasources_v1beta_1.merchantapi_datasources_v1beta; } });
const inventories_v1beta_1 = require("./inventories_v1beta");
Object.defineProperty(exports, "merchantapi_inventories_v1beta", { enumerable: true, get: function () { return inventories_v1beta_1.merchantapi_inventories_v1beta; } });
const lfp_v1beta_1 = require("./lfp_v1beta");
Object.defineProperty(exports, "merchantapi_lfp_v1beta", { enumerable: true, get: function () { return lfp_v1beta_1.merchantapi_lfp_v1beta; } });
const notifications_v1beta_1 = require("./notifications_v1beta");
Object.defineProperty(exports, "merchantapi_notifications_v1beta", { enumerable: true, get: function () { return notifications_v1beta_1.merchantapi_notifications_v1beta; } });
const products_v1beta_1 = require("./products_v1beta");
Object.defineProperty(exports, "merchantapi_products_v1beta", { enumerable: true, get: function () { return products_v1beta_1.merchantapi_products_v1beta; } });
const promotions_v1beta_1 = require("./promotions_v1beta");
Object.defineProperty(exports, "merchantapi_promotions_v1beta", { enumerable: true, get: function () { return promotions_v1beta_1.merchantapi_promotions_v1beta; } });
const quota_v1beta_1 = require("./quota_v1beta");
Object.defineProperty(exports, "merchantapi_quota_v1beta", { enumerable: true, get: function () { return quota_v1beta_1.merchantapi_quota_v1beta; } });
const reports_v1beta_1 = require("./reports_v1beta");
Object.defineProperty(exports, "merchantapi_reports_v1beta", { enumerable: true, get: function () { return reports_v1beta_1.merchantapi_reports_v1beta; } });
const reviews_v1beta_1 = require("./reviews_v1beta");
Object.defineProperty(exports, "merchantapi_reviews_v1beta", { enumerable: true, get: function () { return reviews_v1beta_1.merchantapi_reviews_v1beta; } });
exports.VERSIONS = {
    accounts_v1beta: accounts_v1beta_1.merchantapi_accounts_v1beta.Merchantapi,
    conversions_v1beta: conversions_v1beta_1.merchantapi_conversions_v1beta.Merchantapi,
    datasources_v1beta: datasources_v1beta_1.merchantapi_datasources_v1beta.Merchantapi,
    inventories_v1beta: inventories_v1beta_1.merchantapi_inventories_v1beta.Merchantapi,
    lfp_v1beta: lfp_v1beta_1.merchantapi_lfp_v1beta.Merchantapi,
    notifications_v1beta: notifications_v1beta_1.merchantapi_notifications_v1beta.Merchantapi,
    products_v1beta: products_v1beta_1.merchantapi_products_v1beta.Merchantapi,
    promotions_v1beta: promotions_v1beta_1.merchantapi_promotions_v1beta.Merchantapi,
    quota_v1beta: quota_v1beta_1.merchantapi_quota_v1beta.Merchantapi,
    reports_v1beta: reports_v1beta_1.merchantapi_reports_v1beta.Merchantapi,
    reviews_v1beta: reviews_v1beta_1.merchantapi_reviews_v1beta.Merchantapi,
};
function merchantapi(versionOrOptions) {
    return (0, googleapis_common_1.getAPI)('merchantapi', versionOrOptions, exports.VERSIONS, this);
}
exports.merchantapi = merchantapi;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
