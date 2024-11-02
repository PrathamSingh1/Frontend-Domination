// functions - js mein function normal programming language jaise nahi hai, iska matlab hai, yaha par js mein, functions banaane ke liye type nahi batana padta bas aapko function word likhna padega and aap usey koi naam deke bana skte ho.

// indepth - js mein functions first class functions ka darja diya gaya hai, jiska matlab hai, ki js mein functions ko value/variable ki tarah treat kiya ja skta hai.

// es5 and es6
//es5 - function statements, function expressions, anonymous function
//es6 - fat arrow function (have three types)
// a) basic fat arrow
// b) fat arrow with one param
// c) fat arrow with implicit return

// what is function - koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal sakte hain

function abcd(){
    // thing you want to do
}

// why we use function - to make our code reuseable.

// extras we should know - parameters and arguments.

function abcd(parameters){

}
abcd(arguments);


// prep for interview
function abcd(){
    // function statement
}

var abcd = function(){
    // function expression
}

// function(){
//     // anonymous function
// }

// fat arrow

// basic fat arrow
var a = () =>{};

//fat arrow with one parameter
var g = ab =>{}  // you can remove the fat when there is a single parameter.

g(12)

// implicit return
var abcd = ()=>"harsh";
var ans = abcd();


// return ka matlab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return functions ke andar lagta hai
// return; -- This will return undefined.

function abcd(){
    return 12;
}
var ans = abcd();