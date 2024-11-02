// var h1 = document.querySelector("h1");
// h1.style.color = 'red';
// h1.style.fontFamily = 'Gilroy';

// var h1 = document.querySelector("h1");
// h1.classList.add('makeitred');   // for adding css class.
// h1.classList.remove('makeitred');   // for removing the css class.


//      Creating and Deleting Elements:

    // createElement()
    // appendChild()
    // removeChild()

// var h1 = document.createElement('h1');
// h1.textContent = "hey";
// h1.classList.add('makeitred');

// // kahaparrakhoge.appendChild()

// document.querySelector("body").appendChild(h1);  // to add in the body of html
// document.querySelector("body").removeChild(h1);  // to remove from the body  of html








// Event Handling:
    // addEventListener()


// Event Object


// jab bhi aap kisi element par kisi bhi parkaar ka koi action  karte ho to waha par event by default automatically raise hota hai ab agar aapne koi event listener nahi banaya hai to wo enent ignore krdiya jaata hai par agar aapne listener banaya hai us event par to wo event ignore nahi kiya jaayega balki uska listener chalega

// click 
// dblclick
// mouseover
// mouseleave


// var btn = document.querySelector("button");
// btn.addEventListener('mouseover', function(){
//    btn.textContent = "Starting...";
//    btn.style.backgroundColor = "red";
// });




// document.querySelector("body");
// addEventListener("mousemove", function(dets){
//   console.log(dets);
// });