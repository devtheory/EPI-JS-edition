import Stack from './support/Stack';
import Queue from './support/Queue';
import BSTNode from './support/BSTNode';

describe("stacks and queues", () => {
  describe("8.1: Implement a stack with max API", () => {
    /*
    Problem: Design a stack that includes a max operation in addition to push and pop.
    Max returns (without removing) the max value in the stack.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("returns the max value in a stack", () => {
      let stack = Stack.buildStack([1,5,4])

      expect(stack.max()).toBe(5);
      stack.push(8);

      expect(stack.max()).toBe(8);

      stack.pop();

      expect(stack.max()).toBe(5);
    })
  })

  describe("8.2: Evaluate RPN expressions", () => {
    /*
    Problem: Write a program that takes an arithmetical expression in RPN and returns
    the number that the expression evaluates to.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an arithmetical expression in RPN and returns the number that the expression evaluates to", () => {
      let expr = "3,4,+,2,x,1,+"; //reads like (3+4) x 2 + 1
      expect(evaluateRPN(expr)).toBe(15);
    })
  })

  describe("8.3: Test a string over '{,},(,),[,]' for well-formedness", () => {
    /*
    Problem: Write a program that tests if a string made up of the characters
    parens, square brackets, and curly brackets is well formed.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a string containing parens, curly and square brackets and returns true if well formed.", () => {
      const str1 = "([]){()}"; //t
      const str2 = "[()[]{()()}]"; //t
      const str3 = "{)";//f
      const str4 = "[()[]{()()"//f

      expect(isValidParens(str1)).toBeTruthy();
      expect(isValidParens(str2)).toBeTruthy();
      expect(isValidParens(str3)).toBeFalsy();
      expect(isValidParens(str4)).toBeFalsy();
    })
  })

  describe("8.4: Normalize pathnames", () => {
    /*
    Problem: Write a program which takes a pathname and returns the shortest equivalent pathname.
    Assume individual directories and files have names that use only alphanumeric chars.
    Subdirectory names may be combined using /, the current directory ., and parent directory ..

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a pathname and returns the shortest equivalent pathname", () => {
      //could not understand problem. revisit if time available.
      expect()
    })
  })

  describe("8.5: Search a postings list", () => {
    /*
    Problem: Write a recursive and iterative routines that take a postings list
    and compute the jump-first order. Assume each node has an integer-valued field
    that holds the order and is initialized to -1.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a linked list with extra jump field and computes the jump-first order", () => {
      class NodeWithJumpField {
        constructor(){
          this.data = -1;
          this.jump = null;
          this.next = null;
        }
      }

      let l1 = new NodeWithJumpField('a');
      l1.next = new NodeWithJumpField('b');
      l1.next.next = new NodeWithJumpField('c');
      l1.next.next.next = new NodeWithJumpField('d');

      l1.jump = l1.next.next;
      l1.next.jump = li.next.next;
      l1.next.next.jump = l1.next;
      l1.next.next.next.jump = l1.next.next.next;

      // let res = getJumpFirstOrder(l1);
      // get clarification about this problem

      expect()
    })
  })

  describe("8.6: Compute buildings with a sunset view", () => {
    /*
    Problem: Given a series of buildings that have west facing windows (left) in a straight line,
    any building which is eastward (to the right) of a building of equal or greater height cannot see the sunset.
    Design an algo that processess buildings in east to west order and returns the set of buildings which can
    view the sunset. Each building is specified by its height.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("Given a list of heights corresponding to buildins with left facing windows, return the set of heights that allow the building to see sunset.", () => {
      let buildingHeights = [5,6,2,3,10];
      let res = canViewSunset(buildingHeights);
      expect(res).toEqual([5,6,10]);
    })
  })

  describe("8.7: Compute binary tree nodes in order of increasing depth", () => {
    /*
    Problem: Given a binary tree, return an array consisting of the keys at the same level.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a binary tree as argument and returns an array consisting of the keys at the same level", () => {
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

      const res = getBinaryTreeOrderByLevel(root);

      expect(res[0]).toEqual(['a']);
      expect(res[1]).toEqual(['b', 'f']);
      expect(res[2]).toEqual(['c', 'd', 'g', 'h']);
      expect(res[3]).toEqual(['e']);
    })
  })

  describe("8.8: Implement a circular queue", () => {
    /*
    Problem: Implement a queue API using an array for storing elements. Your API
    Should include a constructor which takes the capacity of the queue, enqueue, dequeue functions
    and a function which returns the number of elements stored.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("implements a queue using an array with constant enqueue and dequeue ops", () => {
      let q = new MyQueue(10);
      q.enqueue(1);
      q.enqueue(2);

      expect(q.dequeue()).toBe(1);
      expect(q.size()).toBe(1);

      expect(q.dequeue()).toBe(2);
      expect(q.size()).toBe(0);
    })
  })

  describe("8.9: Implement a queue using stacks", () => {
    /*
    Problem: Implement a queue using stacks

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("Implement a queue using stacks", () => {
      let q = new MyQueueWithStacks();
      q.enqueue(1);
      q.enqueue(2);

      expect(q.dequeue()).toBe(1);

      expect(q.dequeue()).toBe(2);
    })
  })

  describe("8.10: Implement a queue with max API", () => {
    /*
    Problem: Implement a queue with queue, dequeue and max operations.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("max returns the largest element in the queue", () => {
      let q = new MyQueueWithMax();
      q.enqueue(1);
      q.enqueue(2);

      expect(q.max()).toBe(2);
      expect(q.enqueue()).toBe(9);
      expect(q.max()).toBe(9);
    })
  })
})
