// Example data
const startTag = "Tutor";
const endTag = "Conversation Finished";

function* llmStream() {
    const exampleText = [
        'T',
        'utor',
        ':',
        ' Hello',
        ' and',
        ' welc',
        'ome',
        ' to',
        ' Speak',
        '!\n',
        'Conver',
        'sation',
        ' Finished',
        ':',
        ' False'
    ];
    for (let tok of exampleText) {
        yield tok;
    }
}

// Implement this function
function* processLlmResponse(response, startTag, endTag) {
    let matchStart = 0
    let tagColonMarker = false
    let completeStartMatch = false
	let matchEnd = 0
	let completeEndMatch = false
	let endTagPotentialMatchResults = []

    for (let token of response) {
		if (tagColonMarker || completeEndMatch) {
		// console.log("tagColonMarker is true, check if the current token is a colon...")
		matchStart = 0
		tagColonMarker = false
		if (token === ":") {
			completeStartMatch = true
			if (completeEndMatch) return // END's the execution of processLlmResponse() and stops output.
			continue
		}
		else {
			// console.log("token was NOT a colon! Reset everything and continue normal processing of this token")
			completeStartMatch = false
		}

		}
	
		const matchFragment = startTag.substr(matchStart, token.length)
		// console.log(`matchFragment ${matchFragment} - token: ${token}`)
		if (matchFragment === token) {
			matchStart += token.length
			// console.log(`matchStart: ${matchStart}`)
			if (matchStart === startTag.length) {
				// Potential match was found, check next character is a colon (":")
				// console.log("tag match was found, setting tagColonMarker to true")
				tagColonMarker = true
			}
		}
		else {
			matchStart = 0
		}


        // Scan for the startTag 
        
        // If it part of the closingTag, let`s process all the tokens until we either find the closingTag or confirm it is not part of it.

        // This will send the token back to the user, let's make sure the input is proper before sending it back.
        if (completeStartMatch) {
			// At this point we have hit the starting tag, we have already processed the following colon and we are GO AHEAD with the prints.
			// The challenge now is the CLOSING tag, so we stop the printing.
			// This is printing everything, it is just not handling the tagParsing logic. SINCE I had to include the logic inside the main function, now I need to handle the closingTag in it as well.

			// SIIIIIINCE I hardcoded matchStart above, I can't re-use the code, I HAVE to duplicate it here:
			// REMEMBER - There's a catch here!
			// Once we start MATCHING the endTag, we DO NOT WANT TO RETURN these tokens!
			// We need to SAVE them, until we confirm the closingTag doesn't match. At which point we can return all of them and continue processing.
			// If there IS a complete match, then we witheld said tokens and the user never saw them. We can just discard them.
			const matchFragment = endTag.substr(matchEnd, token.length)
			// console.log(`matchFragment ${matchFragment} - token: ${token}`)
			if (matchFragment === token) {
				endTagPotentialMatchResults.push({ textDelta: token })
				matchEnd += token.length
				// console.log(`matchEnd: ${matchEnd}`)
				if (matchEnd === endTag.length) {
					// Potential match was found, check next character is a colon (":")
					// Because, just like the startTag, there COULD be the remaining of another word in here, and that would NOT be match for the closing tag!
					// console.log("endTag match was found, setting tagColonMarker to true")
					completeEndMatch = true
				}
				continue	// DO NOT return this token to the user, continue processing.
			}
			else {
				matchEnd = 0
				// the token did not "match". Empty our buffer and move one to the next token.
				// we CANNOT yiled the whole array, because the output will be in the wrong format, so we need to iterate through it and pop each one in order.
				for (let output of endTagPotentialMatchResults) {
					// console.log("What's in here? ", output)
					yield output
				}
				endTagPotentialMatchResults = []
			}

			yield { textDelta: token };
		}
    }
}

// Prints your output
for (let out of processLlmResponse(llmStream(), startTag, endTag)) {
    console.log(out);
}

// Ba
// nana

// T
// utor
// ial
// :

// T
// utorial
// :

// Assume the input have a valid startTag
// if we don`t find the endTag, parse everything until the end of input.

// Case sensitive

// Brute Force
// Scan for the startTag
// scan for the endTag
// Parse everything in the middle (or to the end)
// return result

// Second appraoch
// Scan for th startTag
// If the token is not part of the closing tag, return it
// If it part of the closingTag, let`s process all the tokens until we either find the closingTag or confirm it is not part of it.


// ALRIGHT! 
// At this point the code is working as expected and handling the edge cases.
// The code looks VERY MESSY THOUGH. If I want to continue this exercise, I have to:
	// Review on how to extract the logic of the tag parsing to a helper method that can be re-used.
	// Re-sctructure the logic in a way that it makes more sense.