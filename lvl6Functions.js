// Level 6 - Conditionals: Pick the Correct Door

// Define the correct door
const CORRECT_DOOR = 1;

// Get DOM elements
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const restartBtn = document.getElementById('restartBtn');

// Door 1 click event
door1.addEventListener('click', function() {
    checkDoor(1);
});
door2.addEventListener('click', function() {
    checkDoor(2);
});
door3.addEventListener('click', function() {
    checkDoor(3);
});

// Function to check if the selected door is correct
function checkDoor(doorNumber) {
    if (doorNumber === CORRECT_DOOR) {
        showSuccess();
    } else {
        showError();
    }
    disableDoors();
}

// Function to show success message
function showSuccess() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'flex';
    successMessage.style.animation = 'slideIn 0.3s ease';
}

// Function to show error message
function showError() {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'flex';
    errorMessage.style.animation = 'slideIn 0.3s ease';
}

// Function to disable all doors
function disableDoors() {
    door1.disabled = true;
    door2.disabled = true;
    door3.disabled = true;
}

// Function to enable all doors
function enableDoors() {
    door1.disabled = false;
    door2.disabled = false;
    door3.disabled = false;
}

// Function to reset the game
function resetGame() {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    enableDoors();
}

// Restart button click event - redirects to level 1
restartBtn.addEventListener('click', function() {
    window.location.href = 'lvl_3.html';
});

// Add CSS animation for message entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Console log for debugging
console.log('Level 6 Conditionals JavaScript loaded successfully!');
console.log(`Correct door is: Door ${CORRECT_DOOR}`);