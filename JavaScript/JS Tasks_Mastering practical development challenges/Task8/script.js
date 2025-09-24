let input = document.querySelector("input");


let data = [
    {name: "harsh", src: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshita", src: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshika", src: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "shyam", src: "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]



let pers = "";
data.forEach(function(elem){
        pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    let matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })

    let newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector(".people").innerHTML = newusers;

})