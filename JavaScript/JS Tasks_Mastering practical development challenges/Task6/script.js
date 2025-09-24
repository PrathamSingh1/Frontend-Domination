let home = document.querySelector('#home');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');


let hometext = document.querySelector('#hometext');
let abouttext = document.querySelector('#abouttext');
let contacttext = document.querySelector('#contacttext');

hometext.style.display = 'block';

home.addEventListener("click", function(){
    saaretexthatao();
    hometext.style.display = "block";
    hometext.style.width = "50%";
})
about.addEventListener("click", function(){
    saaretexthatao();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})
contact.addEventListener("click", function(){
    saaretexthatao();
    contacttext.style.display = "block";
    contacttext.style.width = "50%";
})

function saaretexthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}



// efficient code of this from chatgpt

// var divs = document.querySelectorAll('.tab');
// var texts = document.querySelectorAll('h3');

// texts[0].style.display = "block";
// texts[0].style.width = "50%";

// divs.forEach(function (div, index) {
//     div.addEventListener("click", function(){
//         hideAllText();
//         texts[index].style.display = "block";
//         texts[index].style.width = "50%";
//     });
// });

// function hideAllText() {
//     texts.forEach(function (text){
//         text.style.display = "none";
//     });
// }
