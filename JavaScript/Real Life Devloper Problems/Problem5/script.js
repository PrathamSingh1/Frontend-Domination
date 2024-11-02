// custom tooltip


document.querySelector("#hide").addEventListener("mouseenter", function(){
    document.querySelector(".tooltip").style.display = "initial";
})

document.querySelector("#hide").addEventListener("mouseleave", function(){
    document.querySelector(".tooltip").style.display = "none";
})