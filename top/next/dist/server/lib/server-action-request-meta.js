"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getIsPossibleServerAction: null,
    getServerActionRequestMetadata: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getIsPossibleServerAction: function() {
        return getIsPossibleServerAction;
    },
    getServerActionRequestMetadata: function() {
        return getServerActionRequestMetadata;
    }
});
const _approuterheaders = require("../../client/components/app-router-headers");
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(_approuterheaders.ACTION_HEADER.toLowerCase()) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[_approuterheaders.ACTION_HEADER.toLowerCase()] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
}

//# sourceMappingURL=server-action-request-meta.js.map