export const createUseCacheTracker = ()=>new Map();
/**
 * Example usage:
 *
 * const tracker1 = { 'useCache/file1': 1, 'useCache/file2': 2 };
 * const tracker2 = { 'useCache/file2': 3, 'useCache/file3': 4 };
 * const merged = mergeUseCacheTrackers(tracker1, tracker2);
 *
 * // Result: { 'useCache/file1': 1, 'useCache/file2': 5, 'useCache/file3': 4 }
 */ export const mergeUseCacheTrackers = (tracker1, tracker2)=>{
    const mergedTracker = {
        ...tracker1
    };
    if (tracker2) {
        for(const key in tracker2){
            if (Object.prototype.hasOwnProperty.call(tracker2, key)) {
                const typedKey = key;
                if (mergedTracker[typedKey] !== undefined) {
                    mergedTracker[typedKey] += tracker2[typedKey];
                } else {
                    mergedTracker[typedKey] = tracker2[typedKey];
                }
            }
        }
    }
    return mergedTracker;
};

//# sourceMappingURL=use-cache-tracker-utils.js.map