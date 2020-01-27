import BSTNode from './support/BSTNode';
import BTNodeWithParent from './support/BTNodeWithParent';
import Node from './support/LinkedList';

describe("binary trees", () => {
  describe("9.1: Test if a binary tree is height balanced", () => {
    /*
    Problem: Write a program that takes as input the root of a binary tree and returns
    true if the tree is height balanced. A tree is height balanced if for each node in the tree,
    the difference between the height of its left and right subtrees is no more than 1.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input the root of a binary tree and return true if the tree is height balanced", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BSTNode("a");
      root.left = new BSTNode("b");
      root.left.left = new BSTNode("c");
      root.left.left.left = new BSTNode("e");
      root.left.right = new BSTNode("d");
      root.right = new BSTNode("f");
      root.right.left = new BSTNode("g");
      root.right.right = new BSTNode("h");

      expect(isHeightBalanced(root)).toBeTruthy();
    })
  })

  describe("9.2: Test if a binary tree is symmetric", () => {
    /*
    Problem: Write a program that checks if a binary tree is symmetric. Symmetry means the
    left subtree is the mirror image of the right subtree (including values)

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes the root of a tree and returns true if the left subtree is the mirror image of the right subtree (tree is symmetric)", () => {
      const root = new BSTNode(314);
      root.left = new BSTNode(6);
      root.left.right = new BSTNode(2);
      root.left.right.right = new BSTNode(3);

      root.right = new BSTNode(6);
      root.right.left = new BSTNode(2);
      root.right.left.left = new BSTNode(3);
      expect(isSymmetric(root)).toBeTruthy();

      root.left.data = 8;

      expect(isSymmetric(root)).toBeFalsy();
    })
  })

  describe("9.3: Compute the lowest common ancestor in a binary tree", () => {
    /*
    Problem: Design an algo for computing the LCA of two nodes in a binary tree which nodes
    do not have a parent tree.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes two nodes from a binary tree and returns the LCA of the two nodes.", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BSTNode("a");
      root.left = new BSTNode("b");
      root.left.left = new BSTNode("c");
      root.left.left.left = new BSTNode("e");
      root.left.right = new BSTNode("d");
      root.right = new BSTNode("f");
      root.right.left = new BSTNode("g");
      root.right.right = new BSTNode("h");

      const e = root.left.left.left;
      const d = root.left.right;
      const b = root.left;

      expect(getLCA(e,d)).toEqual(b);
    })
  })

  describe("9.4: Compute the LCA when nodes have parent pointers", () => {
    /*
    Problem: Given two nodes in a binary tree, design an algo that computes the LCA.
    Each node has a pointer to their parent.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes two binary tree nodes with parent pointers and returns their LCA", () => {
      const root = new BTNodeWithParent("a", null);
      const b = new BTNodeWithParent("b", root);
      root.left = b;
      const f = new BTNodeWithParent("f", root);
      root.right = f;

      const c = new BTNodeWithParent("c", b);
      b.left = c;
      const d = new BTNodeWithParent("d", b);
      b.right = d;

      const e = new BTNodeWithParent("e", c);
      c.left = e;

      const g = new BTNodeWithParent("g", f);
      f.left = g;
      const h = new BTNodeWithParent("h", f);
      f.right = h;

      expect(getLCAThroughParent(c,g)).toEqual(a);
    })
  })

  describe("9.5: Sum the root-to-leaf paths in a binary tree", () => {
    /*
    Problem: Design an algo to compute the sum of the binary numbers represented by the root-to-leaf paths.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes the root of a tree where each node represents a binary digit and returns the sum of all paths", () => {
      //forms tree in page 132
      const root = new BSTNode(1);
      root.left = new BSTNode(0);
      root.left.left = new BSTNode(0);
      root.left.left.left = new BSTNode(0);
      root.left.left.right = new BSTNode(1);
      root.left.right = new BSTNode(1);
      root.left.right.right = new BSTNode(1);
      root.left.right.right.left = new BSTNode(0);

      root.right = new BSTNode(1);
      root.right.right = new BSTNode(0);
      root.right.right.right = new BSTNode(0);
      root.right.left = new BSTNode(0);
      root.right.left.right = new BSTNode(0);
      root.right.left.right.left = new BSTNode(1);
      root.right.left.right.right = new BSTNode(0);
      root.right.left.right.left.right = new BSTNode(1);

      expect(rootToLeafsSum(root)).toEqual("1111110");
    })
  })

  describe("9.6: Find a root to leaf path with specified sum", () => {
    /*
    Problem: Write a program which takes as input an integer and a binary tree with integer node weights
    and checks if there exists a leaf whose path weights equal the given number.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an integer total and a root and returns true if there is a path in the tree that adds up to the total", () => {
      //       5
      //     4    3
      //   9   1 2 6
      // 7
      const root = new BSTNode(5);
      root.left = new BSTNode(4);
      root.left.left = new BSTNode(9);
      root.left.left.left = new BSTNode(7);
      root.left.right = new BSTNode(1);
      root.right = new BSTNode(3);
      root.right.left = new BSTNode(2);
      root.right.right = new BSTNode(6);

      expect(hasPathWithSumFromRoot(root, 100)).toBeFalsy();
      expect(hasPathWithSumFromRoot(root, 10)).toBeTruthy();
    })
  })

  describe("9.7: Implement an inorder traversal without recursion", () => {
    /*
    Problem: Write a program which takes as input a binary tree and performs an
    inorder traversal of the tree without recursion. Nodes don't have parent refs.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a root and returns an array with the inorder traversal done iteratively", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BSTNode("a");
      root.left = new BSTNode("b");
      root.left.left = new BSTNode("c");
      root.left.left.left = new BSTNode("e");
      root.left.right = new BSTNode("d");
      root.right = new BSTNode("f");
      root.right.left = new BSTNode("g");
      root.right.right = new BSTNode("h");

      const res = iterativeInorder(root);

      expect(res).toEqual(['e','c','b','d','a','g','f','h'])
    })
  })

  describe("9.8: Implement a preorder traversal without recursion", () => {
    /*
    Problem: Write a program which takes a root as argument and returns a preorder
    traversal without recursion

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a root as argument and returns a preorder traversal without recursion", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BSTNode("a");
      root.left = new BSTNode("b");
      root.left.left = new BSTNode("c");
      root.left.left.left = new BSTNode("e");
      root.left.right = new BSTNode("d");
      root.right = new BSTNode("f");
      root.right.left = new BSTNode("g");
      root.right.right = new BSTNode("h");

      const res = iterativePreorder(root);

      expect(res).toEqual(['a','b','c','e','d','f','g','h']);
    })
  })

  describe("9.9: Compute the kth node in an inorder traversal", () => {
    /*
    Problem: Write a program that efficiently computes the kth node appearing in an inorder
    traversal. Assume that each node stores the number of nodes in the subtree rooted at that node.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a tree where nodes store size of subtree rooted at node and an integer k and computes the kth node appearing in an inorder traversal.", () => {
      //       7
      //     3    2
      //   1   0 0 0
      // 0
      const root = new BSTNode(7);
      root.left = new BSTNode(3);
      root.left.left = new BSTNode(1);
      root.left.left.left = new BSTNode(0);
      root.left.right = new BSTNode(0);
      root.right = new BSTNode(2);
      root.right.left = new BSTNode(0);
      root.right.right = new BSTNode(0);

      expect(getKthFromInorder(root).data).toBe(3);
    })
  })

  describe("9.10: Compute the successor", () => {
    /*
    Problem: Design an algo that computes the successor of a node in a binary tree.
    Assume that each node stores its parent.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a node and returns its successor in an inorder traversal", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BTNodeWithParent("a", null);
      const b = new BTNodeWithParent("b", root);
      root.left = b;
      const f = new BTNodeWithParent("f", root);
      root.right = f;

      const c = new BTNodeWithParent("c", b);
      b.left = c;
      const d = new BTNodeWithParent("d", b);
      b.right = d;

      const e = new BTNodeWithParent("e", c);
      c.left = e;

      const g = new BTNodeWithParent("g", f);
      f.left = g;
      const h = new BTNodeWithParent("h", f);
      f.right = h;

      expect(getSuccessorOf(b)).toEqual(d);
      expect(getSuccessorOf(d)).toEqual(a);
    })
  })

  describe("9.11: Implement an inorder traversal with O(1) space", () => {
    /*
    Problem: Write a iterative program for computing the inorder traversal for a
    binary tree with parent references.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes the root of a tree with parent references and returns the inorder traversal", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BTNodeWithParent("a", null);
      const b = new BTNodeWithParent("b", root);
      root.left = b;
      const f = new BTNodeWithParent("f", root);
      root.right = f;

      const c = new BTNodeWithParent("c", b);
      b.left = c;
      const d = new BTNodeWithParent("d", b);
      b.right = d;

      const e = new BTNodeWithParent("e", c);
      c.left = e;

      const g = new BTNodeWithParent("g", f);
      f.left = g;
      const h = new BTNodeWithParent("h", f);
      f.right = h;

      const res = iterativeInorderWithParentReferences(root);

      expect(res).toEqual(['e','c','b','d','a','g','f','h'])
    })
  })

  describe("9.12: Reconstruct a binary tree from traversal data", () => {
    /*
    Problem: Given inorder traversal and preorder traversal, write a program to Reconstruct
    the tree. Each node has a unique key.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an inorder and preorder traversal sequence and rebuilds a tree based on it", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BTNodeWithParent("a", null);
      const b = new BTNodeWithParent("b", root);
      root.left = b;
      const f = new BTNodeWithParent("f", root);
      root.right = f;

      const c = new BTNodeWithParent("c", b);
      b.left = c;
      const d = new BTNodeWithParent("d", b);
      b.right = d;

      const e = new BTNodeWithParent("e", c);
      c.left = e;

      const g = new BTNodeWithParent("g", f);
      f.left = g;
      const h = new BTNodeWithParent("h", f);
      f.right = h;

      const inorder = ['e','c','b','d','a','g','f','h'];
      const preorder = ['a','b','c','e','d','f','g','h'];
      const res = reconstructFromIterativeAndPreorderTraversals(inorder, preorder);

      expect(res.compareToOtherTree(root)).toBeTruthy();
    })
  })

  describe("9.13: Reconstruct a binary tree from preorder traversal with markers", () => {
    /*
    Problem: Design an algo for reconstructing a binary tree from preorder traversal that
    uses null to mark empty children.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array representing a preorder traversal with null markers for empty children reconstructs the tree", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BTNodeWithParent("a", null);
      const b = new BTNodeWithParent("b", root);
      root.left = b;
      const f = new BTNodeWithParent("f", root);
      root.right = f;

      const c = new BTNodeWithParent("c", b);
      b.left = c;
      const d = new BTNodeWithParent("d", b);
      b.right = d;

      const e = new BTNodeWithParent("e", c);
      c.left = e;

      const g = new BTNodeWithParent("g", f);
      f.left = g;
      const h = new BTNodeWithParent("h", f);
      f.right = h;

      const preorder = ['a','b','c',null,'e','d','f','g','h'];
      const res = reconstructFromPreorderWithNullPointers(preorder);

      expect(root.compareToOtherTree(res)).toBeTruthy();
    })
  })

  describe("9.14: Form a linked list from the leaves of a binary tree", () => {
    /*
    Problem: Given a binary tree, compute a linked list from the leaves of the tree.
    The leaves should appear in left to right order.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BSTNode("a");
      root.left = new BSTNode("b");
      root.left.left = new BSTNode("c");
      root.left.left.left = new BSTNode("e");
      root.left.right = new BSTNode("d");
      root.right = new BSTNode("f");
      root.right.left = new BSTNode("g");
      root.right.right = new BSTNode("h");

      const res = buildListFromLeaves(root);

      let expectedResult = new Node('e');
      expectedResult.next = new Node('d')
      expectedResult.next.next = new Node('g')
      expectedResult.next.next.next = new Node('h')

      expect(expectedResult.compareToOtherList(res));
    })
  })

  describe("9.15: Compute the exterior of a binary tree", () => {
    /*
    Problem: Write a program that computes the exterior of a binary tree. These
    nodes are all left-most, leaves, right-most nodes.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a root as argument and returns an array containing the exterior of the tree", () => {
      //       a
      //     b    f
      //   c   d g h
      // e
      const root = new BSTNode("a");
      root.left = new BSTNode("b");
      root.left.left = new BSTNode("c");
      root.left.left.left = new BSTNode("e");
      root.left.right = new BSTNode("d");
      root.right = new BSTNode("f");
      root.right.left = new BSTNode("g");
      root.right.right = new BSTNode("h");

      const res = getExteriorNodesInBinaryTree(root);

      expect(res).toEqual(['a','b','c','e','d','g','h','f']);
    })
  })

  describe("9.16: Compute the right sibling tree", () => {
    /*
    Problem: Write a program that takes a perfect binary tree and sets each Nodes
    level-next field to the node on tit's right, if one exists. Nodes must have another
    pointer to the next one node in level order

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a perfect binary tree in which all nodes contain an empty next-level prop and fills it in", () => {
      class BSTNodeWithNextLevel {
        constructor(data){
          this.data = data;
          this.left = null;
          this.right = null;
          this.nextLevel = null;
        }
      }
      //       a
      //     b    f
      //   c   d g h
      const root = new BSTNodeWithNextLevel("a");
      root.left = new BSTNodeWithNextLevel("b");
      root.left.left = new BSTNodeWithNextLevel("c");
      root.left.right = new BSTNodeWithNextLevel("d");
      root.right = new BSTNodeWithNextLevel("f");
      root.right.left = new BSTNodeWithNextLevel("g");
      root.right.right = new BSTNodeWithNextLevel("h");

      updateNodesWithNextLevelPointer(root);

      const confirmUpdate = levelOrderTraverseBT(root); //define as helper method here

      expect(confirmUpdate).toBeTruthy();
    })
  })

  describe("9.17: Implement locking in a binary tree", () => {
    /*
    Problem: Write the following methods for a binary tree node class:
    1. A function to test if the node is locked
    2. one to lock the node. If node cannot be locked, return false, otherwise lock and return true
    3. one to unlock the node.
    Assume each node has a parent field. The API will be used in a single threaded program so
    no need for concurrency constructs such as mutexes or synchronization.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      //will need multple tests here bro
      expect()
    })
  })
})
