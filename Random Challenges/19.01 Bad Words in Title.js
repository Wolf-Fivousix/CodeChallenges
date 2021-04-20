/*
Pinterest 
Given a title (string) and a list of sentences we want to filter for, return if a title is safe/unsafe to be accepted.
Don't worry about captalization.
Do not use Regex or any String standard library methods.

bad_phrases = [
  "free movie downloads",
  "free ray bans",
  "spam",
  "world war i",
  "world war ii",
]

"How to get free movie downloads" - unsafe
"How to get free hotel upgrades" - safe
"Click here for free ray bans" - unsafe
"best spam sites" - unsafe
"world war is best avoided" - safe

title => "worldwari" - safe
"world war is best avoided" => world war is
bad phrase = world, war, i

"aworld war i best avoided" - safe

test string: "please avoid world war iii" - safe

title = "world world world world"



iterating through bad_phrases
  Declare a bad_phrase flag (starts at false)
  for each word  
    iterate through the word (bad_phrase) = CHAR iteration
      iterate through title and try to find matching character
      
        if the FIRST CHAR is not found break to next word
        else if CHAR is found, go to next CHAR
      
      if all characters were found,
        check for prefix and post fix characters (check to see if word is "wrapped" by spaces and start/end of string"
        return a false (unsafe)
    
Polynomial Time Complexity O(N^3)
Constant Space Complexity O(1)

*/

// blocked phrase: world war i
// test string: please avoid tworld war i

function badWordCheck(title, badPhrases) {
  for (let i = 0; i < badPhrases.length; ++i) {
      const badWord = badPhrases[i];
      const firstChar = badWord[0];
      const indexesFound = findFirstLetter(firstChar, title);    
    
      for (let j = 0; j < indexesFound.length; ++j) {
          const indexCorrection = indexesFound[j];
          let badWordFound = false;
        
          for (let k = 1; k < badWord.length; ++k) {
            // Compare both words (bad word and title)
              if (k === badWord.length - 1 && badWord[k] === title[indexCorrection + k]) badWordFound = true;
              if (badWord[k] !== title[indexCorrection + k]) break;
          }
        
          if (badWordFound) {
            if (checkEndingCharacter(badWord, title, indexCorrection)) return false // means bad word ID found.
          }
      }
  }
  
  return true; // Safe Title
}
// bad = wooooowooooo
// title = woowoooooowoooooo

function findFirstLetter(char, string) {
  const indexes = [];
  for (let i = 0; i < string.length; ++i) {
    if (string[i] === char && (i - 1 < 0 || string[i - 1] === " ")) {
        indexes.push(i);
    }
  }
  
  return indexes;
}

function checkEndingCharacter(badWord, title, index) {
    if (
      index + badWord.length === title.length ||
      title[index + badWord.length] === " ") return true;
  
  return false;
}

const bad_phrases = [
  "free movie downloads",
  "free ray bans",
  "spam",
  "world war i",
  "world war ii",
]
// const title = 'How to get free movie downloads'; // => false
//const title = 'How to get free hotel upgrades';
const title = 'world war is best avoided'; // => true

console.log(badWordCheck(title, [
  "free movie downloads",
  "free ray bans",
  "spam",
  "world war i",
  "world war ii",
]));

















