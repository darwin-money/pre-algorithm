function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    // Define vowels (both uppercase and lowercase)
    const vowels = "aeiouAEIOU";

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Count total characters (including spaces and punctuation)
        lengthCounter++;

        // Count vowels
        if (vowels.includes(char)) {
            vowelCounter++;
        }

        // Count words (space indicates a word boundary)
        if (char === ' ') {
            wordCounter++;
        }
    }

    // If sentence is not empty, increment word counter by 1 for the last word
    if (sentence.length > 0) {
        wordCounter++; // The last word doesn't end with a space, so we add 1
    }

    // Output the results
    console.log("Length of sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage:
const sentence = "Hello world. This is a test.";
analyzeSentence(sentence);
