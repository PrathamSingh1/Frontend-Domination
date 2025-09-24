let txtarea = document.querySelector("textarea");
let counter = document.querySelector("#counter");



txtarea.addEventListener("input", function(){
    counter.textContent = txtarea.value.length;
})