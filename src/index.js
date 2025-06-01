

var load = gsap.timeline()
load.to(".shoesImg",{
    y:"-150%",
    duration:2,
    ease:Expo.easeInOut
})
// gsap.to(".shoesImg", {
//     backgroundColor: "#000",
//     scrollTrigger: {
//       trigger: "#main",
//       scroller: "body",
//       // markers: true,
//       start: "top -25%",
//       end: "top -70%",
//       scrub: 2,
//     },
//   });

//   document.querySelector(".redShoes").addEventListener("click",()=>{
//     alert("Hello")
//   } )