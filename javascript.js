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
        // Replace function-like inputs with actual JavaScript functions
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
