describe("arrays", () => {
  describe("5.1: The dutch national flag problem", () => {
    /*
    Problem: Given an array A and an index i into that array, partition the elements such
    that all elements less than the pivot come first, followed by all elements equal,
    followed by all elements greater.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("it partitions elements around the pivot index", () => {
        let arr = [2,4,1,3,3,2];
        partitionAroundK(arr, 3);
        expect(arr).toEqual([2,2,1,3,3,4]);
      })

      it("edge cases are ok", () => {
        let arr = [];
        partitionAroundK(arr, 0);
        expect(arr).toEqual([]);

        arr = [1];
        partitionAroundK(arr, 0)
        expect(arr).toEqual([1]);

        arr = [4,1];
        partitionAroundK(arr, 0)
        expect(arr).toEqual([1,4])
      })
  })

  describe("5.2: Increment an arbitrary-precision integer", () => {
    /*
    Problem: Given an arary encoding a non-negative number, add one to it and return the result as an integer.
    If given [1,2,9] return 130.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an array of digits and returns the value of the numbers + 1", () => {
        let arr = [0];
        expect(addOneToEncodedArray(arr)).toBe(1);

        arr = [9];
        expect(addOneToEncodedArray(arr)).toBe(10);

        arr = [29];
        expect(addOneToEncodedArray(arr)).toBe(30);

        arr = [299];
        expect(addOneToEncodedArray(arr)).toBe(300);

        arr = [2299];
        expect(addOneToEncodedArray(arr)).toBe(2300);

      })
  })

  describe("5.3: Multiply two arbitrary-precision integers", () => {
    /*
    Problem: Given two arrays encoding an int each, return the encoded result of multiplying them.
    If number is negative, the first number will carry the sign


    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

      it("takes two arrays and returns the result of multiplying both in an array", () => {
        let arr1 = [3,1,2];
        let arr2 = [2,1,3];
        let res = multiplyEncodedArrays(arr1, arr2);
        expect(res).toEqual([6,6,4,5,6])

      })
  })

  describe("5.4: Advancing through an array", () => {
    /*
    Problem: Given an array of integers representing the max number of steps that can be taken from that index to the end of the array,
    return true if there exists a path from start to finish.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an array of numbers and returns true if one can move though the array", () => {
      let arr1 = [3,3,1,0,2,0,1];
      let arr2 = [3,2,0,0,2,0,1]
      let res = canAdvanceThroughArray(arr1);
      let res2 = canAdvanceThroughArray(arr2);
      expect(res).toBeTruthy();
      expect(res2).toBeFalsy();
    })
  })

  describe("5.5: Delete duplicates from a sorted array", () => {
    /*
    Problem: Write a program that takes as input a sorted array and updates it
    such that all dups are removed and remaining elements have been shifted
    left to fill the empty spaces. Return the number of valid elements.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes a sorted array as input and removes all dups. Returns number of valid elements", () => {
      let arr = [2,3,5,5,7,11,11,11,13]; //after removing dups should have 6 valid elements
              //[2,3,4,7,11,13,0,0,0]
      let res = removeDupsFromSortedArray(arr);
      expect(res).toBe(6);
    })
  })

  describe("5.6: Buy and sell a stock once", () => {
    /*
    Problem: Write a program that takes an array of prices as arguments and
    returns the max profit that can be made from buying and selling a stock once

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an array of prices as arguments and returns the max profit that can be made from buying and selling a stock once", () => {
      let prices = [310,315,275,295,260,270,290,230,255,260]; //max profit is 30, buy at 260, sell 290
      let res = buyAndSellStockOnce(prices);
      expect(res).toBe(30);
    })
  })

  describe("5.7: Buy and sell a stock twice", () => {
    /*
    Problem: Write a program that computes the max profit that can be mady by buying
    and selling a share at most twice. Second buy must be made on another date
    after the sale.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an array of prices and returns the max profit that can be made buying and selling a stock twice", () => {
      let prices = [12,11,13,9,12,8,14,13,15]; //max profit is 10
      let res = buyAndSellStockTwice(prices);
      expect(res).toBe(10);
    })
  })

  describe("5.8: Computing an alternation", () => {
    /*
    Problem: Write a program that takes an array A of n numbers, and rearranges
    A's elements to get a new array B having the property that B[0] <= B[1] >= B[2] <= B[3] >= B[4] <= B[5] >= ...

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an array as argument and returns a new array where A's elements are arranged such that  B[0] <= B[1] >= B[2] <= B[3] >= B[4] <= B[5] >= ...", () => {
      let arr = [1,2,3,4,5,6]; // [1,3,2,5,4,6]
      let res = computeAlternation(arr);
      expect(res)toEqual([1,3,2,5,4,6]);
    })
  })

  describe("5.9: Enumerate all primes to n", () => {
    /*
    Problem: WRite a program that takes an integer and returns all primes between
    1 and the number

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an integer and returns all primes from 1 to number", () => {
      let num = 18;
      let res = getPrimesUpTo(num);
      expect(res).toEqual([2,3,5,7,11,13,17]);
    })
  })

  describe("5.10: Permute the elements of an array", () => {
    /*
    Problem: Given an array A of n elements and a permutation P, apply P to A.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes two arrays as arguments. arr is an array and perm is the permutatation. Return the permutation of arr using perm", () => {
      let arr = ['a', 'b', 'c', 'd']
      let perm = [2,0,1,3]; //permute 'a' to i=2, 'b' to 0, c to 1, keep 'd' at 3
      let res = permuteArray(arr, perm);
      expect(res).toEqual(['b','c','a','d']);
    })
  })

  describe("5.11: Compute the next permutation", () => {
    /*
    Problem: Write a program that takes a permutation and returns the next permutation
    under dictionary ordering. If permutation is last permutation, return empty arr

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes a permutation and returns the next permutation under dictionary ordering. If permutation is last permutation, return empty arr", () => {
      let arr = [1,0,3,2]; //should return [1,2,0,3]
      let res = getNextPermutation(arr);
      expect(res).toEqual([1,2,0,3])

      arr = [3,2,1,0];
      res = getNextPermutation(arr);
      expect(res).toEqual([]);
    })
  })

  describe("5.12: Sample offline data", () => {
    /*
    Problem: Write a program that takes an array of distinct elements and a size and
    returns a subset of the given size of the array elements. All subsets are
    equally likely. Return the unput array itself (in place).

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an array and a size and returns a subset of the size given, in place.", () => {
      let arr = [1,2,3,4,5,6];
      let size = 3;
      let result = getRandomSubset(arr, size); //should behave randomly

      //since tough to test random output, using ordered input with expecation that
      //at most, first size elements COULD be out of place.

      expect(hasAtMostKShuffled(result, size)).toBeTruthy();
    })
  })

  describe("5.13: Sample online data", () => {
    /*
    Problem: Write program that takes a size k and reads packets while maintaining a uniform
    random subset of size k of packets read.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("keeps a random subset of size given", () => {
      expect()
    })
  })

  describe("5.14: Compute a random permutation", () => {
    /*
    Problem: Write a program that creates uniformly random permutations of {0,1...n-1} given
    a random number generator that returns ints in the set {0,1,...,n-1} with equal probability.
    use as few calls as possible.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("", () => {
      expect()
    })
  })

  describe("5.15: Compute a random subset", () => {
    /*
    Problem: The set {0,1,2///n-1} has n/k = n!/((n - k)!k!) subsets of size k.
    Write code to return any of those subsets with equal probability

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("", () => {
      expect()
    })
  })

  describe("5.16: Generate nonuniform random numbers", () => {
    /*
    Problem: Given n numbers and probabilities p0, p1...pn-1, which add up to 1 and given
    a random number generator that returns values between [0,1] uniformly, generate
    1 of the n numbers according to the specified probabilities.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("just read the damn problem statement", () => {
      let nums = [3,5,7,11];
      let probabilities = [0.5, 0.33333333, 0.11111111, 0.05555556];
      //if program is called 1000000,
      //3 should be returned roughly 500000
      //5 should be returned roughly 333333
      //7 should be returned roughly 111111
      //11 should be returned roughly 55555
      expect()
    })
  })

  describe("5.17: The sudoku checker problem", () => {
    /*
    Problem: Write a program that checks if a 9x9 2D array representing a partially
    completed sudoku puzzle is valid. That is, no row, column or 3x3 2D subarray has duplicates.
    0 value in grid indicates there is no value written in that grid. Every other
    grid should be in range [1,9].

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes a 2D array representing a sudoku partially completed puzzle and returns true if it is valid", () => {
      let valid = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ]
      expect(validateSudoku(valid)).toBeTruthy();

      let invalid = [
        [5,3,0,0,7,0,0,5,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ]
      expect(validateSudoku(invalid)).toBeFalsy();
    })
  })

  describe("5.18: Compute the spiral ordering of a 2D array", () => {
    /*
    Problem: Write a program which takes a nxn 2D array and returns the spiral ordering.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes an nxn matrix and returns its spiral ordering", () => {
      let m1 = [
        [1,  2,3, 4],
        [12,13,14,5],
        [11,16,15,6],
        [10, 9,8, 7],
      ]
      let res = getSpiralOrder(m1);
      expect(res).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

      let m2 = [
        [1,2,3],
        [8,9,4],
        [7,6,5]
      ]
      res = getSpiralOrder(m2);
      expect(res).toEqual([1,2,3,4,5,6,7,8,9]);
    })
  })

  describe("5.19: Rotate a 2D array", () => {
    /*
    Problem: Write a function that takes as input an nxn matrix and rotates it by 90 degrees clockwise.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes a 2D matrix of nxn and rotates it 90 degrees clockwise", () => {
      let m1 = [
        [1,  2,3, 4],
        [12,13,14,5],
        [11,16,15,6],
        [10, 9,8, 7],
      ]

      let m2 = [
        [10,11,12,1],
        [9,16,13,2],
        [8,15,14,3],
        [7,6,5,4]
      ]
      let res = rotate90Clockwise(m1);
      expect(res).toEqual(m2);
    })
  })

  describe("5.20: Compute rows in Pascal's triangle", () => {
    /*
    Problem: Write a program which takes a non negative integer n and returns the first n
    rows of Pascals triangle. In the pyramid, number at i is the sum of the adjacent numbers
    above it

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */

    it("takes a non negative integer n and returns the first n rows in pascals triangle", () => {
      let triangle = [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
      ]

      let res = getFirstNRowsInPascalsTriangle(2);
      expect(res).Equal([[1], [1,1]]);
    })
  })
})
