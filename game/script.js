var computerGuess = Math.floor(Math.random() * 11);
var x = document.getElementById("userGuess").value;
var answers = document.getElementById("userAttempts")


function gameFunction() {
    var x = document.getElementById("userGuess").value;

    if (x == computerGuess) {
        console.log("You got it.");
        document.getElementById("answerText").innerHTML = "You got it! The number was " + computerGuess;
    }
    else {
        console.log("Keep trying - you are almost there");
        answers.textContent += x + ", ";
        if (x < computerGuess) {
            document.getElementById("answerText").innerHTML = "Keep trying! Guess higher :)";
        }
        else {
            document.getElementById("answerText").innerHTML = "Keep trying! Guess lower :P";
        }
    }

}

