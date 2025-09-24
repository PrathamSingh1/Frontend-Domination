// blocking scroll until something happens

document.querySelector("#hide")
.addEventListener("click", function(){
    document.body.classList.toggle("overflow-hidden");
});