// The top floor of your office has recently been vacated.
// Currently, your team is scattered and you would like to
// relocate your group there. Boxes of equipment and
// supplies will need to be moved to the top floor.
// The building contains n+1 floors, indexed 0 to n.
// You start at the top (n th ) floor. You can take the elevator
// down to some floor i and back up, which takes a total of
// n-i minutes.
// Along the way, you can load a maximum of one box
// from each floor and deposit it back at the top.
// The operations of loading and unloading a box take 1
// minute total for both operations.
// Given an initial number of boxes on each floor, what is
// the minimum time required to get all of them to floor n?
// Example
// n = 3
// boxes = [1, 2, 3]
// There are n+1 = 4 floors with boxes on floors 0, 1 and 2.
// The top floor is floor 3. You can minimize the time as
// follows:
// 1. Start at floor 3, ride down to floor 2 (1 minute), load a
// box from there and unload it back at the top (1 minute)
// - 2 minutes needed
// 2. Ride down to floor 1 (2 minutes), picking up boxes from
// floors 2 and 1, and unload them (2 minutes) - 4 minutes
// 3. Ride down to floor 0 (3 minutes), picking up boxes from
// floors 1, 2, and 3 and unloading them (3 minutes) - 6
// minutes
// This requires a total of 2+4+6 = 12 minutes.
// Function Description
// Complete the function minTime in the editor below. The
// function must return a long integer.
// minTime has the following parameters:
//        boxes: an array of integers, so that boxes[i] denotes
// the number of boxes on floor i

function minTime(boxes) {
    const topFloor = boxes.length;
    let minutes = 0;
    let max = boxes.reduce((a, b) => Math.max(a, b));

    while (max > 0) {
        const targetFloor = boxes.indexOf(max);
        minutes += topFloor - targetFloor;
        for (let i = topFloor - 1; i >= targetFloor; --i) {
            if (boxes[i]) minutes += 1, --boxes[i];
        }
        max = boxes.reduce((a, b) => Math.max(a, b));
    }
    
    return minutes;
}