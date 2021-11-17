//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// RegEx to find all of the following characters within the string
const SPECIAL_CHARACTERS = /[.,\/#!$%\^&\*;:{}=\-_`~()"]/g;
// RegEx to see if the apostrophe is between word characters - i.e. `that's` NOT `'123` or `password'`
const IS_CONTRACTION = /(\w'\w)/g;

const removeApostropheFromWordsIfNotAContraction = (words) => words.map(word => {
  let wordWithApostropheRemoved = null;
  if(word.includes(`'`) && !IS_CONTRACTION.test(word)) {
    wordWithApostropheRemoved = word.replace(`'`, "");
  }
  return wordWithApostropheRemoved ? wordWithApostropheRemoved : word;
});

export const countWords = (sentence) => {
  const lowerCaseSentence = sentence.toLowerCase();
  const specialCharactersRemoved = lowerCaseSentence.replace(SPECIAL_CHARACTERS, " ");
  const seperatedWordArray = specialCharactersRemoved.split(" ");
  const apostrophesRemovedFromNonContractions = removeApostropheFromWordsIfNotAContraction(seperatedWordArray);
  const wordCountObject = {};

  apostrophesRemovedFromNonContractions.forEach(word =>
    wordCountObject[word] = (wordCountObject[word] || 0) + 1
  );
  return wordCountObject;
};
