// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    return url.match(/\/\/(www.)?.+?\./);
}

// This is currently grabbing the information desired, plus some extras, like the // and the following .
// Now I need to find a way to keep them in the search, but remove them from the return value.