'use strict';

// Get DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector(".book");
const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2")
];

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
const maxLocation = papers.length + 1;

// Set initial z-index for papers
papers.forEach((paper, index) => {
    paper.style.zIndex = papers.length - index;
});


function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtEnd) {
    if (isAtEnd) {
        book.style.transform = "translateX(100%)";
    } else {
        book.style.transform = "translateX(0%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) {
            openBook();
        }

        papers[currentLocation - 1].classList.add("flipped");
        papers[currentLocation - 1].style.zIndex = currentLocation;

        if (currentLocation === papers.length) {
            closeBook(true);
        }

        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;

        if (currentLocation === 1) {
            closeBook(false);
        }

        papers[currentLocation - 1].classList.remove("flipped");
        papers[currentLocation - 1].style.zIndex = papers.length - (currentLocation - 1);

        if (currentLocation === papers.length) {
            openBook();
        }
    }
}

// Original button functionality
const actionButton = document.getElementById('action-button');
const aboutTextElement = document.querySelector('#p1 .back p');

if (actionButton && aboutTextElement) {
    actionButton.addEventListener('click', () => {
        aboutTextElement.textContent = 'You clicked the button! This text was changed by JavaScript.';
        aboutTextElement.style.color = 'var(--secondary-color)';
        aboutTextElement.style.fontWeight = 'bold';
    });
}
