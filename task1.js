// task 2
// reverse a string

// function reversestr(str){
//   res = [];
//   for(let i = str.length-1;i>=0;i--){
//     res.push(str[i]);
//   }
//   str = res.join('');
//   return str;
// }
// console.log(reversestr("hello"));



// Count vowels

// function countVowels(s){
//     let cnt = 0;
//     for(let i = 0;i<s.length;i++){
//         if(s[i]=='a'|| s[i]=='A'|| s[i]=='e'|| s[i]=='E' ||s[i]=='i'|| s[i]=='I'||
//             s[i]=='o' || s[i]=='O' || s[i]=='u'|| s[i]=='U'
//         ){
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(countVowels("Aoust"))

// --->> Check palindrome
// function isPalindrome(s){
//     let n = s.length;
//     for(let i = 0;i<s.length/2;i++){
//         if(s[i]!=s[n-i-1]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome("hello"));


//--->>> Find max number in array
// function findMax(arr){
//     if(arr.length<=0){
//         return -1;
//     }
//     let n = arr.length;
//     let max = arr[0];
//     for(let i = 1;i<n;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;

// }
// console.log(findMax([3,1,9,2]))
// console.log(findMax([-5,-1,-9]));

// Remove duplicates from array

// function removeDuplicates(arr){
//     duplicates={};
//     duparr = [];
//     for(let i = 0;i<arr.length;i++){
//         if(duplicates[arr[i]]!=1){
//             duparr.push(arr[i]);
//         }
//         duplicates[arr[i]]=1;
//     }
//     return duparr;
// }

// console.log(removeDuplicates([1,1,1,1,1]));



// Task 3: Build a tiny functional project
// 👉 “Text Tools App”
// (very small but teaches dev thinking)
// Features:
// Count characters
// Count words
// Remove extra spaces
// Convert to UPPER/lower case
// Copy text to clipboard

// 🔥 2. CHALLENGE (Google Bootcamp Style)
// “Do NOT copy from YouTube.
// First try to solve with your brain.
// THEN check solution.”
// ⏳ Set 40 minutes timer
// Try to create a JavaScript function that:
// removes duplicate words from a sentence
// Example
// Input: "I love coding coding in javascript javascript"
// Output: "I love coding in javascript"

function removeWords(sentence){
    words = sentence.split(" ");
    ans = {};
    arr = [];
    for(let i = 0;i<words.length;i++){
        if( ans[words[i]]!=1){
            ans[words[i]] = 1;
            arr.push(words[i]);
        }
    }
    sentence = arr.join(" ");
    return sentence;
}
console.log(removeWords("Javascript is best because Javascript is powerful"  ));

// 🎯 3. GOAL (End of Day 1 Target)
// By end of today, you should be able to:
// ✓ Write small JavaScript functions
// ✓ Debug using console.log
// ✓ Use Git & push to GitHub
// ✓ Build a very small functional project
// ✓ Think in problem → logic → solution format
// ✓ Work like a real developer, not a tutorial watcher

// 🧠 4. TRAINING (What you must learn)
// Your Day 1 training modules:
// Module A: Developer Thinking
// Learn to think like this:
// 1. What is the problem?
// 2. What are the inputs?
// 3. What are the outputs?
// 4. What steps convert input → output?
// 5. Can I break it into smaller parts?

// Module B: JavaScript Foundations
// Learn these today:
// let, const
// function()
// if else
// string methods
// array methods
// for loop, forEach
// Module C: Git Basics
// Commands to master:
// git init
// git status
// git add .
// git commit -m "message"
// git branch feature/day1
// git checkout feature/day1
// git push origin feature/day1

// 🥊 5. DRILL (Repeat until it becomes muscle memory)
// Repeat these 3 tasks 5 times today:
// 🔁 Drill 1 — Write a function to reverse a string
// Do it without looking:
// function reverseString(str) { ... }
// 🔁 Drill 2 — Create a Git commit
// Every time you write a function:
// git add .
// git commit -m "Completed drill"
// 🔁 Drill 3 — DOM Practice
// Create a textbox and a button.
// On button click → alert the text value.
// Do it 3–5 times until it becomes easy.
