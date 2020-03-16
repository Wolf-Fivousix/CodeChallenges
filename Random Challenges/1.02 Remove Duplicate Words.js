// Backend Programming Challange
// ========================================
// Remove all duplicate words from a given string  (Do NOT use any built-in library function that allows this)

function filterDuplicateWords(sentence) {
    let newSentence = [];
    let duplicates = [];
    let words = sentence.split(" ");
    words.forEach(word => {
        if (newSentence.includes(word)) {
            duplicates.push(word);
        }
        else newSentence.push(word)
    });
    return newSentence.filter(word => !duplicates.includes(word)).join(" ");
}

console.log(filterDuplicateWords("test this is a test"));