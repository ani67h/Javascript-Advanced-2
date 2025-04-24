const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "An unknown error occurred"
    }
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function root() {
    display.value = Math.sqrt(display.value);
}