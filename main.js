// //If you scan through the list you will see only a few that contain an english word longer than two characters. thesquirreliscute is the only one that could be completely seperated into english words to form the message "the squirrel is cute".

// //Your job for this kata is to make a function that will give all possible decoded messages given the encoded message and suspected contents.

// // Function to shift a single character by a given shift value
// const caesarShift = (char, shift) => {
//     let charCode = char.charCodeAt(0);
//     if (char >= 'a' && char <= 'z') { 
//         // Apply Caesar shift for lowercase letters, wrap around using modulo 26
//         return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
//     }
//     return char; // Non-alphabet characters remain unchanged
// };

// // Function to generate all possible Caesar cipher shifts for the message
// const decodeAllShifts = (message) => {
//     let results = [];
//     for (let shift = 0; shift <= 25; shift++) { // Iterate over shifts from 0 to 25
//         let decoded = ''; // Initialize an empty string for the decoded message
//         for (let char of message) { // Loop through each character in the message
//             decoded += caesarShift(char, shift); // Apply the shift to each character
//         }
//         results.push(decoded); // Store the shifted message in the results array
//     }
//     return results; // Return all shifted versions of the message
// };

// // Main function to decode the message and filter by the keyword
// const decode = (message, keyword) => {
//     let possibleMessages = decodeAllShifts(message); // Get all possible shifts
//     // Filter messages that contain the keyword and return them sorted alphabetically
//     return possibleMessages.filter(msg => msg.includes(keyword)).sort();
// };

// // Test cases
// console.log(decode('ymjxvznwwjqnxhzyj', 'squirrel')); 
// // Expected output: ['thesquirreliscute']

// console.log(decode('lzwespnsdmwakafxafalq', 'max'));  
// // Expected output: ['maxftqotenxblbgybgbmr', 'themaxvalueisinfinity']

// console.log(decode('pumy', 'um'));  
// // Expected output: ['pumy']

//#1
// function position(letter) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     return "position of letter is: " + (alphabet.indexOf(letter) + 1);
// }
//  console.log(position("b"));

//#2
// function doubleLetters(str) {
//    return str.split('').map(char => char + char).join('');
// }
// console.log(doubleLetters("Somewhere in time")); 

//#3
// let countSheep = function (num){
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//        result = result + i + " sheep...";
//     } 
//     return result
// } 

//or

// let countSheep = function (num){
//     let result = "";
//   for (i = 1; i <= num; i++) {
//     result += i + "sheep...";
//   }
//   return result;
// }
//console.log(countSheep(5));   

//#4 Rock, Paper, Scissors
// function rps(p1, p2) {
//     if (p1 === p2) {
//         return "Draw!";
//     }
//     if (
//         (p1 === "Scissors" && p2 === "Paper") ||
//         (p1 === "Rock" && p2 === "Scissors") ||
//         (p1 === "Paper" && p2 === "Rock")
//      ) {
//         return "p1 wins!"
//     } else {
//         return "p2 wins!"
//     }
// }
// console.log(rps("Rock", "Rock"));

//#5 Build a function that returns an array of integers from n to 1 where n>0.

// const revSeq = (n) => {
//     const result = [];
//     for (i = n; i > 0; i--) {
//         result.push(i);
//     }
//     return result;
// };
// console.log(revSeq(7));

//#6 count the monkeys in the forest 1 by 1

// function monkeyCount(n) {
//     monkeys = [];
//     for (i = 1; i <= n; i++) {
//         monkeys.push(i);
//     }
//     return monkeys
// };
// console.log(monkeyCount(10));  

// #7 (8 kyu)
//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//Return true if yes, false otherwise :)

// function hero(bullets, dragons){
//     if (bullets >= dragons * 2) {
//       return true;
//     } else {
//         return false;
//     }
// }
//or
// const hero = (bullets, dragons) => bullets >= dragons * 2 ?  true : false;
//   console.log(hero(4, 2)); 

//#8 (7 kyu) Remove the minimum

// Description:
// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//(solution)

// function removeSmallest(numbers) {
//   if (numbers.length === 0) return []; // Return an empty array if the input is empty
   
//   const min = Math.min(...numbers); // Find the smallest value
//   const index = numbers.indexOf(min); // Get the index of the first occurrence of the smallest value
   
//   return numbers.slice(0, index).concat(numbers.slice(index + 1)); // Return a new array without the smallest value
// }

//or

// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }
//    console.log(removeSmallest([1, 2, 3, 4, 5])); 


// #9 (6 kyu)
// Another one down "survival of the fittest"

// Description:
// Stuck? [Try this one](http://www.codewars.com/kata/remove-the-minimum).
// A Storm at Sea
// Jill the adventurer has seen everything, from the highest mountains, to the most dangerous animals. But today she sailed through a hideous storm and shipwrecked. Left with only a damaged life boat and some supplies, she has carefully balanced out the weight not to capsize. But the weight is too much for the small life boat, she has to get rid of some items.

// Beginning from one side of the boat, she starts to remove the n smallest items and hopes for the best…

// Task
// Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 2 [5,3,2,1,4] = [5,3,4]
// removeSmallest 3 [5,3,2,1,4] = [5,4]
// removeSmallest 3 [1,2,3,4,5] = [4,5]
// removeSmallest 5 [1,2,3,4,5] = []
// removeSmallest 9 [1,2,3,4,5] = []

// removeSmallest 2 [1,2,1,2,1] = [2,2,1]


//////////////////////////////////////////////////////////


// 1 Respond with the correct character, given the line of the
// poem, if this were said at the front door.

//@param {string} line
 //@returns {string}



// const frontDoorResponse = (line) => line[0];
// console.log(frontDoorResponse('Somewhere in time'));

//  2 Format the password for the front-door, given the response
//  letters.

//  @param {string} word the letters you responded with before
//  @returns {string} the front door password

// export function frontDoorPassword(word) {
//   throw new Error('Remove this line and implement the function');
// }
// function backDoorResponse(line) {
//     return line;
// }
//     console.log(backDoorResponse('Somewhere In Time'));

// function pairEmUp(n) {
//     if (n < 2) return [];
//     const result = [];
  
//     const combine = (start, size, current) => {
//       if (current.length === size) return result.push([...current]);
//       for (let i = start; i < n; i++) {
//         combine(i + 1, size, [...current, i]);
//       }
//     };
  
//     for (let size = 2; size <= n; size += 2) combine(0, size, []);
  
//     return result.sort((a, b) => {
//       for (let i = 0; i < Math.min(a.length, b.length); i++) {
//         if (a[i] !== b[i]) return a[i] - b[i];
//       }
//       return b.length - a.length;
//     });
//   }
  
//   // Test cases
//   console.log(pairEmUp(0)); // []
//   console.log(pairEmUp(1)); // []
//   console.log(pairEmUp(2)); // [ [ 0, 1 ] ]
//   console.log(pairEmUp(3)); // [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ]

// function pairEmUp(n) {
//     if (n < 2) return []; // No valid groups if n is less than 2
  
//     const result = [];
  
//     // Function to generate combinations
//     const combine = (start, size, current) => {
//       if (current.length === size) {
//         result.push([...current]); // When a combination is complete, push it to the result
//       } else {
//         for (let i = start; i < n; i++) {
//           combine(i + 1, size, [...current, i]); // Add the current index and recurse
//         }
//       }
//     };
  
//     // Generate combinations for all valid sizes (multiples of 2 up to n)
//     for (let size = 2; size <= n; size += 2) {
//       combine(0, size, []);
//     }
  
//     // Sort the result: first by lexicographical order, then by length in descending order for ties
//     result.sort((a, b) => {
//       // First, compare the arrays lexicographically
//       for (let i = 0; i < Math.min(a.length, b.length); i++) {
//         if (a[i] !== b[i]) return a[i] - b[i];
//       }
//       // If they are identical up to the shortest length, compare by length (larger first)
//       return b.length - a.length;
//     });
  
//     return result;
//   }
  
//   console.log(pairEmUp(0)); // []
//   console.log(pairEmUp(1)); // []
//   console.log(pairEmUp(2)); // [ [ 0, 1 ] ]
//   console.log(pairEmUp(3)); // [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ]

// const findSquares = num => {
//   let k = (num - 1) / 2; 
//   let max = Math.pow(k + 1, 2);
//   let min = Math.pow(k, 2);

//   return `${max}-${min}`;
// };

// console.log(findSquares(100));



// const minSumMaxSum = arr => {
//   arr.sort((a, b) => a - b);
//   const minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
//   const maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);
//   console.log(`${minSum} ${maxSum}`)   
// }
// minSumMaxSum([12, 11, 45, 32, 31])

// function miniMaxSum(arr) {
//   arr.sort((a, b) => a - b);
   
//    const minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);

//    const maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);

//    console.log(minSum, maxSum);
// }
// miniMaxSum([1, 3, 5, 7, 9]); 

// function mergeStrings(word1, word2) {
//   return [...word1, ...word2].map((_, i) => (word1[i] || '') + (word2[i] || ''))
//     .join('');
// }

// console.log(mergeStrings("abc", "pqr"));   
// console.log(mergeStrings("abcd", "pq"));  

// var mergeAlternately = function(word1, word2) {
//   const accumulator = [];
//   const longestArray = Math.max(word1.length, word2.length);
//  for (let i = 0; i < longestArray; i++) {
//      if (word1[i]) {accumulator.push(word1[i])}
//      if (word2[i]) {accumulator.push(word2[i])}
//    }
//    return accumulator.join('');
//  };

// console.log(mergeAlternately("Smweei ie", "oehr ntm"));


// function gcdOfStrings(str1, str2) {
//   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // GCD calculation
//   const lenGCD = gcd(str1.length, str2.length); // GCD of string lengths
//   const candidate = str1.slice(0, lenGCD); // Candidate substring

//   return str1 + str2 === str2 + str1 ? candidate : ""; // Validate divisibility
// }


// function gcdOfStrings(str1, str2) {
//   if (str1.concat(str2) !== str2.concat(str1)) {
//       return ""; // If concatenations differ, no common divisor exists
//   }
//   const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); // Calculate GCD of lengths
//   const lenGCD = gcd(str1.length, str2.length);
//   return str1.slice(0, lenGCD); // The common divisor string
// }


// // Example Usage
// console.log(gcdOfStrings("abcabc", "abc")); 
// console.log(gcdOfStrings("ababab", "ab")); 
// console.log(gcdOfStrings("LEET", "")); 

// var kidsWithCandies = function(candies, extraCandies) {
//   // loop through candies array
//   // check if candies[i] + extraCandies is the largest in array
//   // if so push true to new array 
//   // if not push false to new array 
//     return candies.map(c => (c + extraCandies) >= Math.max(...candies));
//   };
//   console.log(kidsWithCandies([10, 3, 6, 3], 5));


//////////////////////////////////////////////////////////////////////////////////////////////


// You have a long flowerbed in which some of the plots are 
// planted, and some are not. However, flowers cannot be 
// planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, 
// where 0 means empty and 1 means not empty, 
// and an integer n, return true if n new flowers can be planted 
// in the flowerbed without violating the no-adjacent-flowers 
// rule and false otherwise.

// const canYouPlant = (flowerBed, n) => flowerBed.map(n => fb === 0 && fb + 1 === 0 && fb - 1 === 0 ? true : false);
// console.log(canYouPlant([1, 0, 0, 0, 1], 2));

// function canPlaceFlowers(flowerbed, n) {
//   let count = 0; // Keep track of how many flowers we can plant
//   let length = flowerbed.length;

//   for (let i = 0; i < length; i++) {
//       // Check if the current plot is empty and the adjacent plots (if any) are also empty
     
//           // Plant a flower here
          
        
//           // Skip the next plot to maintain the no-adjacent rule
         
//       }
//       // Early exit if we have planted enough flowers
      

// // Example usage:
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false

//////////////////////////////////////////////////////////////////////////////


// Given a string s, reverse only all the vowels in the string 
// and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they 
// can appear in both lower and upper cases, more than once.

 //create separate string for vowels
 //reverse vowel string
 //concat string each item in turn

//  const reverseVowels = s => {
//     result = "";
//     stringOfVowels = [...s].filter(char => "aeiouAEIOU".includes(s)).join("");
//     return stringOfVowels
//   }
  


// console.log(reverseVowels("somewhere in time"));

// Simple string reverse
// const reverse = str => {
//   let reversed = ""
//   for (char of str) {
//     reversed = char + reversed
//   } 
//   return reversed
// }



///////////////////////////////////////////////////
                       //Top 10
///////////////////////////////////////////////////////

// reverse string and integer

//a) split, reverse, join
function reverse(str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed
}

// (chaining)
// const reverse = str => str.split('').reverse().join('');

// console.log('#1 ' + reverse("Somewhere in time"))


// b) reverse integer
//a)split, reverse, join 
//b)return using !!!parseInt() & Math.sign()!!!!


function reverseInt (n) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}
// console.log(reverseInt(2345))


// #2 Palindrome 
// a)reverse string and turn to lowercase
// b)in another variable then return 
// c)the comparison
function palindrome(str) {
  // reverse string and turn to lowercase
  LowerCase = str.toLowerCase()
  const reverseStr = LowerCase.split('').reverse().join('');
  
  // compare the two strings
  // if (reverseStr === str) {
  //   // return true or false
  //   return true
  // } return false
          // or
  return LowerCase === reverseStr
}
console.log('#3 ' + palindrome('saaS'))


// #3 Max Char

// 1. Initialize an empty object `charMap`.
// 2. Initialize variables `maxCount` to 0 and `mostUsedChar` to an empty string.

// 3. For each character `char` in the string:
//     a. If `char` exists in `charMap`:
//         - Increment its value by 1.
//     b. Otherwise:
//         - Add `char` to `charMap` with a value of 1.

// 4. For each key (character) in `charMap`:
//     a. If the value of the key is greater than `maxCount`:
//         - Update `maxCount` to the value of the key.
//         - Update `mostUsedChar` to the key.

// 5. Return `mostUsedChar`.



function maxChar(str) {
const charMap = {}
let mostChar = ''
max = 0
for (let char of str) {
  charMap[char] = charMap[char] + 1 || 1
} 
for (let key in charMap) {
  if (charMap[key] > max) {
    max = charMap[key]
    mostChar = key
  }
}
return mostChar
}
console.log('#4 ' + maxChar("mississippi"))

////////////////or\\\\\\\\\\\\\\\

// const charMap = {}
// let mostChar = ''
// max = 0
// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1
// }
// for (let key in charMap) {
//   if (charMap[key] > max) {
//     max = charMap[key]
//     mostChar = key
//   }
// }
// return mostChar


// const maxChar = str => {
//   const charMap = [...str].reduce((map, char) => (map[char] = (map[char] || 0) + 1, map), {});
//   return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b);
// };

// // Examples
// console.log(maxChar("hello"));       // Output: "l"
// console.log(maxChar("javascript"));  // Output: "a"
// console.log(maxChar("aaaabbc"));     // Output: "a"


// #4 Array Chunking 
// Explanation with Example:
// For input [1, 2, 3, 4, 5, 6, 7] and size = 2:

// Start with index = 0 and result = [].
// Extract [1, 2] (slice from index 0 to 2), add it to result.
// result = [[1, 2]], increment index to 2.
// Extract [3, 4] (slice from index 2 to 4), add it to result.
// result = [[1, 2], [3, 4]], increment index to 4.
// Extract [5, 6] (slice from index 4 to 6), add it to result.
// result = [[1, 2], [3, 4], [5, 6]], increment index to 6.
// Extract [7] (slice from index 6 to 8), add it to result.
// result = [[1, 2], [3, 4], [5, 6], [7]], increment index to 8.
// Stop the loop since index (8) is no longer less than the array length (7).
// Output: [[1, 2], [3, 4], [5, 6], [7]]

// 1. Create an empty list `result`.
// 2. Set `index` to 0.

// 3. While `index` is less than the length of `arr`:
//     a. Slice the array from `index` to `index + size`.
//     b. Add the sliced subarray to `result`.
//     c. Increment `index` by `size`.

// 4. Return `result`.


function chunk(arr, size) {
   const result = [];
   let i = 0;
   while (i < arr.length) {
    result.push( arr.slice(i, i + size))
    i += size
   }

   return result
}
// console.log(chunk([1,2,3,4,5,6,7], 2))

// #5 Title Case (.toUpperCase())
// 1. Split the input string into an array of words using spaces as the separator.
//    Input: "somewhere in time"
//    Words: ["somewhere", "in", "time"]

// 2. Create an empty list called `result`.

// 3. For each word in the array:
//     a. Extract the first letter of the word.
//     b. Convert the first letter to uppercase.
//     c. Extract the rest of the word (all letters after the first).
//     d. Convert the rest of the word to lowercase.
//     e. Combine the uppercase first letter with the lowercase rest of the word.
//     f. Add the processed word to the `result` list.

// 4. Join the words in the `result` list into a single string, separated by spaces.

// 5. Return the resulting string.


function capitalizeString(str) {
  const words = str.split(' ')
  //const result = []

  // for (let word of words) {
  //   result.push(word[0].toUpperCase() + word.slice(1))
  // }
  // return result.join(' ')
  // or use the .map() method

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')


}
// console.log(capitalizeString('#6 ' + "somewhere in time"))




// #6 Anagrams (build charMap for string A & B, then compare each char in charMap)
// !!!!remember .replace(/[\W]/g, '')!!!!!
//FUNCTION isAnagram(string1, string2)
//     1. Normalize both strings:
//         a. Remove spaces and special characters (if required).
//         b. Convert both strings to lowercase.

//     2. If the lengths of the two strings are not equal:
//         a. RETURN false (they cannot be anagrams).

//     3. Sort both strings:
//         a. Split each string into an array of characters.
//         b. Sort the arrays alphabetically.
//         c. Join the arrays back into strings.

//     4. Compare the sorted strings:
//         a. If the sorted strings are equal:
//             i. RETURN true (the strings are anagrams).
//         b. Else:
//             i. RETURN false (the strings are not anagrams).
// function charMap(str) {
//   const charMap = {}
//   str = str.toLowerCase().replace(/[\W]/g, '')
  
//   for (let char of str) {
//     charMap[char] = ++charMap[char] || 1
//   } 
//   return charMap 
// }

// function anagrams(str1, str2) {
//   const charMapA = charMap(str1)  
//   const charMapB = charMap(str2)  
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// return false
//   }
//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) {
//       return false
//     }
//   }
//   return true
// }
          // or
 const cleanString = str => str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('')
 const anagrams = (strA, strB) => cleanString(strA) === cleanString(strB)
       
// console.log(anagrams('listen', 'silent'))
// console.log(anagrams('lis?ten', 'silent'))
// console.log(anagrams('listen', 'sihlent'))
// console.log(anagrams('list!!!en', 'silent'))

// #7 Count Vowels 

function findVowels(str) {
matches = str.match(/[aeiou]/gi)
return matches ? matches.length : 0
}

// function findVowels(str) {
//   str = str.toLowerCase()
//   const vowelCheck = ['a','e', 'i','o','u']
//   let count = 0
//   for (let char of str) {
//     if (vowelCheck.includes(char)) count++
//   }
//   return count
// }
// console.log(findVowels('SomewhereIn Time'))


// #8 Fizz Buzz 

function fizzBuss(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else console.log(i)
  }
}
// fizzBuss(15)

// #9 Steps String Pattern

function steps(n) {
  for (let row = 1; row <= n; row++) {
    let line = ''
    for (let col = 1; col <= n; col++) {
     if (col <= row) {
      line += '#'
     } else {
      line += ' '
     }
    } console.log(line)
  }
}
// steps(9)
// #10 Pyramid String Pattern 

function pyramid(n) {
  const mid = Math.floor((2*n-1)/2)
  for (let row = 0; row < n; row++) {
    let line = ''
    for (let col = 0; col < 2*n-1; col++) {
      if (col >= mid - row && col <= mid + row) {
        line += '#'
      } else {
        line += ' '
      }
    }
    console.log(line)
  }
}
// pyramid(9)
///////////////////////////////////////
////////////////////////////////////////
// Bonus - Spiral Matrix

function matrix(n) {
  const result = []
  let counter = 1, startRow = 0, endRow = n - 1, startCol = 0, endCol = n-1

  for (i = 0; i < n; i++) {
    result.push([])
  }

  while (startCol <= endCol && startRow <= endRow) {
    //top
  for (let i = startCol; i <= endCol; i++) {
    result[startRow][i] = counter
    counter++
  }
  startRow++
  //right
  for (let i = startRow; i <= endRow; i++) {
    result[i][endCol] = counter
    counter++
  }
  endCol--

  //bottom
  for (let i = endCol; i >= startCol; i--) {
    result[endRow][i] = counter
    counter++
  }
  endRow--

  //left
  for (let i = endRow; i >= startRow; i--) {
    result[i][startCol] = counter
    counter++
  }
  startCol++
  }

  return result
}
// console.log(matrix(4))


// another staircase

function staircase(n) {
  for (let i = 1; i <= n; i++) {
  let spaces = ' '.repeat(n - i);
  let hashes = '#'.repeat(i);
  console.log(spaces + hashes);
  }
}
// staircase(4)

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
  let spaces = ' '.repeat(n - i);
  let hashes = '#'.repeat(2 * i - 1);
  console.log(spaces + hashes + spaces);
  }
}
// pyramid(4)

//reverse vowels only

// var reverseVowels = function(s) {
//   const vowels = s.match(/[aeiou]/,gi)
//   return vowels ? vowels : []
// }

// var reverseVowels = function(s) {
//   // const vowelsWithPlaceholder = s.replace(/[]/gi, )
//     const reversedVowelArr = s.match(/[aeiou]/gi).reverse()
// for (let char of reversedVowelArr) {
//   let result = ''
  
// }


//     return reversedVowelArr
// };
// // console.log(reverseVowels('Somewhere In Time'))

////////////////////////////////////


function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles); // Find the tallest candle
  console.log(tallest)
  return candles.filter(candle => candle === tallest).length; // Count how many candles are tallest
}

// Example usage:
const candles = [3, 2, 1, 3, 4, 4, 4];
// console.log(birthdayCakeCandles(candles)); // Output: 2

//////////////////////////////////////////////////////////


// function convertToMilitaryTime(time) {
//   const [hours, minutes, secondsPeriod] = time.split(/[:APM]+/);
//   const period = time.slice(-2);
  
//   let militaryHours = period === "AM" ? 
//       (hours === "12" ? "00" : hours) : 
//       (hours === "12" ? "12" : String(+hours + 12));

//   return `${militaryHours.padStart(2, "0")}:${minutes}:${secondsPeriod}`;
// }

// // Example usage:
// console.log(convertToMilitaryTime("07:05:45PM")); // Output: "19:05:45"
// console.log(convertToMilitaryTime("12:00:00AM")); // Output: "00:00:00"
// console.log(convertToMilitaryTime("12:00:00PM")); // Output: "12:00:00"
// console.log(convertToMilitaryTime("06:40:15AM")); // Output: "06:40:15"


// Create an application that will display the number of 
// kilometers per liter (output) based on the number of 
// miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometers


// const converter = mpg => parseFloat(mpg * (1.60/4.54)).toFixed(2)

// console.log(converter(12))

// const disemvowel = str => str.replace(/aeiou/ig, '') 
// console.log(disemvowel('Somewhere in time'))

// function descendingOrder(n){
//   return Number(String(n).split('').filter((a, b) => b - a).join(''))
// }
// console.log(descendingOrder(937840))

// isogram
// word with no repeating letters  
// case insensitive True or false

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// const isoGram = str => {
//   const cleanString = str.toLowerCase()
//   const compareStorage = []
//   for (let letter of cleanString) {
//     if (!compareStorage.includes(letter)) {
//       compareStorage.push(letter)
//     } else {
//       return false
//     }
    
//   }
   
//   return true
// }
// console.log(isoGram("Dermatoglyphics"))
// console.log(isoGram("aba"))
// console.log(isoGram("moOse"))

// There is a bus moving in the city which takes and 
//drops some people at each bus stop.

// You are provided with a list (or array) of integer 
//pairs. Elements of each pair represent the 
// number of people that get on the bus (the first item) 
//and the number of people that get off the bus 
//(the second item) at a bus stop.

// Your task is to return the number of people who are 
// still on the bus after the last bus stop (after the 
// last array). Even though it is the last bus stop, the 
// bus might not be empty and some people might still be 
// inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that 
// the number of people in the bus is always >= 0. So 
// the returned integer can't be negative.

// The second value in the first pair in the array is 0, 
// since the bus is empty in the first bus stop.

// const aLine = [[4, 0], [0, 1], [0, 29], [0, 1]] // 0
// const bLine = [[3, 0], [4, 1], [2, 2], [0, 2]] // 4
// const numOfPeopleLeftOnBus = busStops => {
//   let peopleThatGotOn = busStops.reduce((acc, [on,off]) => acc + on, 0)
//   let peopleThatGotOff = busStops.reduce((acc, [on,off]) => acc + off, 0)
//   const totalAtEndOfLine = peopleThatGotOn - peopleThatGotOff
//   if (totalAtEndOfLine < 0) {
//     return 0
//   } else {
//     return totalAtEndOfLine
//   }
// }

// console.log(numOfPeopleLeftOnBus(aLine))


// function printerError(s) {
//   const validChar = 'abcdefghijklm'  
//   const sToArr = s.split('')
//   const errors = []
//     for (let char of sToArr) {
//       if (!validChar.includes(char)) {
//         errors.push(char)
//       }
//     }
//   console.log(errors)
//     return `${errors.length}/${s.length}`
// }

// const printerError = str => {
//   const errors = str.split('').filter(char => char < 'a' || char > 'm').length
//   return `${errors}/${str.length}`
// }

// console.log(printerError('abcopq'))

// Description:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// AlgorithmsListsDynamic ProgrammingFundamentalsPerformance

// function password(password) {
//   // Regular expression to validate the password
//   const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)
//   return isValid;
// }
// // Examples
// console.log(password("Abcd1234")); // true
// console.log(password("Abcd123")); // false
// console.log(password("abcd1234")); // false
// console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); // true
// console.log(password("ABCD1234")); // false
// console.log(password("Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,")); // true
// console.log(password("!@#$%^&*()-_+={}[]|\\:;?/>.<,")); // false


// Description:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// line 539 reference

// const findOddAppearance = arr => {
//   const numMap = {}
//   for (let num of arr) {
//     numMap[num] = numMap[num] + 1 || 1
//   }
//   for (let key in numMap) {
//     if (numMap[key] % 2 !== 0) {
//       return parseInt(key)
//     }
//   }
//   }

// console.log(findOddAppearance([1,2,2,3,3,3,4,3,3,3,2,2,1]))











// const findOddAppearance = arr => {
//   let numMap = {};
  
//   // Create the frequency map
//   for (let num of arr) {
//     numMap[num] = numMap[num] + 1 || 1;
//   }
  
//   // Find the number with odd occurrences
//   for (let key in numMap) {
//     if (numMap[key] % 2 !== 0) {
//       return parseInt(key); // Return the first number with odd occurrences
//     }
//   }
  
//   return null; // If no odd occurrences found
// };

// console.log(findOddAppearance([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));





// const charMap = {}
// let mostChar = ''
// max = 0
// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1
// }
// for (let key in charMap) {
//   if (charMap[key] > max) {
//     max = charMap[key]
//     mostChar = key
//   }
// }
// return mostChar



////////////////////////////////////Rent\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const rentCalc = hrsWorked => {
//   const rentBeforeWorkHrs = 1320
//   const moneyMadeWorking = hrsWorked * 25
//   return rentBeforeWorkHrs - moneyMadeWorking
// }
// // 17.75hrs
// console.log(rentCalc(29))


// const reverseVowels = str => {
//   const vowels = str.match(/[aeiou]/ig)
//   const withRevVowels = []
// for (let letter of str) {
//   if (/[aeiou]/i.test(letter)) {
//     withRevVowels.push(vowels.pop())
//   } else {
//     withRevVowels.push(letter)
//   }
// }
// return withRevVowels.join('')
// }
// console.log(reverseVowels('Somewhere in time'))
///////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// const productOfNumbersWithoutCurrIndexValue = arrOfNumbers => {
//   const result = []

//   for (let i = 0; i < arrOfNumbers.length; i++) {
//     let arrWithoutIndex = arrOfNumbers.filter((_, index) => index !== i)
//     let reducedArr = arrWithoutIndex.reduce((a, b) => a * b)
//     result.push(reducedArr)
//   }
//   return result
// }
//  console.log(productOfNumbersWithoutCurrIndexValue([1, 2, 3, 4, 5]))

///////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Description:
// You will be given a string.

// You need to return an array of three strings by gradually pulling apart the string.

// You should repeat the following steps until the string length is 1:

// a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

// The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

// Example:

// "exampletesthere" becomes: ["erehtse","example","t"]

// The Kata title gives a hint of one technique to solve.

// FundamentalsStringsArrays

// const popShift = str => {
//   strToArr = [...str]
//   resultArr = []
//   return strToArr
// }
// console.log(popShift("exampletesthere"))

//////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// Apparently "Put A Pillow On Your Fridge Day is celebrated on the 29th of May each year, in Europe and the U.S. The day is all about prosperity, good fortune, and having bit of fun along the way."

// All seems very weird to me.

// Nevertheless, you will be given an array of two strings (s). First find out if the first string contains a fridge... (i've deemed this as being 'n', as it looks like it could hold something).

// Then check that the second string has a pillow - deemed 'B' (struggled to get the obvious pillow-esque character).

// If the pillow is on top of the fridge - it must be May 29th! Or a weird house... Return true; For clarity, on top means right on top, ie in the same index position.

// If the pillow is anywhere else in the 'house', return false;


// const isItPillowDay = (str1, str2) => {
//   for (let i = 0; i < str1.length; i++) {
//     if (i === 'n' && str2[str1[i]] === 'b') {
//       return true
//     } else if (i === 'b' && str2[str1[i]] === 'n') {
//       return true
//     }
//   }
//   return false
// }
// console.log(isItPillowDay('abby', 'andy'))



// const factory = n => {
//     return function (numbers) {
//       return numbers.map(num => num * n)
//     }
// }
// const multiplyByFive = factory(5)

// console.log(multiplyByFive([1, 2, 3, 4, 5]))




// Base person factory function
// function person(firstName, lastName, age, gender, employed, occupation, married) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     gender: gender,
//     employed: employed,
//     occupation: occupation,
//     married: married,
//     sayName: function () {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     introduce: function () {
//       return `Hello, my name is ${this.sayName()}. I am ${this.age} years old. I am a ${this.gender}.`;
//     }
//   };
// }

// // constructionWorker factory function
// function constructionWorker(firstName, lastName, age, gender, married, boss) {
//   // Inherit properties and methods from the person factory
//   const worker = person(firstName, lastName, age, gender, true, "construction worker", married);

//   // Add constructionWorker-specific property
//   worker.boss = boss;     

//   // Add constructionWorker-specific method
//   worker.sayBossName = function () {
//     return `My boss is called ${this.boss} and is a very nice person!`;
//   };

//   return worker;
// }

// // Example usage
// const john = constructionWorker("John", "Doe", 30, "male", true, "Mr. Smith");

// console.log(john);
// // Output: Full construction worker object
// // {
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   age: 30,
// //   gender: 'male',
// //   employed: true,
// //   occupation: 'construction worker',
// //   married: true,
// //   boss: 'Mr. Smith',
// //   sayName: [Function: sayName],
// //   introduce: [Function: introduce],
// //   sayBossName: [Function: sayBossName]
// // }

// console.log(john.sayName());
// // Output: "John Doe"

// console.log(john.introduce());
// // Output: "Hello, my name is John Doe. I am 30 years old. I am a male."

// console.log(john.sayBossName());
// // Output: "My boss is called Mr. Smith and is a very nice person!"

// // Another example
// const jane = constructionWorker("Jane", "Smith", 25, "female", false, "Mrs. Johnson");

// console.log(jane.sayName());
// // Output: "Jane Smith"

// console.log(jane.introduce());
// // Output: "Hello, my name is Jane Smith. I am 25 years old. I am a female."

// console.log(jane.sayBossName());
// // Output: "My boss is called Mrs. Johnson and is a very nice person!"


// Task
// Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it can be done and return the length of the final array.

// Example
// For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]

// The result should be 6.

// [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
//          2+2+6       0+2+0     5+5+7+7       3+3+9
// [2, 1,   10,    5,    2,        24,     4,   15   ] -->
//                                2+24+4
// [2, 1,   10,    5,             30,           15   ]
// The length of final array is 6

// const addConsecutiveEvens = arr => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i < arr.length - 1 && arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
//        result.push(arr[i] + arr[i + 1])
//        i++
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// console.log(addConsecutiveEvens([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]))

// const addConsecutiveEvens = (arr) => {
  
//   let changed = true

//   while (changed) {
//     const result = [];
//     changed = false
//   for (let i = 0; i < arr.length; i++) {
//     if (i < arr.length - 1 && arr[i] % 2 === arr[i + 1] % 2) {
//       result.push(arr[i] + arr[i + 1]);
//       i++; 
//       changed = true
//     } else {
//       result.push(arr[i]);
//     }
//    }
//    arr = result
//   }
//    return arr.length; // Return the length of the final array
// };


// const addConsecutiveEvens = arr => arr.reduce((a, b))



// function sumGroups(arr) {
//   let changed = true
//   while (changed) {
//     const result = []
//     changed = false
    
//     for (let i = 0; i < arr.length; i++) {
//       if (i < arr.length - 1 && arr[i] % 2 === arr[i + 1] % 2) {
//         result.push(arr[i] + arr[i + 1])
//         i++
//         changed = true
//       } else {
//         result.push(arr[i])
//       } 
//     }
//     arr = result
//   }
//     return arr.length
//   }


// console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]));
// console.log(sumGroups([705,298,833,279,272,852,886,194,207,767,782]))

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

// const pairs = arr => {
//   return [...arr] 
//   }
// console.log(pairs([1,2,5,8,-4,-3,7,6,5]))

// function pairs(array) {
//   let count = 0;
//   for (let i = 0; i < array.length - 1; i += 2) {
//     if (Math.abs(array[i] - array[i + 1]) === 1) {
//       count++;
//     }
//   }
//   return count;
// }

// // Example usage:
// console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); // Output: 3






// 238. Product of Array Except Self
// Attempted
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
//  console.log('Hello World')


//  const productExceptSelf = arr => {
//   const result = []
//   for (let i=0; i < arr.length; i++) {
//   const cleanArr = arr.filter((_, index) => index !== i)
//   const reducedArr = cleanArr.reduce((acc, curr) => acc * curr)
//   result.push(Math.abs(reducedArr))
// }
//   return result
// } 
// console.log(productExceptSelf([-1,1,0,-3,3]))
// console.log(productExceptSelf([1,2,3,4]))


// const productExceptSelf = nums => {

// let result = Array(nums.length).fill(1), left = 1, right = 1;
//   nums.forEach((num, i) => (result[i] *= left, left *= num));
//   nums.reverse().forEach((num, i) => (result[nums.length - 1 - i] *= right, right *= num));
//   return result;
// }
// console.log(productExceptSelf([-1,1,0,-3,3]))
// console.log(productExceptSelf([1,2,3,4]))







// 334. Increasing Triplet Subsequence
// Medium
// Topics
// Companies
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.


// const increasingTriplet = arr => {
//   let numsInRow = 0
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < arr[i+1]) {
//         numsInRow++
//       }
//   }
//   return numsInRow >= 3
// }
// console.log(increasingTriplet([2,1,5,0,4,6]))
// console.log(increasingTriplet([5,4,3,2,1]))




// 443. String Compression
// Medium
// Topics
// Companies
// Hint
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.
 
 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".








// Task
// Yesterday you found some shoes in your room. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example
// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [0, 23]]
// the output should be true;

// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [1, 23]]
// the output should be false.

// Input/Output
// [input] 2D integer array shoes
// Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

// Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

// [output] a boolean value

// true if it is possible to pair the shoes, false otherwise.

// const doTheyMakePairs = arr => {}


  var compress = function(chars) {
    let write = 0, i = 0;

    while (i < chars.length) {
        let char = chars[i], count = 0;

        // Count occurrences of the current character
        while (i < chars.length && chars[i] === char) {
            count++;
            i++;
        }

        chars[write++] = char; // Write the character

        // Write the count if greater than 1
        if (count > 1) {
            for (let c of String(count)) chars[write++] = c;
        }
    }

    return write;
};
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))