import bytes from 'next/dist/compiled/bytes';
import { generateETag } from '../../lib/etag';
import { sendEtagResponse } from '../../send-payload';
import { Stream } from 'stream';
import isError from '../../../lib/is-error';
import { isResSent } from '../../../shared/lib/utils';
import { interopDefault } from '../../../lib/interop-default';
import { setLazyProp, sendStatusCode, redirect, clearPreviewData, sendError, ApiError, COOKIE_NAME_PRERENDER_BYPASS, COOKIE_NAME_PRERENDER_DATA, RESPONSE_LIMIT_DEFAULT } from './../index';
import { getCookieParser } from './../get-cookie-parser';
import { PRERENDER_REVALIDATE_HEADER, PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from '../../../lib/constants';
import { tryGetPreviewData } from './try-get-preview-data';
import { parseBody } from './parse-body';
function getMaxContentLength(responseLimit) {
    if (responseLimit && typeof responseLimit !== 'boolean') {
        return bytes.parse(responseLimit);
    }
    return RESPONSE_LIMIT_DEFAULT;
}
/**
 * Send `any` body to response
 * @param req request object
 * @param res response object
 * @param body of response
 */ function sendData(req, res, body) {
    if (body === null || body === undefined) {
        res.end();
        return;
    }
    // strip irrelevant headers/body
    if (res.statusCode === 204 || res.statusCode === 304) {
        res.removeHeader('Content-Type');
        res.removeHeader('Content-Length');
        res.removeHeader('Transfer-Encoding');
        if (process.env.NODE_ENV === 'development' && body) {
            console.warn(`A body was attempted to be set with a 204 statusCode for ${req.url}, this is invalid and the body was ignored.\n` + `See more info here https://nextjs.org/docs/messages/invalid-api-status-body`);
        }
        res.end();
        return;
    }
    const contentType = res.getHeader('Content-Type');
    if (body instanceof Stream) {
        if (!contentType) {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        body.pipe(res);
        return;
    }
    const isJSONLike = [
        'object',
        'number',
        'boolean'
    ].includes(typeof body);
    const stringifiedBody = isJSONLike ? JSON.stringify(body) : body;
    const etag = generateETag(stringifiedBody);
    if (sendEtagResponse(req, res, etag)) {
        return;
    }
    if (Buffer.isBuffer(body)) {
        if (!contentType) {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        res.setHeader('Content-Length', body.length);
        res.end(body);
        return;
    }
    if (isJSONLike) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    res.setHeader('Content-Length', Buffer.byteLength(stringifiedBody));
    res.end(stringifiedBody);
}
/**
 * Send `JSON` object
 * @param res response object
 * @param jsonBody of data
 */ function sendJson(res, jsonBody) {
    // Set header to application/json
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // Use send to handle request
    res.send(JSON.stringify(jsonBody));
}
function isValidData(str) {
    return typeof str === 'string' && str.length >= 16;
}
function setDraftMode(res, options) {
    if (!isValidData(options.previewModeId)) {
        throw Object.defineProperty(new Error('invariant: invalid previewModeId'), "__NEXT_ERROR_CODE", {
            value: "E169",
            enumerable: false,
            configurable: true
        });
    }
    const expires = options.enable ? undefined : new Date(0);
    // To delete a cookie, set `expires` to a date in the past:
    // https://tools.ietf.org/html/rfc6265#section-4.1.1
    // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
    const { serialize } = require('next/dist/compiled/cookie');
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
            secure: process.env.NODE_ENV !== 'development',
            path: '/',
            expires
        })
    ]);
    return res;
}
function setPreviewData(res, data, options) {
    if (!isValidData(options.previewModeId)) {
        throw Object.defineProperty(new Error('invariant: invalid previewModeId'), "__NEXT_ERROR_CODE", {
            value: "E169",
            enumerable: false,
            configurable: true
        });
    }
    if (!isValidData(options.previewModeEncryptionKey)) {
        throw Object.defineProperty(new Error('invariant: invalid previewModeEncryptionKey'), "__NEXT_ERROR_CODE", {
            value: "E334",
            enumerable: false,
            configurable: true
        });
    }
    if (!isValidData(options.previewModeSigningKey)) {
        throw Object.defineProperty(new Error('invariant: invalid previewModeSigningKey'), "__NEXT_ERROR_CODE", {
            value: "E436",
            enumerable: false,
            configurable: true
        });
    }
    const jsonwebtoken = require('next/dist/compiled/jsonwebtoken');
    const { encryptWithSecret } = require('../../crypto-utils');
    const payload = jsonwebtoken.sign({
        data: encryptWithSecret(Buffer.from(options.previewModeEncryptionKey), JSON.stringify(data))
    }, options.previewModeSigningKey, {
        algorithm: 'HS256',
        ...options.maxAge !== undefined ? {
            expiresIn: options.maxAge
        } : undefined
    });
    // limit preview mode cookie to 2KB since we shouldn't store too much
    // data here and browsers drop cookies over 4KB
    if (payload.length > 2048) {
        throw Object.defineProperty(new Error(`Preview data is limited to 2KB currently, reduce how much data you are storing as preview data to continue`), "__NEXT_ERROR_CODE", {
            value: "E465",
            enumerable: false,
            configurable: true
        });
    }
    const { serialize } = require('next/dist/compiled/cookie');
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
            secure: process.env.NODE_ENV !== 'development',
            path: '/',
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, payload, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
            secure: process.env.NODE_ENV !== 'development',
            path: '/',
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    return res;
}
async function revalidate(urlPath, opts, req, context) {
    if (typeof urlPath !== 'string' || !urlPath.startsWith('/')) {
        throw Object.defineProperty(new Error(`Invalid urlPath provided to revalidate(), must be a path e.g. /blog/post-1, received ${urlPath}`), "__NEXT_ERROR_CODE", {
            value: "E153",
            enumerable: false,
            configurable: true
        });
    }
    const revalidateHeaders = {
        [PRERENDER_REVALIDATE_HEADER]: context.previewModeId,
        ...opts.unstable_onlyGenerated ? {
            [PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER]: '1'
        } : {}
    };
    const allowedRevalidateHeaderKeys = [
        ...context.allowedRevalidateHeaderKeys || []
    ];
    if (context.trustHostHeader || context.dev) {
        allowedRevalidateHeaderKeys.push('cookie');
    }
    if (context.trustHostHeader) {
        allowedRevalidateHeaderKeys.push('x-vercel-protection-bypass');
    }
    for (const key of Object.keys(req.headers)){
        if (allowedRevalidateHeaderKeys.includes(key)) {
            revalidateHeaders[key] = req.headers[key];
        }
    }
    try {
        if (context.trustHostHeader) {
            const res = await fetch(`https://${req.headers.host}${urlPath}`, {
                method: 'HEAD',
                headers: revalidateHeaders
            });
            // we use the cache header to determine successful revalidate as
            // a non-200 status code can be returned from a successful revalidate
            // e.g. notFound: true returns 404 status code but is successful
            const cacheHeader = res.headers.get('x-vercel-cache') || res.headers.get('x-nextjs-cache');
            if ((cacheHeader == null ? void 0 : cacheHeader.toUpperCase()) !== 'REVALIDATED' && res.status !== 200 && !(res.status === 404 && opts.unstable_onlyGenerated)) {
                throw Object.defineProperty(new Error(`Invalid response ${res.status}`), "__NEXT_ERROR_CODE", {
                    value: "E175",
                    enumerable: false,
                    configurable: true
                });
            }
        } else if (context.revalidate) {
            await context.revalidate({
                urlPath,
                revalidateHeaders,
                opts
            });
        } else {
            throw Object.defineProperty(new Error(`Invariant: required internal revalidate method not passed to api-utils`), "__NEXT_ERROR_CODE", {
                value: "E174",
                enumerable: false,
                configurable: true
            });
        }
    } catch (err) {
        throw Object.defineProperty(new Error(`Failed to revalidate ${urlPath}: ${isError(err) ? err.message : err}`), "__NEXT_ERROR_CODE", {
            value: "E240",
            enumerable: false,
            configurable: true
        });
    }
}
export async function apiResolver(req, res, query, resolverModule, apiContext, propagateError, dev, page, onError) {
    const apiReq = req;
    const apiRes = res;
    try {
        var _config_api, _config_api1, _config_api2;
        if (!resolverModule) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
        }
        const config = resolverModule.config || {};
        const bodyParser = ((_config_api = config.api) == null ? void 0 : _config_api.bodyParser) !== false;
        const responseLimit = ((_config_api1 = config.api) == null ? void 0 : _config_api1.responseLimit) ?? true;
        const externalResolver = ((_config_api2 = config.api) == null ? void 0 : _config_api2.externalResolver) || false;
        // Parsing of cookies
        setLazyProp({
            req: apiReq
        }, 'cookies', getCookieParser(req.headers));
        // Parsing query string
        apiReq.query = query;
        // Parsing preview data
        setLazyProp({
            req: apiReq
        }, 'previewData', ()=>tryGetPreviewData(req, res, apiContext, !!apiContext.multiZoneDraftMode));
        // Checking if preview mode is enabled
        setLazyProp({
            req: apiReq
        }, 'preview', ()=>apiReq.previewData !== false ? true : undefined);
        // Set draftMode to the same value as preview
        setLazyProp({
            req: apiReq
        }, 'draftMode', ()=>apiReq.preview);
        // Parsing of body
        if (bodyParser && !apiReq.body) {
            apiReq.body = await parseBody(apiReq, config.api && config.api.bodyParser && config.api.bodyParser.sizeLimit ? config.api.bodyParser.sizeLimit : '1mb');
        }
        let contentLength = 0;
        const maxContentLength = getMaxContentLength(responseLimit);
        const writeData = apiRes.write;
        const endResponse = apiRes.end;
        apiRes.write = (...args)=>{
            contentLength += Buffer.byteLength(args[0] || '');
            return writeData.apply(apiRes, args);
        };
        apiRes.end = (...args)=>{
            if (args.length && typeof args[0] !== 'function') {
                contentLength += Buffer.byteLength(args[0] || '');
            }
            if (responseLimit && contentLength >= maxContentLength) {
                console.warn(`API response for ${req.url} exceeds ${bytes.format(maxContentLength)}. API Routes are meant to respond quickly. https://nextjs.org/docs/messages/api-routes-response-size-limit`);
            }
            return endResponse.apply(apiRes, args);
        };
        apiRes.status = (statusCode)=>sendStatusCode(apiRes, statusCode);
        apiRes.send = (data)=>sendData(apiReq, apiRes, data);
        apiRes.json = (data)=>sendJson(apiRes, data);
        apiRes.redirect = (statusOrUrl, url)=>redirect(apiRes, statusOrUrl, url);
        apiRes.setDraftMode = (options = {
            enable: true
        })=>setDraftMode(apiRes, Object.assign({}, apiContext, options));
        apiRes.setPreviewData = (data, options = {})=>setPreviewData(apiRes, data, Object.assign({}, apiContext, options));
        apiRes.clearPreviewData = (options = {})=>clearPreviewData(apiRes, options);
        apiRes.revalidate = (urlPath, opts)=>revalidate(urlPath, opts || {}, req, apiContext);
        const resolver = interopDefault(resolverModule);
        let wasPiped = false;
        if (process.env.NODE_ENV !== 'production') {
            // listen for pipe event and don't show resolve warning
            res.once('pipe', ()=>wasPiped = true);
        }
        const apiRouteResult = await resolver(req, res);
        if (process.env.NODE_ENV !== 'production') {
            if (typeof apiRouteResult !== 'undefined') {
                if (apiRouteResult instanceof Response) {
                    throw Object.defineProperty(new Error('API route returned a Response object in the Node.js runtime, this is not supported. Please use `runtime: "edge"` instead: https://nextjs.org/docs/api-routes/edge-api-routes'), "__NEXT_ERROR_CODE", {
                        value: "E36",
                        enumerable: false,
                        configurable: true
                    });
                }
                console.warn(`API handler should not return a value, received ${typeof apiRouteResult}.`);
            }
            if (!externalResolver && !isResSent(res) && !wasPiped) {
                console.warn(`API resolved without sending a response for ${req.url}, this may result in stalled requests.`);
            }
        }
    } catch (err) {
        onError == null ? void 0 : onError(err, req, {
            routerKind: 'Pages Router',
            routePath: page || '',
            routeType: 'route',
            revalidateReason: undefined
        });
        if (err instanceof ApiError) {
            sendError(apiRes, err.statusCode, err.message);
        } else {
            if (dev) {
                if (isError(err)) {
                    err.page = page;
                }
                throw err;
            }
            console.error(err);
            if (propagateError) {
                throw err;
            }
            sendError(apiRes, 500, 'Internal Server Error');
        }
    }
}

//# sourceMappingURL=api-resolver.js.map