describe("strings", () => {
  describe("6.1: Interconvert strings and integers", () => {
    /*
    Problem: Implement an integer to string conversion function and a string to integer
    conversion one.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    var myAtoi = function(str) {
      let res = 0;
      if(!str || str.length === 0) return res;
      let space = " ";
      for(let i = 0 ; i < str.length ; i++){
        if(str[i] == space) continue;
        if(!isSignOrInt(str[i])) return res;
        return convertOrFail(str, i, res);
      }
      return res;
    };

    const isSignOrInt = char => {
      if(isNum(char) || char == "-" || char == "+") return true;
      return false;
    }

    const isNum = char => {
      if(char >= '0' && char <= "9") return true;
      return false;
    }

    const convertOrFail = (str, i, res) => {
      const neg = '-';
      const pos = '+';
      const space = ' ';
      const MAX = Math.pow(2, 31)-1;
      const MIN = Math.pow(-2, 31);
      const sign = str[i] == neg ? -1 : 1;

      if(str[i] == neg || str[i] == pos) i++;
      if(str[i] == space || !isNum(str[i])) return res;

      while(str[i] == space && i < str.length) i++;

      if(i > str.length-1) return res;

      let strNum = "";
      while(i < str.length){

        if(isNum(str[i])){
          strNum += str[i];
        } else {
          let num = parseInt(strNum) * sign;
          if(num < MIN) return MIN;
          if(num > MAX) return MAX;
          return num;
        }
        i++;
      }
      let num = parseInt(strNum) * sign;
      if(num < MIN) return MIN;
      if(num > MAX) return MAX;
      return num;
    }
    it("returns the integer representation of a string passed in", () => {
      //test strToNum
      let str = "123";
      let res = strToNum(str);
      expect(res).toBe(123);
    })

    it("returns the string representation of a number passed in", () => {
      //test numToStr
      let num = 123;
      let res = numToStr(num);
      expect(res).toEqual("123");
    })
  })

  describe("6.2: Base conversion", () => {
    /*
    Problem: Write a program that performs base conversion. Input is a string,
    an integer b1, and another integer b2. The string represents and integer in b1.
    Output should be the string representing the integer in base b2.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
//missing the case where converting to or from bases higher than 10
    const baseConvert = (str, b1, b2) => {
      if(b1 === b2) return str;

      if(b1 < b2) {
        let res = 0;
        let power = 0;
        for(let i = str.length-1 ; i >= 0 ; i--){
          res += str[i] * (Math.pow(b1, power));
          power++;
        }
        return res.toString();
      }

      let quotient = parseInt(str);
      let res = [];

      while(quotient > 0){
        let rem = quotient % b2;
        res.push(rem.toString());
        quotient = Math.floor(quotient / b2);
      }

      return res.reverse().join("");
    }
    it("takes a string, an integer b1, and another integer b2. String represents int in b1. Function returns string in base b2.", () => {
      //assume 2 <= b1, b2 <= 16. A=10, B=11...F=15
      const str = "615";
      const b1 = 7;
      const b2 = 13;
      const res = convertBaseB1ToB2(str, b1, b2);

      expect(res).toBe("1A7");
    })
  })

  describe("6.3: Compute the spreadsheet column encoding", () => {
    /*
    Problem: Implement a function that converts a spreasheet column ID to the corresponding integer with "A" corresponding to 1.
    Example, you should return 4 for "D", 27 for "AA", 702 for "ZZ".

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a column ID from a spreadsheet and returns the corresponding integer", () => {
      const id1 = "D";
      expect(convertColIdToInt(id1)).toBe(4);

      const id2 = "AA";
      expect(convertColIdToInt(id2)).toBe(27);

      const id3 = "ZZ";
      expect(convertColIdToInt(id3)).toBe(702);
    })
  })

  describe("6.4: Replace and remove", () => {
    /*
    Problem: Write a program which takes as input an array characters and removes
    each 'b' and replaces each 'a' by two 'd's. The program takes the array and an int size.
    Size denotes the number of entries of the array that the operation is applied to.
    No need to preserve subsequent entries. You assume there is enough space in array to hold final result.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array and size integer representing number of elements in array to work with and replaces all 'a's with two 'd's and removes all 'b's.", () => {
      let arr = ['a','c','d', 'b', 'b', 'c', 'a'];
      expect(convertArray(arr, 7)).toEqual(['d','d','c','d','c','d','d'])

      arr = ['a', 'b', 'a', 'c', null];
      expect(convertArray(arr, 4)).toEqual(['d','d','d','d','c']);
    })
  })

  describe("6.5: Test palindromicity", () => {
    /*
    Problem: Implement a function which takes as input a string S and returns true if S is a palindromic string.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a string as argument and returns true if the string is a palindrome. False otherwise", () => {
      const palindrome = "tacocat";
      const notPalindrome = "potato";
      expect(isPalindrome(palindrome)).toBeTruthy();
      expect(isPalindrome(notPalindrome)).toBeFalsy();
    })
  })

  describe("6.6: Reverse all the words in a sentence", () => {
    /*
    Problem: Implement a function for reversing the words in a string. Assume string is represented using
    array of characters.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes an array of characters and reverses all words in the array", () => {
      const strArray = "Alice likes Bob"; //should be array of characters
      const res = reverseWords(strArray);
      expect(res).toEqual("Bob likes Alice");
    })
  })

  describe("6.7: Compute all mnemonics for a phone number", () => {
    /*
    Problem: Write a program which takes as input a phone number as string of digits and
    returns all possible character sequences that correspond to the phone number. Words
    don't have to be dictionary words.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes a string representing a phone number and returns an array with all possible sequences that can be made with the number", () => {
      //phone pad
      // 1, 2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz, 0
      const num = "23";
      const res = permutatePhoneNumberCharSequence(num);
      const expectedResult = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf", "da", "db", "dc", "ea", "eb", "ec", "fa", "fb" ,"fc"]
      expect(res).toEqual(expectedResult);
    })
  })

  describe("6.8: The look-and-say problem", () => {
    /*
    Problem: Write a program that takes as input an integer n and returns the nth integer in the look and say sequence.
    return the result in a string.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input an integer n and returns the nth integer in the look and say sequence", () => {
      //first five numbers in sequence gathered by grouping and reading off previous number in sequence
      //1, 11, 21, 1211, 111221...
      let num = 3;
      expect(getLookAndSayFor(num)).toEqual("21")
    })
  })

  describe("6.9: Convert from Roman to decimal", () => {
    /*
    Problem: Write a program which takes as input a valid roman number string and returns
    the integer it represents.

    I can precede V and X
    X can precede L and C
    C can precede D and M

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("takes as input a valid roman number string and returns the integer it represents.", () => {
      const I = "I";
      const V = "V";
      const X = "X";
      const L = "L";
      const C = "C";
      const D = "D";
      const M = "M";

      expect(romanToInt(I)).toBe(1);
      expect(romanToInt(V)).toBe(5);
      expect(romanToInt(X)).toBe(10);
      expect(romanToInt(L)).toBe(50);
      expect(romanToInt(C)).toBe(100);
      expect(romanToInt(D)).toBe(500);
      expect(romanToInt(M)).toBe(1000);
    })
  })

  describe("6.10: Compute all valid IP addresses", () => {
    /*
    Problem: Write a program that determines where to add periods to a decimal string so that the resulting string is a valid IP address.
    If more than one IP address is possible, return all instances possible.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("Write a program that determines where to add periods to a decimal string so that the resulting string is a valid IP address. If more than one IP address is possible, return all instances possible", () => {
      const num = "19216811";
      const res = ["192.168.1.1", "19.216.81.1"];
      expect(getValidIPAddressesFor(num)).toEqual(res);
    })
  })

  describe("6.11: Write a string sinusoidally", () => {
    /*
    Problem: Write a program which takes as input a string s and returns the snakestring of s.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("Write a program which takes as input a string s and returns the snakestring of s.", () => {
      let str = "Hello World!";
      let res = getSnakeStr(str);
      expect(res).toEqual("e lHloWrdlo!");
    })
  })

  describe("6.12: Implement run-length encoding", () => {
    /*
    Problem: Implement run length encoding and decoding functions. Assume string to be
    encoded consists of letters of alphabet, no digits. String to decode is validly encoded.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("calls encode with a valid string and returns run length encoding. Also calls decode with encoded string and returns it decoded", () => {
      const decoded = "aaaabcccaa"
      expect(encodeStr(decoded)).toEqual("4a1b3c2a");

      const encoded = "4a1b3c2a";
      expect(decodeStr(encoded)).toEqual("aaaabcccaa");
    })
  })

  describe("6.13: Find the first occurrence of a substring", () => {
    /*
    Problem: Given two strings S (the "search string") and T (the "text"), find the first occurrence of S in T.

    Solution:

    Patterns:

    Complexity: Time: O(), Space: O()
    */
    it("Given two strings S and T, find the first occurrence of S in T", () => {
      const text = "there aren't many opportunities left, aren't there?";
      const target = "aren't";
      const indexOfFirst = getFirstOccurrenceOfTargetInStr(str, target);
      expect(indexOfFirst).toBe(6); //position of the 'a' in first "aren't"
    })
  })
})
