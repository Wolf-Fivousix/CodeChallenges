// Easy

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 

// Constraints:

// The given address is a valid IPv4 address.

/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
    return address.replaceAll(".", "[.]")
};

console.log(defangIPaddr("255.255.255.0"))

// Runtime 56 ms Beats 24.37%
// Memory 48.72 MB Beats 53.87%