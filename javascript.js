let display = document.getElementById("display");
let resultDisplayed = false; // Track if the result was displayed
let lastAnswer = null; // Variable to store the last answer

function appendToDisplay(value) {
    // If the result was already displayed, clear the display first
    if (resultDisplayed) {
        display.value = "";
        resultDisplayed = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    resultDisplayed = false; // Reset the result flag
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    resultDisplayed = false; // Reset the result flag when editing
}

function calculate() {
    try {
        let expression = display.value
            .replace(/√\(/g, "Math.sqrt(")      
            .replace(/∛\(/g, "Math.cbrt(")     
            .replace(/\^/g, "**")           
            .replace(/sin\(/g, "Math.sin(")   
            .replace(/cos\(/g, "Math.cos(")
            .replace(/tan\(/g, "Math.tan(")  
            .replace(/log\(/g, "Math.log("); 

        lastAnswer = eval(expression); // Store the result as the last answer
        display.value = lastAnswer; // Display the result
        resultDisplayed = true; // Set the flag to true when the result is shown
    } catch (error) {
        display.value = "Error"; // If the expression is invalid, show "Error"
        resultDisplayed = false; // Reset the flag in case of error
    }
}

// Function to append the last answer when the "ANS" button is clicked
function appendLastAnswer() {
    if (lastAnswer !== null) {
        appendToDisplay(lastAnswer); // Append the last answer to the display
    }
}

// Add keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (key === "(" || key === ")") {
        appendToDisplay(key); // Append opening/closing parentheses
    } else if (/[\d+\-*/.%]/.test(key)) {
        appendToDisplay(key); // Append numbers and operators
    } else if (key === "Enter") {
        calculate(); // Calculate the result
    } else if (key === "Backspace") {
        deleteLast(); // Delete the last character
    } else if (key === "Escape") {
        clearDisplay(); // Clear the display
    } else if (key === "s") {
        appendToDisplay("sin("); // Insert sin
    } else if (key === "c") {
        appendToDisplay("cos("); // Insert cos
    } else if (key === "t") {
        appendToDisplay("tan("); // Insert tan
    } else if (key === "l") {
        appendToDisplay("log("); // Insert log
    } else if (key === "r") {
        appendToDisplay("√("); // Insert sqrt
    } else if (key === "^") {
        appendToDisplay("^"); // Insert exponentiation
    } else if (key === "b") {
        appendToDisplay("∛("); // Insert cube root
    } else if (key === "a") {
        appendLastAnswer(); // Append the last answer
    }
});
