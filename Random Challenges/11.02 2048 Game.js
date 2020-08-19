// http://2048game.com/

// Components
//     Grid
//     Tiles

// Backend
//     2 Grid array
    
// Main Logic
//     Win state: reaching 2048.
//     Lose state: running out of possibles moves.
    
// while game have a possible move
//     take input (direction given)
//     move all the tiles and merge equally numbered tiles
//     if the grid has changed, add a new 2 tile.
//     Is there a 2048? Win game.
    
// If there is no movements left, Lose Game.        
        
// moveRight
//     Move every tile towards the direction of input.
//     if two adjacent (same row or same column, depending on input) are the same value, add them to one tile.
//         Start from the right most tile. (always add them into the direction of input)
//         Move any "tiles left" on the row, to the right.
//     If values are different, don't add.
    
    


// Logic for finding if there is a possible move.
//     If there`s a move, return true.
//     Else return false.