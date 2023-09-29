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

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden")
}

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// openModalBtn.addEventListener("click", openModal);

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// }

// closeModalBtn.addEventListener("click", closeModal);