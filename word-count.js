//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
  RegEx to see if the apostrophe is present and between word characters
  `special` OR `789` OR `that's` will be matched

  `'123` or `password'` will ignore the apostrophes and just return the word without them

  will ignore anything else out that doesn't match
*/
const REGULAR_WORDS_AND_CONTRACTIONS = /\w+([a-zA-Z0-9']\w+)?/g;


export const countWords = (sentence) => {
  // match will create an array of all words that match the regex
  const scrubbedAndSplitWords = sentence.toLowerCase().match(REGULAR_WORDS_AND_CONTRACTIONS);
  const wordCountObject = {};

  // for each unique word we find, we'll create a key in the wordCountObject
  // if the key already exists, we add to the existing count of the key
  scrubbedAndSplitWords.forEach(word =>
    wordCountObject[word] = (wordCountObject[word] || 0) + 1
  );

  return wordCountObject;
};
