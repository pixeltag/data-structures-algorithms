// Binary Search tree

/*
Abstract Data Type: Binary Search Tree
- A binary search tree is a binary tree in which each node has a key that is greater than all keys in the left
 subtree and less than all keys in the right subtree.
- Each node has only two children, a left child and a right child (node.right and node.left).
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- The left and right subtrees must also be binary search trees.
- There must be no duplicate values in the tree.
- The tree does not need to be balanced.
*/
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
    // check value is less than current node
    if (value <= this.value) {
        // if left is null, insert value
        if (!this.left) {
            this.left = new BST(value);
        } else {
            // if left is not null, recursively call insert on left
            this.left.insert(value);
        }
    } else {
        if (!this.right) {
        this.right = new BST(value);
        } else {
        this.right.insert(value);
        }
    }
}

BST.prototype.contains = function (value) {
    // check if value is less than current node
    if (value < this.value) {
        // if left is null, return false
        if (!this.left) {
            return false;
        } else {
            // if left is not null, recursively call contains on left
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        // if right is null, return false
        if (!this.right) {
            return false;
        } else {
            // if right is not null, recursively call contains on right
            return this.right.contains(value);
        }
    } else {
        // if value is equal to current node, return true
        // if value is not equal left or right node then the value is equal to current node and return true;
        return true;
    }
}


// In-order traversal is mosr commonly used in BSTs
// In-order traversal is a recursive algorithm that traverses the tree in order
// In-order traversal is a left-root-right traversal

BST.prototype.depthFirstTraversal_InOrder = function (iteratorFunc) {
    if (!this.left && !this.right) return iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal_InOrder(iteratorFunc);
    iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal_InOrder(iteratorFunc);
}

// Pre-order traversal is a recursive algorithm that traverses the tree in pre-order
// Pre-order traversal is a root-left-right traversal
BST.prototype.depthFirstTraversal_PreOrder = function (iteratorFunc) {
    iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal_PreOrder(iteratorFunc);
    if (this.right) this.right.depthFirstTraversal_PreOrder(iteratorFunc);
}

// Post-order traversal is a recursive algorithm that traverses the tree in post-order
// Post-order traversal is a left-right-root traversal
BST.prototype.depthFirstTraversal_PostOrder = function (iteratorFunc) {
    if (this.left) this.left.depthFirstTraversal_PostOrder(iteratorFunc);
    if (this.right) this.right.depthFirstTraversal_PostOrder(iteratorFunc);
    iteratorFunc(this.value);
}

// Breadth-first traversal is a non-recursive algorithm that traverses the tree in breadth-first order
// Breadth-first traversal is a level-order traversal
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    let queue = [this];
    while (queue.length) {
        // dequeue the first item in the queue
        let node = queue.shift();
        iteratorFunc(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}

BST.prototype.getHeightEdge = function () {
    let leftHeight = 0;
    let rightHeight = 0;
    if (this.left) leftHeight = this.left.getHeightEdge();
    if (this.right) rightHeight = this.right.getHeightEdge();
    return Math.max(leftHeight, rightHeight) + 1;
    
}



const newBST = new BST(3);
newBST.insert(5);
newBST.insert(2);
newBST.insert(1);
newBST.insert(4);
newBST.insert(6);
newBST.insert(7);

// newBST.depthFirstTraversal_InOrder(console.log);
// newBST.depthFirstTraversal_PreOrder(console.log);
// newBST.depthFirstTraversal_PostOrder(console.log);

console.log(newBST.getHeightEdge());

// console.log(newBST);