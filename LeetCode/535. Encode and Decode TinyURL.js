// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var currentCode = "a";
var links = {};

var encode = function(longUrl) {
    links[currentCode] = longUrl;
    const newLink = currentCode;
    
    let ord = currentCode.charCodeAt(currentCode.lenght-1);
    if (ord === 122) {
       correntCode.concat("a"); 
    }
    else {
        currentCode[currentCode.length-1] = String.fromCharCode(ord+1);
    }
    
    return newLink;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return links[shortUrl];
};

// This is somewhat similar to what I had considered.
var map = {};
var id = 10000;
var chars = 'abcdefghijklmnopqrstuvwxyzZBCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-'.split('');

var base64 = function (number) {
    let res = '';
    while (number) {
        res = chars[(number % 64)] + res;
        number = Math.floor(number / 64);
    }
    return res;
};

var reBase64 = function (url) {
    let res = 0;
    url = url.split("").reverse().join("");
    for (let i = 0; i < url.length; i++) {
        res += (64 ** i) * chars.indexOf(url[i]);
    }
    return res;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    map[+id] = longUrl;
    return base64(id);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map[reBase64(shortUrl)];
};

// 