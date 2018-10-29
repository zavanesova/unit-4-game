var randomNumber = Math.floor((Math.random() * 300));
var crystalOne= Math.floor((Math.random() * 30));
var crystalTwo = Math.floor((Math.random() * 30));
var crystalThree = Math.floor((Math.random() * 30));
var crystalFour = Math.floor((Math.random() * 30));

var userScore = 0;
var wins = 0;
var losses = 0;

function reset() {
    randomNumber = Math.floor((Math.random() * 300));
    $("#random-number").text(randomNumber);
    crystalOne = Math.floor((Math.random() * 30));
    crystalTwo = Math.floor((Math.random() * 30));
    crystalThree = Math.floor((Math.random() * 30));
    crystalFour = Math.floor((Math.random() * 30));
    userScore = 0;
    $("#your-score").text("Your Score: " + userScore);
    
};

function win() {
    if (userScore == randomNumber) {
    $("#wins").text("Wins: " + wins);
    alert("Congratulations!!! YOU WON!");
    wins++;
    reset();
}};

function lose() {
if (userScore > randomNumber) {
    losses++;
    $("#losses").text("Losses: " + losses);
    alert("Better luck next time! Try Again!");
    reset();
}};

$(document).ready(function() {
    $("#start").on("click", function() {
        $("#random-number").text(randomNumber);
        $("#your-score").text("Your Score: " + userScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

        $("#crystal-1").on("click", function() {
        userScore += crystalOne;
        $("#your-score").text("Your Score: " + userScore);
        win();
        lose(); 
        });
    
        $("#crystal-2").on("click", function() {
        userScore += crystalTwo;
        $("#your-score").text("Your Score: " + userScore);       
        win();
        lose();     
        });
    
        $("#crystal-3").on("click", function() {
        userScore += crystalThree;
        $("#your-score").text("Your Score: " + userScore);
        win();
        lose();
        });
    
        $("#crystal-4").on("click", function() {
        userScore += crystalFour;
        $("#your-score").text("Your Score: " + userScore); 
        win();   
        lose();
        });

        console.log(randomNumber);
        console.log(reset);

    });
    
});
 


