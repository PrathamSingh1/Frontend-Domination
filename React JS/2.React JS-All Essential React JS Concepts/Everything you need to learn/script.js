
// immutable vs mutable

// array, objects, destructuring, import and export
// map, filter, arrow function, (implicit return) , spread operator

// react js mein aapko ek state naam ki cheej milegi us bande ko aap mutate nahi kar sakte matlab ki directly uski value nahi hata ya jod sakte.

// aur ab jo padhaai shuru hogi wo isi baare main hogi ke state ko immutable way mein kaise update karein


// var state = [1,2,3,4];
// state.pop();     ❌

// var state = [1,2,3,4];
// state = [1,2]       ✔

// var state = [1,2,3,4,5];
// var copy = [...state];
// copy.pop();     ✔

// var state = {name: "harsh", age: 24};

// var copy = {...state};
// copy.name = "harshita";

// state = copy;      ✔







// arrays
//[1,2,3,3.1,"hello"]

// var arr = [1,2,3,4];
// var arr2 = arr;

// arr2.pop();
// console.log(arr);






// destructuring

// var obj = {name: "harsh", age: 25, email: "something@gmail.com"};
// const {email} = obj;




// var obj = {
//     name: "string",
//     social: {
//         facebook: {
//             fist: "firstAccount",
//             sec: "secondAccount",
//         },
//     },
// };

// const {sec} = obj.social.facebook;




// how to get the value from array.

// var arr = [12, function(){}, 13];

// var [first,,third] = arr;
// console.log(third);



//---------------------------------------------

//          Import Exoprt

// hum log component banaate hai, component matlab page ka hissa, navbar, sidebar, cart, landing, second page, ab dikkat ye aati hai ki har hissa alag alag component hai aur components ko  hum log alag alag files mein rakhte hain, to inko last mein jodna bhi padta hai, jodne ke liye use hota hai import and export 



// function Cart(){

// }

// export default Cart;

// // where you want to import you have to write the below line of code.

// import Cart from "./script"

// // other way of export.

// export function Cart(){
    
// }

// export function Car(){

// }

// // here you can use this line to import

// import {Cart, Car} from "./script"






//------------------------------------------

//          Arrow Functions


// const abcd = ()=>{
//     console.log("abcd");
// }
// abcd();

// arrow function with one parameter

// const Pratham = (val)=> {
//     console.log(val);
// }

// Pratham(12);



// arrow function with implicit return

// const abcd = ()=> 15;

// console.log(abcd());

// if you want to return a object.

// const abcd = ()=> ({name: 'abcd', age: 12});

// console.log(abcd())










//---------------------------------------


//           Map And Filter
// map and filter - dono hi array pe chalte hai, aur dono kaa kaam hai array par kuchh perform karna and "ek naya array return karna"

// map - har element par kuchh karo and naye array mein rakho
// foreach ke andar aata hai function and function ke andar aata hai value
// map ke andar return karne ke wajah se hi elements naye array mein place hote hain



// var arr = [1,2,3,4,5];
// const ans = arr.map(val =>{
//     return val*2;
// })
// console.log(ans);






// ek array hai saare numbers jo ki 5 se bade ho unme 5 jod dena and baaki numbers waise ke waise return karo naye array mein

// var state = [11,2,13,4,5,6,7,8,9,10];
// const ans = state.map(elem => elem>5 ? elem+5 : elem)
// console.log(ans);




// map filter mein ek hi farak hai, map saare bande lautata hai matlab ki count kam nahi hoga, filter bando ko kam kar skta hai

// jab original array ka size kam naa hona ho waha map use hota hai.

// jab original array ka size kam karna ho waha filter use hota hai



// ek array mein se saare wo nums hata do jo ki 5 se chhote hai

// var arr = [1,2,3,4,5,6];
// const ans = arr.filter(elem => elem>4)
// console.log(ans)


var arr = [
    {name: "harsh", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "harshika", gender: "female"},
]

const ans = arr.filter(elem => elem.gender === "male")
console.log(ans);