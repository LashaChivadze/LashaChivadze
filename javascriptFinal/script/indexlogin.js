const loginForm = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
};

// Function to display success message
const showSuccess = () => {
    const successElement = document.createElement("small");
    successElement.classList.add("success-text");
    successElement.innerText = "Login successful!";
    loginForm.appendChild(successElement);

    // Redirect or perform any action after successful login
    window.location.href = "/index2.html";
};

// Function to handle login form submission
const handleLogin = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const emailInput = document.getElementById("email");
    const password = passwordInput.value.trim();

    // Clearing previous error and success messages
    document.querySelectorAll(".form-group .error, .success-text").forEach(element => element.remove());

    // Getting stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists in local storage
    if (storedUserData) {
        const storedEmail = storedUserData.email;
        const storedPassword = storedUserData.password;

        // Checking if entered email and password match stored data
        if (emailInput.value.trim() !== storedEmail || password !== storedPassword) {
            showError(emailInput, "Please enter correct email and password");
        } else {
            // Successful login
            showSuccess();
        }
        } else {
            showError(emailInput, "No user data found. Please register.");
        }
};

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling login form submission event
loginForm.addEventListener("submit", handleLogin);
