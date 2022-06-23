


//-------------------------------
//Return average of an array
//  const initialValue = 0
//  const sumW = (x) => x.reduce(
//      (prev, curr) => prev + curr / x.length, initialValue );{
//      }
//  console.log(sumW([10,100,1000]));
 
 let j = [1, 2]

 let total = 0

 //Function way
 function myFunc (arr){
    let add = (a, b) => a + b;
    let res = arr.reduce(add)
    return res / arr.length
 }
 console.log(myFunc([10,100,40]));
 

//Shorthand
function myFunction( arr ) {
return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

//-------------------------------
let func2 = (a, n) => {
   return a.slice(-n)
}
//console.log(func2([1, 2, 3, 4, 5], 2));
//console.log(func2([1, 2, 3], 6));
//console.log(func2([1, 2, 3, 4, 5, 6, 7, 8], 3));

//-------------------------------
let func3 = (a, b) =>{
 return a.filter(newArr => newArr !== b)
}
//console.log(func3([1,2,3], 2));

//-------------------------------
//Return largest string item from array
let func4 = arr =>{
   return arr.sort(function(a,b){
      return b.length - a.length //we need get item's length, then sort it
   })[0]
} 
//Shorthand : return arr.reduce((a, b) => a.length <= b.length ? b : a)
console.log(func4(['help', 'me']));
console.log(func4(['I', 'need', 'candy']));

//-------------------------------
const nomes = ["helena","miguel", "alice", "heitor",  "laura",  "manuela"
]

const pessoas = [nomes.shift(), ...nomes.slice(2, 4) ] 
console.log(pessoas)// "helena"
console.log(nomes); // "miguel", "alice", "heitor",  "laura",  "manuela"
console.log(pessoas)// "helena", "alice", "heitor"

//-------------------------------
//Check if all array elements are equal
//use every() -> return true iss the condition met for all array elements
let func5 = arr => {
    return arr.every(element =>{
       if (element === arr[0]){
          return true
       }
    } )
   
}
//Shorthand
//  return new Set(arr).size === 1
//The Set object lets you store unique values of any type, whether primitive values or object references.

console.log(func5([true, true, true, true]));
console.log(func5(['test', 'test', 'test']));
console.log(func5([1,1,1,2]));
console.log(func5(['10',10,10,10]));