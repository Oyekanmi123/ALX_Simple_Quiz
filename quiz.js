// Function to check the user's answer
function checkAnswer(){
    // The correct answer
    const correctAnswer = "4";

    // Retrieve user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption){
        // Declare and assign user answer
        let userAnswer = selectedOption.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer){
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else{
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    }

}

// Add an event listener to the submit answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);