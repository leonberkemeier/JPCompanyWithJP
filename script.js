let navbar1 = document.getElementById("navbar1")
let navbar2 = document.getElementById("navbar2")

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar1.classList.remove("ScrollUp1")
    navbar1.classList.add("ScrollDown1")
    navbar2.classList.remove("ScrollUp2")
    navbar2.classList.add("ScrollDown2")
    console.log("up");
  } else {
    navbar1.classList.add("ScrollUp1")
    navbar1.classList.remove("ScrollDown1")
    navbar2.classList.add("ScrollUp2")
    navbar2.classList.remove("ScrollDown2")
    console.log("down")
  }
  prevScrollpos = currentScrollPos;
}



// var prevScrollposs = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;

// }