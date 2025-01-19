console.log("Hello from scriptloka.js");

document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector('#burger');
  const navbarMenu = document.querySelector('#navbarBasicExample');
  
  if (burgerIcon && navbarMenu) {
    burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('is-active');
      navbarMenu.classList.toggle('is-active');
    });
  }
});


console.log('Script loaded.');

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event triggered.');

  // Navbar burger toggle
  const burger = document.getElementById('burger');
  const navbarMenu = document.getElementById('navbarBasicExample');

  console.log('Navbar burger element:', burger);
  console.log('Navbar menu element:', navbarMenu);

  if (burger && navbarMenu) {
    burger.addEventListener('click', () => {
      console.log('Navbar burger clicked.');
      navbarMenu.classList.toggle('is-active');
      console.log('Navbar menu class list after toggle:', navbarMenu.classList);
    });
  } else {
    console.log('Navbar burger or menu not found.');
  }

  // Log all navbar links
  const navbarLinks = document.querySelectorAll('.navbar-item');
  console.log('Navbar links found:', navbarLinks);

  navbarLinks.forEach((link, index) => {
    console.log(`Link ${index + 1}:`, link.href);
    link.addEventListener('click', (e) => {
      console.log(`Navbar link clicked: ${link.href}`);
    });
  });
});