// ASCII Printer
// We've invented a small language for printing ASCII pictures. Write a program that executes
// this language. We will ask you to explain your solution after you've finished.
// Focus on simple, well-structured code. This question is designed for you to demonstrate
// readable code. It is not an algorithm question, and you will not be assessed on the
// performance of your solution. Don’t complicate your design to optimize your solution.
// Start by implementing the commands. You might not finish, so don’t implement parsing
// unless you have time. Don’t worry if your code is incomplete or doesn’t compile.
// Feel free to run your code and look things up online. If you encounter a situation which isn't
// described by the specification below, do something reasonable and leave a comment.
// Language Specification
// An ASCII printer program reads and executes a newline-separated list of commands from a
// file. The canvas size is fixed at 10 characters wide and 6 characters tall. Only rectangles
// may be drawn, but erase may be used to modify their shape.
// DRAW_RECTANGLE <fill_character> <left_x> <top_y> <right_x> <bottom_y>
// Draws a rectangle filled-in with the specified character in front of all previously-drawn
// rectangles. Rectangles can re-use previously-used fill_characters.
// ERASE_AREA <left_x> <top_y> <right_x> <bottom_y>
// Erase the specified rectangular area from all rectangles, permanently modifying their
// shapes.
// DRAG_AND_DROP <select_x> <select_y> <release_x> <release_y>
// Finds the rectangle visible at the select coordinate, and moves it so the selected cell is
// now at the release coordinate.
// BRING_TO_FRONT <select_x> <select_y>
// Finds the rectangle visible at the select coordinate, and brings that rectangle in front of
// all other rectangles.
// PRINT_CANVAS
// Prints the current state of the rendered canvas.

// Example Program
// Here is a basic program to illustrate behavior. Grid numbers, grid lines, and comments are
// added for readability; your solution does not need to support these features.
// // Rectangles draw in front of previous ones
// DRAW_RECTANGLE L 1 1 4 4
// DRAW_RECTANGLE R 2 1 4 4
// PRINT_CANVAS

// 0 1 2 3 4 5 6 7 8 9
// 0
// 1 L R R R
// 2 L R R R
// 3 L R R R
// 4 L R R R
// 5

// // Rectangles behind others are also erased
// ERASE_AREA 3 2 3 3
// PRINT_CANVAS

// 0 1 2 3 4 5 6 7 8 9
// 0
// 1 L R R R
// 2 L R R
// 3 L R R
// 4 L R R R
// 5

// // Rectangles maintain existing draw order
// DRAW_RECTANGLE # 1 3 8 4
// DRAG_AND_DROP 2 2 6 2
// PRINT_CANVAS

// 0 1 2 3 4 5 6 7 8 9
// 0
// 1 L L L L R R R
// 2 L L L R R
// 3 # # # # # # # #
// 4 # # # # # # # #
// 5
// // Rectangles are visible through erased areas
// BRING_TO_FRONT 1 2
// BRING_TO_FRONT 6 2
// PRINT_CANVAS

// 0 1 2 3 4 5 6 7 8 9
// 0
// 1 L L L L R R R
// 2 L L L R R
// 3 L L # L # R # R
// 4 L L L L # R R R
// 5
// // Rectangles selectable through erased areas
// DRAG_AND_DROP 3 3 3 2
// PRINT_CANVAS

// 0 1 2 3 4 5 6 7 8 9
// 0
// 1 L L L L R R R
// 2 L L # L # R # R
// 3 L L # L # R # R
// 4 L L L L R R R
// 5


/*
Grid is a 2D array of size 6 (rows) x 10 (columns)
Each element is an array, representing the "layer" of the rectagle.
Anytime we draw something, we add a new layer to the whole grid.
   (That includes "drawing" empty/transparent value)
   (The element to be drawn is a single character)
I'm going to assume that input is always valid (within the grid).
   For the cases where there's no work to be done, like BRING_TO_FRONT a position that has no drawing (other than "empty"),
   we still "do" the work.
   
Not great memory wise, but simple and "intuitive".
All function names were converted to cammelCase due to JS standard.
I don't want to add complexity creating a Canvas Class, but ideally, all this methods and functionality would make more sense in it.
*/

const canvas = createCanvas(6, 10);
var EMPTY_VALUE = "\n";
drawRectangle(canvas, "L", 1, 1, 4, 4);
drawRectangle(canvas, "R", 2, 1, 4, 4);
eraseArea(canvas, 3, 2, 3, 3);
drawRectangle(canvas, "#", 1, 3, 8, 4);
dragAndDrop(canvas, 2, 2, 6, 2);
printCanvas(canvas);






// Build a 2D array of size row x column where each element is an empty array.
function createCanvas(row, column) {
    let canvas = [];
    
    for (let i = 0; i < row; ++i) {
        canvas.push([]);
        for (let j = 0; j < column; ++j) {
            canvas[i].push([]);
        }
    }
    
    return canvas;
}

function printCanvas(canvas) {
    console.log("______________________________");
    // Iterate through the canvas.
    for (let i = 0; i < canvas.length; ++i) {
        const row = [];
        for (let j = 0; j < canvas[i].length; ++j) {
            // For each element, iterate through the layers backwards until we find a "printable" element.
            let printable = null;
            for (let layer = canvas[i][j].length - 1; layer > -1; --layer) {
                if (canvas[i][j][layer] !== EMPTY_VALUE) {
                    printable = `${canvas[i][j][layer]} `;
                    break;
                }
            }
            row.push(printable || `  `);
        }
        // console.log(row);
        process.stdout.write(`|${row}|`);
        console.log(" ");
    }
    console.log("______________________________");
}

// Every time we "draw" to the canvas, we create a new layer.
function drawRectangle(canvas, fillCharacter, leftX, topY, rightX, bottomY) {
    for (let row = 0; row < canvas.length; ++row) {
        for (let column = 0; column < canvas[row].length; ++column) {
            if (topY <= row && row <= bottomY && leftX <= column && column <= rightX) canvas[row][column].push(fillCharacter);
            else canvas[row][column].push(EMPTY_VALUE)
        }
    }
}

// Erase ALL layers within the specified area.
function eraseArea(canvas, leftX, topY, rightX, bottomY) {
    for (let row = topY; row <= bottomY; ++row) {
        for (let column = leftX; column <= rightX; ++column) {
            for (let layer = canvas[row][column].length - 1; layer > -1; --layer) {
                canvas[row][column][layer] = EMPTY_VALUE;
            }
        }
    } 
}

// Move the whole layer if a rectangle is found in the origin position.
function dragAndDrop(canvas, originX, originY, destinationX, destinationY) {
    const layer = findRectangleLayer(canvas, originX, originY);
    // console.log(layer);
    if (layer === -1) return;

    // printCanvas(canvas);
    // Create an empty layer
    const newLayer = createCanvas(canvas.length, canvas[layer].length);
    printCanvas(newLayer);
    // Copy the found layer into it.
    // Move the layer as a whole.
    // Overwrite the newLayer into the canvas[layer].
    
}

// Given the position, find the top most layer where a rectangle is present.
// If no rectangle is found, -1 by default.
function findRectangleLayer(canvas, row, column) {
    for (let layer = canvas[row][column].length - 1; layer > -1; --layer) {
        if (canvas[row][column][layer] !== EMPTY_VALUE) return layer;
    }
    return -1;
}