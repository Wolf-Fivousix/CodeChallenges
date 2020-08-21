// Your company is designing a dam to be
// built across a stream to create a small
// lake. To reduce materials cost, it will be
// made of one or more concrete walls with
// mud packed in between them.
// Determine the maximum height of the
// mud segments in the dam with the
// following restrictions:
// One unit width of the gap between walls
// will contain one  segment  of packed mud
// The height of mud in a segment cannot
// exceed  1  unit more than an adjacent
// wall or mud segment.
// Given the placement of a number of
// walls and their heights, determine the
// maximum height of a mud segment that
// can be built. If no mud segment can be
// built, return  0.
// Example
// wallPositions = [1, 2, 4, 7]
// wallHeights = [4, 6, 8, 11]

// https://s3.amazonaws.com/istreet-assets/oIYDq0I__epEH0HGHxHM8A/Dam%20design%20Example.svg

// There is no space between the first two
// walls.
// Between positions  2  and  4 , there is one
// unit open for mud. Heights of the
// surrounding walls are  6  and  8 , so the
// maximum height of mud is  6 + 1 = 7.
// Between positions  4  and  7  there are two
// units. The heights of surrounding walls
// are  8  and  11.
// The maximum height mud segment
// next to the wall of height  8  is  9.
// The maximum height mud next to a
// mud segment of height  9  is  10.
// Overall, mud segment heights are  7,
// 9  and  10 , and the maximum height is  10.
// Function Description
// Complete the function  maxHeight in the
// editor below.
// maxHeight has the following
// parameter(s):
//     int  wallPositions[n]:  an array of
// integers
//     int  wallHeights[n]:  an array of integers
// Returns:
//     int: the maximum height mud segment
// that can be build
// Constraints
// 1 < n ≤ 10 5
// 1 ≤ wallPositions[i], wallHeights[i] ≤ 10 9
// (where 0 ≤ i < n)
// Input Format For Custom Testing
// Sample Case 0
// STDIN    Function
// -----    --------
// 3    →   wallPositions[] size n = 3
// 1    →   wallPositions = [1, 3, 7]
// 3
// 7
// 3    →   wallHeights[] size n = 3
// 4    →   wallHeights = [4, 3, 3]
// 3
// 3
// Sample Input For Custom Testing
// Sample Output
// 5
// Explanation

// https://s3.amazonaws.com/istreet-assets/tlZH_YM-Kjg6h18252oSEg/Dam%20design%201.svg

// 4 4
// 3
// 4
// 5
// 4
// 3
// Mud segments
// Wall segments
// The  wallPositions = [1, 3, 7]  and
// wallHeights = [4, 3, 3].  There can be a
// segment of height  4  at position
// 2  supported by walls of heights  4  and
// 3.  Between positions  3  and  7 , there
// can be a segment of height  4  at
// positions  4  and  6.  Between them, a
// segment can be built of height  5  at
// position  5.
// Sample Case 1
// STDIN    Function
// -----    --------
// 2    →   wallPositions[] size n = 2
// 1    →   wallPositions = [1, 10]
// 10
// 2    →   wallHeights[] size n = 2
// 1    →   wallHeights = [1, 5]
// 5
// Sample Input For Custom Testing
// Sample Output
// 7
// Explanation

// https://s3.amazonaws.com/istreet-assets/zjkEq7FswiJh5-r3w9r_kw/Dam%20design%202.svg

// 1
// 2
// 3
// 4
// 5
// 6
// 7 7
// 6
// 5
// Mud segments
// Wall segments
// The  wallPositions = [1, 10]  and
// wallHeights = [1, 5].  The heights of the
// mud segments from positions  2
// through  9 are  [2, 3, 4, 5, 6, 7, 7, 6].