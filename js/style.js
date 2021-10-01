const model = () => {
  document.getElementById("model").classList.toggle("modelToggle");
};
const hiddenModel = () => {
  document.getElementById("model").classList.remove("modelToggle");
};
const modelContainer = document.querySelector(".model-container");
modelContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});

var btnMenu = document.querySelector(".mobile-menu-btn");
btnMenu.addEventListener("click", function () {
  document.querySelector("#header").classList.toggle("setHeight");
});

var menu = document.querySelector("#nav");
menu.addEventListener("click", function () {
  document.querySelector("#header").classList.remove("setHeight");
});
