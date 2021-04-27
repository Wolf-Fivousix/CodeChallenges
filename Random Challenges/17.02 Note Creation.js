//Given a short note and a long book as string inputs, write a function to determine if the note can be created from the book.
//E.g.
//Note: meet at noon
//Book: this is some sample text about kangaroos.
//False (missing 1 "n" - needs 2)

// Consider capitalization.
// Match char by char

/*
create the note UNICODE counter
iterate through book input
    if UNICODE exists in our counter, remove every found UNICODE char
    if note counter is empty, return true

return false
*/
// note: ""
// book: ""

function noteCreationCheck(note, book) {
    if (!note.length) return true;
    
    const noteCounter = createStringCounter(note);

    for (let i = 0; i < book.length; ++i) {
        const char = book[i];
        if (noteCounter[char]) {
            --noteCounter[char];
            if (noteCounter[char] === 0) --noteCounter["size"];
        }
        
        if (noteCounter["size"] === 0) return true;
    }
    
    return false;
}

function createStringCounter(note) {
    const hash = { "size": 0 };
    for (let i = 0; i < note.length; ++i) {
        // Assuming our JS will handle extended charcters
        const char = note[i];
        if (hash[char]) {
            ++hash[char];
        }
        else {
            hash[char] = 1;
            ++hash["size"];
        }
    }
    
    return hash;
}

// Linear Time Complexity O(n) (where N is our note and book inputs)
// Constant Space Complexity O(1) (where 1 is as many characters as we have in JS)