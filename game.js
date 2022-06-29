//global variables
game_on = false;
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];

//function which will chose the next number
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber;
}




//listener for the A key which will start the game 
$(document).keydown(function (e) {
    if (e.key == "a" && !game_on) {

        $("#level-title").text("Level 1")
        game_on = true
        var startColor = buttonColours[nextSequence()]
        gamePattern.push(startColor);
        animation(startColor)
    }
});


//function for the animation
function animation(id) {
    $("#" + id).animate({ opacity: 0.5 }).animate({ opacity: 1 })
}

//listener for the player's pressed color
$(".btn").click(function (e) {
    if(game_on){
        clickedColor = e.delegateTarget.id;
        userClickedPattern.push(clickedColor)
        animation(clickedColor)
        checkAnswer(userClickedPattern.length - 1);
        switch (clickedColor) {
            case "green":
                audio = new Audio("./sounds/green.mp3")
                audio.play();
                break;
            case "blue":
                audio = new Audio("./sounds/blue.mp3")
                audio.play();
                break;
            case "yellow":
                audio = new Audio("./sounds/yellow.mp3")
                audio.play();
                break;
            case "red":
                audio = new Audio("./sounds/red.mp3")
                audio.play();
                break;
        }
    }
});


//functon which will check the answer
function checkAnswer(index) {
    if (userClickedPattern[index] == gamePattern[index]) {
        if (gamePattern.length == userClickedPattern.length) {
            newColor = buttonColours[nextSequence()]
            gamePattern.push(newColor)
            setTimeout(function () {
                animation(newColor)
                $("#level-title").text("Level " + gamePattern.length)
            }, 1000)
            userClickedPattern = []
            
        }


    }
    else {
        userClickedPattern = []
        gamePattern = []
        game_on = false
        $("#level-title").text("GAME OVER! Press A Key to Start ")
        audio = new Audio("./sounds/wrong.mp3")
        audio.play();
    }
}
