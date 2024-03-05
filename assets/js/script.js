// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                checkAnswers();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

} )

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random Numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 24 ) + 1
    let num2 = Math.floor(Math.random() * 24 ) + 1

    if  (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array 
 */
function checkAnswers() {
    let userAnswer = parseInt(document.getElementById("answer-box").value) 
    let calculatedAnswer = calculatedCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You did it! Congratulations! :-)")
    } else {
        alert(`Our servey said ITEEERRR. You answered ${userAnswer} The correct answer was ${calculatedAnswer[0]}!`)
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the number) and the operator (plus minus etc)
 * directly form the dom and returns the correct answer.
 */
function calculatedCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator =  document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }

}

function incrementScore() {

}

function incrementWrongAnswe() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {
    
}
