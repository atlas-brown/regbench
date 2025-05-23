/**
 * This metadata contains all information about entity's listeners.
 */
export class EntityListenerMetadata {
    // ---------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------
    constructor(options) {
        this.entityMetadata = options.entityMetadata;
        this.embeddedMetadata = options.embeddedMetadata;
        this.target = options.args.target;
        this.propertyName = options.args.propertyName;
        this.type = options.args.type;
    }
    // ---------------------------------------------------------------------
    // Public Methods
    // ---------------------------------------------------------------------
    /**
     * Checks if entity listener is allowed to be executed on the given entity.
     */
    isAllowed(entity) {
        // todo: create in entity metadata method like isInherited?
        return (this.entityMetadata.target === entity.constructor || // todo: .constructor won't work for entity schemas, but there are no entity listeners in schemas since there are no objects, right?
            (typeof this.entityMetadata.target === "function" &&
                entity.constructor.prototype instanceof
                    this.entityMetadata.target)); // todo: also need to implement entity schema inheritance
    }
    /**
     * Executes listener method of the given entity.
     */
    execute(entity) {
        // Check if the Embedded Metadata does not exist
        if (!this.embeddedMetadata) {
            // Get the Entity's Method
            const entityMethod = entity[this.propertyName];
            // Check if the Entity Method does not exist
            if (!entityMethod)
                throw new Error(`Entity listener method "${this.propertyName}" does not exist in entity "${entity.constructor.name}".`);
            // Check if the Entity Method is not a function
            if (typeof entityMethod !== "function")
                throw new Error(`Entity listener method "${this.propertyName}" in entity "${entity.constructor.name}" must be a function but got "${typeof entityMethod}".`);
            // Call and return the Entity Method
            return entityMethod.call(entity);
        }
        // Call the Embedded Method
        this.callEntityEmbeddedMethod(entity, this.embeddedMetadata.propertyPath.split("."));
    }
    // ---------------------------------------------------------------------
    // Protected Methods
    // ---------------------------------------------------------------------
    /**
     * Calls embedded entity listener method no matter how nested it is.
     */
    callEntityEmbeddedMethod(entity, propertyPaths) {
        const propertyPath = propertyPaths.shift();
        if (!propertyPath || !entity[propertyPath])
            return;
        if (propertyPaths.length === 0) {
            if (Array.isArray(entity[propertyPath])) {
                entity[propertyPath].map((embedded) => embedded[this.propertyName]());
            }
            else {
                entity[propertyPath][this.propertyName]();
            }
        }
        else {
            if (entity[propertyPath])
                this.callEntityEmbeddedMethod(entity[propertyPath], propertyPaths);
        }
    }
}

//# sourceMappingURL=EntityListenerMetadata.js.map
