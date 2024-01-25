document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous errors
        clearErrors();

        // Get form inputs
        const cardNumber = document.getElementById("Card-number").value.trim();
        const cvv = document.getElementById("CVV").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();

        // Validate inputs
        if (!isValidCardNumber(cardNumber)) {
            showError("Card-number", "Invalid card number");
            return;
        }

        if (!isValidCVV(cvv)) {
            showError("CVV", "Invalid CVV");
            return;
        }

        if (!isValidPhone(phone)) {
            showError("phone", "Invalid phone number");
            return;
        }

        if (!isValidAddress(address)) {
            showError("address", "Invalid address");
            return;
        }

        // If all inputs are valid, store in local storage
        const payData = {
            cardNumber,
            cvv,
            phone,
            address,
        };

        localStorage.setItem("payData", JSON.stringify(payData));

        // Redirect to success page
        window.location.href = "/success.html";
    });

    function isValidCardNumber(cardNumber) {
        // Implement your card number validation logic
        // For example, you can check the length or use a regular expression
        return cardNumber.length === 16 && /^\d+$/.test(cardNumber);
    }

    function isValidCVV(cvv) {
        // Implement your CVV validation logic
        // For example, you can check the length or use a regular expression
        return /^\d{3}$/.test(cvv);
    }

    function isValidPhone(phone) {
        // Implement your phone number validation logic
        // For example, you can check the length or use a regular expression
        return /^\d{9,}$/.test(phone);
    }

    function isValidAddress(address) {
        // Implement your address validation logic
        // For example, you can check the length or specific characters
        return address.length > 0;
    }

    function showError(fieldName, errorMessage) {
        const errorElement = document.querySelector(`#${fieldName} + .error`);
        errorElement.textContent = errorMessage;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach((element) => (element.textContent = ""));
    }
});
