describe("hash tables", () => {
  describe("12.1: Test for palindromic permutations", () => {
    /*
    Problem: Write a program to test whether the letters forming a string can be
    permuted to form a palindrome.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a string as argument and returns true if the letters in str can be formed into a palindrome", () => {
      let str = "edified";
      expect(canFormPalindrome(str)).toBeTruthy();
    })
  })

  describe("12.2: Is an anonymous letter constructible", () => {
    /*
    Problem: Write a program that takes text for a magazine and text for an anonymous
    letter and returns true if the letter is constructible using letters from the magazine.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes text representing a letter and text representing a magazine and returns true if the letter can be made using chars in the mag", () => {
      const letter = "this is sparta";
      const magazine = "is like shit at raps"
      expect(canBuildAnonLetterFromMag(letter, magazine)).toBeTruthy();
    })
  })

  describe("12.3: Implement an ISBN cache", () => {
    /*
    Problem: Create a cache for looking up prices of books identified by their ISBN.
    You must implement lookup, insert, and remove methods. Use LRU for cache eviction.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("can use methods lookup, insert, and remove", () => {
      let cache = new ISBNCache(5); //create a cache of size 5
      cache.add("12");
      cache.add("34");
      cache.add("56");
      cache.add("78");
      cache.add("90");//on add, 12 should be evicted since its LRU
      cache.add("11");

      expect(cache.get("12")).toBeNull();
      expect(cache.get("34")).toBeTruthy();//moves 34 to be most recently used

      cache.add("99"); //should have evicted 56
      expect(cache.get("56")).toBeNull();

      cache.remove("11");
      expect(cache.get("11")).toBeNull();
    })
  })

  // **** PAGES LOST FOR BELOW PROBLEMS ****

  // describe("12.4: Compute the LCA, optimizing for close ancestors", () => {
  //   /*
  //   Problem:
  //
  //   Solution:
  //
  //   Patterns:
  //
  //   Complexity: Time: O(), Space: O()
  //   */
  //   it("", () => {
  //     expect()
  //   })
  // })
  //
  // describe("12.5: Compute the k most frequent queries", () => {
  //   /*
  //   Problem:
  //
  //   Solution:
  //
  //   Patterns:
  //
  //   Complexity: Time: O(), Space: O()
  //   */
  //   it("", () => {
  //     expect()
  //   })
  // })
  //
  // describe("12.6: Find the nearest repeared entries in an array", () => {
  //   /*
  //   Problem:
  //
  //   Solution:
  //
  //   Patterns:
  //
  //   Complexity: Time: O(), Space: O()
  //   */
  //   it("", () => {
  //     expect()
  //   })
  // })

  describe("12.7: Find the smallest subarray covering all values", () => {
    /*
    Problem: Write a program which takes an array of strings and a set of strings
    and returns the indices of the starting and ending index of a shortest subarray
    of the given array that "covers" the set (contains all strings in the set).

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array of strings and a set of strings and returns the indices of the starting and ending index of a shortest subarray of the given array that 'covers' the set ", () => {
      const arr = ["one", "two", "four", "one", "two", "three", "two"]
      const set = new Set(["one", "three", "two"]);

      expect(getStartAndEndOfSubarrayCoveringSet(arr, set)).toEqual([3,5]);
    })
  })

  describe("12.8: Find the smallest subarray sequentially covering all values", () => {
    /*
    Problem: Write a program that takes two arrays of strings, and returns the indices of the
    starting and ending index of a shortest subarray of the first array that 'sequentially covers'
    all the strings int the second array in the order in which they appear in k.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a paragraph p array and a keywords k array and returns the start and end index of the shortest subarray of p that sequentially covers k in the order appearing in k.", () => {
      const para = ["apple", "banana", "cat", "apple"];
      const keywords = ["banana", "apple"];
      expect(getStartAndEndOfPCoveringK(para, k)).toEqual([1,3]);
    })
  })

  describe("12.9: Find the longest subarray with distinct entries", () => {
    /*
    Problem: Write a program that takes an array and returns the length of a longest subarray with
    the property that all its elements are distinct.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array and returns the length of a longest subarray with the property that all its elements are distinct", () => {
      const arr = ['f','s','f','e','t','w','e','n','w','e'];
      expect(getLenghtOfLongestUniqueSubarray(arr)).toBe(5);// for [s,f,e,t,w]
    })
  })

  describe("12.10: Find the length of a longest contained interval", () => {
    /*
    Problem: Write a program which takes as input a set of ints represented by
    an array, and returns the size of a largest subset of ints in the array having
    the property that if two ints are in the subset, then so are all integers between
    them.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input a set of ints represented by an array, and returns the size of a largest subset of ints in the array having the property that if two ints are in the subset, then so are all integers between them", () => {
      const arr = [3,-2,7,9,8,1,2,0,-1,5,8];
      expect(getLengthOfLargestSubset(arr)).toBe(6); //[-2,-1,0,1,2,3]
    })
  })

  describe("12.11: Find the student with the top three scores", () => {
    /*
    Problem: Write a program which takes as input a file containing test scores and
    returns the student who has the maximum score averaged across his top three tests.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input a file containing test scores and returns the student who has the maximum score averaged across his top three tests", () => {
      const students = {"bob": [42,24,1], "tom", [99,99], "helen": [99,99,99]}
      expect(getStudentWithLargestAverage3Scores(students)).toEqual("helen");
    })
  })

  describe("12.12: Compute all string decompositions", () => {
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

  describe("12.13: Test the Collatz conjecture", () => {
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

  describe("12.14: Implement a hash function for chess", () => {
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
