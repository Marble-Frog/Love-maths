// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = docoument.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
} )

funtction runGame() {

}

funtction checkAnswers() {

}

funtction calculateCorrectAnswer() {

}

funtction incrementScore() {

}

funtction incrementWrongAnswe() {

}

funtction displayAdditionQuestion() {

}

funtction displaySubtractionQuestion() {

}

funtction displayMultiplyQuestion() {

}
