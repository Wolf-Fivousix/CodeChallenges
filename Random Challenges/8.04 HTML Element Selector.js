// Node {
//     children: Array<Node>
//     tagName: string
//   }
  
//   “img”
//   html
//       body
//           div
//               img
//           div
//   => [img]
  
//   html
//       body
//           div
//               img1
//           div
//               img2
//   => [img1, img2]
  
//   html
//       body
//           div
//               img1
//           div
//               img2
//                   img3
//   => [img1, img2, img3]
  
//   html
//       body
//           div
//               img1
//                   h1
//                   h2
//           div
//               img2
//                   img3
//   => [img1, h1, h2, img2, img3]
  
  
//   div1
//       div2
//           h1
  
//   getElementsByTagName(‘div’, div1) => [div2]
  
//   html
//       body
//           h1
//           div
  
//   getElementsByTagName(‘html’, html) => []
  
// BFS
function getElementsByTagName(tagName, node) {
    // 	const queue = [node];
    const queue = getChildren(node);

    const result = [];

    while (queue.length) {
        const currentNode = queue.shift();
        if (currentNode.tagName === tagName) result.push(currentNode);

        // for (let i = 0; i < currentNode.children.length; ++i) {
            // queue.push(currentNode.children[i]);
        // }

        queue.push(...getChildren(currentNode));
    }

    // array of nodes that match the tagName.
    return result;
}

function getChildren(node) {
    if (!node) return [];
    const result = [];

    for (let i = 0; i < node.children.length; ++i) {
        result.push(node.children[i]);
    }

    return result;
}


// ‘div p a’

// body
//     div1
//         p
//             a1
//                 a2
//                 p
//                     a5
//             a3
//                 p
//     div2
//         p
//         a2
// querySelectorAll(‘div p a’, body) => [a1, a3]



function querySelectorAll(selector, node) {
    // iterate through the nodes and get all tags that match selector[0]
    // at this point we have a result array that matches selector[0];
    
    // move selector forward.
    // until our result array, is not empty and selector is not out of bounds, iterate
    //     temporary array starts empty
    //     iterate through result
    //         every child that matches the selector[current] add to temporary array.

    //     load temporary into result.
    //     increase selector.
    // Iterate through given node, and find all tags that match the sel
        

    

    

    // return result.
}