import PriorityQueue from './support/PriorityQueue';

describe("heaps", () => {
  describe("10.1: Merge sorted files", () => {
    /*
    Problem: Write a program that takes a set of sorted sequences and computes the union
    of these sequences as a sorted sequence.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array of arrays of sorted integers and returns the union of those arrays.", () => {
      const arr1 = [3,5,7];
      const arr2 = [0,6];
      const arr3 = [0,6,28];
      const list = [arr1, arr2, arr3];

      const expectedResult = [0,0,3,5,6,6,7,28];

      expect(mergeSortedArrays(list)).toEqual(expectedResult);
    })
  })

  describe("10.2: Sort an increasing-decreasing array", () => {
    /*
    Problem: Design an efficient algo for sorting a k-increasing-decreasing array.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a k-increasing-decreasing array and sorts it", () => {
      const arr = [190,57,442,131,493,294,452,418,221,339]
      const res = sortInKIncreasingDecreasing(arr, 4);
      expect(res).toEqual([57,131,493,294,221,339,418,452,442,190]);
    })
  })

  describe("10.3: Sort an almost-sorted array", () => {
    /*
    Problem: Write a program which takes as input a very long sequence of numbers
    and prints the numbers in sorted order. Each number is at most k away from its
    correctly sorted position (such array is called k-sorted). For example, no number
    in [3,-1,2,6,4,5,8] is more than 2 away from its final sorted position.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an almost sorted array where each element is at most k away from right position and returns the sorted order", () => {
      let arr = [3,-1,2,6,4,5,8]; //at most 2 away from right position
      sortAlmostSorted(arr);
      expect(arr).toEqual([-1,2,3,4,5,6,8]);
    })
  })

  describe("10.4: Compute the k closest stars", () => {
    /*
    Problem: Given a coordinate system for the milky way in which Earth is at (0,0,0).
    Model stars as points and assume distances are in light years. The milky way consists
    of 10^12 stars and their coordinates are stored in a file. How would you compute the k
    stars closest to earth?

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array of points and a number k and returns the k closest stars to the origin (0,0,0)", () => {
      let list = [[1,2,3], [1,2,4], [2,5,6], [9,9,9], [0,0,1], [1,1,1]];
      let res = getClosestPointsToOrigin(list, 2);
      expect(res).toEqual([[0,0,1], [1,1,1]]);
    })
  })

  describe("10.5: Compute the median of online data", () => {
    /*
    Problem: Design an algo for computing the running median of a sequence.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a sequence and computes the running median", () => {
      let sequence = [1,0,3,5,2,0,1];
      let expectedResult = [1,0.5,1,2,2,1.5,1];

      expect(computeMedianOnline(sequence)).toEqual(expectedResult);
    })
  })

  describe("10.6: Compute the k largest elements in a max-heap", () => {
    /*
    Problem: Gvien a max-heap represented as an array A, design an algoritm that
    computes the k largest elements stored in the max-heap. You cannot modify heap.


    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a heap and an integer k as arguments and returns the k largest elements in the max-heap", () => {
      let maxHeap = new PriorityQueue();//default is max heap, so no comp needed
      maxHeap.add(561);
      maxHeap.add(314);
      maxHeap.add(401);
      maxHeap.add(28);
      maxHeap.add(156);
      maxHeap.add(359);
      maxHeap.add(271);
      maxHeap.add(11);
      maxHeap.add(3);

      expect(getLargestKElementsInHeap(maxHeap, 4)).toEqual([561,314,401,359]);
    })
  })

  describe("10.7: Implement a stack API using a heap", () => {
    /*
    Problem: Implement a stack API using a heap.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("uses a heap to implement a stack", () => {
      let stack = new StackWithHeap();

      stack.push(5);
      expect(stack.pop()).toBe(5);

      stack.push(10);
      stack.push(11);

      expect(stack.pop()).toBe(11);
      expect(stack.pop()).toBe(10);
    })
  })
})
