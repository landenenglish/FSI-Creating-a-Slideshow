const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

// golbal variables
let unfilledBubble = '○';
let filledBubble = '●';

let image = document.querySelector('.image');
let nextButton = document.querySelector('.next');
let previousButton = document.querySelector('.previous');

let bubbleButtons = document.querySelectorAll('.bubble');

let selectedIndex = 0;

image.src = images[selectedIndex];
bubbleButtons[selectedIndex].textContent = filledBubble

nextButton.addEventListener('click', changeImage(direction = 'next'));
previousButton.addEventListener('click', changeImage(direction = 'previous'));

setInterval(changeImage(direction = 'next'), 3000);

function changeImage(direction) {
    return function() {
        if (direction === 'next') {
            selectedIndex++;
            if (selectedIndex > images.length - 1) {
                selectedIndex = 0;
            }
        } else if (direction === 'previous') {
            selectedIndex--;
            if (selectedIndex < 0) {
                selectedIndex = images.length - 1;
            }
        }
        image.src = images[selectedIndex];
        for (let i = 0; i < bubbleButtons.length; i++) {
            bubbleButtons[i].textContent = unfilledBubble;
        }
        bubbleButtons[selectedIndex].textContent = filledBubble;
    }
}
    

// jump to image when you click on a bubble
for (let i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', function() {
        selectedIndex = i;
        image.src = images[selectedIndex];
        for (let i = 0; i < bubbleButtons.length; i++) {
            bubbleButtons[i].textContent = unfilledBubble;
        }
        bubbleButtons[selectedIndex].textContent = filledBubble;
    });
}
