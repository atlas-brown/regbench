/**
 * Reference:
 *
 * - https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 * - https://tools.ietf.org/html/rfc2324#section-2.3.2
 */
declare const status: {
    readonly classes: {
        readonly "1xx": "Informational";
        readonly "1xx_NAME": "INFORMATIONAL";
        readonly "1xx_MESSAGE": "Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.";
        readonly INFORMATIONAL: "1xx";
        readonly "2xx": "Successful";
        readonly "2xx_NAME": "SUCCESSFUL";
        readonly "2xx_MESSAGE": "Indicates that the client's request was successfully received, understood, and accepted.";
        readonly SUCCESSFUL: "2xx";
        readonly "3xx": "Redirection";
        readonly "3xx_NAME": "REDIRECTION";
        readonly "3xx_MESSAGE": "Indicates that further action needs to be taken by the user agent in order to fulfill the request.";
        readonly REDIRECTION: "3xx";
        readonly "4xx": "Client Error";
        readonly "4xx_NAME": "CLIENT_ERROR";
        readonly "4xx_MESSAGE": "Indicates that the client seems to have erred.";
        readonly CLIENT_ERROR: "4xx";
        readonly "5xx": "Server Error";
        readonly "5xx_NAME": "SERVER_ERROR";
        readonly "5xx_MESSAGE": "Indicates that the server is aware that it has erred or is incapable of performing the requested method.";
        readonly SERVER_ERROR: "5xx";
    };
    readonly 100: "Continue";
    readonly "100_NAME": "CONTINUE";
    readonly "100_MESSAGE": "The server has received the request headers and the client should proceed to send the request body.";
    readonly "100_CLASS": "1xx";
    readonly CONTINUE: 100;
    readonly 101: "Switching Protocols";
    readonly "101_NAME": "SWITCHING_PROTOCOLS";
    readonly "101_MESSAGE": "The requester has asked the server to switch protocols and the server has agreed to do so.";
    readonly "101_CLASS": "1xx";
    readonly SWITCHING_PROTOCOLS: 101;
    readonly 102: "Processing";
    readonly "102_NAME": "PROCESSING";
    readonly "102_MESSAGE": "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.";
    readonly "102_CLASS": "1xx";
    readonly PROCESSING: 102;
    readonly 103: "Early Hints";
    readonly "103_NAME": "EARLY_HINTS";
    readonly "103_MESSAGE": "Used to return some response headers before final HTTP message.";
    readonly "103_CLASS": "1xx";
    readonly EARLY_HINTS: 103;
    readonly 200: "OK";
    readonly "200_NAME": "OK";
    readonly "200_MESSAGE": "Standard response for successful HTTP requests.";
    readonly "200_CLASS": "2xx";
    readonly OK: 200;
    readonly 201: "Created";
    readonly "201_NAME": "CREATED";
    readonly "201_MESSAGE": "The request has been fulfilled, resulting in the creation of a new resource.";
    readonly "201_CLASS": "2xx";
    readonly CREATED: 201;
    readonly 202: "Accepted";
    readonly "202_NAME": "ACCEPTED";
    readonly "202_MESSAGE": "The request has been accepted for processing, but the processing has not been completed.";
    readonly "202_CLASS": "2xx";
    readonly ACCEPTED: 202;
    readonly 203: "Non-Authoritative Information";
    readonly "203_NAME": "NON_AUTHORITATIVE_INFORMATION";
    readonly "203_MESSAGE": "The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.";
    readonly "203_CLASS": "2xx";
    readonly NON_AUTHORITATIVE_INFORMATION: 203;
    readonly 204: "No Content";
    readonly "204_NAME": "NO_CONTENT";
    readonly "204_MESSAGE": "The server successfully processed the request and is not returning any content.";
    readonly "204_CLASS": "2xx";
    readonly NO_CONTENT: 204;
    readonly 205: "Reset Content";
    readonly "205_NAME": "RESET_CONTENT";
    readonly "205_MESSAGE": "The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.";
    readonly "205_CLASS": "2xx";
    readonly RESET_CONTENT: 205;
    readonly 206: "Partial Content";
    readonly "206_NAME": "PARTIAL_CONTENT";
    readonly "206_MESSAGE": "The server is delivering only part of the resource (byte serving) due to a range header sent by the client.";
    readonly "206_CLASS": "2xx";
    readonly PARTIAL_CONTENT: 206;
    readonly 207: "Multi Status";
    readonly "207_NAME": "MULTI_STATUS";
    readonly "207_MESSAGE": "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.";
    readonly "207_CLASS": "2xx";
    readonly MULTI_STATUS: 207;
    readonly 208: "Already Reported";
    readonly "208_NAME": "ALREADY_REPORTED";
    readonly "208_MESSAGE": "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.";
    readonly "208_CLASS": "2xx";
    readonly ALREADY_REPORTED: 208;
    readonly 226: "IM Used";
    readonly "226_NAME": "IM_USED";
    readonly "226_MESSAGE": "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.";
    readonly "226_CLASS": "2xx";
    readonly IM_USED: 226;
    readonly 300: "Multiple Choices";
    readonly "300_NAME": "MULTIPLE_CHOICES";
    readonly "300_MESSAGE": "Indicates multiple options for the resource from which the client may choose.";
    readonly "300_CLASS": "3xx";
    readonly MULTIPLE_CHOICES: 300;
    readonly 301: "Moved Permanently";
    readonly "301_NAME": "MOVED_PERMANENTLY";
    readonly "301_MESSAGE": "This and all future requests should be directed to the given URI.";
    readonly "301_CLASS": "3xx";
    readonly MOVED_PERMANENTLY: 301;
    readonly 302: "Found";
    readonly "302_NAME": "FOUND";
    readonly "302_MESSAGE": "This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was \"Moved Temporarily\"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.";
    readonly "302_CLASS": "3xx";
    readonly FOUND: 302;
    readonly 303: "See Other";
    readonly "303_NAME": "SEE_OTHER";
    readonly "303_MESSAGE": "The response to the request can be found under another URI using the GET method.";
    readonly "303_CLASS": "3xx";
    readonly SEE_OTHER: 303;
    readonly 304: "Not Modified";
    readonly "304_NAME": "NOT_MODIFIED";
    readonly "304_MESSAGE": "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.";
    readonly "304_CLASS": "3xx";
    readonly NOT_MODIFIED: 304;
    readonly 305: "Use Proxy";
    readonly "305_NAME": "USE_PROXY";
    readonly "305_MESSAGE": "The requested resource is available only through a proxy, the address for which is provided in the response.";
    readonly "305_CLASS": "3xx";
    readonly USE_PROXY: 305;
    readonly 306: "Switch Proxy";
    readonly "306_NAME": "SWITCH_PROXY";
    readonly "306_MESSAGE": "No longer used. Originally meant \"Subsequent requests should use the specified proxy.";
    readonly "306_CLASS": "3xx";
    readonly SWITCH_PROXY: 306;
    readonly 307: "Temporary Redirect";
    readonly "307_NAME": "TEMPORARY_REDIRECT";
    readonly "307_MESSAGE": "In this case, the request should be repeated with another URI; however, future requests should still use the original URI.";
    readonly "307_CLASS": "3xx";
    readonly TEMPORARY_REDIRECT: 307;
    readonly 308: "Permanent Redirect";
    readonly "308_NAME": "PERMANENT_REDIRECT";
    readonly "308_MESSAGE": "The request and all future requests should be repeated using another URI.";
    readonly "308_CLASS": "3xx";
    readonly PERMANENT_REDIRECT: 308;
    readonly 400: "Bad Request";
    readonly "400_NAME": "BAD_REQUEST";
    readonly "400_MESSAGE": "The server cannot or will not process the request due to an apparent client error.";
    readonly "400_CLASS": "4xx";
    readonly BAD_REQUEST: 400;
    readonly 401: "Unauthorized";
    readonly "401_NAME": "UNAUTHORIZED";
    readonly "401_MESSAGE": "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.";
    readonly "401_CLASS": "4xx";
    readonly UNAUTHORIZED: 401;
    readonly 402: "Payment Required";
    readonly "402_NAME": "PAYMENT_REQUIRED";
    readonly "402_MESSAGE": "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.";
    readonly "402_CLASS": "4xx";
    readonly PAYMENT_REQUIRED: 402;
    readonly 403: "Forbidden";
    readonly "403_NAME": "FORBIDDEN";
    readonly "403_MESSAGE": "The request was valid, but the server is refusing action.";
    readonly "403_CLASS": "4xx";
    readonly FORBIDDEN: 403;
    readonly 404: "Not Found";
    readonly "404_NAME": "NOT_FOUND";
    readonly "404_MESSAGE": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.";
    readonly "404_CLASS": "4xx";
    readonly NOT_FOUND: 404;
    readonly 405: "Method Not Allowed";
    readonly "405_NAME": "METHOD_NOT_ALLOWED";
    readonly "405_MESSAGE": "A request method is not supported for the requested resource.";
    readonly "405_CLASS": "4xx";
    readonly METHOD_NOT_ALLOWED: 405;
    readonly 406: "Not Acceptable";
    readonly "406_NAME": "NOT_ACCEPTABLE";
    readonly "406_MESSAGE": "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.";
    readonly "406_CLASS": "4xx";
    readonly NOT_ACCEPTABLE: 406;
    readonly 407: "Proxy Authentication Required";
    readonly "407_NAME": "PROXY_AUTHENTICATION_REQUIRED";
    readonly "407_MESSAGE": "The client must first authenticate itself with the proxy.";
    readonly "407_CLASS": "4xx";
    readonly PROXY_AUTHENTICATION_REQUIRED: 407;
    readonly 408: "Request Time-out";
    readonly "408_NAME": "REQUEST_TIMEOUT";
    readonly "408_MESSAGE": "The server timed out waiting for the request.";
    readonly "408_CLASS": "4xx";
    readonly REQUEST_TIMEOUT: 408;
    readonly 409: "Conflict";
    readonly "409_NAME": "CONFLICT";
    readonly "409_MESSAGE": "Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.";
    readonly "409_CLASS": "4xx";
    readonly CONFLICT: 409;
    readonly 410: "Gone";
    readonly "410_NAME": "GONE";
    readonly "410_MESSAGE": "Indicates that the resource requested is no longer available and will not be available again.";
    readonly "410_CLASS": "4xx";
    readonly GONE: 410;
    readonly 411: "Length Required";
    readonly "411_NAME": "LENGTH_REQUIRED";
    readonly "411_MESSAGE": "The request did not specify the length of its content, which is required by the requested resource.";
    readonly "411_CLASS": "4xx";
    readonly LENGTH_REQUIRED: 411;
    readonly 412: "Precondition Failed";
    readonly "412_NAME": "PRECONDITION_FAILED";
    readonly "412_MESSAGE": "The server does not meet one of the preconditions that the requester put on the request.";
    readonly "412_CLASS": "4xx";
    readonly PRECONDITION_FAILED: 412;
    readonly 413: "Request Entity Too Large";
    readonly "413_NAME": "REQUEST_ENTITY_TOO_LARGE";
    readonly "413_MESSAGE": "The request is larger than the server is willing or able to process. Previously called \"Request Entity Too Large\".";
    readonly "413_CLASS": "4xx";
    readonly REQUEST_ENTITY_TOO_LARGE: 413;
    readonly 414: "Request-URI Too Large";
    readonly "414_NAME": "REQUEST_URI_TOO_LONG";
    readonly "414_MESSAGE": "The URI provided was too long for the server to process.";
    readonly "414_CLASS": "4xx";
    readonly REQUEST_URI_TOO_LONG: 414;
    readonly 415: "Unsupported Media Type";
    readonly "415_NAME": "UNSUPPORTED_MEDIA_TYPE";
    readonly "415_MESSAGE": "The request entity has a media type which the server or resource does not support.";
    readonly "415_CLASS": "4xx";
    readonly UNSUPPORTED_MEDIA_TYPE: 415;
    readonly 416: "Requested Range not Satisfiable";
    readonly "416_NAME": "REQUESTED_RANGE_NOT_SATISFIABLE";
    readonly "416_MESSAGE": "The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.";
    readonly "416_CLASS": "4xx";
    readonly REQUESTED_RANGE_NOT_SATISFIABLE: 416;
    readonly 417: "Expectation Failed";
    readonly "417_NAME": "EXPECTATION_FAILED";
    readonly "417_MESSAGE": "The server cannot meet the requirements of the Expect request-header field.";
    readonly "417_CLASS": "4xx";
    readonly EXPECTATION_FAILED: 417;
    readonly 418: "I'm a teapot";
    readonly "418_NAME": "IM_A_TEAPOT";
    readonly "418_MESSAGE": "Any attempt to brew coffee with a teapot should result in the error code \"418 I'm a teapot\". The resulting entity body MAY be short and stout.";
    readonly "418_CLASS": "4xx";
    readonly IM_A_TEAPOT: 418;
    readonly 421: "Misdirected Request";
    readonly "421_NAME": "MISDIRECTED_REQUEST";
    readonly "421_MESSAGE": "The request was directed at a server that is not able to produce a response.";
    readonly "421_CLASS": "4xx";
    readonly MISDIRECTED_REQUEST: 421;
    readonly 422: "Unprocessable Entity";
    readonly "422_NAME": "UNPROCESSABLE_ENTITY";
    readonly "422_MESSAGE": "The request was well-formed but was unable to be followed due to semantic errors.";
    readonly "422_CLASS": "4xx";
    readonly UNPROCESSABLE_ENTITY: 422;
    readonly 423: "Locked";
    readonly "423_NAME": "LOCKED";
    readonly "423_MESSAGE": "The resource that is being accessed is locked.";
    readonly "423_CLASS": "4xx";
    readonly LOCKED: 423;
    readonly 424: "Failed Dependency";
    readonly "424_NAME": "FAILED_DEPENDENCY";
    readonly "424_MESSAGE": "The request failed because it depended on another request and that request failed.";
    readonly "424_CLASS": "4xx";
    readonly FAILED_DEPENDENCY: 424;
    readonly 425: "Too Early";
    readonly "425_NAME": "TOO_EARLY";
    readonly "425_MESSAGE": "The server is unwilling to risk processing a request that might be replayed.";
    readonly "425_CLASS": "4xx";
    readonly TOO_EARLY: 425;
    readonly 426: "Upgrade Required";
    readonly "426_NAME": "UPGRADE_REQUIRED";
    readonly "426_MESSAGE": "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.";
    readonly "426_CLASS": "4xx";
    readonly UPGRADE_REQUIRED: 426;
    readonly 428: "Precondition Required";
    readonly "428_NAME": "PRECONDITION_REQUIRED";
    readonly "428_MESSAGE": "The origin server requires the request to be conditional.";
    readonly "428_CLASS": "4xx";
    readonly PRECONDITION_REQUIRED: 428;
    readonly 429: "Too Many Requests";
    readonly "429_NAME": "TOO_MANY_REQUESTS";
    readonly "429_MESSAGE": "The user has sent too many requests in a given amount of time.";
    readonly "429_CLASS": "4xx";
    readonly TOO_MANY_REQUESTS: 429;
    readonly 431: "Request Header Fields Too Large";
    readonly "431_NAME": "REQUEST_HEADER_FIELDS_TOO_LARGE";
    readonly "431_MESSAGE": "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.";
    readonly "431_CLASS": "4xx";
    readonly REQUEST_HEADER_FIELDS_TOO_LARGE: 431;
    readonly 451: "Unavailable For Legal Reasons";
    readonly "451_NAME": "UNAVAILABLE_FOR_LEGAL_REASONS";
    readonly "451_MESSAGE": "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.";
    readonly "451_CLASS": "4xx";
    readonly UNAVAILABLE_FOR_LEGAL_REASONS: 451;
    readonly 500: "Internal Server Error";
    readonly "500_NAME": "INTERNAL_SERVER_ERROR";
    readonly "500_MESSAGE": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.";
    readonly "500_CLASS": "5xx";
    readonly INTERNAL_SERVER_ERROR: 500;
    readonly 501: "Not Implemented";
    readonly "501_NAME": "NOT_IMPLEMENTED";
    readonly "501_MESSAGE": "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.";
    readonly "501_CLASS": "5xx";
    readonly NOT_IMPLEMENTED: 501;
    readonly 502: "Bad Gateway";
    readonly "502_NAME": "BAD_GATEWAY";
    readonly "502_MESSAGE": "The server was acting as a gateway or proxy and received an invalid response from the upstream server.";
    readonly "502_CLASS": "5xx";
    readonly BAD_GATEWAY: 502;
    readonly 503: "Service Unavailable";
    readonly "503_NAME": "SERVICE_UNAVAILABLE";
    readonly "503_MESSAGE": "The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.";
    readonly "503_CLASS": "5xx";
    readonly SERVICE_UNAVAILABLE: 503;
    readonly 504: "Gateway Time-out";
    readonly "504_NAME": "GATEWAY_TIMEOUT";
    readonly "504_MESSAGE": "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.";
    readonly "504_CLASS": "5xx";
    readonly GATEWAY_TIMEOUT: 504;
    readonly 505: "HTTP Version not Supported";
    readonly "505_NAME": "HTTP_VERSION_NOT_SUPPORTED";
    readonly "505_MESSAGE": "The server does not support the HTTP protocol version used in the request.";
    readonly "505_CLASS": "5xx";
    readonly HTTP_VERSION_NOT_SUPPORTED: 505;
    readonly 506: "Variant Also Negotiates";
    readonly "506_NAME": "VARIANT_ALSO_NEGOTIATES";
    readonly "506_MESSAGE": "Transparent content negotiation for the request results in a circular reference.";
    readonly "506_CLASS": "5xx";
    readonly VARIANT_ALSO_NEGOTIATES: 506;
    readonly 507: "Insufficient Storage";
    readonly "507_NAME": "INSUFFICIENT_STORAGE";
    readonly "507_MESSAGE": "The server is unable to store the representation needed to complete the request.";
    readonly "507_CLASS": "5xx";
    readonly INSUFFICIENT_STORAGE: 507;
    readonly 508: "Loop Detected";
    readonly "508_NAME": "LOOP_DETECTED";
    readonly "508_MESSAGE": "The server detected an infinite loop while processing the request.";
    readonly "508_CLASS": "5xx";
    readonly LOOP_DETECTED: 508;
    readonly 510: "Not Extended";
    readonly "510_NAME": "NOT_EXTENDED";
    readonly "510_MESSAGE": "Further extensions to the request are required for the server to fulfil it.";
    readonly "510_CLASS": "5xx";
    readonly NOT_EXTENDED: 510;
    readonly 511: "Network Authentication Required";
    readonly "511_NAME": "NETWORK_AUTHENTICATION_REQUIRED";
    readonly "511_MESSAGE": "The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.";
    readonly "511_CLASS": "5xx";
    readonly NETWORK_AUTHENTICATION_REQUIRED: 511;
    readonly extra: {
        readonly unofficial: {
            readonly 103: "Checkpoint";
            readonly "103_NAME": "CHECKPOINT";
            readonly "103_MESSAGE": "Used in the resumable requests proposal to resume aborted PUT or POST requests.";
            readonly "103_CLASS": "1xx";
            readonly CHECKPOINT: 103;
            readonly 419: "Page Expired";
            readonly "419_NAME": "PAGE_EXPIRED";
            readonly "419_MESSAGE": "Used by the Laravel Framework when a CSRF Token is missing or expired.";
            readonly "419_CLASS": "4xx";
            readonly PAGE_EXPIRED: 419;
            readonly 218: "This is fine";
            readonly "218_NAME": "THIS_IS_FINE";
            readonly "218_MESSAGE": "Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.";
            readonly "218_CLASS": "2xx";
            readonly THIS_IS_FINE: 218;
            readonly 420: "Enhance Your Calm";
            readonly "420_NAME": "ENHANCE_YOUR_CALM";
            readonly "420_MESSAGE": "Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.";
            readonly "420_CLASS": "4xx";
            readonly ENHANCE_YOUR_CALM: 420;
            readonly 450: "Blocked by Windows Parental Controls";
            readonly "450_NAME": "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS";
            readonly "450_MESSAGE": "The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.";
            readonly "450_CLASS": "4xx";
            readonly BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450;
            readonly 498: "Invalid Token";
            readonly "498_NAME": "INVALID_TOKEN";
            readonly "498_MESSAGE": "Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.";
            readonly "498_CLASS": "4xx";
            readonly INVALID_TOKEN: 498;
            readonly 499: "Token Required";
            readonly "499_NAME": "TOKEN_REQUIRED";
            readonly "499_MESSAGE": "Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.";
            readonly "499_CLASS": "4xx";
            readonly TOKEN_REQUIRED: 499;
            readonly 509: "Bandwidth Limit Exceeded";
            readonly "509_NAME": "BANDWIDTH_LIMIT_EXCEEDED";
            readonly "509_MESSAGE": "The server has exceeded the bandwidth specified by the server administrator.";
            readonly "509_CLASS": "5xx";
            readonly BANDWIDTH_LIMIT_EXCEEDED: 509;
            readonly 530: "Site is frozen";
            readonly "530_NAME": "SITE_IS_FROZEN";
            readonly "530_MESSAGE": "Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.";
            readonly "530_CLASS": "5xx";
            readonly SITE_IS_FROZEN: 530;
            readonly 598: "Network read timeout error";
            readonly "598_NAME": "NETWORK_READ_TIMEOUT_ERROR";
            readonly "598_MESSAGE": "Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.";
            readonly "598_CLASS": "5xx";
            readonly NETWORK_READ_TIMEOUT_ERROR: 598;
        };
        readonly iis: {
            readonly 440: "Login Time-out";
            readonly "440_NAME": "LOGIN_TIME_OUT";
            readonly "440_MESSAGE": "The client's session has expired and must log in again.";
            readonly "440_CLASS": "4xx";
            readonly LOGIN_TIME_OUT: 440;
            readonly 449: "Retry With";
            readonly "449_NAME": "RETRY_WITH";
            readonly "449_MESSAGE": "The server cannot honour the request because the user has not provided the required information.";
            readonly "449_CLASS": "4xx";
            readonly RETRY_WITH: 449;
            readonly 451: "Redirect";
            readonly "451_NAME": "REDIRECT";
            readonly "451_MESSAGE": "Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.";
            readonly "451_CLASS": "4xx";
            readonly REDIRECT: 451;
        };
        readonly nginx: {
            readonly 444: "No Response";
            readonly "444_NAME": "NO_RESPONSE";
            readonly "444_MESSAGE": "Used internally to instruct the server to return no information to the client and close the connection immediately.";
            readonly "444_CLASS": "4xx";
            readonly NO_RESPONSE: 444;
            readonly 494: "Request header too large";
            readonly "494_NAME": "REQUEST_HEADER_TOO_LARGE";
            readonly "494_MESSAGE": "Client sent too large request or too long header line.";
            readonly "494_CLASS": "4xx";
            readonly REQUEST_HEADER_TOO_LARGE: 494;
            readonly 495: "SSL Certificate Error";
            readonly "495_NAME": "SSL_CERTIFICATE_ERROR";
            readonly "495_MESSAGE": "An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.";
            readonly "495_CLASS": "4xx";
            readonly SSL_CERTIFICATE_ERROR: 495;
            readonly 496: "SSL Certificate Required";
            readonly "496_NAME": "SSL_CERTIFICATE_REQUIRED";
            readonly "496_MESSAGE": "An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.";
            readonly "496_CLASS": "4xx";
            readonly SSL_CERTIFICATE_REQUIRED: 496;
            readonly 497: "HTTP Request Sent to HTTPS Port";
            readonly "497_NAME": "HTTP_REQUEST_SENT_TO_HTTPS_PORT";
            readonly "497_MESSAGE": "An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.";
            readonly "497_CLASS": "4xx";
            readonly HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497;
            readonly 499: "Client Closed Request";
            readonly "499_NAME": "CLIENT_CLOSED_REQUEST";
            readonly "499_MESSAGE": "Used when the client has closed the request before the server could send a response.";
            readonly "499_CLASS": "4xx";
            readonly CLIENT_CLOSED_REQUEST: 499;
        };
        readonly cloudflare: {
            readonly 520: "Unknown Error";
            readonly "520_NAME": "UNKNOWN_ERROR";
            readonly "520_MESSAGE": "The 520 error is used as a \"catch-all response for when the origin server returns something unexpected\", listing connection resets, large headers, and empty or invalid responses as common triggers.";
            readonly "520_CLASS": "5xx";
            readonly UNKNOWN_ERROR: 520;
            readonly 521: "Web Server Is Down";
            readonly "521_NAME": "WEB_SERVER_IS_DOWN";
            readonly "521_MESSAGE": "The origin server has refused the connection from Cloudflare.";
            readonly "521_CLASS": "5xx";
            readonly WEB_SERVER_IS_DOWN: 521;
            readonly 522: "Connection Timed Out";
            readonly "522_NAME": "CONNECTION_TIMED_OUT";
            readonly "522_MESSAGE": "Cloudflare could not negotiate a TCP handshake with the origin server.";
            readonly "522_CLASS": "5xx";
            readonly CONNECTION_TIMED_OUT: 522;
            readonly 523: "Origin Is Unreachable";
            readonly "523_NAME": "ORIGIN_IS_UNREACHABLE";
            readonly "523_MESSAGE": "Cloudflare could not reach the origin server.";
            readonly "523_CLASS": "5xx";
            readonly ORIGIN_IS_UNREACHABLE: 523;
            readonly 524: "A Timeout Occurred";
            readonly "524_NAME": "A_TIMEOUT_OCCURRED";
            readonly "524_MESSAGE": "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.";
            readonly "524_CLASS": "5xx";
            readonly A_TIMEOUT_OCCURRED: 524;
            readonly 525: "SSL Handshake Failed";
            readonly "525_NAME": "SSL_HANDSHAKE_FAILED";
            readonly "525_MESSAGE": "Cloudflare could not negotiate a SSL/TLS handshake with the origin server.";
            readonly "525_CLASS": "5xx";
            readonly SSL_HANDSHAKE_FAILED: 525;
            readonly 526: "Invalid SSL Certificate";
            readonly "526_NAME": "INVALID_SSL_CERTIFICATE";
            readonly "526_MESSAGE": "Cloudflare could not validate the SSL/TLS certificate that the origin server presented.";
            readonly "526_CLASS": "5xx";
            readonly INVALID_SSL_CERTIFICATE: 526;
            readonly 527: "Railgun Error";
            readonly "527_NAME": "RAILGUN_ERROR";
            readonly "527_MESSAGE": "Error 527 indicates that the request timed out or failed after the WAN connection had been established.";
            readonly "527_CLASS": "5xx";
            readonly RAILGUN_ERROR: 527;
        };
    };
};

type HttpStatus = typeof status;
type HttpStatusClasses = typeof status.classes;
type HttpStatusUnofficial = typeof status.extra.unofficial;
type HttpStatusIis = typeof status.extra.iis;
type HttpStatusNginx = typeof status.extra.nginx;
type HttpStatusCloudflare = typeof status.extra.cloudflare;

export { type HttpStatus, type HttpStatusClasses, type HttpStatusCloudflare, type HttpStatusIis, type HttpStatusNginx, type HttpStatusUnofficial, status as default, status };
