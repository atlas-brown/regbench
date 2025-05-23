"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubscriber = EventSubscriber;
const globals_1 = require("../../globals");
/**
 * Classes decorated with this decorator will listen to ORM events and their methods will be triggered when event
 * occurs. Those classes must implement EventSubscriberInterface interface.
 */
function EventSubscriber() {
    return function (target) {
        (0, globals_1.getMetadataArgsStorage)().entitySubscribers.push({
            target: target,
        });
    };
}

//# sourceMappingURL=EventSubscriber.js.map
