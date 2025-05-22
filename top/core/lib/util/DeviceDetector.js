var DeviceDetector = function(){};

DeviceDetector.getUserAgent = function (request) {

    var operaUA = request.getHeader('X-OPERAMINI-PHONE-UA');
    if (operaUA) {
        return operaUA;
    }

    var skyfireUA = request.getHeader('X-SKYFIRE-PHONE');
    if (skyfireUA) {
        return skyfireUA;
    }

    var defaultUA = request.getHeader('USER-AGENT');
    if (defaultUA) {
        return defaultUA;
    }

    return null;
};

DeviceDetector.filterNUA = function (nua, devices, fallback) {
    if (!devices || devices.length === 0) {
        return fallback;
    }

    if (devices.indexOf(nua) > -1) {
        return nua;
    }

    // collapse bots
    // if it was a bot, it would be caught higher up, check just specific bot types
    if (nua === DeviceDetector.NUA.FACEBOOK_BOT || nua === DeviceDetector.NUA.MOBILE_BOT) {
        if (devices.indexOf(DeviceDetector.NUA.BOT) > -1) {
            return DeviceDetector.NUA.BOT;
        }
    }

    // for mobile bot and tablet it could be also interpreted as just mobile
    if (nua === DeviceDetector.NUA.TABLET || nua === DeviceDetector.NUA.MOBILE_BOT) {
        if (devices.indexOf(DeviceDetector.NUA.MOBILE) > -1) {
            return DeviceDetector.NUA.MOBILE;
        }
    }

    return fallback;
};

DeviceDetector.normalizeUserAgent = function (request) {
    if (DeviceDetector.isBot(request)) {
        if (DeviceDetector.isFacebookBot(request)) {
            return DeviceDetector.NUA.FACEBOOK_BOT;
        }

        if (DeviceDetector.isMobile(request)) {
            return DeviceDetector.NUA.MOBILE_BOT;
        }

        return DeviceDetector.NUA.BOT;
    }

    if (DeviceDetector.isTablet(request)) {
        return DeviceDetector.NUA.TABLET;
    }

    if (DeviceDetector.isMobile(request)) {
        return DeviceDetector.NUA.MOBILE;
    }

    return DeviceDetector.NUA.DESKTOP;
};

DeviceDetector.getNormalizedUserAgent = function (request, devices, fallback) {
    var nua = normalizeUserAgent(request);

    if (devices) {
        return filterNUA(nua, devices, fallback);
    } else {
        return nua;
    }
};

DeviceDetector.isDesktop = function (request) {
    var ua = DeviceDetector.getUserAgent(request);
    if (ua) {
        return !DeviceDetector.RegExp.RE_MOBILE.test(ua) &&
               !DeviceDetector.isTablet(request) &&
               (DeviceDetector.RegExp.RE_DESKTOP.test(ua) ||
                DeviceDetector.RegExp.RE_BOT.test(ua));
    }
    return true;
};

DeviceDetector.isFacebookBot = function (request) {
    var ua = DeviceDetector.getUserAgent(request);
    if (ua) {
        return DeviceDetector.RegExp.RE_FACEBOOK.test(ua);
    }
    return false;
};

DeviceDetector.isBot = function (request) {
    var ua = DeviceDetector.getUserAgent(request);
    if (ua) {
        return DeviceDetector.RegExp.RE_BOT.test(ua);
    }
    return false;
};

DeviceDetector.isMobile = function (request) {
    var ua = DeviceDetector.getUserAgent(request);
    if (ua) {
        return DeviceDetector.RegExp.RE_MOBILE.test(ua);
    }
    return false;
};

DeviceDetector.isTablet = function (request) {
    var ua = DeviceDetector.getUserAgent(request);

    if (ua && DeviceDetector.RegExp.RE_TABLET.test(ua)) {

        // tutaj mamy wszystkie androidy i ipad-a
        if (DeviceDetector.RegExp.RE_MOBILE_ANDROID_EXCEPTIONS.test(ua)) {
            return false;
        }

        // tutaj mamy ipad-a i android tablet
        return true;
    }

    return false;
};

// wykrywanie urzadzen typu desktop
DeviceDetector.RegExp = {};
DeviceDetector.RegExp.RE_MOBILE = /(iphone|ipod|kindle|silk|blackberry|android.+mobi|palm|windows\s+(ce|phone)|googlebot-mobile|bb1[0-9].+mobile)/i;
DeviceDetector.RegExp.RE_MOBILE_ANDROID_EXCEPTIONS = /android.+mobi/i;
DeviceDetector.RegExp.RE_TABLET = /(ipad|android)/i;
DeviceDetector.RegExp.RE_DESKTOP = /(windows|linux|os\s+[x9]|solaris|bsd|cros)/i;
DeviceDetector.RegExp.RE_BOT = /(facebookplatform|facebookexternalhit|facebot|ovis|surealived|spider|crawl|slurp|bot|curl|google|libwww|linkchecker|xenu)/i;
DeviceDetector.RegExp.RE_FACEBOOK = /(facebookplatform|facebookexternalhit|facebot)/i;

DeviceDetector.NUA = {};
DeviceDetector.NUA.MOBILE = 'mobile';
DeviceDetector.NUA.MOBILE_BOT = 'mobile-bot';
DeviceDetector.NUA.TABLET = 'tablet';
DeviceDetector.NUA.DESKTOP = 'desktop';
DeviceDetector.NUA.BOT = 'bot';
DeviceDetector.NUA.FACEBOOK_BOT = 'facebook-bot';

exports.DeviceDetector = DeviceDetector;
