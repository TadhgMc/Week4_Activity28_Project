var Options = ["array", "javascript", "style", "readme"]
var startButton = document.querySelector("#startButton");
var timeDiv = document.querySelector("#timeLeft");
var guess = document.querySelector("#guess");

//starts activity and timer
startButton.addEventListener("click", function(){
    Countdown();
    console.log("clicked")
});

function WordGame(){
    var chosenWord = Options[Math.floor(Math.random()* Options.length)];
    guess.textContent = chosenWord;
    
    '_'.repeat(chosenWord.length);
}


function Countdown(){
    var Timeleft= 30;

    var timeInterval = setInterval(function(){
        console.log("started")
        if (Timeleft > 0){
            timeDiv.textContent = Timeleft;
            Timeleft--;
        } else {
            timeDiv.textContent = '0';
            clearInterval(timeInterval);
            displayMessage()
        }

    }, 1000); //end of timeInterval

}//end of COuntdown

function displayMessage() {

}



// '_'.repeat(chosenWord.length) -this is for later