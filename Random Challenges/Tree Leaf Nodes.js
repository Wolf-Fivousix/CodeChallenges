// given a binary tree via root node, balanced/unbalanced
// return node which points to next outer leaf/null
// doubly linked list format

//      a
//     /  \
//    b    c
//   / \   /
// d    e f

// OUTPUT: d <=> e <=> f

// class Node
// value
// next = null
// prev = null


// function outerLeaves(root){ // a
//   instantiate children to empty array // children = []
//   call enclose function;

//   enclose function:
//     recursively:
//     traverse left side
//     traverse right side
    
//     if the child.left is null && child.right is null //then we know we have the outerchild
//       instantiate a new Node(d)
//       push new Node on to children array
//     end
//   end
//   return array;
// }

// function doublyLinker(arr){ //takes in array of nodes
  
//   iterate through

//   return first and last nodes
// }

//CODE

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function outerLeaves(root){
  let children = [];
  traverseTree(root);

  function traverseTree(child){ // c; c.left = f c.right = null
    if (child.left !== null) traverseTree(child.left);
    if (child.right !== null) traverseTree(child.right);
    if (child.left === null && node.right === null){
      children.push(new Node(child.value));
      return;
    }
  }
  return children;
}

function doublyLinker(arr){
  for (let i = 0; let)
  

  return [arr[0], arr[arr.length-1]];
}

// likiedlist