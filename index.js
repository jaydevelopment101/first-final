const hamburgerBtn = document.querySelector(".nav__link");
const hamburgerExit = document.querySelector(".hamburger__exit");
const navElement = document.querySelector(".nav");

hamburgerBtn.addEventListener("click", () => {
  navElement.classList.add("open");
});

hamburgerExit.addEventListener("click", () => {
  navElement.classList.remove("open");
});
