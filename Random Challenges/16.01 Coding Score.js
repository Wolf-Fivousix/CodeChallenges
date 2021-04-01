// Background

// The marketing team at CodeSignal would like to know how many users there are in each Coding Score range for standardized tests like the General Coding Assessment, so that they can share that information on our website. They've asked you to create a report containing that information.

// Your Mission

// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+
// Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.

// For example, if you had this input...

//   [330, 723, 730, 825]
// ...then you should return the following:

// [
//   'Good: 50.00%',
//   'Elite: 25.00%',
//   'Poor: 25.00%'
// ]
// [execution time limit] 4 seconds (js)

// [input] array.integer scores

// An array of integers in the range [300, 850].

// [output] array.string

// An array of strings formatted like LevelName: XX.XX%.
    
    /*
    List of level ratios,
    in DECREASING order,
    hide levels with 0%,
    values should have 2 decimals of precision,
    in ties, use highest level
    
    return an array of strings for each level.
    
    
    iterate through input and count every entry (we have total from array.length)
    create an array of objects with every entry and their ratio.
    sort this array based on the ratio property.
    filter anything that is empty.
    convert to string by join
    */
    function codingScoreReportPercent(scores) {    
        let poor = 0;
        let fair = 0;
        let good = 0;
        let excellent = 0;
        let elite = 0;
        
        scores.forEach(score => {
            if (score < 600) ++poor;
            else if (score < 700) ++fair;
            else if (score < 750) ++good;
            else if (score < 800) ++excellent;
            else ++elite;
        });
        let levels = [
            { level: "Elite", score: formatLevel(elite / scores.length * 100) },
            { level: "Excellent", score: formatLevel(excellent / scores.length * 100) },
            { level: "Good", score: formatLevel(good / scores.length * 100) },
            { level: "Fair", score: formatLevel(fair / scores.length  * 100) },
            { level: "Poor", score: formatLevel(poor / scores.length * 100) },
        ];
        
        levels = levels.sort((a, b) => b["score"] - a["score"] );
        levels = levels.filter(object => object["score"] > 0);
        
        return levels.map(object => `${object["level"]}: ${object["score"]}%`)
    }
    
    function formatLevel(value) {
        return Number.parseFloat(value).toPrecision(4);
    }
    