// 🔥 Day 2 — JavaScript Mastery COMPLETE!
// Now I will TEST YOUR DAY 2 SKILLS (Google-intern style).

// These tests check if your mind fully absorbed:

// map / filter / reduce
// async/await
// Promises
// Error handling
// fetch() logic
// Coding discipline
// ✅ TEST 1 — map / filter / reduce (Logic Thinking Test)

// Q1:
// Given:

const arr = [5, 10, 15, 20];
// 👉 Return only even numbers, but multiplied by 10
// Using one chain (map + filter).

const evennum = arr.filter((num)=>num%2===0).map(num=>num*10)
console.log(evennum)
// Write the correct code.

// ✅ TEST 2 — fetch() + async/await
// Write an async function that:
// Fetches users from:
// https://dummyjson.com/users
// Prints:
// total users count
// first user's name
// Handles errors using try/catch
// Write the full function.

async function getData(){
    try{
        let data = await fetch("https://dummyjson.com/users");
        let res  = await data.json();
        console.log(`total users count ${res.total}`);
        console.log(`first user name : ${res.users[0].firstName}`)
    }catch(err){
        console.log("error",err)
    }
    
}
//getData();

// ✅ TEST 3 — Promise Logic

// Write a Promise that:

// Resolves after 2 seconds

// Returns: "Task completed"

// Then you log the result

function promisa(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Task Completed"),2000)
    })
}
//promisa().then(res=>console.log(res))

// ✅ TEST 4 — reduce() Challenge
// Given:
const nums = [2, 4, 6, 8];
// 👉 Using reduce() only, return the sum of squares.
// Result should be:
// 2² + 4² + 6² + 8² = 120

const sumofsquares = nums.reduce((acc,num)=>acc+num*num,0)

console.log(sumofsquares)
// ✅ TEST 5 — Error Handling
// Write a function that throws an error:
// "Input must be a number"
// If input is NOT a number.



// ⚡ Final Google-Style Task
// You CANNOT use loops.
// Array has 10,000 numbers:
const big = Array.from({length:10000}, (_,i)=>i+1);



// 👉 Write optimized reduce() code to find:

// sum
// average
// max
// min
// All inside one reduce.

let obj = big.reduce((acc,num)=>{
    acc.sum+=num;
    if(acc.max<num){
        acc.max = num;
    }
    if(acc.min> num){
        acc.min = num;
    }
    
    acc.avg = acc.sum/big.length;
    return acc;
},{sum:0,avg:0,max:-Infinity,min:Infinity});

console.log(obj)