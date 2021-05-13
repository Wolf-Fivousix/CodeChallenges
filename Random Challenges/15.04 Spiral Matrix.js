// matrix[M][N]
//1 2 3
//4 5 6
//7 8 9

// 1 2 3 6 9 8 7 4 5

//1 2 3 1
//4 5 6 1
//7 8 9 1
//1 1 1 1

/*
topRow          rightColumn


leftColumn      bottomRow       

directions [0,1][1,0],[0,-1][-1,0]
iterate until topRow and bottomRow cross, and leftColumn and rightColumn cross.

print element to console
*/


//1 2 3
//4 5 6
//7 8 9
// topRow 1
// bottomRow 2
// leftColumn 0
// rightColumn 2

// currentRow 1
// currentColumnn 2
// step = "RIGHT"

function spirallIteration(matrix) {
    const directions = {
        "UP": [-1, 0],
        "RIGHT": [0, 1],
        "DOWN": [1, 0],
        "LEFT": [0, -1],
    }
    
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftColumn = 0;
    let rightColumn = matrix[0].length - 1;
    
    // Starting position
    let currentRow = topRow;
    let currentColumn = leftColumn;
    let step = "RIGHT"
    
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
        console.log(matrix[currentRow][currentColumn]);
        
        if (currentRow === topRow && currentColumn === rightColumn && step === "RIGHT") {
            step = "DOWN";
            ++topRow;
        }
        else if (currentRow === bottomRow && currentColumn === rightColumn && step === "") {
            step = "LEFT";
            --rightColumn;
        }
        else if (currentRow === bottomRow && currentColumn === leftColumn) {
            step = "UP";
            --bottomRow;
        }
        else if (currentRow === topRow && currentColumn === leftColum) {
            step = "RIGHT";
            ++leftColumn;
        }
        
        
        currentRow += directions[step][0];
        currentColumn += directions[step][1];
    }
    
    return null;
}
