 //Write a JavaScript function to check whether an `input` is an array or not;
 function isArray (input){
    if (toString.call(input) === "[object Array]")
    return true;
 return false;
}
let w3 = 'w3resource';
let w4 = [2, 4, 6];
let w5 = {
    name: "kek"
}
console.log(isArray(w3));
console.log(isArray(w4));
console.log(isArray(w5));

//-------------------------------------------------------------------------------------
// Find the maximum number of the array
function myFunc (a){
    a.sort()
    let index = a.length - 1;
    return a[index]
}
console.log(myFunc([1,2,3]));
console.log(myFunc([10,1000,100]));
console.log(myFunc([-10,-2,-11]));

//-------------------------------------------------------------------------------------
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction1(a, n){
    let y = n - 1
    return a[y]
}
console.log(myFunction1('abcd',1)); //Expected 'a'
//myFunction1('zyxbwpl',5) //Expected 'w'
//myFunction1('gfedcba',3) // Expected 'e'

//-------------------------------------------------------------------------------------
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
function myFunction2(a){
    return a.slice(3)
}
console.log(myFunction2('abcdefg'), myFunction2('1234'));

//-------------------------------------------------------------------------------------
// Write a function that takes a string as argument
// Extract the last 3 characters from the string

function att (t) {
    return t.slice(-3)
}
console.log(att("abcdefgh"), att('1234') ); 
// Expected 'efgh'

let packt = 'Packt'
console.log(packt.slice(-2));
// slice() aceita indice negativo

//-------------------------------------------------------------------------------------
// 
function myFunction3(str){
    return str.slice(0, 3)
}
console.log(myFunction3('abcdefg'));

//-------------------------------------------------------------------------------------
//Extract first half

let func1 = a => { return a.slice(a.length / 2)}
console.log("First half:", func1("abcdefgh"));
//--------------------------------------------------------
// Remove the last 3 characters of a
let func2 = a => { 
        return a.slice(0, -3)
}
console.log(func2("abcdefg")); 
console.log(func2("1234"));


//--------------------------------------------------------
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
let func3 = (a, n) => {
    const x = n - 1
    return a[x]
    //return a[n - 1]; shorthand
}
console.log(func3([1,2,3,4,5],3))  //Expected: 3  
console.log(func3([10,9,8,7,6],5)) //Expected: 6
console.log(func3([7,2,1,6,3],1))  //Expected: 7

//--------------------------------------------------------
//Write a function that takes two arguments
// return b percent of a

let func4 = (a, b) => {
    return a * b / 100
    // return b / 100 * a
}
console.log(func4(100, 50));
    