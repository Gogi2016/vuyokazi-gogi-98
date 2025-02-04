let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value
            .replace(/√\(/g, "Math.sqrt(")      // Replace √ with Math.sqrt
            .replace(/∛\(/g, "Math.cbrt(")      // Replace ∛ with Math.cbrt
            .replace(/\^/g, "**")               // Replace ^ with **
            .replace(/sin\(/g, "Math.sin(")     // Replace sin with Math.sin
            .replace(/cos\(/g, "Math.cos(")     // Replace cos with Math.cos
            .replace(/tan\(/g, "Math.tan(")     // Replace tan with Math.tan
            .replace(/log\(/g, "Math.log(");    // Replace log with Math.log

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error"; // If the expression is invalid, show "Error"
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
    }
});
