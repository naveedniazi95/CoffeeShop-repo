const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");

menuOpenBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenBtn.click());
});
