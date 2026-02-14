
const heroNameInput = document.getElementById('heroName');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const userNameSpan = document.getElementById('userName');

// Submit button click event
submitBtn.addEventListener('click', function() {

    const nameValue = heroNameInput.value.trim();

    if (nameValue === '') {
        showError();
    } else {
        showSuccess(nameValue);
    }
});

// Allow Enter key to submit
heroNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});

// Clear messages when user starts typing
heroNameInput.addEventListener('input', function() {

    heroNameInput.classList.remove('is-invalid', 'is-valid');
    
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');
});

// Function to show error state
function showError() {

    heroNameInput.classList.add('is-invalid');
    heroNameInput.classList.remove('is-valid');
    
    errorMessage.classList.add('show');

    successMessage.classList.remove('show');
}

// Function to show success state
function showSuccess(name) {

    heroNameInput.classList.add('is-valid');
    heroNameInput.classList.remove('is-invalid');
    
    userNameSpan.textContent = name;
    
    successMessage.classList.add('show');
    
    errorMessage.classList.remove('show');
}

// Console log for debugging
console.log('Level 4 Form Validation JavaScript loaded successfully!');
