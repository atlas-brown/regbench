
// Define the function to transform a string into snake_case
function toSnakeCase(inputString) {
    // Step 1: Trim the input to remove leading and trailing spaces
    const trimmedInput = inputString.trim();
    // Step 2: Insert underscores before uppercase letters followed by lowercase letters or preceded by lowercase letters
    // and ensure sequences of uppercase letters and numbers followed by uppercase letters are handled
    const withUnderscores = trimmedInput
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, (match, p1, p2) => `${p1.split('').join('_')}_${p2}`)
        .replace(/([0-9])([A-Z])/g, '$1_$2'); // Handle numbers followed by uppercase letters
    // Step 3: Convert the string to lowercase
    const lowerCaseInput = withUnderscores.toLowerCase();
    // Step 4: Replace sequences of non-alphanumeric characters with a single underscore
    const underscoredInput = lowerCaseInput.replace(/[^a-z0-9]+/g, '_');
    // Step 5: Remove any leading or trailing underscores
    const cleanedInput = underscoredInput.replace(/^_+|_+$/g, '');
    // Step 6: Return the transformed string
    return cleanedInput;
}

// Export the function as a CommonJS module
module.exports = toSnakeCase;
