var arrow = document.querySelector("#rightArw");
var loginLink = document.querySelector("#lgiLink");

loginLink.addEventListener("mouseover", () => {
    arrow.style.transform = "scaleX(2.2)";
    arrow.style.marginRight = "1.2rem";
});
loginLink.addEventListener("mouseout", () => {
    arrow.style.transform = "scaleX(1)";
    arrow.style.marginRight = "0rem";
});

// Side Navbar

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// sidebar Toggle

var sideBar = document.querySelector("#mySidebar");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    sideBar.style.width = "15rem";
  } else {
    sideBar.style.width = "0rem";
  }
}

var favIcon = document.querySelectorAll(".stauts");
