// Easy

// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

 

// Example 1:
// https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png

// Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest.
// Example 2:

// Input: points = [[1,0],[0,0],[0,1]]
// Output: 0.50000
 

// Constraints:

// 3 <= points.length <= 50
// -50 <= xi, yi <= 50
// All the given points are unique.

/*
Triangle Area Formula = 
(1/2) * x1(y2 − y3) + x2(y3 − y1) + x3(y1 − y2)

BRUTE FORCE:
Calculate the area of EVERY 2 point combination.
    Some will be 0 (because they don't form a triangle)
Return the biggest one

This is BAD! Polynomial in Time Complexity O(n^3), Constant in Space O(1)
But can be quickly implemented with a "bubleSort" kind of logic.

Little Better:
We ran into edge cases that makes this too complicated...


*/


/**
 * @param {number[][]} points
 * @return {number}
 */
function largestTriangleArea(points) {
    let bestArea = Number.NEGATIVE_INFINITY

    for (let i = 0; i < points.length; ++i) {
        const edgeA = points[i]

        for (let j = i + 1; j < points.length; ++j) {
            const edgeB = points[j]

            for (let k = j + 1; k < points.length; ++k) {
                const edgeC = points[k]

                const currentTriangleArea = Math.abs(0.5 * (edgeA[0] * (edgeB[1] - edgeC[1]) + edgeB[0] * (edgeC[1] - edgeA[1]) + edgeC[0] * (edgeA[1] - edgeB[1])))
                bestArea = Math.max(currentTriangleArea, bestArea)

            }
        }
    }

    return bestArea
};

// Runtime 3 ms Beats 91.89%
// Memory 49.60 MB Beats 80.60%
