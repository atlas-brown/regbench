
// Define the function to transform a string into PascalCase
function toPascalCase(inputString) {
  // Step 1: Check if the input string is empty
  if (inputString === "") {
    return "";
  }
  
  // Step 2: Trim the input to remove leading and trailing spaces
  const trimmedInput = inputString.trim();
  
  // Step 3: Split the trimmed string into an array of words
  // Using a regex to split by non-alphanumeric characters but preserving numbers
  const words = trimmedInput.split(/[^a-zA-Z0-9]+/);
  
  // Step 4: Process each word
  const processedWords = words.map(word => {
    // Capitalize the first letter and concatenate with the rest of the word
    // Check if the first character is a number, if so, leave it as is
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // Step 5: Concatenate processed words
  const result = processedWords.join('');
  
  // Step 6: Return the result
  return result;
}

// Export the function as a CommonJS module
module.exports = toPascalCase;
