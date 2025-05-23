"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneToOne = OneToOne;
const globals_1 = require("../../globals");
const ObjectUtils_1 = require("../../util/ObjectUtils");
/**
 * One-to-one relation allows the creation of a direct relation between two entities. Entity1 has only one Entity2.
 * Entity1 is the owner of the relationship, and stores Entity2 id on its own side.
 */
function OneToOne(typeFunctionOrTarget, inverseSideOrOptions, options) {
    // normalize parameters
    let inverseSideProperty;
    if (ObjectUtils_1.ObjectUtils.isObject(inverseSideOrOptions)) {
        options = inverseSideOrOptions;
    }
    else {
        inverseSideProperty = inverseSideOrOptions;
    }
    return function (object, propertyName) {
        if (!options)
            options = {};
        // now try to determine it its lazy relation
        let isLazy = options && options.lazy === true ? true : false;
        if (!isLazy && Reflect && Reflect.getMetadata) {
            // automatic determination
            const reflectedType = Reflect.getMetadata("design:type", object, propertyName);
            if (reflectedType &&
                typeof reflectedType.name === "string" &&
                reflectedType.name.toLowerCase() === "promise")
                isLazy = true;
        }
        (0, globals_1.getMetadataArgsStorage)().relations.push({
            target: object.constructor,
            propertyName: propertyName,
            // propertyType: reflectedType,
            isLazy: isLazy,
            relationType: "one-to-one",
            type: typeFunctionOrTarget,
            inverseSideProperty: inverseSideProperty,
            options: options,
        });
    };
}

//# sourceMappingURL=OneToOne.js.map
