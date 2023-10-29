//import { filmy } from "./film";

const burMenu = document.getElementById("menu-tlacitko");

burMenu.addEventListener("click", () => {
  const menu = document.getElementById("menu-polozky");
  menu.classList.toggle("show");
  const krizek = document.querySelector(".fa-bars");
  krizek.classList.toggle("fa-xmark");
});

// filmy.forEach((film) => {
    
// });