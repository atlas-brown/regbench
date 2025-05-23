/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace gamesConfiguration_v1configuration {
    export interface Options extends GlobalOptions {
        version: 'v1configuration';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Google Play Games Services Publishing API
     *
     * The Google Play Game Services Publishing API allows developers to configure their games in Game Services.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const gamesConfiguration = google.gamesConfiguration('v1configuration');
     * ```
     */
    export class Gamesconfiguration {
        context: APIRequestContext;
        achievementConfigurations: Resource$Achievementconfigurations;
        leaderboardConfigurations: Resource$Leaderboardconfigurations;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * An achievement configuration resource.
     */
    export interface Schema$AchievementConfiguration {
        /**
         * The type of the achievement.
         */
        achievementType?: string | null;
        /**
         * The draft data of the achievement.
         */
        draft?: Schema$AchievementConfigurationDetail;
        /**
         * The ID of the achievement.
         */
        id?: string | null;
        /**
         * The initial state of the achievement.
         */
        initialState?: string | null;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.
         */
        kind?: string | null;
        /**
         * The read-only published data of the achievement.
         */
        published?: Schema$AchievementConfigurationDetail;
        /**
         * Steps to unlock. Only applicable to incremental achievements.
         */
        stepsToUnlock?: number | null;
        /**
         * The token for this resource.
         */
        token?: string | null;
    }
    /**
     * An achievement configuration detail.
     */
    export interface Schema$AchievementConfigurationDetail {
        /**
         * Localized strings for the achievement description.
         */
        description?: Schema$LocalizedStringBundle;
        /**
         * The icon url of this achievement. Writes to this field are ignored.
         */
        iconUrl?: string | null;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`.
         */
        kind?: string | null;
        /**
         * Localized strings for the achievement name.
         */
        name?: Schema$LocalizedStringBundle;
        /**
         * Point value for the achievement.
         */
        pointValue?: number | null;
        /**
         * The sort rank of this achievement. Writes to this field are ignored.
         */
        sortRank?: number | null;
    }
    /**
     * A ListConfigurations response.
     */
    export interface Schema$AchievementConfigurationListResponse {
        /**
         * The achievement configurations.
         */
        items?: Schema$AchievementConfiguration[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`.
         */
        kind?: string | null;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * A number affix resource.
     */
    export interface Schema$GamesNumberAffixConfiguration {
        /**
         * When the language requires special treatment of "small" numbers (as with 2, 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12, 13, or 14 in Polish).
         */
        few?: Schema$LocalizedStringBundle;
        /**
         * When the language requires special treatment of "large" numbers (as with numbers ending 11-99 in Maltese).
         */
        many?: Schema$LocalizedStringBundle;
        /**
         * When the language requires special treatment of numbers like one (as with the number 1 in English and most other languages; in Russian, any number ending in 1 but not ending in 11 is in this class).
         */
        one?: Schema$LocalizedStringBundle;
        /**
         * When the language does not require special treatment of the given quantity (as with all numbers in Chinese, or 42 in English).
         */
        other?: Schema$LocalizedStringBundle;
        /**
         * When the language requires special treatment of numbers like two (as with 2 in Welsh, or 102 in Slovenian).
         */
        two?: Schema$LocalizedStringBundle;
        /**
         * When the language requires special treatment of the number 0 (as in Arabic).
         */
        zero?: Schema$LocalizedStringBundle;
    }
    /**
     * A number format resource.
     */
    export interface Schema$GamesNumberFormatConfiguration {
        /**
         * The curreny code string. Only used for CURRENCY format type.
         */
        currencyCode?: string | null;
        /**
         * The formatting for the number.
         */
        numberFormatType?: string | null;
        /**
         * The number of decimal places for number. Only used for NUMERIC format type.
         */
        numDecimalPlaces?: number | null;
        /**
         * An optional suffix for the NUMERIC format type. These strings follow the same plural rules as all Android string resources.
         */
        suffix?: Schema$GamesNumberAffixConfiguration;
    }
    /**
     * An leaderboard configuration resource.
     */
    export interface Schema$LeaderboardConfiguration {
        /**
         * The draft data of the leaderboard.
         */
        draft?: Schema$LeaderboardConfigurationDetail;
        /**
         * The ID of the leaderboard.
         */
        id?: string | null;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.
         */
        kind?: string | null;
        /**
         * The read-only published data of the leaderboard.
         */
        published?: Schema$LeaderboardConfigurationDetail;
        /**
         * Maximum score that can be posted to this leaderboard.
         */
        scoreMax?: string | null;
        /**
         * Minimum score that can be posted to this leaderboard.
         */
        scoreMin?: string | null;
        scoreOrder?: string | null;
        /**
         * The token for this resource.
         */
        token?: string | null;
    }
    /**
     * A leaderboard configuration detail.
     */
    export interface Schema$LeaderboardConfigurationDetail {
        /**
         * The icon url of this leaderboard. Writes to this field are ignored.
         */
        iconUrl?: string | null;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`.
         */
        kind?: string | null;
        /**
         * Localized strings for the leaderboard name.
         */
        name?: Schema$LocalizedStringBundle;
        /**
         * The score formatting for the leaderboard.
         */
        scoreFormat?: Schema$GamesNumberFormatConfiguration;
        /**
         * The sort rank of this leaderboard. Writes to this field are ignored.
         */
        sortRank?: number | null;
    }
    /**
     * A ListConfigurations response.
     */
    export interface Schema$LeaderboardConfigurationListResponse {
        /**
         * The leaderboard configurations.
         */
        items?: Schema$LeaderboardConfiguration[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`.
         */
        kind?: string | null;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * A localized string resource.
     */
    export interface Schema$LocalizedString {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`.
         */
        kind?: string | null;
        /**
         * The locale string.
         */
        locale?: string | null;
        /**
         * The string value.
         */
        value?: string | null;
    }
    /**
     * A localized string bundle resource.
     */
    export interface Schema$LocalizedStringBundle {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`.
         */
        kind?: string | null;
        /**
         * The locale strings.
         */
        translations?: Schema$LocalizedString[];
    }
    export class Resource$Achievementconfigurations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Delete the achievement configuration with the given ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Achievementconfigurations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Achievementconfigurations$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Achievementconfigurations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Achievementconfigurations$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Achievementconfigurations$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Retrieves the metadata of the achievement configuration with the given ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Achievementconfigurations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Achievementconfigurations$Get, options?: MethodOptions): GaxiosPromise<Schema$AchievementConfiguration>;
        get(params: Params$Resource$Achievementconfigurations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Achievementconfigurations$Get, options: MethodOptions | BodyResponseCallback<Schema$AchievementConfiguration>, callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        get(params: Params$Resource$Achievementconfigurations$Get, callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        get(callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        /**
         * Insert a new achievement configuration in this application.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Achievementconfigurations$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Achievementconfigurations$Insert, options?: MethodOptions): GaxiosPromise<Schema$AchievementConfiguration>;
        insert(params: Params$Resource$Achievementconfigurations$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Achievementconfigurations$Insert, options: MethodOptions | BodyResponseCallback<Schema$AchievementConfiguration>, callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        insert(params: Params$Resource$Achievementconfigurations$Insert, callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        insert(callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        /**
         * Returns a list of the achievement configurations in this application.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Achievementconfigurations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Achievementconfigurations$List, options?: MethodOptions): GaxiosPromise<Schema$AchievementConfigurationListResponse>;
        list(params: Params$Resource$Achievementconfigurations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Achievementconfigurations$List, options: MethodOptions | BodyResponseCallback<Schema$AchievementConfigurationListResponse>, callback: BodyResponseCallback<Schema$AchievementConfigurationListResponse>): void;
        list(params: Params$Resource$Achievementconfigurations$List, callback: BodyResponseCallback<Schema$AchievementConfigurationListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AchievementConfigurationListResponse>): void;
        /**
         * Update the metadata of the achievement configuration with the given ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Achievementconfigurations$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Achievementconfigurations$Update, options?: MethodOptions): GaxiosPromise<Schema$AchievementConfiguration>;
        update(params: Params$Resource$Achievementconfigurations$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Achievementconfigurations$Update, options: MethodOptions | BodyResponseCallback<Schema$AchievementConfiguration>, callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        update(params: Params$Resource$Achievementconfigurations$Update, callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
        update(callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    }
    export interface Params$Resource$Achievementconfigurations$Delete extends StandardParameters {
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
    }
    export interface Params$Resource$Achievementconfigurations$Get extends StandardParameters {
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
    }
    export interface Params$Resource$Achievementconfigurations$Insert extends StandardParameters {
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AchievementConfiguration;
    }
    export interface Params$Resource$Achievementconfigurations$List extends StandardParameters {
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Achievementconfigurations$Update extends StandardParameters {
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AchievementConfiguration;
    }
    export class Resource$Leaderboardconfigurations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Delete the leaderboard configuration with the given ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Leaderboardconfigurations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Leaderboardconfigurations$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Leaderboardconfigurations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Leaderboardconfigurations$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Leaderboardconfigurations$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Retrieves the metadata of the leaderboard configuration with the given ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Leaderboardconfigurations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Leaderboardconfigurations$Get, options?: MethodOptions): GaxiosPromise<Schema$LeaderboardConfiguration>;
        get(params: Params$Resource$Leaderboardconfigurations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Leaderboardconfigurations$Get, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardConfiguration>, callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        get(params: Params$Resource$Leaderboardconfigurations$Get, callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        get(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        /**
         * Insert a new leaderboard configuration in this application.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Leaderboardconfigurations$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Leaderboardconfigurations$Insert, options?: MethodOptions): GaxiosPromise<Schema$LeaderboardConfiguration>;
        insert(params: Params$Resource$Leaderboardconfigurations$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Leaderboardconfigurations$Insert, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardConfiguration>, callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        insert(params: Params$Resource$Leaderboardconfigurations$Insert, callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        insert(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        /**
         * Returns a list of the leaderboard configurations in this application.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Leaderboardconfigurations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Leaderboardconfigurations$List, options?: MethodOptions): GaxiosPromise<Schema$LeaderboardConfigurationListResponse>;
        list(params: Params$Resource$Leaderboardconfigurations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Leaderboardconfigurations$List, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>, callback: BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>): void;
        list(params: Params$Resource$Leaderboardconfigurations$List, callback: BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>): void;
        list(callback: BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>): void;
        /**
         * Update the metadata of the leaderboard configuration with the given ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Leaderboardconfigurations$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Leaderboardconfigurations$Update, options?: MethodOptions): GaxiosPromise<Schema$LeaderboardConfiguration>;
        update(params: Params$Resource$Leaderboardconfigurations$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Leaderboardconfigurations$Update, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardConfiguration>, callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        update(params: Params$Resource$Leaderboardconfigurations$Update, callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
        update(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    }
    export interface Params$Resource$Leaderboardconfigurations$Delete extends StandardParameters {
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
    }
    export interface Params$Resource$Leaderboardconfigurations$Get extends StandardParameters {
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
    }
    export interface Params$Resource$Leaderboardconfigurations$Insert extends StandardParameters {
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LeaderboardConfiguration;
    }
    export interface Params$Resource$Leaderboardconfigurations$List extends StandardParameters {
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Leaderboardconfigurations$Update extends StandardParameters {
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LeaderboardConfiguration;
    }
    export {};
}
