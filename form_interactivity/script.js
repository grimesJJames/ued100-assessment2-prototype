// Gets the menu and navigation menu so they can be controlled with JavaScript
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Opens and closes the mobile menu when the button is clicked
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// Gets the login form and the area where the login messages will appear
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

//Assesses the login form before allowing it to submit
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reads the values entered by the user
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const mfa = document.getElementById("mfa").checked;

  // Ensures email and password have been entered
  if (email === "" || password === "") {
    loginMessage.textContent = "Please enter both email and password.";
    loginMessage.style.color = "red";
    return;
  }

  // Makes sure the MFA checkbox has been ticked
  if (!mfa) {
    loginMessage.textContent = "Please confirm multi-factor authentication acknowledgment.";
    loginMessage.style.color = "red";
    return;
  }

  loginMessage.textContent = "Login successful. Redirecting to your dashboard...";
  loginMessage.style.color = "green";
  loginForm.reset();
});

// Displays a success massage if validation passes
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

// Checks the contact form before allowing it to submit
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reads the values typed into the form
  const name = document.getElementById("name").value.trim();
  const contactEmail = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("message").value.trim();

  // Makes sure all fields have been completed
  if (name === "" || contactEmail === "" || message === "") {
    contactMessage.textContent = "Please complete all contact form fields.";
    contactMessage.style.color = "red";
    return;
  }

  // Shows a success message if the form is completed correctly
  contactMessage.textContent = "Your message has been sent successfully.";
  contactMessage.style.color = "green";
  contactForm.reset();
});
