// Artisan Martians
// Instagram stickers cost a dolla
// each from the company store
// have an idea. I want to buy
// stickers, cut them up, and use
// the letters to make other
// words/phrases. An Instagram
// sticker contains only the word
// 'instagram', in all lower-case
// letters.
// Write a function that, given a
// string consisting of a word or
// words made up of letters from
// the word 'instagram', outputs
// an integer with the number of
// stickers I will need to buy.
// Some examples:
// 'artisan martians' needs 2
// stickers
// 'taming giant gnats' needs 3
// stickers
// 'tiara' only needs 1 sticker
// You can assume the input you
// are passed is valid, that is, doe
// not contain any non-
// 'instagram' letters. The only
// potential non-letter character
// in the string are spaces.

function stickers_for(phrase) {
    const stickerHash = {
        "a": 2,
        "i": 1,
        "g": 1,
        "m": 1,
        "n": 1,
        "r": 1,
        "s": 1,
        "t": 1
    }

    const phraseHash = hashCounter(phrase);

    let stickerCount = 0;
    for (let letter in phraseHash) {
        const stickers = Math.ceil(phraseHash[letter] / stickerHash[letter]);
        stickerCount = Math.max(stickerCount, stickers);
    }

    return stickerCount;
}

function hashCounter(phrase) {
    let hash = {};

    for (let i in phrase) {
        const letter = phrase[i];

        if (letter !== " ") {
            if (hash[letter]) ++hash[letter];
            else hash[letter] = 1;
        }
    }

    return hash;
}
// 14/14 Test Cases.
// This solution works on Linear Time with Constant Space.