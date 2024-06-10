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



var typingEffect = new Typed (".multiText",{
    strings:["Goal","Guide","Future"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 300,
    backDelay: 1500,
});


const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
    rotateElement(e,card);
});

function rotateElement(event, element){
    //where is teh mouse

    const x = event.clientX;
    const y = event.clientY;
    // console.log(x,y)


    //where the middle of card

    //keep in MIND THIS IS ONLY FROM THE MIDDLE OF TEH SCREEN NOT THE CARD

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight /2;
    // console.log(middleX)


    // offset from mouse to middle of card

    const offsetX = ((x - middleX)) ;
    const offsetY = ((y - middleY));
    // console.log(offsetX,offsetY)

    const ratioOSX = ((x - middleX) / middleX)*15;
    const ratioOSY = ((y - middleY) / middleY)*15;
    // console.log(ratioOSX, ratioOSY);

    //lets rotatae
    element.style.setProperty("--rotateY", ratioOSX + "deg");
    element.style.setProperty("--rotateX", -1 * ratioOSY + "deg");
}
// alert("hi")

const p1 = document.getElementById("pillar1");
const p2 = document.getElementById("pillar2");
const p3 = document.getElementById("pillar3");

const b1 = document.getElementById("bullet1");
const b2 = document.getElementById("bullet2");
const b3 = document.getElementById("bullet3");

p1.addEventListener("click", () =>{
  b1.classList.toggle("show-bullet");
  b2.classList.remove("show-bullet");
  b3.classList.remove("show-bullet");
});

p2.addEventListener("click", () =>{
  b1.classList.remove("show-bullet");
  b2.classList.toggle("show-bullet");
  b3.classList.remove("show-bullet");
});

p3.addEventListener("click", () =>{
  b1.classList.remove("show-bullet");
  b2.classList.remove("show-bullet");
  b3.classList.toggle("show-bullet");
});

const q1 = document.getElementById("qh1");
const qb1 = document.getElementById("qb1");

q1.addEventListener("click", () =>{
  qb1.classList.toggle("show-question");
  
});



var coll = document.getElementsByClassName("collapsible");
let list = document.querySelectorAll("collapsible")
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {

        
        this.classList.toggle("active");
        
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
      
    };
