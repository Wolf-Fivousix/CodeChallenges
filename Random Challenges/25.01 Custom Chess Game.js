// Intefaces or classes
// Data Model & Game Logic

/*

Assuming no invalid start state


All movement is blocked by friendly pieces
Different piece have different movement ranges


After every movement we need to check if the game ended or not.


- Current State
- Input (either player) -> Picks up a piece
    - Movement check
- Check for End of Game State

Class Piece
 - Movement 

Class Cat/Rabbit/Snail
 - Type (Black/White)
 - Position
 - Implementing the Movement method.
    - Highlight only allowed moves (in which case, we're computing all valid moves in advance)
    - Take the piece ending position -> we can return true/false for a valid/invalid move
 
Class Game 
 - Board state
    * Initial state - [black cat, 1, 3], [black snail, 1, 4] .... [white cat, 7, 5]
    [_, _, x, x, x ....]
    [_, _, x, x, _ ....]
    [_, _, _, _, _, ...]
    [_, _, _, x, x, ...]
    [_, _, x, x, x ....]
    
    - Check which moves by the Piece.Movment are valid.
 - End of Game Check
 - Which players are playing
    - a list of player
 
Class Player
 - ID: First/Second
 - Type (Black/White)
 


Cat - 
    movement()
      - Give us all the positions this piece could be moved into (based on its move range), given it's current position




 
*/

