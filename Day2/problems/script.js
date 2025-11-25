// day 2 section 2
// Problem 1 (Easy)
// using map filter reduce

//Remove duplicates from array WITHOUT using loops:
// function removeduplicates(arr){
//     return arr.filter((item,i) => arr.indexOf(item)===i )
// }
// console.log(removeduplicates([1,2,3,3,1,2,3,2,1]));
// problem 2 to uppercase arr 
// function toUpper(arr){
//     arr = arr.map((a)=>a.toUpperCase());
//     return arr;
// }
// console.log(toUpper(["ahmad","raza"]));

// --->> problem 3 find sum of all even numbers in array

// function sumeven(arr){
//     return arr.filter(a=> a%2===0).reduce((a,b)=> a+b,0)
// }

// console.log(sumeven([10, 21, 33, 40, 55, 62]));

// ---->>> section 3 drill 

//Solve these 5 tasks using ONLY map, filter, reduce:

const users = [
  { name: "Ahmad", age: 22, score: 82 },
  { name: "Raza", age: 17, score: 91 },
  { name: "John", age: 28, score: 75 },
  { name: "Ali", age: 16, score: 88 },
  { name: "Sara", age: 25, score: 95 }
];

// // 1️⃣ Filter only adults (age ≥ 18) → return names
// function findAdults(user){
//     return user.filter((item) => item.age>=18)
//     .map(item => item.name);
// }
// console.log(findAdults(users));
// // 2️⃣ Create array of scores
// function findAdultsScore(user){
//     return user.filter((item) => item.age >=18)
//     .map((item)=>item.score);
// }
// console.log(findAdultsScore(users));
// // 3️⃣ Find average score using reduce

// function findAverage(user){
    
//     const total = user.reduce((sum,i)=> sum+i.score,0)
//     return total/user.length;
    
// }
// console.log(findAverage(users));
// // 4️⃣ Create array: "Name - Score"
// function arrayName(user){
//     return user.map((item)=> `${item.name} - ${item.score}`);
// }
// console.log(arrayName(users));
// // 5️⃣ Find highest scorer using reduce

// function highest(user){
//     return user.reduce((high,i) => i.score>high? i.score : high,0);
// }
// console.log(highest(users));

// 🧩 Problem 1 — Count how many users are adults (age ≥ 18)
// Return number, not names.

// function countAdults(user){
//     return user.filter((item) => item.age>=18).length
// }
// console.log(countAdults(users))

// --->> 🧩 Problem 2 — Return array of users who passed (score ≥ 80)
// --->> Return full user objects.

// function score80(user){
//     return user.filter((item) => item.score >= 80 )
// }
// console.log(score80(users))

// 🧩 Problem 3 — Get total score of adults only (age ≥ 18)
// Use filter → reduce.

// function totalScore(user){
//     return user.filter((item) => item.age>=18).reduce((sum,i)=> sum + i.score,0);
// }

// console.log(totalScore(users));

// --->>> 🧩 Problem 4 — Create array of name initials
// Example:
// Ahmad → A
// Raza → R

// function nameInitials(user){
//     return user.map((item) => item.name[0]);
// }
// console.log(nameInitials(users));

// 🧩 Problem 5 — Find youngest user using reduce
// Return the complete object, not only the age.

// function youngest(user){
//     return user.reduce((a,b) => a.age > b.age ?b:a )
// }
// console.log(youngest(users));

// --->>> 🧩 Hard Problem 1 — Group users by age category
// Given the same users array:

// Return this output:
// {
//   adults: ["Ahmad", "John", "Sara"],
//   minors: ["Raza", "Ali"]
// }
// Allowed: map, filter, reduce
// Not allowed: loops, extra variables outside function.

// function ageCategory(user){
//     return {
//         adults:user.filter((item)=> item.age>=18).map((item)=>item.name),
//         minors:user.filter((item)=>item.age<18).map((item)=>item.name)
//     }
// }
// console.log(ageCategory(users));

// 🧩 Hard Problem 2 — Create score statistics
// Return an object like this:

// {
//   max: 95,
//   min: 75,
//   avg: 86.6
// }
// Use only reduce (no Math.max, no loops).

// function stats(user){
//     return {max:user.reduce((high,i) => high > i.score ? high : i.score),
//         min:user.reduce((low,i) => low < i.score ? low : i.score),
//         avg:user.reduce((sum,i)=> sum + i.score,0)/user.length,
//     };
// }
// console.log(stats(users))


// 🧩 Hard Problem 3 — Sort users by score (ONLY reduce!)
// Return users sorted by score descending.

function sortByScore(user){
    return user.reduce((sorted,i)=>{
      let index = sorted.findIndex((a)=> a.score < i.score);
      if(index ===-1)return [...sorted,i];
      else{
        return [...sorted.slice(0,index),i,...sorted.slice(index)];
      }
    },[])
}
//console.log(sortByScore(users))

//🧩 Hard Problem 4 — Count how many users have each score digit
// Example:
// Scores = 82, 91, 75, 88, 95

function countdigit(user){

}


// 🧩 Hard Problem 5 — Convert array to object keyed by username
// Output:
// {
//  "Ahmad": { age: 22, score: 82 },
//  "Raza": { age: 17, score: 91 },
//  "John": { age: 28, score: 75 },
//  "Ali": { age: 16, score: 88 },
//  "Sara": { age: 25, score: 95 }
// }


// Only reduce.
// function toObject(user){
//     return user.reduce((obj,i)=>{
//       obj[i.name] = {age:i.age,score:i.score};
//       return obj;
//     },{})
// }
// console.log(toObject(users))

// create a promise

let p  = new Promise((resolve,reject)=>{
  let success = true;
  if(success){resolve("Task Completed")}
  else reject("something went wrong")
})

// p.then(res=> console.log(res))
// .catch(err=>console.log(err))

// async/await

async function getData(){
  let res = await fetch("https://dummyjson.com/products/search?q=phone")
  let data = await res.json();
  console.log(data);
}
//getData();

// ✅ PART 5 — Challenge (Google Style)

// Optimize array of 10,000 numbers using ONLY reduce (NO LOOPS).

// Goal:
// ✔ sum
// ✔ largest
// ✔ smallest
// ✔ count even numbers
// ✔ count odd numbers
// ✔ calculate average
// ✔ all in ONE reduce


const arr = [1,2,3,4,5];
const res = arr.reduce((acc,i)=>{
  acc.sum += i;
  if(i>acc.max){
    acc.max = i;
  }
  if(i<acc.min){
    acc.min = i;
  }
  if(i%2==0){
    acc.even++;
  }else{acc.odd++}

  return acc;
},{sum:0,max:-Infinity,min:Infinity,even:0,odd:0})

console.log(res)

// 💡 Mini Task (You MUST do this)
// Task: Create a function that returns a Promise

// It should:

// ✔ wait 1 second
// ✔ resolve with your name
// ✔ print using .then()

function wait1s(){

  return new Promise(res=>{
    setTimeout(()=>{
      res("Ahmad")
    },1000)
  })
}

//wait1s().then(res=>console.log(res))

async function getData(){

  console.log("start");
  let res = await wait1s();
  console.log(res);
  console.log("end");
}

// get data
async function getAata(){
  let data = await fetch("")
}