const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

// Default regex patterns and validation options
const defaultOptions = {
  emailPattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  phonePattern: /^\d{10}$/,
  passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  passwordOptions: {
    length: 8,
    uppercase: 1,
    lowercase: 1,
    number: 1,
  },
};

let options = Object.assign({}, defaultOptions);

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
  } else if (!options.emailPattern.test(emailInput.value.trim())) {
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
  } else if (!validatePasswordStrength(passwordInput.value.trim())) {
    setError(
      passwordInput,
      `Password must be at least ${options.passwordOptions.length} characters long, contain at least ${options.passwordOptions.uppercase} uppercase letter(s), ${options.passwordOptions.lowercase} lowercase letter(s), and ${options.passwordOptions.number} number(s)`
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
  } else if (!options.phonePattern.test(phoneInput.value.trim())) {
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

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    form.submit();
  }
});
