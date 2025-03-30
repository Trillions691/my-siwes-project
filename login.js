document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login-form");
    const registerForm = document.querySelector("#register-form");
    const showRegister = document.querySelector(".show-register");
    const showLogin = document.querySelector(".show-login");

    // Show Register Form
    showRegister.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Show Login Form
    showLogin.addEventListener("click", function (e) {
        e.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Login Validation
    document.querySelector(".login-btn").addEventListener("click", function (e) {
        e.preventDefault();
        validateLoginForm();
    });

    // Register Validation
    document.querySelector(".register-btn").addEventListener("click", function (e) {
        e.preventDefault();
        validateRegisterForm();
    });

    function validateLoginForm() {
        const email = document.querySelector("#login-form input[type='email']");
        const password = document.querySelector("#login-form input[type='password']");
        const errorMsg = document.querySelector("#login-form .error-message");
        let isValid = true;

        if (email.value.trim() === "") {
            email.style.border = "2px solid red";
            isValid = false;
        } else {
            email.style.border = "1px solid #ccc";
        }

        if (password.value.trim() === "") {
            password.style.border = "2px solid red";
            isValid = false;
        } else {
            password.style.border = "1px solid #ccc";
        }

        errorMsg.textContent = isValid ? "" : "Please fill in all required fields.";
    }

    function validateRegisterForm() {
        const fullName = document.querySelector("#register-form input[type='text']");
        const email = document.querySelector("#register-form input[type='email']");
        const password = document.querySelector("#register-form input[type='password']");
        const confirmPassword = document.querySelector("#register-form input[type='password']:nth-of-type(2)");
        const errorMsg = document.querySelector("#register-form .error-message");
        let isValid = true;

        if (fullName.value.trim() === "") {
            fullName.style.border = "2px solid red";
            isValid = false;
        } else {
            fullName.style.border = "1px solid #ccc";
        }

        if (email.value.trim() === "") {
            email.style.border = "2px solid red";
            isValid = false;
        } else {
            email.style.border = "1px solid #ccc";
        }

        if (password.value.trim() === "") {
            password.style.border = "2px solid red";
            isValid = false;
        } else {
            password.style.border = "1px solid #ccc";
        }

        if (confirmPassword.value.trim() === "") {
            confirmPassword.style.border = "2px solid red";
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            confirmPassword.style.border = "2px solid red";
            errorMsg.textContent = "Passwords do not match.";
            return;
        } else {
            confirmPassword.style.border = "1px solid #ccc";
        }

        errorMsg.textContent = isValid ? "" : "Please fill in all required fields.";
    }
});

document.getElementById("login-btn").addEventListener("click", function () {
    // Redirect to dashboard.html (Change this to your actual dashboard file)
    window.location.href = "dash.html";
});