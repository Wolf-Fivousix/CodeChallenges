// 1
// /			\
// 2  				3
// / 	\			/\
// 5 	7			8	10
// /
// 20

// 10

// value look up might not be in the tree.

// [_, _, 8, _]			size 0, 4 => (0 + 4) / 2 = 2
//                            2 < 2 no, so go to right
//                        2, 4 => (2 + 4) / 2 = 3
//                            2 < 3 ? Yes, go to the left.
                           

// do a DFS and find which row the target should be.
// with that row, we know the size of our row.
// use that size, to decide which child to move towards.


function binaryFind(root, target) {
   const targetRow = findRow(target);

   const arraySize = 2 ** (targetRow - 1);
   let start = 0;
   let end = arraySize;
   
   while (start < end) {
       const middle = start + (end - start) / 2;
       
       const value = traverseTree(root, start, arraySize, middle, targetRow);
}
   
}

function traverseTree(root, start, arraySize, middle, targetRow) {
   let node = root;
   let currentRow = 1;
   while (currentRow < targetRow) {
const position = (start + arraySize) / 2;

   if (middle < position) node = node.left;
       else node = node.right;	
}
   return node.value;
}
