let coinCount = 0;


const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const coinCountDisplay = document.getElementById('coinCount');

// Plus button click event - Increase coins
plusBtn.addEventListener('click', function() {   

    coinCount++;
    
    updateCoinDisplay();
    animateCoinChange();
    updateMinusButton();
});

// Minus button click event - Decrease coins
minusBtn.addEventListener('click', function() {

    if (coinCount > 0) {
        coinCount--;

        updateCoinDisplay();
        animateCoinChange();
        updateMinusButton();
    }
});

// Function to update coin display
function updateCoinDisplay() {
    coinCountDisplay.textContent = coinCount;
}

// Function to update minus button state
function updateMinusButton() {
    if (coinCount === 0) {
        minusBtn.disabled = true;
        minusBtn.style.opacity = '0.5';
    } else {

        minusBtn.disabled = false;
        minusBtn.style.opacity = '1';
    }
}


function animateCoinChange() {
    coinCountDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        coinCountDisplay.style.transform = 'scale(1)';
    }, 200);
}


coinCountDisplay.style.transition = 'transform 0.2s ease';

updateMinusButton();

// Console log for debugging
console.log('Level 5 Coin Counter JavaScript loaded successfully!');
console.log(`Initial Coins: ${coinCount}`);
