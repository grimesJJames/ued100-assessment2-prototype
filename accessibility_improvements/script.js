// Gets the menu and navigation menu so they can be controlled with JavaScript
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Opens and closes the mobile menu when the button is clicked
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");

  // Accessibility improvement: updates aria-expanded so screen readers know menu state
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
});


// Gets the login form and the area where the login messages will appear
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

// Assesses the login form before allowing it to submit
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reads the values entered by the user
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const mfaInput = document.getElementById("mfa");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const mfa = mfaInput.checked;

  // Reset previous error styles
  emailInput.style.borderColor = "";
  passwordInput.style.borderColor = "";

  // Ensures email and password have been entered
  if (email === "" || password === "") {
    loginMessage.textContent = "Please enter both email and password.";
    loginMessage.style.color = "red";

    // Highlights fields with errors
    emailInput.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    return;
  }

  // Validates email format using HTML5 built-in validation
  if (!emailInput.checkValidity()) {
    loginMessage.textContent = "Please enter a valid email address.";
    loginMessage.style.color = "red";
    emailInput.style.borderColor = "red";
    return;
  }

  // Password strength check (minimum length)
  if (password.length < 8) {
    loginMessage.textContent = "Password must be at least 8 characters.";
    loginMessage.style.color = "red";
    passwordInput.style.borderColor = "red";
    return;
  }

  // Makes sure the MFA checkbox has been ticked
  if (!mfa) {
    loginMessage.textContent = "Please confirm multi-factor authentication acknowledgment.";
    loginMessage.style.color = "red";
    return;
  }

  // Success message
  loginMessage.textContent = "Login successful. Redirecting to your dashboard...";
  loginMessage.style.color = "green";

  loginForm.reset();
});


// Displays a success message if validation passes
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

// Checks the contact form before allowing it to submit
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reads the values typed into the form
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const contactEmail = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Reset styles
  nameInput.style.borderColor = "";
  emailInput.style.borderColor = "";
  messageInput.style.borderColor = "";

  // Makes sure all fields have been completed
  if (name === "" || contactEmail === "" || message === "") {
    contactMessage.textContent = "Please complete all contact form fields.";
    contactMessage.style.color = "red";

    // Highlights missing fields
    if (name === "") nameInput.style.borderColor = "red";
    if (contactEmail === "") emailInput.style.borderColor = "red";
    if (message === "") messageInput.style.borderColor = "red";

    return;
  }

  // Validates email format
  if (!emailInput.checkValidity()) {
    contactMessage.textContent = "Please enter a valid email address.";
    contactMessage.style.color = "red";
    emailInput.style.borderColor = "red";
    return;
  }

  // Shows a success message if the form is completed correctly
  contactMessage.textContent = "Your message has been sent successfully.";
  contactMessage.style.color = "green";

  contactForm.reset();
});