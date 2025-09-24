// jab bhi forms ke saath deal karo yaad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload naa ho, nahito agar page reload hua to js nahi chalegi, kyuki js chal paaye se pahele hi page reload ho chuka hoga 

//              First Method

// var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// var h4 = document.querySelector("#error");

// form.addEventListener("submit", function(ev){
//     ev.preventDefault();
//     if(inp1.value === '' || inp2.value === ''){
//         h4.textContent = "error, some fields are blank";
//         h4.style.color = "red";
//     }
//     else{
//         h4.textContent = "";
//         h4.style.color = "black";
//     }
// })




//              Second Method



var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("#error");


form.addEventListener("submit", function(ev){
    ev.preventDefault();
    for(var i = 0; i<inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = "Error, some fields are blank";
            h4.style.color = "red";
            break;
        }
    }
})