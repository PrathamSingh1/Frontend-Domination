// ASYNC JS
// kahaani suno jubaani suno

// aisa koi bhi code jismein kuchh time lagta hai, js mein use by default in most cases async code maan kar side stack mein daal diya jaata hai

// settimeout - settimeout ka code kuchh der baad chalta hai


// console.log("hey 1");
// console.log("hey 2");
// setTimeout(function(){
//     console.log("hey 3");
// }, 1000)
// console.log("hey 4");

// setinterval - set interval ka code kuchh der baad chalta hai baar baar ek particular interval time mein


// setInterval(function(){
//     console.log("hey 1");
// }, 1000)

// var count = 1;
// const humarainterval = setInterval(function(){
//     count++;
//     console.log(count);
//     if(count === 3) clearInterval(humarainterval);
// }, 1000)


// Fetch API - ye kisi aur url (API) par jaa kar kuchh data laayega ya deta humaare pass se us url par lekar jaayega
// kyuki ye internet par jaayega aut fir data ko lekar aayega to ismein time lagta hai to by default hi js mein fetch ko async banaaaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se ab aisa ho skta hai us url ki website slow ho, to data laane mein time lage aur agar fetch synchronous hota to uske baad ka code tab tak nahi chalta jab tak uska data nahi aajata, which is a big problem, poora code atak sakta tha.

// fetch(`https://randomuser.me/api/`)
// // .then(raw => console.log(raw));   // blob format
// .then(raw => raw.json())
// .then(result => console.log(result.results[0].name.first))


// Axios (or other HTTP libraries) - ye bhi wahi karega jo ki Fetch API karta hai bas ye thoda jaada developer friendly hai

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0].name.first))



// promise - ye janaab ke andar jo code likhoge wo apana kaam karega aur ye khud side stack mein chale jaayege us code ko lekar aur jab andar se code ko resolve kiya jaayega tab ye chalenge

// promises kya hai?
// kuchh code socho man mein, jo ki async code ho, matlab ki ye side stack mein jaayega aur baad mei chalega main stack ke, ab ye socho ki aapne is code ko likha hai to iska answer kabhi aayega aur aisa bhi ho sakta hai kis answer naa aaye, promises kya hai aisa samjho ki aap promise ke andar koi bhi async code likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai and wo parchi par by default likha hota hai waiting, parchi par do events hote hai mainly ek event ka naam hai then aur ek event ka naam hai catch, agar aapka data aagaya to parchi pe resolve likh jaayega waiting ki jagah and then chalega aur agar data mein dikkat aayi to catch chalega and waiting ki jagah rejected likha jaayega



// const parchi = new Promise(function(resolve, reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result =>{
//         if(result.results[0].gender === "male") resolve();
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("hara button daba");
// })
// .catch(function(){
//     console.log("laal button daba");
// })


// ye upper ke sabhi use hi tab kiye jaate hai jab aapko kuchh aisa karna ho jismein time lagega



// Callbacks
// callback kuchh bhi nhi ek function hai jise pass kiya gaya ho kisi aur function mein aut jab wo function chale to aap us pass kiye gaye callback function ko chala paayege

// callback pahli cheej to ek function hai, app is function me wo sab likhdo jo aapko chalaana ho jab answer aajaye, aur ise tab chalao jab aapka async code chal chuka ho

// users ka data mangaao and jab data aajaye to us data ke name, gender and email ko print karo



// function getData(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result)
//     })
// }

// getData("https://randomuser.me/api", function(result ){
//     console.log(result.results[0].name.first, result.results[0].gender, result.results[0].email)
// })



// Promises - already covered

// Async/Await - koi bhi function banaalo and uske andar jo man mein aaye wo async code likhdo, ab jab aap async likhte ho to baad waali line pahele chal jaati hai kyuki asyn side stack pe hota hai aur baad waali line agar async ke basis par hui to aapka code fail ho jaayega, wo isliye kyuki aapka code depend karta hai async code par jo ki baad mein chalega sync code chalne ke baad 

// with async await aap async code aise likh skte ho jaise ki aap normal synchronous code likh rahe ho 

// async function abcd(){
//     let a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json();
//     console.log(a);
// }

// abcd();


// Event Loop -> ye check karta rahta hai ki main stack khaali hai kya again again check karta rhta hai taki side stack ko process me la sake


// Callbacks vs Promises vs Async/Await
// ek url se data lekar aao and usey console par show karo via callback 

// function dataFetcher(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {

//     })
// }

// dataFetcher("https://randomuser.me/api/", function(result){
//     console.log(result);
// })




// function dataFetcher(url){
//     const parchi = new Promise(function(resolve, reject){
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             resolve(result);
//         })
//     })
//     return parchi;
// }

// dataFetcher("https://randomuser.me/api/")
// .then(function(result){
//     console.log(result);
// })




// async function dataFetcher(url){
//     let data = await fetch(url);
//     let result = await data.json();
//     return result;
// }

// async function hh(){
//     const data = await dataFetcher(`https://randomuser.me/api/`);
//     console.log(data);
// }

// hh();



// Generators -> aap wxecution ko pause kr skte ho and bol sakte ho ki ab agla step karo aur fir aap agla step jab bhi chahiye wo step kar skte ho 


// function* printNums(){
//     console.log("started");
//     yield 1;
//     console.log("pehla chal chuka");
//     yield 2;
//     console.log("dusra chal chuka");
//     yield 3;
// }
// const ans = printNums();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);



// Web Workers

// usually humaara poora code single thread par chalta hai par kai baar kuchh bade calculations perform karne pad jaate hai jiski wajah se aapka main thread busy hojaata hai yaa fir wo kaafi jaada loaded hojaata hai aur aapke baaki tasks ki performance kam ho jaati hai

// is situation ko achhe se handle karne ke liye we use web workers, aap chaaho to apna koi task web worker ko bhej sakte ho jo ki doosre thread mein usko perform karega and aapka main thread efficiently baaki cheejo ko handle kar paayega

// aap apni main js file se data send kr skte ho and aap worker file data accept karoge and jo perform karna hai karoge and waha se data waapas main file bhejoge and main file mein waapaas accept karoge

var nums = Array.from({length: 1000}, (_,b)=>b+1);
const worker = new Worker('worker.js')

worker.postMessage(nums);

worker.onmessage = function(data){
    console.log(data.data);
} 