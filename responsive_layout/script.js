// Gets the menu and navigation menu so they can be controlled with JavaScript
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Opens and closes the mobile menu when the button is clicked
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});
