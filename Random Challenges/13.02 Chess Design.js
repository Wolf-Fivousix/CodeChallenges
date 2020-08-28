/*

Chess

https://docs.google.com/document/d/1AcQiPfvL5d0WTB6a0HG4I06Yt86dl7S3B9w-IxymTek/edit#heading=h.gm0901xdjdmm

Input from the frontend is Piece, the start position and end position.

Having the board as a 2D array.
    initialize the board to initial state (auxiliary function)
    while the game is not over
        while user input is Invalid (take user Input)
            send the frontend an error message
        if the end position is an enemy remove the enemy (piece knows it's own color).
        update the board.
        send the frontend the new board layout.
        
We're not currently checking for king "check" or special cases like Pawn and so on.   


Take User Input (given Piece -> (color, type), Start Position and End Position)
    switch of each piece
        king
        queen
        tower
            check the movement pattern.
            and check for other pieces obstructing the movement.
            and check for another piece on the end position.
                if it is an ally, movement invalid.
                else is valid.
            example:
            is the end position on the same row?
                is there any piece between start and end?
                
            else if is the end position on the same column?
                is there any piece between start and end?
        .
        .
        .
    
*/