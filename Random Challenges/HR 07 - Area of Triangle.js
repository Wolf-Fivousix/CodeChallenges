// 4. Area of Triangle (Easy)
// Given 3 sets of distinct coordinates
// that form a triangle, determine the
// area of the triangle. At least one of the
// sides will be parallel to the x or y axis.
// Example
// x = [0, 3, 0]
// y = [0, 5, 2]
// Aligned by index, the 3 coordinates
// are [0,0], [3,5], [0,2]. The base of the
// triangle is 2, and the height is 3. The
// area of a triangle is (base * height)/2,
// so 3 * 2 / 2 = 3. All resulting areas will
// be whole numbers.
// x
// y
// (0,2)
// (0,0)
// (3,5)
// 1 2 3 4 5 6 7 8
// 1
// 2
// 3
// 4
// 5
// 6
// {
// Height
// {
// Base
// Function Description
// Complete the function
// getTriangleArea in the editor below.
// getTriangleArea has the following
// parameter(s):
//     int x [3]: An integer array that
// denotes the x coordinates.
//     int y[3]: An integer array that
// denotes the y coordinates, aligned

// Simple solution that leverages math to solve it.
/*
 * Complete the 'getTriangleArea' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY x
 *  2. INTEGER_ARRAY y
 */
function getTriangleArea(x, y) {
    const [a, b, c] = [[x[0], y[0]], [x[1], y[1]], [x[2], y[2]]];
    const area = (a[0] * b[1] + b[0] * c[1] + c[0] * a[1] - a[0] * c[1] - b[0] * a[1] - c[0] * b[1]) / 2;
    
    return area < 0 ? -area : area;
}

// 14/14 Test Cases.