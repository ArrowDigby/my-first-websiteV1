/* -------------------- */
/* FILE: script.js      */
/* -------------------- */

// 'use strict'; is a good practice. It helps you write cleaner code by preventing you from using undeclared variables and catching common coding mistakes.
'use strict';

console.log('Script is connected! You can see this message in your browser\'s developer console.');
// The console is your best friend for debugging. You can open it in most browsers by pressing F12 or Ctrl+Shift+I.

/* --- DOM MANIPULATION --- */
// The Document Object Model (DOM) is the browser's representation of your HTML page. JavaScript can interact with the DOM to change content, style, and structure.

// 1. Select the HTML elements you want to work with. We use their IDs to find them.
const aboutTextElement = document.getElementById('about-text');
const actionButton = document.getElementById('action-button');

// 2. Add an "event listener" to the button.
// An event listener waits for a specific event (like a 'click') to happen on an element, and then runs a function when it does.
actionButton.addEventListener('click', () => {
    // 3. This is the function that runs when the button is clicked.
    // We can change the text content of the paragraph.
    aboutTextElement.textContent = 'You clicked the button! This text was changed by JavaScript.';

    // We can also change the CSS styles of the element.
    aboutTextElement.style.color = '#007bff';
    aboutTextElement.style.fontWeight = 'bold';
});


/* --- WHAT TO LEARN NEXT --- */

/* 1. JAVASCRIPT FUNDAMENTALS: Before going further, make sure you have a solid grasp of the basics.
   - Variables (let, const), Data Types (strings, numbers, booleans, arrays, objects).
   - Functions (how to write reusable blocks of code).
   - Loops and Conditionals (for, if/else - for making decisions in your code).
   RESOURCE: JavaScript.info is a fantastic, comprehensive tutorial: https://javascript.info/ */

/* 2. ASYNCHRONOUS JAVASCRIPT: This is how you make your website dynamic by loading data from external sources without freezing the page.
   - Learn how to use the Fetch API to get data from APIs (e.g., weather data, movie databases).
   - Key concepts: Promises, async/await.
   RESOURCE: MDN - Asynchronous JavaScript - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous */

/* 3. FRAMEWORKS (Advanced): Once you're very comfortable with HTML, CSS, and "vanilla" JavaScript, you might explore a framework like React, Vue, or Svelte. 
   - These are powerful tools that make building complex, interactive user interfaces much easier. Don't rush to this step! A solid foundation is the most important thing. */
