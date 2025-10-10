// Create an object that represents and helps manage file paths.

// Are all paths valid? Or do we need to validate or/and sanitize?
// Do they have slashes or separators?
// Let's assume they are all normal and valid paths, separated by slashes.
// And we won't have things like folder navigation, like ".."

function mapPaths(paths) {
    let filesPathManager = {}
    for (const path of paths) {
        console.log(path)
        // console.log(filesPathManager)
        const folders = path.split("/")
        const stack = []
        // console.log(folders)
        for (const folder of folders) {
            if (folder === "") continue // skip empty separators
            stack.push(folder)
        }
        
        // At this point we have the order in which we'll iterate on our master object.
        // I can do a RECURSIVE call that will create the entry in the object.
        // And the object created will call the method AGAIN, and so on and on...
        // Until the folder is empty. At which point we return an {} (emtpy object)
        const test = objectCreator(stack)
        // console.log(test)
        // filesPathManager = { ...filesPathManager, ...test}
        // This KIND OF WORKS.... But because we're OVERWRITING the entries, the subpaths do NOT combine.
        
            // We can solve this in 2 different ways:
            // 1) We know the NEW object is ALWAYS going to be a single path.
                // So we simply move through filePathManager BEFORE adding the new paths
                // Essentially writing a "custom object fusion"
            filesPathManager = objectMerger(filesPathManager, test)
            console.log(filesPathManager)
            // 2) Instead of doing a single object path, we graph ALL the paths before constructing the object, so there's no object mixing.
                // The problem with this approach is that if we want to add a new path LATER (ad-hoc) it won't work well...
                // This also means this functionality will have to graph the N paths provided... Which could blow the memory.
            

    }
}

// Can I re-write this iteratively?
    // Work backwards from the stack my popping, instead of shifting.
function objectCreator(stack) {
    if (stack.length === 0) return {}
    const property = stack.shift()
    // console.log(property)

    return {
        [property]: objectCreator(stack)
    }
}

// Original object is ALWAYS bigger than newObject.
// So we always try to fit newObject intoOriginal object.
// This order IS VERY IMPORTANT! Inverting the object will erase the originalObject properties.
function objectMerger(originalObject, newObject) {
    const topPropertyName = Object.getOwnPropertyNames(newObject)
    // console.log(`Looking for property: ${topPropertyName}`)
    const existingProperties = Object.getOwnPropertyNames(originalObject)
    // console.log(`existingProperties: ${existingProperties}`)
    // console.log(`=====`)
    // console.log(topPropertyName)
    // console.log(existingProperties)
    // console.log(existingProperties.includes(topPropertyName[0]))
    if (existingProperties.includes(topPropertyName[0])) {
        // console.log(`Property [${topPropertyName}] FOUND - Initiating recursion`)
        return {
            ...originalObject,
            [topPropertyName]: objectMerger(originalObject[topPropertyName], newObject[topPropertyName]),
        }
    }
    else {
        return { ...originalObject, ...newObject}
    }
}

mapPaths(["/home/pics", "/docs", "/home/movies", "/home/movies/action"])
// {
//     home: {
//         pics: {},
//         moies: {},
//     },
//     docs: {
//     },
// }
