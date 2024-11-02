// undefined is a value -> ye value tab di jaati hai jab variable ko koi value naa mili ho, iska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, aap isey default value bhi kah skte ho

// not defined is an error 
// null is also a value -> this is a value which resolve like, not found 
// null is recieved when something is not found.

// array-> array matlab jab bhi aapko ek ya ek se jaada value ek saath rakhni ho 

// var users = ["harsh", "harshika", "harshita", "akansha", "nishi"];
// console.log(users[0]);



// how to loop an array
var arr = [1,2,3,4,5];
arr.forEach(function(val){
    console.log(val);
})

//  objets -> object ek tareeka hai jisse ki hum ek identity ki details ko ek sath rakh skte hai
// kai logo ka data = array
// ek bande ka kai saara data = object

var obj = {
    name: "harsh",
    age: 25,
    email: "kuchh@kuchh.com",
    contact: 1919191919
};   // one way to make object 

var obj2 = new Object();  // another way to make object


// synchronous and asynchronous js
// synchronous -> synchronous code mein code hamesha line by line chalta hai 

// asynchronous -> async code line by line nahi chalta, saara async code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dediya jaata hai.
