// // this call apply bind
// // this keyword js mein one of the most suspenseful keyword hota hai
// // keyword ka matlab hota hai aisa word jiska koi matlab ho programming language mein

// // this ki value baar baar badal sakti hai alag alag conditions mein, saari conditons ko seekh jaao to this ko samajh jaaoge

// // global - window
// // console.log(this);


// // // function - window
// // function abcd(){
// //     console.log(this);
// // }
// // abcd();


// // // method - object
// // var obj = {
// //     name: function(){
// //         console.log(this);
// //     }
// // }
// // obj.name();


// // // function inside method (es5) - window
// // var obj2 = {
// //     sayName: function(){
// //         function childfnc(){
// //             console.log(this);
// //         }
// //         childfnc();
// //     }
// // }
// // obj2.sayName();

// // // function inside method (es6) - object
// // var obj3 = {
// //     sayName: function(){
// //         const child = ()=>{
// //             console.log(this);
// //         }
// //         child();
// //     }
// // }
// // obj3.sayName();


// // // constructor fun mein this ki value - new blank object
// // function add(){
// //     console.log(this);
// // }
// // const ans = new add();


// // // event listener mein this ki value - that element jispar event listener laga ho

// // document.querySelector("button")
// // .addEventListener("click", function(){
// //     console.log(this);
// // })











// // // call apply bind 
// // // ye teen tareeke hai function ko call karne ke kisi object ko this maan kar

// // // call -> here first value refer to this then you will give parameters normally.
// // const obj = {
// //     name: "harsh"
// // }
// // function abcd(a,b,c){
// //     console.log(this);
// // }
// // abcd.call(obj,1,2,3)


// // // apply -> here first value refer to this then you will give parameters in the form of array.
// // const obj1 = {
// //     name: "harsh"
// // }
// // function abcd(a,b,c){
// //     console.log(this,a,b,c);
// // }
// // abcd.apply(obj1,[1,2,3])

// // // bind -> ye call ki tarah hi hota hai par ye function ko chalata nhi hai ye ek function deta hai jisko tum baad me chala sakte ho 

// // const obj2 = {
// //     name: "harsh"
// // }
// // function abcd(a,b,c){
// //     console.log(this,a,b,c);
// // }
// // const baadmechalanekeliyefnc = abcd.bind(obj2);
// // baadmechalanekeliyefnc();












// // Prototypal Inheritance


// // hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mein di gyi thi wo milti hai saugaat mein.

// // ek function jo ki this ka upyog kar raha ho and new ke dwaara naye naye objects bana kar deta ho aise function ko constructor function kahte hai

// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function(){
//     console.log(this.name);
// }
// const human1 = new makeHuman("harsh", 25);
// const human2 = new makeHuman("harshita", 34);

// // aisa koi bhi function jismein aap this ka upyog kar rhe ho aur us function ko call karte waqt aap new ka upyog karein, to new ka matlab waha par ek blank object ho jaata hai






// // closures

// // ek function jo return kare doosra function, aur use kare parent function ka koi variable 

// function abcd(){
//     var a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// var ans = abcd();
// ans();







// // event delegation = jab aap event listener se kai saare different elements ke events ko handle kar sake 
// // event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different task karao 

// events -> click, dblclick, mouseover, input

// var parent = document.querySelector('#parent');

// parent.addEventListener("click", function(details){
//     if(details.target.id === "play"){
//         console.log("play song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("pause song");
//     }
// })









// hofs - higher order functions
// aisa koi function jo ki ek function ko parameter mein accept karle and/ or ek function ko return karde

// var arr = [1,2,3,4,5,6];

// arr.forEach(function(){})











// error handling like pro - try catch

// function divide(a,b){
//     try{
//         if(b === 0){
//             throw Error("koi gadbad hui");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// divide(12,0);











// custom events

// how ->
// make event 
// attach event to some dom element 
// dispatch that event from that dom element in which you attached the event

const yourevent = new Event("gharjaao");
document.querySelector("button")
.addEventListener("gharjaao", function(){
    alert("jaa rha hu");
})

document.querySelector("button").dispatchEvent(yourevent);