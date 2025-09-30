
/*
You are expected to work through a basic “Paint” program (think of Microsoft Paint), where we have a fixed `m x n` grid. The initial grid should be all white, where colors are in the format of a simple char code (e.g. `W` for white). Only one color can fill a cell at a time. Each cell can be identified by its coordinates `(x, y)`, where `0≤*x*<m` and `0≤y<n`.

Our "Paint" class will look like below:

Paint:
    printGrid()
    drawCell(int x, int y, char color) 
    drawRectangle(int x1, int y1, int x2, int y2, char color)
    undo()
    redo()
    clear() 
    
- printGrid() will print the grid.

First, we want our Paint application to support the basic drawing actions. 
- drawCell() will draw cell with given color
- drawRectangle() will draw rectangle with given color

Then, we want our Paint application to support unbounded Undo and Redo functionality. 

- undo() will revert the last drawing action taken
- Redo() will re-apply the last undone action
- After we perform a new drawing action, the redo history should be cleared

Finally, we want our Paint application to support advanced drawing actions.
- clear() will clear the entire grid


Explanation of the “Paint” grid for this example:

Initial state:
W W W 
W W W 
W W W 

After drawing cell 'R' at [0,0]:
R W W 
W W W 
W W W 

After drawing rectangle 'B' from [1,1] to [2,2]:
R W W 
W B B 
W B B 

----------------

After undoing:
R W W 
W W W 
W W W 

After undoing again:
W W W 
W W W 
W W W 

After redoing:
R W W 
W W W 
W W W 

After redoing again:
R W W 
W B B 
W B B 

After undoing:
R W W 
W W W 
W W W 

----------------

After drawing a new cell (should clear redo history):
R W W 
W W W 
G W W 

Attempt to redo:
R W W 
W W W 
G W W 

After clearing the grid:
W W W 
W W W 
W W W 

After undoing clear:
R W W 
W W W 
G W W 

After redoing clear:
W W W 
W W W 
W W W 

*/

class Paint {
    constructor(n, m) {
        this.grid = new Array(m)
        for (let i = 0; i < this.grid.length; ++i) {
          this.grid[i] = new Array(n).fill("W")
        }
  
        this.undoStack = []
        this.redoStack = []
    }
    
    printGrid() {
        console.log("----")
        for (const row of this.grid) {
          console.log(row)
        }
    }
  
    drawCell(x, y, color) {
      this.saveState()
      this.resetRedoStack()
      this._drawCell(x, y, color)
    }
  
    drawRectangle(x1, y1, x2, y2, color) {
      this.saveState()
      this.resetRedoStack()
      for (let x = x1; x <= x2; ++x) {
        for (let y = y1; y <= y2; ++y) {
          this._drawCell(x,y,color)
        }
      }
    }
  
    undo() {
      if (this.undoStack.length) {
        this.saveRedo()
        this.grid = this.undoStack.pop()
      }
    }
  
    redo() {
      if (this.redoStack.length) {
        this.saveState()
        this.grid = this.redoStack.pop()
      }
    }
    
    clear() {
      this.saveState()
      this.resetRedoStack()
      for (let row = 0; row < this.grid.length; ++row) {
        for (let column = 0; column < this.grid[row].length; ++column) {
          this._drawCell(row, column, "W")
        }
      }
    }
  
    saveState() {
      if (this.undoStack.lengt > 400) {
        this.undoStack.shift()
      }
  
      const bufferGrid = []
      for (let x = 0; x < this.grid.length; ++x) {
        bufferGrid[x] = [...this.grid[x]]
        // for (let y = 0; y < this.grid[x].length; ++y) {
  
        // }
      }
  
      this.undoStack.push(bufferGrid)
    }
  
    saveRedo() {
      if (this.redoStack.lengt > 400) {
        this.redoStack.shift()
      }
  
      const bufferGrid = []
      for (let x = 0; x < this.grid.length; ++x) {
        bufferGrid[x] = [...this.grid[x]]
      }
  
      this.redoStack.push(bufferGrid)
    }

    _drawCell(x, y, color) {
        this.grid[x][y] = color
    }

    resetRedoStack() {
        this.redoStack = []
    }
  }
  
  
  class Solution {
    static main() {
        const paint = new Paint(3, 3);
        paint.printGrid();
        
        // Initial draw cell
        paint.drawCell(0, 0, 'R');
        console.log("After drawing cell:");
        paint.printGrid();
        console.log();
  
        // Draw rectangle
        paint.drawRectangle(1, 1, 2, 2, 'B');
        console.log("After drawing rectangle:");
        paint.printGrid();
        console.log();
  
        console.log("----------------");
        console.log();
  
        // Undo once
        paint.undo();
        console.log("After undoing:");
        paint.printGrid();
        console.log();
  
        // Undo again
        paint.undo();
        console.log("After undoing again:");
        paint.printGrid();
        console.log();
  
        // Redo
        paint.redo();
        console.log("After redoing:");
        paint.printGrid();
        console.log();
  
        // Redo again
        paint.redo();
        console.log("After redoing again:");
        paint.printGrid();
        console.log();
  
        // Undo
        paint.undo();
        console.log("After undoing:");
        paint.printGrid();
        console.log();
  
        // Draw a new cell, no more redo history
        paint.drawCell(2, 0, 'G');
        console.log("After drawing a new cell (should clear redo history):");
        paint.printGrid();
        console.log();
  
        // Redo
        paint.redo();
        console.log("Attempt to redo:");
        paint.printGrid();
        console.log();
        
        console.log("----------------");
        console.log();
  
        // Clear the grid
        paint.clear();
        console.log("After clearing the grid:");
        paint.printGrid();
        console.log();
  
        // Undo clear
        paint.undo();
        console.log("After undoing clear:");
        paint.printGrid();
        console.log();
  
        // Redo
        paint.redo();
        console.log("After redoing clear:");
        paint.printGrid();
        console.log();
    }
  }
  
  // Execute the main function
  Solution.main();
  
  
//   const paint = new Paint(3, 3);
  // paint.printGrid();
//   paint.drawCell(0,0,"B")
//   paint.drawRectangle(0,0,2,2,"B")
  // paint.drawRectangle(0,0,2,3,"G")
//   paint.printGrid();
  // paint.clear()
  // paint.drawCell(2,1,"R")
  // paint.printGrid();
//   paint.undo()
//   paint.printGrid();
//   paint.redo()
//   paint.printGrid()
  
// Finished the time with Redo and Undo are BROKEN. =(

// Acho que tem a ver com como eu estou deconstruindo a grid.
// Nops! O problema é que eu estou usando o DrawCell pra desenhar no quadro, e toda vez que ESSE método é chamado, a mudança é escrita no stack...
// Now everything is working. 
