// gsap.to("#box",{
//     x:600,
//     rotate:360,
//     duration:2,
//     backgroundColor:"blue",
//     delay:1
// })


// gsap.from("#box",{
//     x:600,
//     rotate:360,
//     duration:2,
//     backgroundColor:"blue",
//     delay:1
// })


        // TimeLine

var tl = gsap.timeline()

tl.to("#box1",{
    x:600,
    rotate:360,
    scale:0.5,
    duration:3,
    delay:1,
})

tl.to("#box2",{
    x:600,
    rotate:360,
    scale:0.5,
    duration:3,
})

tl.to("#box3",{
    x:600,
    rotate:360,
    scale:0.5,
    duration:3,
})