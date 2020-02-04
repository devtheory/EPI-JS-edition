describe("binary search trees", () => {
  describe("14.1: Test if a binary tree satisfies the BST property", () => {
    /*
    Problem:

    Solution: Do an inorder traversal while checking that the prev node is not
    greater than or equal to the current node.

    Patterns:

    Complexity: Time: O(n), Space: O(h)
    */
    //recursive solution
    var isValidBST = function(root) {
      if(!root) return true;
      let res = [];
      isValidBSTHelper(root, res);
      return isOrdered(res);
    };

    const isValidBSTHelper = (root, res) => {
      if(!root) return root;

      isValidBSTHelper(root.left, res);
      res.push(root.val);
      isValidBSTHelper(root.right, res)
    }

    const isOrdered = arr => {
      for(let i = 0 ; i < arr.length ; i++){
        if(arr[i-1] >= arr[i]) return false;
      }
      return true;
    }

    //iterative solution
    const isValidBST = root => {
      if(!root) return true;
      let stack = [];
      let pre = null;

      while(root != null || stack.length != 0){
        while(root != null){
          stack.push(root);
          root = root.left;
        }
        root = stack.pop();
        if(pre != null && pre.val >= root.val) return false;
        pre = root;
        root = root.right;
      }
      return true;
    }
    it("", () => {
      expect()
    })
  })

  describe("14.2: Find the first key greater than a given value in a BST", () => {
    /*
    Problem:

    Solution: BST property helps us determine some cases easily. For example, if p
    has a right subtree, then the next value greater than p would the be right subtree's
    leftmost node. Otherwise, p is either a left child or right child of some node.
    We traverse from the root while discarding left or right subtree depending on
    how p compares to the current node, adding each root visited to a stack.
    When we arrive at p, checking if the top's left subtree matches p would tell us
    that the current root would be the thing to return. If it's a right child, then we
    proceed to dump the stack until we find a value larger than p and return that.

    Patterns: Inorder traversal iteratively.

    Complexity: Time: O(h), Space: O(h)
    */
    const inorderSuccessor = (root, p) => {
      if(!root) return root;

      if(p.right){
        let current = p.right;
        while(current.left) current = current.left;
        return current;
      }

      let stack = [];

      while(root != p){
        stack.push(root);
        p.val < root.val ? (root = root.left) : (root = root.right);
      }

      let top = stack.pop();
      if(top && top.left == root) return top;

      while(stack.length != 0){
        const top = stack.pop();
        if(top.val > p.val) return top;
      }
      return null;
    }

    it("", () => {
      expect()
    })
  })

  describe("14.3: Find the k largest elements in a BST", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.4: Compute the LCA in a BST", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.5: Reconstruct a BST from traversal data", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.6: Find the closest entries in three sorted arrays", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.7: Enumerate numbers in the form a + b SQRT(2)", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.8: The most visited pages problem", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.9: Build a minimum height BST from a sorted array", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.10: Insertion and deletion in a BST", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.11: Test if three BST nodes are totally ordered", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.12: The range lookup problem", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })

  describe("14.13: Add credits", () => {
    /*
    Problem:

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      expect()
    })
  })
})
