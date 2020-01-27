describe("searching", () => {
  describe("11.1: Search a sorted array for the first occurrence of k", () => {
    /*
    Problem: Write a method that takes a sorted array and a key and returns the index of
    the first occurrence of that key in the array. Returns -1 if not found.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a sorted array and a key and returns the index of the first occurrence of that key in the array. Returns -1 if not found.", () => {
      let arr = [-14, -10, 2,108,108,243,285,285,401];
      expect(getFirstOccurranceOfK(arr, 108)).toBe(3);
      expect(getFirstOccurranceOfK(arr, 69)).toBe(-1);
    })
  })

  describe("11.2: Search a sorted array for entry equal to its index", () => {
    /*
    Problem: Design an efficient algo that takes a sorted array of distinct ints
    and returns an index i such that the element at i equals i.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a sorted array of distinct ints and returns an index i such that the element at i equals i.", () => {
      const arr = [-2,0,2,3,6,7,9];
      expect(getIndexOfElementMatchingIndex(arr)).toBe(2); //2 is the first element that matches its index
    })
  })

  describe("11.3: Search a ciclically sorted array", () => {
    /*
    Problem: Design an O(log n) algo for finding the position of the smallest element
    in a cyclically sorted array. Assume all elements are distinct.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a cyclically sorted array and returns the smallest element in O(log n) time", () => {
      const arr = [378, 478, 550, 631, 103, 203, 220, 234, 279, 368];
      expect(getSmallestFromCyclicalArray(arr)).toBe(103);
    })
  })

  describe("11.4: Compute the integer square root", () => {
    /*
    Problem: Write a program which takes a nonnegative int and returns the largest
    int whose square is less than or equal to the given int.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a nonnegative int and returns the largest int whose square is less than or equal to the given int.", () => {
      let num = 16;
      expect(getLargestIntWithSquareLessThan(num)).toBe(4)

      num = 300
      expect(getLargestIntWithSquareLessThan(num)).toBe(17)
    })
  })

  // describe("11.5: Compute the real square root", () => {
  //   /*
  //   Problem: Implement a function that takes a floating point value and returns
  //   its square root.
  //
  //   Solution:
  //
  //   Patterns:
  //
  //   Complexity: Time: O(), Space: O()
  //   */
  //   it("takes a floating point value and returns its square root.", () => {
  //     //not doing this
  //     expect()
  //   })
  // })

  describe("11.6: Search in a 2D sorted array", () => {
    /*
    Problem: Design an algo that takes a 2D sorted array and a number and checks
    if the number appears in the array.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a 2D sorted array and a number and checks if the number appears in the array.", () => {
      let matrix = [
        [-1,2,4,4],
        [1,5,5,9],
        [3,6,6,9],
        [3,6,8,10]
      ]

      let target = 6;
      expect(findInMatrix(target, matrix)).toBeTruthy();
      target = 14;
      expect(findInMatrix(target, matrix)).toBeFalsy();
    })
  })

  describe("11.7: Find the min and max simultaneously", () => {
    /*
    Problem: Design an algo to find the min and max elements in an array.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array and returns the min and max", () => {
      let arr = [3,2,5,1,2,4];
      expect(getMinMax(arr)).toEqual([1,5]);
    })
  })

  describe("11.8: Find the kth largest element", () => {
    /*
    Problem: Design an algo for computing the kth largest element in an array.
    Assume entries are distinct.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array and int k and returns the kth largest element", () => {
      const arr = [3,2,1,5,4];

      expect(getKthLargestInArray(arr, 2)).toBe(4);
    })
  })

  describe("11.9: Find the missing IP address", () => {
    /*
    Problem: Given a file containing roughly one billion IP addressess, each of which
    is a 32-bit quantity, how would you programmatically find an IP address that is not in the file?
    Assume you have unlimited drive space but only a few mb or RAM.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("", () => {
      //dunno how to test
      expect()
    })
  })

  describe("11.10: Find the duplicate and missing elements", () => {
    /*
    Problem: Given an array of n ints, each between 0 and n-1, inclusive. Exactly
    one element appears twice, implying that exactly one number between 0 and n-1 is
    missing. How to compute the duplicate and missing numbers?

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array of length n with ints between 0 and n-1, there is a dup, find the missing number", () => {
      let arr = [0,1,2,4,5,6,6,7,8,9]; //3 is missing, 6 is duplicate

      expect(findMissingFromSequence(arr)).toBe(3);
    })
  })
})
