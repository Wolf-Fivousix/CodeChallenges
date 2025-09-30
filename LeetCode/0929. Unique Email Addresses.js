// Easy

// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

 

// Example 1:

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
// Example 2:

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3
 

// Constraints:

// 1 <= emails.length <= 100
// 1 <= emails[i].length <= 100
// emails[i] consist of lowercase English letters, '+', '.' and '@'.
// Each emails[i] contains exactly one '@' character.
// All local and domain names are non-empty.
// Local names do not start with a '+' character.
// Domain names end with the ".com" suffix.
// Domain names must contain at least one character before ".com" suffix.

/*
Basically we have transformations that need to happen ONLY to the local name, and not the domain name.
Once those are made, we check to see if the e-mail already exists.

BRUTE FORCE:
We separate on the @
Operate the mutations on the local name portion
Add the two together
add to the Set of e-mails

Return the length of the set

Linear Time and Space Complexity O(N) - We need to iterate through the list once and we'll store up to all the entries once more.
*/

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
    const uniqueEmails = new Set()

    for (const email of emails) {
        const [localName, domainName] = email.split("@")

        let processedLocalName = localName.split("+")[0] // Grabs anything before a + sign.
        processedLocalName = processedLocalName.replaceAll(".", "")
        processedLocalName = processedLocalName.concat("@", domainName)

        // console.log(processedLocalName)
        uniqueEmails.add(processedLocalName)
    }

    return uniqueEmails.size
};

// Runtime 8 ms Beats 81.57%
// Memory 58.26 MB Beats 82.11%