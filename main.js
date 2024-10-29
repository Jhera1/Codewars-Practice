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
function rps(p1, p2) {
    if (p1 === p2) {
        return "Draw!";
    }
    if (
        (p1 === "Scissors" && p2 === "Paper") ||
        (p1 === "Rock" && p2 === "Scissors") ||
        (p1 === "Paper" && p2 === "Rock")
     ) {
        return "p1 wins!"
    } else {
        return "p2 wins!"
    }
}
console.log(rps("Rock", "Rock"));