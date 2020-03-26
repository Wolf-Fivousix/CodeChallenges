// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// First match is looking for the "//" of the address, with "www." being optional. It works for most cases, except if
//the address does not have it, in which case match returns null. I leverage that for a second match this time, without bars.
//The "www." still optional, as it could be either www.xxxx.com or xxxxx.com .

function domainName(url){
    const slash = url.match(/\/\/(www.)?(.+?)\./);
    return slash ? slash[2] : url.match(/(www.)?(.+?)\./)[2];
}
