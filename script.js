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

var favIcon = document.querySelectorAll(".stauts");


// Modal 

document.addEventListener("DOMContentLoaded", function() {
  // Select the open and close buttons, modal, and overlay elements
  var openModalBtn = document.querySelector(".btn-open");
  var closeModalBtn = document.querySelector(".btn-close");
  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".overlay");

  // Check if the open button exists and add an event listener to it
  if (openModalBtn) {
    openModalBtn.addEventListener("click", function() {
      // Remove the "hidden" class from the modal and overlay to display them
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
  }
  // Check if the close button exists and add an event listener to it
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      // Add the "hidden" class to the modal and overlay to hide them
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });
  }
});


// Pass Verification

var user = document.querySelector("#userName").value;
var pass = document.querySelector("#pass").value;

function verifyLogin() {
  if (user === "Gopikrishnan1126" && pass === "12345678") { 
    alert("verified..!");
  } else {
    alert("failed..!!!");
  }
}