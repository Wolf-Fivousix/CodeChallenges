// Easy

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

 

// Example 1:

// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
// Example 2:

// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
 

// Constraints:

// 1 <= s.length <= 1000
// s[i] is either 'A', 'L', or 'P'.

/**
 * @param {string} s
 * @return {boolean}
 */
 function checkRecord(s) {
    let absence = 0;
    let late = 0;
    
    for (let i = 0; i < s.length; ++i) {
        const attendance = s[i];
        switch (attendance) {
            case "L":
                ++late;
                break;
            case "A":
                ++absence; // Absence should also reset the "lateness" counter.
            default:
                late = 0;
        }
        
        if (absence > 1 || late > 2) return false;
    }
    
    return true;
};

// Runtime: 76 ms, faster than 84.35% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 38.7 MB, less than 51.53% of JavaScript online submissions for Student Attendance Record I.
// Linear Time Complexity
// Constant Space Complexity

// There's a community "liked" way of doing this, which is less efficient and require a little bit more understanding.
// But fits in a one line:

// return s.indexOf('A') == s.lastIndexOf('A') && !s.contains("LLL");

// Because we can only have 1 "A", checking the indexes for the first and last occurances satisfies the first condition.
// While checking for the 3x "L" in a row, satisfies the second condition.
// On the same note, this has to perfrom 3 scans, making it O(3x N), still linear, but 200% worse with no option for early return optimization.