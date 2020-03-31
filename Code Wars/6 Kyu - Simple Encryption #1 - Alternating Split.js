// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty

function encrypt(text, n) {
    // If null, return empty string.
    // String length 1-, return string.
    // 0- N, return string.
    // Do not change original variable, make a new variable.
    // Loop N times
      // encrypt the string.
       // For loop, start at 1, increment twice.
         // Grab each character, and add to variable.
      // For loop, start at 0, increment twice.
         // Grab each character, and add to variable.
      // Return this variable.
}
function decrypt(encryptedText, n) {
    // Start the same way as the encryption function.
    // Two pointers, one at the start, one at half way through.
    // Loop as many times as half the size of string. Save it to a variable.
        // Before adding each character, check the boundaries:
        // First Pointer: the half length mark variable.
        // Second Pointer: end of string.
        // Increment both pointers.
    // return new string.
}
    
// "", 5 => ""
// "W", 3 => "W"
// "something", 0 => "something"
// "That", 1 => "htTa"
// "That", 2 => "tahT"
// "Car", 1 => "aCr"
// "htTa", 1 => "That"