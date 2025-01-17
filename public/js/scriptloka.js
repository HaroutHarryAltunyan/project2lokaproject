// Console log to verify JavaScript connection
console.log("Hello World");

// Toggle mobile menu (burger icon)
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarBasicExample');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// Toggle 'More' dropdown inside the mobile menu
const moreDropdownContainer = document.querySelector('#moreDropdownContainer');
const moreLink = document.querySelector('#moreDropdown');

// Add event listener to "More" to toggle dropdown
moreLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior
    moreDropdownContainer.classList.toggle('is-active'); // Toggle dropdown visibility
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.querySelector('#burger');
    const navbarMenu = document.querySelector('#navbarBasicExample');
    if (burgerIcon && navbarMenu) {
      burgerIcon.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
      });
    }
  });

  console.log("Burger Icon:", burgerIcon);
console.log("Navbar Menu:", navbarMenu);