// day 2 section 2
// Problem 1 (Easy)
// using map filter reduce

//Remove duplicates from array WITHOUT using loops:
// function removeduplicates(arr){
//     //arr.filter(a => indexOf(a)=== )
// }

// problem 2 to uppercase arr 
// function toUpper(arr){
//     arr = arr.map((a)=>a.toUpperCase());
//     return arr;
// }
// console.log(toUpper(["ahmad","raza"]));

// --->> problem 3 find sum of all even numbers in array

function sumeven(arr){
    return arr.filter(a=> a%2===0).reduce((a,b)=> a+b,0)
}

console.log(sumeven([10, 21, 33, 40, 55, 62]));