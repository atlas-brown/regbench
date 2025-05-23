function isObject(obj: unknown) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

function isEmptyObject(obj: unknown) {
  return typeof obj === 'object' && obj !== null && !Object.keys(obj).length;
}

// Modified from here: https://stackoverflow.com/a/43781499
function stripEmptyObjects(obj: any) {
  const cleanObj = obj;

  if (!isObject(obj) && !Array.isArray(cleanObj)) {
    return cleanObj;
  } else if (obj === null) {
    return undefined;
  }

  if (!Array.isArray(cleanObj)) {
    Object.keys(cleanObj).forEach(key => {
      let value = cleanObj[key];

      if (typeof value === 'object' && value !== null) {
        value = stripEmptyObjects(value);

        if (isEmptyObject(value)) {
          delete cleanObj[key];
        } else {
          cleanObj[key] = value;
        }
      } else if (value === null) {
        // Null properties in an object should remain!
      }
    });

    return cleanObj;
  }

  cleanObj.forEach((o, idx) => {
    let value = o;
    if (typeof value === 'object' && value !== null) {
      value = stripEmptyObjects(value);

      if (isEmptyObject(value)) {
        delete cleanObj[idx];
      } else {
        cleanObj[idx] = value;
      }
    } else if (value === null) {
      // Null entries within an array should be removed.
      delete cleanObj[idx];
    }
  });

  // Since deleting a key from an array will retain an undefined value in that array, we need to
  // filter them out.
  return cleanObj.filter(el => el !== undefined);
}

export default function removeUndefinedObjects<T>(obj?: T): T | undefined {
  if (obj === undefined) {
    return undefined;
  }

  // JSON.stringify removes undefined values. Though `[undefined]` will be converted with this to
  // `[null]`, we'll clean that up next.
  // eslint-disable-next-line try-catch-failsafe/json-parse
  let withoutUndefined = JSON.parse(JSON.stringify(obj));

  // Then we recursively remove all empty objects and nullish arrays.
  withoutUndefined = stripEmptyObjects(withoutUndefined);

  // If the only thing that's leftover is an empty object then return nothing.
  if (isEmptyObject(withoutUndefined)) return undefined;

  return withoutUndefined;
}
