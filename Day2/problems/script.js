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

// 1️⃣ Filter only adults (age ≥ 18) → return names
function findAdults(user){
    let arr = [];
    user.filter((item) =>{
        if(item.age>=18){
            arr.push(item.name);
        }
    })
    return arr;
}
//console.log(findAdults(users));
// 2️⃣ Create array of scores
function findAdultsScore(user){
    let arr = [];
    user.filter((item) =>{
        if(item.age>=18){
            arr.push(item.score);
        }
    })
    return arr;
}
//console.log(findAdultsScore(users));
// 3️⃣ Find average score using reduce

function findAverage(user){
    
   return  user.reduce((a,b)=>a.score + b.score , 0);
    
}
//console.log(findAverage(users));
// 4️⃣ Create array: "Name - Score"
function arrayName(user){
    const arr = [];
    user.map((item)=>{
        arr.push(`${item.name} - ${item.score}`);
    })
    return arr;
}
//console.log(arrayName(users));
// 5️⃣ Find highest scorer using reduce

function highest(user){
    return user.reduce((a,b)=> a>b?a:b,0)
}
console.log(highest([1,2,3,4,1,122,90,1,2]));
