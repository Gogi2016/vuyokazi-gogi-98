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
            .replace(/Math.sqrt\(/g, "Math.sqrt(")
            .replace(/Math.pow\(/g, "Math.pow(")
            .replace(/Math.sin\(/g, "Math.sin(")
            .replace(/Math.cos\(/g, "Math.cos(")
            .replace(/Math.tan\(/g, "Math.tan(")
            .replace(/Math.log\(/g, "Math.log(");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// Add keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (/[\d+\-*/.%]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "s") {
        appendToDisplay("Math.sin(");
    } else if (key === "c") {
        appendToDisplay("Math.cos(");
    } else if (key === "t") {
        appendToDisplay("Math.tan(");
    } else if (key === "l") {
        appendToDisplay("Math.log(");
    } else if (key === "r") {
        appendToDisplay("Math.sqrt(");
    } else if (key === "^") {
        appendToDisplay("Math.pow(");
    }
});
