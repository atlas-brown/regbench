import { PAGE_SEGMENT_KEY } from '../segment';
export function encodeSegment(segment) {
    if (typeof segment === 'string') {
        if (segment.startsWith(PAGE_SEGMENT_KEY)) {
            // The Flight Router State type sometimes includes the search params in
            // the page segment. However, the Segment Cache tracks this as a separate
            // key. So, we strip the search params here, and then add them back when
            // the cache entry is turned back into a FlightRouterState. This is an
            // unfortunate consequence of the FlightRouteState being used both as a
            // transport type and as a cache key; we'll address this once more of the
            // Segment Cache implementation has settled.
            // TODO: We should hoist the search params out of the FlightRouterState
            // type entirely, This is our plan for dynamic route params, too.
            return PAGE_SEGMENT_KEY;
        }
        const safeName = // TODO: FlightRouterState encodes Not Found routes as "/_not-found".
        // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    const name = segment[0];
    const paramValue = segment[1];
    const paramType = segment[2];
    const safeName = encodeToFilesystemAndURLSafeString(name);
    const safeValue = encodeToFilesystemAndURLSafeString(paramValue);
    const encodedName = '$' + paramType + '$' + safeName + '$' + safeValue;
    return encodedName;
}
export const ROOT_SEGMENT_KEY = '';
export function encodeChildSegmentKey(// TODO: Make segment keys an opaque type, too?
parentSegmentKey, parallelRouteKey, segment) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    const slotKey = parallelRouteKey === 'children' ? segment : "@" + encodeToFilesystemAndURLSafeString(parallelRouteKey) + "/" + segment;
    return parentSegmentKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
const simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    const base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
}
export function convertSegmentPathToStaticExportFilename(segmentPath) {
    return "__next" + segmentPath.replace(/\//g, '.') + ".txt";
}

//# sourceMappingURL=segment-value-encoding.js.map