let display = document.getElementById("display");
let resultDisplayed = false; 
let lastAnswer = null; 

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
    resultDisplayed = false; 
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    resultDisplayed = false; 
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

        lastAnswer = eval(expression); 
        display.value = lastAnswer; 
        resultDisplayed = true; 
    } catch (error) {
        display.value = "Error"; 
        resultDisplayed = false; 
    }
}

// Function to append the last answer when the "ANS" button is clicked
function appendLastAnswer() {
    if (lastAnswer !== null) {
        appendToDisplay(lastAnswer); 
    }
}

// Add keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (key === "(" || key === ")") {
        appendToDisplay(key); 
    } else if (/[\d+\-*/.%]/.test(key)) {
        appendToDisplay(key); 
    } else if (key === "Enter") {
        calculate(); 
    } else if (key === "Backspace") {
        deleteLast(); 
    } else if (key === "Escape") {
        clearDisplay(); 
    } else if (key === "s") {
        appendToDisplay("sin("); 
    } else if (key === "c") {
        appendToDisplay("cos("); 
    } else if (key === "t") {
        appendToDisplay("tan("); 
    } else if (key === "l") {
        appendToDisplay("log("); 
    } else if (key === "r") {
        appendToDisplay("√("); 
    } else if (key === "^") {
        appendToDisplay("^"); 
    } else if (key === "b") {
        appendToDisplay("∛(");
    } else if (key === "a") {
        appendLastAnswer(); 
    }
});
