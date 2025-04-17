document.getElementById("heading").innerHTML = "LET'S DO SOME MATHS";

document.getElementById("rules").innerHTML = "Basically the rules are very simple. There will be some basic mathematical statements and if the statements are true the answer will be defined and if they are false the answer will be undefined.";

try {
    var num1 = 43;
    var num2 = 64; 
    var sum = "Question 1: The sum of 43 and 64 is 110.";
    document.getElementById("q1").innerHTML = sum;

    if (num1 + num2 === 110) {
        document.getElementById("a1").innerHTML = "defined";
    } else {
        document.getElementById("a1").innerHTML = "undefined";
    }
} catch (err) {
    document.getElementById("a1").innerHTML = err.message;
}

try {
    var numb1 = 33;
    var numb2 = 69;
    var q2 = "Question 2: The product of 33 and 69 is 3377.";
    document.getElementById("q2").innerHTML = q2;

    var result2; 
    if (numb1 * numb2 === 3377) {
        result2 = "defined"; 
    } else {
        result2 = "undefined"; 
    }

    document.getElementById("ans2").innerHTML = result2; 
} catch (err) {
    document.getElementById("ans2").innerHTML = err.message;
}

function summ() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error"; 
    }
}
