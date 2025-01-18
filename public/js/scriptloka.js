console.log("Hello from scriptloka.js");

document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector('#burger');
  const navbarMenu = document.querySelector('#navbarBasicExample');
  if (burgerIcon && navbarMenu) {
    burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active');
    });
  }
});