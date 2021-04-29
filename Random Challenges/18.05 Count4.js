// Row, Column or Diagonal

/*
// Build Bots with random decision making
Game ends when the first player makes 4+ tokens in sequence.

When checking for game end state, check the 28 positions form the currently placed token.

7x6 columns and rows

min method
    game board
    
    game over
    winning player
    loop until the game is over
        pick a bot
        make a move
        check to see if a column is full
        display board
        check for winning    
    print the final board, print a message with the winner
*/


function connect4(columns = 7, rows = 6) {
    const board = createGameBoard(columns, rows);
    const bot1 = { name: "Bot 1", token: "X" };
    const bot2 = { name: "Bot 2", token: "O" };
    
    let gameOver = false;
    let winningPlayer = null;
    const players = [bot1, bot2]
    let round = 1;
    let availableMoves = createMoves(columns);
    
    while(!gameOver) {
        const currentPlayer = players[round % 2];
        const move = makeMove(currentPlayer, availableMoves);
        const rowPlayed = playMove(board, move, currentPlayer[token]);
        updateAvailableMoves(availableMoves, move);
        
        printBoard(board);
        gameOver = checkEndOfGame(board, move, rowPlayed);
    }
    
}

// Helpers
function createGameBoard(columns, rows) {
    const board = [];
    for (let i = 0; i < rows; ++i) {
        board.push(new Array(columns).fill(" "));
    }
    
    return board;
}

function printBoard(board) {
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j){
            process.stdout.write(board[i][j] + " | ");
        }
        console.log()
    }
}

function createMoves(size) {
    const moves = [];
    for (let i = 1; i <= size; ++i) {
        moves.push(i);
    }
    
    return moves;
}

function makeMove(player, availableMoves) {
    return availableMoves[Math.random() * (availableMoves - 1)];
}

function playMove(board, column, token) {
    for (let row = 0; row < board.length; ++row) {
        if (board[row][column] !== " ") {
            board[row - 1][column] = token;
            return row - 1;
        }
    }
    bord[board.length - 1][column] = token;
    
    return board.length - 1;
}

function updateAvailableMoves(moves, column) {
    if (moves[0][column] !== " ") {
        moves = moves.slice(column - 1, 1);
    }
}

function checkEndOfGame(board, column, row) {
    // Construct "check" arrays
    const token = board[row][column];
    
    // row
    const array1 = [];    
    for (let i = column - 3; i < column + 3; ++i) {
        if (i < 0 || i >= board[row].length) array1.push(" ");
        else array1.push(board[row][i]);
    }
    // column
    const array2 = [];
    for (let i = row - 3; i < row + 3; ++i) {
        if (i < 0 || i >= board.length) array2.push(" ");
        else array2.push(board[i][column]);
    }
    // leftdown diagonal
    const arary3 = [];
    // for (let currentRow = row - 3, currentColumn = column - 3;
    //     currentRow < row + 3 && currentColumn < column + 3;
    //     ++currentRow, ++currentColumn) {
            
    // }
    // rightup diagonal
    // Check for that specific array
    
    return 
        haveFour(array1, token) ||
        haveFour(array2, token) ||
        haveFour(array3, token) ||
        haveFour(array4, token);
}

// [X, X, X, O, X, X, X]
function haveFour(input, token) {
    let count = 0;
    for (let i = 0; i < input.length; ++i) {
        if (input[i] === token) ++count;
        else count = 0;
        
        if (count === 4) return true;
    }
    
    return false;
}

/// Testing
// console.log(createGameBoard(7, 6));
// const board = createGameBoard(7, 6);
// printBoard(board);
// console.log(createMoves(7));