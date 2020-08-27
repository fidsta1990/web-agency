const navToggle = document.querySelector(".nav-toggle");
const logo = document.querySelector(".logo");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
