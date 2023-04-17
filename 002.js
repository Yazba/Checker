const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

// Regex patterns
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const phonePattern = /^\d{10}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// Function to validate the name field
function validateName() {
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
    return false;
  } else {
    setSuccess(nameInput);
    return true;
  }
}

// Function to validate the email field
function validateEmail() {
  if (emailInput.value.trim() === "") {
    setError(emailInput, "Email is required");
    return false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, "Invalid email format");
    return false;
  } else {
    setSuccess(emailInput);
    return true;
  }
}

// Function to validate the password field
function validatePassword() {
  if (passwordInput.value.trim() === "") {
    setError(passwordInput, "Password is required");
    return false;
  } else if (!passwordPattern.test(passwordInput.value.trim())) {
    setError(
      passwordInput,
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number"
    );
    return false;
  } else {
    setSuccess(passwordInput);
    return true;
  }
}

// Function to validate the phone field
function validatePhone() {
  if (phoneInput.value.trim() === "") {
    setError(phoneInput, "Phone number is required");
    return false;
  } else if (!phonePattern.test(phoneInput.value.trim())) {
    setError(phoneInput, "Invalid phone number format");
    return false;
  } else {
    setSuccess(phoneInput);
    return true;
  }
}

// Function to set error message
function setError(input, message) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error-message");

  input.classList.remove("success");
  input.classList.add("error");
  error.innerText = message;
}

// Function to set success message
function setSuccess(input) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error-message");

  input.classList.remove("error");
  input.classList.add("success");
  error.innerText = "";
}

// Event listeners for real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
phoneInput.addEventListener("input", validatePhone);

// Event listener
