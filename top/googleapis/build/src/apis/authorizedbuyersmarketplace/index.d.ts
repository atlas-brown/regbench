/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { authorizedbuyersmarketplace_v1 } from './v1';
import { authorizedbuyersmarketplace_v1alpha } from './v1alpha';
export declare const VERSIONS: {
    v1: typeof authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace;
    v1alpha: typeof authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace;
};
export declare function authorizedbuyersmarketplace(version: 'v1'): authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace;
export declare function authorizedbuyersmarketplace(options: authorizedbuyersmarketplace_v1.Options): authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace;
export declare function authorizedbuyersmarketplace(version: 'v1alpha'): authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace;
export declare function authorizedbuyersmarketplace(options: authorizedbuyersmarketplace_v1alpha.Options): authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace;
declare const auth: AuthPlus;
export { auth };
export { authorizedbuyersmarketplace_v1 };
export { authorizedbuyersmarketplace_v1alpha };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
