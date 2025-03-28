document.getElementById("heading").innerHTML = "LET'S DO SOME MATHS" ;

document.getElementById("rules").innerHTML = "Basically the rules are very simple. There will be some basic mathematical statements and if the statements are true the answer will be defined and if they are false the answer will be undefined." ;

try{
    var num1 = 43 ;
    var num2 = 65 ;
    var sum = "Question 1 : The sum of 43 and 64 is 110." ;
    document.getElementById("q1").innerHTML = sum ;
    document.write(Ans)
}
catch(err) {
    document.getElementById("a1").innerHTML = err.message ;

    document.getElementById("a2").innerHTML = err.message ; 
}


var numb1 = 33 ;
    var numb2 = 69 ; 
    var result2 = "" ;

function summ(a,b) {
    return a*b
}


try {
    var result2 ;

    if(numb1*numb2===3377) {

        let result2 = "defined" ;
    }
    else {
        let result2 = "undefined" ;
    }
    
    document.getElementById("q2").innerHTML = q2 ;


} 
catch {
    document.getElementById("a2").innerHTML = err.message ;
}