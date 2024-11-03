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

//#8
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

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }
   console.log(removeSmallest([1, 2, 2, 2, 2, 2])); 


//#9 (6 kyu)
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

//(solution)
