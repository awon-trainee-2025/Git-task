// This is to trigger burger menu in mobile
const overlayPage = document.querySelector(".overlay-page");
const burgerMenu = document.querySelector(".burger");
const links = document.querySelector(".links");

burgerMenu.addEventListener("click", () => {
  links.classList.toggle("active");
  overlayPage.classList.toggle("active");
});

links.childNodes.forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("active");
    overlayPage.classList.remove("active");
  });
});
