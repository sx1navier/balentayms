let noClickCount = 0;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const questionScreen = document.getElementById('questionScreen');
const successScreen = document.getElementById('successScreen');

const messages = [
    "Sure ka na? 🥺",
    "Baka may pag-asa pa boss..",
    "Maybe reconsider?",
    "Sige ka, Baka magsisi ka talaga!",
    "Just click Yes already!"
];

function handleNoClick() {
    noClickCount++;
    
    const scale = 1 + (Math.min(noClickCount, 5) * 0.2);
    yesButton.style.transform = `scale(${scale})`;
    
    if (noClickCount <= messages.length) {
        message.textContent = messages[noClickCount - 1];
    } else {
        message.textContent = messages[messages.length - 1];
    }

    // after 5 "No" clicks, navigate to the rejection page
    if (noClickCount >= 5) {
        setTimeout(() => {
            window.location.href = 'rejected.html';
        }, 350);
    }
}

function handleYesClick() {
    questionScreen.classList.remove('active');
    successScreen.classList.add('active');
}

noButton.addEventListener('click', handleNoClick);
yesButton.addEventListener('click', handleYesClick);
