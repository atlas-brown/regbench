import stringHash from 'next/dist/compiled/string-hash';
import { formatServerError } from '../../lib/format-server-error';
import { SpanStatusCode, getTracer } from '../lib/trace/tracer';
import { isAbortError } from '../pipe-readable';
import { isBailoutToCSRError } from '../../shared/lib/lazy-dynamic/bailout-to-csr';
import { isDynamicServerError } from '../../client/components/hooks-server-context';
import { isNextRouterError } from '../../client/components/is-next-router-error';
import { getProperError } from '../../lib/is-error';
import { createDigestWithErrorCode } from '../../lib/error-telemetry-utils';
/**
 * Returns a digest for well-known Next.js errors, otherwise `undefined`. If a
 * digest is returned this also means that the error does not need to be
 * reported.
 */ export function getDigestForWellKnownError(error) {
    // If we're bailing out to CSR, we don't need to log the error.
    if (isBailoutToCSRError(error)) return error.digest;
    // If this is a navigation error, we don't need to log the error.
    if (isNextRouterError(error)) return error.digest;
    // If this error occurs, we know that we should be stopping the static
    // render. This is only thrown in static generation when PPR is not enabled,
    // which causes the whole page to be marked as dynamic. We don't need to
    // tell the user about this error, as it's not actionable.
    if (isDynamicServerError(error)) return error.digest;
    return undefined;
}
export function createFlightReactServerErrorHandler(shouldFormatError, onReactServerRenderError) {
    return (thrownValue)=>{
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return stringHash(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = getProperError(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = stringHash(err.message + err.stack || '').toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            formatServerError(err);
        }
        // Record exception in an active span, if available.
        const span = getTracer().getActiveScopeSpan();
        if (span) {
            span.recordException(err);
            span.setStatus({
                code: SpanStatusCode.ERROR,
                message: err.message
            });
        }
        onReactServerRenderError(err);
        return createDigestWithErrorCode(thrownValue, err.digest);
    };
}
export function createHTMLReactServerErrorHandler(shouldFormatError, isNextExport, reactServerErrors, silenceLogger, onReactServerRenderError) {
    return (thrownValue)=>{
        var _err_message;
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return stringHash(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = getProperError(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = stringHash(err.message + (err.stack || '')).toString();
        }
        // @TODO by putting this here and not at the top it is possible that
        // we don't error the build in places we actually expect to
        if (!reactServerErrors.has(err.digest)) {
            reactServerErrors.set(err.digest, err);
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            formatServerError(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = getTracer().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger) {
                onReactServerRenderError == null ? void 0 : onReactServerRenderError(err);
            }
        }
        return createDigestWithErrorCode(thrownValue, err.digest);
    };
}
export function createHTMLErrorHandler(shouldFormatError, isNextExport, reactServerErrors, allCapturedErrors, silenceLogger, onHTMLRenderSSRError) {
    return (thrownValue, errorInfo)=>{
        var _err_message;
        let isSSRError = true;
        allCapturedErrors.push(thrownValue);
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = getProperError(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (err.digest) {
            if (reactServerErrors.has(err.digest)) {
                // This error is likely an obfuscated error from react-server.
                // We recover the original error here.
                thrownValue = reactServerErrors.get(err.digest);
                isSSRError = false;
            } else {
            // The error is not from react-server but has a digest
            // from other means so we don't need to produce a new one
            }
        } else {
            err.digest = stringHash(err.message + ((errorInfo == null ? void 0 : errorInfo.componentStack) || err.stack || '')).toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            formatServerError(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = getTracer().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger && // HTML errors contain RSC errors as well, filter them out before reporting
            isSSRError) {
                onHTMLRenderSSRError(err, errorInfo);
            }
        }
        return createDigestWithErrorCode(thrownValue, err.digest);
    };
}
export function isUserLandError(err) {
    return !isAbortError(err) && !isBailoutToCSRError(err) && !isNextRouterError(err);
}

//# sourceMappingURL=create-error-handler.js.map