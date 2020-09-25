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

// This solution is somewhat similar. It looks for the "https//www." and removes it, then just splits the result string on the "." and return the first element.
function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

// Similar to the one above, but this ones removes everything except the domain name itself.
function domainName(url){  
    return url.replace(/.+\/\/|www.|\..+/g, '')
}

// This, THIS is the solution I was tryinig to come up with.
// It finds all the variations for the start and then remove them from the resulting array.
// [^\.]+ is going to match everything until it finds a dot, not including it.
// But because we captured (www.) in another group, this ([^\.]) capture group will not have it inside. Effectively going bewond the first dot.

function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// We can remove the optional from the result to make a little more clear, if desired?
function domainName(url){
    return url.match(/(http(s)?:\/\/)?(w{3}\.)?([^\.]+)/i)[4];
}