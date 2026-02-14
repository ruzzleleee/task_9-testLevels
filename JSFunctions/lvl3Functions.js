
let currentLevel = 1;
const MAX_LEVEL = 6;

const levelUpBtn = document.getElementById('levelUpBtn');
const levelBadge = document.getElementById('levelBadge');
const levelNumber = document.getElementById('levelNumber');
const cardTitle = document.getElementById('cardTitle');

// Level up button click event
levelUpBtn.addEventListener('click', function() {
    if (currentLevel < MAX_LEVEL) {

        currentLevel++;
        
        // Hide instruction text and show level status on first click
        const instructionText = document.getElementById('instructionText');
        const levelStatus = document.getElementById('levelStatus');
        instructionText.style.display = 'none';
        levelStatus.style.display = 'block';
        
        levelNumber.textContent = currentLevel;
        
        cardTitle.textContent = `JavaScript: Level Up`;
        
        const currentLevelText = document.getElementById('currentLevelText');
        currentLevelText.textContent = currentLevel;
        
        levelBadge.classList.add('badge-pulse');
        
        setTimeout(() => {
            levelBadge.classList.remove('badge-pulse');
        }, 500);
        
        updateBadgeColor(currentLevel);
        
    }
});

// Function to update badge color based on level
function updateBadgeColor(level) {
    levelBadge.style.backgroundColor = '#6D2932';
}


levelUpBtn.addEventListener('mousedown', function() {
    if (currentLevel < MAX_LEVEL) {
        this.style.transform = 'scale(0.98)';
    }
});

levelUpBtn.addEventListener('mouseup', function() {
    if (currentLevel < MAX_LEVEL) {
        this.style.transform = 'scale(1)';
    }
});

// Console log for debugging
console.log('Level 3 JavaScript loaded successfully!');
console.log(`Current Level: ${currentLevel}, Max Level: ${MAX_LEVEL}`);
