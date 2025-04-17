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

function cos() {
    screen.value = Math.cos(screen.value);
    document.getElementById("display").innerHTML = cos();
}

function sin() {
    screen.value = Math.sin(screen.value);
    document.getElementById("display").innerHTML = sin();
}

function root() {
    screen.value = Math.sqrt(screen.value);
    document.getElementById("display").innerHTML = root();
}