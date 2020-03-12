// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: 3
// Output: "III"
// Example 2:

// Input: 4
// Output: "IV"
// Example 3:

// Input: 9
// Output: "IX"
// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
    let roman = "";
    
    while (num > 0) {
        switch(true){
            case (num >= 1000):
                roman += "M";
                num -= 1000;
                break;
            case (num >= 900):
                roman += "CM";
                num -= 900;
                break;
            case (num >= 500):
                roman += "D";
                num -= 500;
                break;
            case (num >= 400):
                roman += "CD";
                num -= 400;
                break;
            case (num >= 100):
                roman += "C";
                num -= 100;
                break;
            case (num >= 90):
                roman += "XC";
                num -= 90;
                break;
            case (num >= 50):
                roman += "L";
                num -= 50;
                break;
            case (num >= 40):
                roman += "XL";
                num -= 40;
                break;
            case (num >= 10):
                roman += "X";
                num -= 10;
                break;
            case (num >= 9):
                roman += "IX";
                num -= 9;
                break;
            case (num >= 5):
                roman += "V";
                num -= 5;
                break;
            case (num >= 4):
                roman += "IV";
                num -= 4;
                break;
            default:
                roman += "I"
                --num;
        }  
    }
    
    return roman;
};

// Similar approach from community, different better reading than my long switch statement:
let intToRoman = (num, ans = []) => {
    while (num >= 1000) ans.push('M'),     num -= 1000;
    while (num >=  900) ans.push(...'CM'), num -= 900;
    while (num >=  500) ans.push('D'),     num -= 500;
    while (num >=  400) ans.push(...'CD'), num -= 400;
    while (num >=  100) ans.push('C'),     num -= 100;
    while (num >=   90) ans.push(...'XC'), num -= 90;
    while (num >=   50) ans.push('L'),     num -= 50;
    while (num >=   40) ans.push(...'XL'), num -= 40;
    while (num >=   10) ans.push('X'),     num -= 10;
    while (num >=    9) ans.push(...'IX'), num -= 9;
    while (num >=    5) ans.push('V'),     num -= 5;
    while (num >=    4) ans.push(...'IV'), num -= 4;
    while (num >=    1) ans.push('I'),     num -= 1
    return ans.join('');
};

// This one is a little bit more interesting and sclable:
const mapping = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

var intToRoman = function(num) {
    let str = '';

    for (let i = 0; i < mapping.length; i++) {
        const [val, char] = mapping[i];

        if (num >= val) {
            while (num >= val) {
                num -= val;
                str += char;
            }
        }
    }

    return str;
};

// Another way of writing the same solution:
var intToRoman = function(num) {
    let map = new Map([
        ['M',1000],
        ['CM',900],
        ['D',500],
        ['CD',400],
        ['C',100],
        ['XC',90],
        ['L',50],
        ['XL',40],
        ['X',10],
        ['IX',9],
        ['V',5],
        ['IV',4],
        ['I',1],
    ]);
    
    let roman = [];
    
    for(let [k, v] of map) {
        for (i=0; i < Math.floor(num / v); i++) roman.push(k);
        num %= v;
    }
    
    return roman.join('');
};

