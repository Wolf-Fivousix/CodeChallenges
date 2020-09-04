function makeHash(n) {
    const hash = {};
    for (let i = n; i > -1; --i) {
        hash[i] = true;
    }
    return hash;
}
const times = {}
const for_times = {}
for (let n = 0 ; n < 26 ; n++) {
    let start_time = Date.now()
    let hash = makeHash(2 ** n)
    let end_time = Date.now()
    times[n] = end_time - start_time
    console.log("INSERT: 2 ** " + n + " = " + times[n] + "ms")
    start_time = Date.now()
    for (const key in hash) {
        // Do nothing
    }
    end_time = Date.now()
    for_times[n] = end_time - start_time
    console.log("  LOOP: 2 ** " + n + " = " + for_times[n] + "ms\n")
    console.log("2 ** " + n + " -  INSERT: " + times[n] + "ms, LOOP: " + for_times[n] + "ms")
    console.log("  Insert x" + (times[n] / times[n-1]).toFixed(2) + ", Loop x" + (for_times[n] / for_times[n-1]).toFixed(2));
}