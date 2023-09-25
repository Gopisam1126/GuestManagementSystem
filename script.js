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