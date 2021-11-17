//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* RegEx to see if the apostrophe is present and between word characters
  `special` OR `789` OR `that's` will work

  `'123` or `password'` or any punctuation, whitespace, or vertical whitespace WILL NOT work
*/
const REGULAR_WORDS_AND_CONTRACTIONS = /\w+('\w+)?/g;


export const countWords = (sentence) => {
  // match will create an array of strings that match the regex
  const scrubbedAndSplitWords = sentence.toLowerCase().match(REGULAR_WORDS_AND_CONTRACTIONS);
  const wordCountObject = {};

  // for each unique word we find, we'll create a key in the wordCountObject
  // if we find that the key already exists, we add to the existing count
  scrubbedAndSplitWords.forEach(word =>
    wordCountObject[word] = (wordCountObject[word] || 0) + 1
  );
  return wordCountObject;
};
