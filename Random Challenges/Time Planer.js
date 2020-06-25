// Time Planner
// Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.
// Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.
// Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.
// In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.
// Implement an efficient solution and analyze its time and space complexities.
// Examples:
// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: [] # since there is no common slot whose duration is 12

// slotsA = [[10, 30], [100, 150]]
// slotsB = [[70, 100]]
// dur = 20

// output: []

// slotsA = [[10, 30], [100, 150]]
// slotsB = [[70, 100], [110, 130]]
// dur = 20

// output: [110, 130]

// slotA = []

// slotsA = [[10, 300], [350, 1500]]
// slotsB = [[70, 100], [110, 130], [200, 300], [310, 400]]
// dur = 50

// output: [200, 250]

// slotsA = [[10, 300], [350, 1500]]
// slotsB = [[70, 100], [110, 130], [200, 230], [310, 400]]
// dur = 50

// output: [350, 400]

// slotsA = [[10, 300]]
// slotsB = [[70, 100], [110, 130], [200, 230], [310, 400]]
// dur = 50

// output: []

// pointer to slotA start as first slot of slotA. (index for slotA)
// pointer to slotB start as first slot of slotB. (index for slotB)

// loop through slots until one of the pointers goes beyond their limit (slot length)
// latest start time variable that compares both pointers and picks the latest start time between them.
// earliest end time variable that compares both pointers and pick the earliest end time between them.
// if latest start time plus meeting duration goes beyond earliest end time, we have to update our pointers (indexes).
// if latest start time plus meeting duration goes beyond pointer A OR B end time, increase that pointer(index).
// else we can add latest start time and latest start time plus duration to our result. Then break the loop.
// return empty array.

// slotsA = [[10, 300], [350, 1500]]
// slotsB = [[70, 100], [110, 130], [200, 230], [310, 400]]
// dur = 50
// start time = 350 + 50 = 400
// end time = 400
// output: [350, 400]


function meetingPlanner(slotsA, slotsB, dur) {
	slotAIndex = 0;
	slotBIndex = 0;

	while (slotAIndex < slotsA.length && slotsBIndex < slotsB.length) {
		const slotA = slotsA[slotsAIndex];
		const slotB = slotsB[slotsBIndex];
		const latestStart = Math.max(slotA[0], slotB[0]);
		const endingTime = latestStart + dur;

		if (endingTime > slotA[1] || endingTime > slotB[1]) {
			if (endingTime > slotA[1]) ++slotAIndex;
			if (endingTime > slotB[1]) ++slotBIndex;
		}
		else return [latestStart, latestStart + dur]
    }

    return [];
}
