import LinkedList from './support/LinkedList';

describe("linked lists", () => {
  describe("7.1: Merge two sorted lists", () => {
    /*
    Problem: Write a program that takes two sorted lists and returns their merge in place.

    Solution:

    Patterns:

    Complexity: Time: O(n+m), Space: O()
    */
    var mergeTwoLists = function(l1, l2) {
      if(!l1) return l2;
      if(!l2) return l1;

      let dummy = new ListNode(null),
      l1p = l1,
      l2p = l2,
      tail = dummy;

      while(l1p && l2p){
        if(l1p.val < l2p.val){
          tail.next = l1p;
          l1p = l1p.next;
        } else {
          tail.next = l2p
          l2p = l2p.next;
        }
        tail = tail.next;
      }
      tail.next = l1p ? l1p : l2p
      return dummy.next;
    };
    it("Write a program that takes two sorted lists and returns their merge in place.", () => {
      let l1 = LinkedList.buildList([2,5,7]);
      let l2 = LinkedList.buildList([3,11]);
      let res = mergeSortedLists(l1, l2);
      let expectedResult = [2,3,5,7,11];

      expect(res.compareToArray(expectedResult)).toBeTruthy();
    })
  })

  describe("7.2: Reverse a single sublist", () => {
    /*
    Problem: Write a program which takes a singly linked list L and two integers S and F
    as arguments and returns the reversed order of the nodes from the Sth node to the Fth node, inclusive.
    Numbering begins at 1 (the head). Don't allocate additional nodes.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    //reverses full list, trivial to modify to meet the requirements here.
    var reverseList = function(head) {
      if(!head) return head;

      let prev = null,
      current = head;
      while(current){
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
      }
      return prev;
    };
    it("Write a program which takes a singly linked list L and two integers S and F as arguments and returns the reversed order of the nodes from the Sth node to the Fth node, inclusive", () => {
      let l1 = LinkedList.buildList([11,3,5,7,2]);
      reverseSublist(l1, 1, 3);  // [11,7,5,3,2] should be new state
      expect(l1.next.data).toBe(7);
      expect(l1.next.next.data).toBe(5);
      expect(l1.next.next.next.data).toBe(3);
    })
  })

  describe("7.3: Test for cyclicity", () => {
    /*
    Problem: Write a program that takes the head of a singly linked list and returns null
    if there does not exist a cycle, and the node at the start of the cycle if one is present.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    var detectCycle = function(head) {
      if(!head) return head;

      let slow = head;
      let fast = slow.next ? slow.next.next : null;

      while(fast){
        if(slow == fast){
          //get cycle length
          let cycleLength = 0;
          do {
            cycleLength++;
            fast = fast.next
          }
          while(slow != fast);

          let cycleLengthIter = head;

          while(cycleLength-- > 0){
            cycleLengthIter = cycleLengthIter.next;
          }

          let iter = head;

          while(iter != cycleLengthIter){
            iter = iter.next;
            cycleLengthIter = cycleLengthIter.next;
          }
          return iter;

        } else {
          slow = slow.next;
          if(slow != fast){
            fast = fast.next;
            if(!fast) return null;
            fast = fast.next;
          }
        }
      }
      if(head.next == head) return head;
      return null
    };
    it("takes the head of a singly linked list and returns null if there does not exist a cycle, and the node at the start of the cycle if one is present", () => {
      let l1 = LinkedList.buildList([1,2,3,4]);
      expect(getCycleStartIfExists(l1)).toBeNull();

      l1.next.next.next.next = l1; //created a cycle
      expect(getCycleStartIfExists(l1)).toEqual(l1.next.next.next.next);
    })
  })

  describe("7.4: Test for overlapping lists-lists are cycle-free", () => {
    /*
    Problem: Write a program that takes two cycle-free singly linked lists and determines
    if there exists a node that is common to both lists.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    var getIntersectionNode = function(l1, l2) {
      if(!l1 || !l2) return null;
      if(l1 == l2) return l1;

      const lenAndTail1 = getLengthAndTail(l1);
      const lenAndTail2 = getLengthAndTail(l2);

      if(lenAndTail1.tail != lenAndTail2.tail) return null;

      let l1p = l1, l2p = l2;

      if(lenAndTail1.len > lenAndTail2.len){
        let steps = lenAndTail1.len - lenAndTail2.len;
        while(steps > 0){
          l1p = l1p.next;
          steps--;
        }
      } else{
        let steps = lenAndTail2.len - lenAndTail1.len;
        while(steps > 0){
          l2p = l2p.next;
          steps--;
        }
      }

      //short list
      if(l1p == l2p) return l1p;

      while(l1p.next != l2p.next ){
        l1p = l1p.next;
        l2p = l2p.next;
        if(!l1p || !l2p) return null;
      }
      return l1p.next || l2p.next;
    };

    const getLengthAndTail = list => {
      let len = 1;
      let tail = list;
      while(tail.next){
        len++;
        tail = tail.next;
      }

      return {len, tail};
    }
    it("takes two cycle-free singly linked lists and determines if there exists a node that is common to both lists. Return common node or null", () => {
      let l1 = LinkedList.buildList([1,2]);
      let l2 = LinkedList.buildList([3,5,6]);
      let l3 = LinkedList.buildList([7,8,9]);
      expect(getCommonNodeBetweenLists(l1, l2)).toBeNull(); //lists have not connected

      l1.next.next = l2; //connect lists
      expect(getCommonNodeBetweenLists(l1, l2)).toEqual(l2);//common list is head of l2

      expect(getCommonNodeBetweenLists(l1, l3)).toBeNull();

    })
  })

  describe("7.5: Test for overlapping lists-lists may have cycles", () => {
    /*
    Problem: Solve 7.4 for the case where lists may have cycles

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes two singly linked lists (could have cycles) and determines if there exists a node that is common to both lists. Return common node or null", () => {
      let l1 = LinkedList.buildList([1,2,3,4]);
      let l2 = LinkedList.buildList([-1,0]);

      l2.next.next = l1; //connnect l2 to head of l1
      l1.next.next.next.next = l1; //created a cycle

      expect(getCommonNodeBetweenLists(l1, l2)).toEqual(l1);
    })
  })

  describe("7.6: Delete a node from a singly linked list", () => {
    /*
    Problem: Write a program which deletes a node in a singly linked list. The input node is
    guaranteed not to be the tail.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a list and a node as arguments and deletes the node from the list", () => {
      let l1 = LinkedList.buildList([1,2,3,4]);
      deleteNodeFromList(l1, l1.next);
      expect(l1.next.data).toBe(3);
    })
  })

  describe("7.7: Remove the kth last element from a list", () => {
    /*
    Problem: Given a singly linked list and an integer k, write a program to remove the kth last element from the list.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an argument k and a list, removes the kth last node in the list", () => {
      let l1 = LinkedList.buildList([1,2,3,4]);
      removeKthLastFromList(l1, 2);
      expect(l1.next.next.data).toBe(4);
    })
  })

  describe("7.8: Remove duplicates from a sorted list", () => {
    /*
    Problem: Write a program that takes as input a sorted singly linked list of ints
    and removes dups while leaving list sorted.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input a sorted singly linked list of ints and removes dups while leaving list sorted", () => {
      let l1 = LinkedList.buildList([1,1,2,3,3,4,5,5]);
      removeDupsInSortedList(l1);
      expect(l1.data).toBe(1);
      expect(l1.next.data).toBe(2);
      expect(l1.next.next.data).toBe(3);
      expect(l1.next.next.next.data).toBe(4);
      expect(l1.next.next.next.next.data).toBe(5);
    })
  })

  describe("7.9: Implement cyclic right shoft for singly linked list", () => {
    /*
    Problem: Write a program that takes as input a singly linked list and a nonnegative int k
    and returns the list cyclicly shifted to the right by k.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input a singly linked list and a nonnegative int k and returns the list cyclicly shifted to the right by k", () => {
      let l1 = LinkedList.buildList([1,2,3,4]);
      cyclicShiftListRightByK(l1, 2);
      expect(l1.compareToArray([3,4,1,2])).toBeTruthy();
    })
  })

  describe("7.10: Implement even-odd merge", () => {
    /*
    Problem: Write a program that computes the even-odd merge

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("computes the even-odd merge of a list such that all even indices come first, followed by even. Preserves order between categories", () => {
      let l1 = LinkedList.buildList([1,2,3,4]);
      evenOddMerge(l1);
      expect(l1.compareToArray([1,3,2,4])).toBeTruthy();
    })
  })

  describe("7.11: Test whether a slingly linked list is palindromic", () => {
    /*
    Problem: Write a program that tests whether a singly linked list is palindromic

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a list and returns true if it represents a palindrome, false otherwise", () => {
      let l1 = LinkedList.buildList(['t','a','c','o','c','a','t']);
      let l2 = LinkedList.buildList([1,2,3]);

      expect(isPalindromeList(l1)).toBeTruthy();
      expect(isPalindromeList(l2)).toBeFalsy();
    })
  })

  describe("7.12: Implement list pivoting", () => {
    /*
    Problem: Implement a function which takes as input a singly linked list and an
    integer k and performs a pivot of the list with respect to k.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input a singly linked list and an integer k and performs a pivot of the list with respect to k.", () => {
      let l1 = LinkedList.buildList([5,1,3,7,9]);
      pivotListAroundK(l1, 5);
      expect(l1.data < 5).toBeTruthy();
      expect(l1.data > 5).toBeFalsy();
      expect(l1.next.data < 5).toBeTruthy();
      expect(l1.next.next.data == 5).toBeTruthy();
      expect(l1.next.next.next.data > 5).toBeTruthy();
      expect(l1.next.next.next.next.data > 5).toBeTruthy();
    })
  })

  describe("7.13: Add list-based integers", () => {
    /*
    Problem: Write a program which takes two singly linked lists of digits and returns the
    list corresponding to the sum of the integers they represent.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes two singly linked lists of digits and returns the list corresponding to the sum of the integers they represent", () => {
      let l1 = LinkedList.buildList([1,9]);
      let l2 = LinkedList.buildList([6]);
      let res = addIntegerLists(l1, l2);
      expect(res.data == 2).toBeTruthy();
      expect(res.next.data == 5).toBeTruthy();
    })
  })
})
