const userText = document.querySelector('.user_text');
const computerText = document.querySelector('.computer_text');
const result = document.querySelector('.result');
const playerWin = document.querySelector('.playerWin');
const computerWin = document.querySelector('.computerWin');
const userPick = document.querySelectorAll('#pick');
const popup = document.querySelector('.popup');
const message = document.querySelector('#message')
const popupMessage = document.querySelector('#popupMessage');
const imgPick = document.querySelector('#computerImgPick');
var player;
var computer;
var playerScore = 0;
var computerScore = 0;


userPick.forEach(button => button.addEventListener('click', () =>{

    player = button.innerHTML;
    if (player == "ROCK") {
        document.querySelector('#playerImgPick').src = ('img/rock.png');
    } else if(player == "SCISSOR"){
        document.querySelector('#playerImgPick').src = ('img/scissor.png');
    }else{
        document.querySelector('#playerImgPick').src = ('img/paper.png');
    }
    computerTurn();
    checkWinner();
    scoreChecker();

}));

popupMessage.addEventListener("click", function(e){
    popup.style.display = "none";
})


function computerTurn(){
    const randomNumber = Math.floor(Math.random() * 3 ) + 1;

    switch(randomNumber){
        case 1:
            computer = "ROCK";
            imgPick.src = ('img/computer_rock.png');
            break;
        case 2:
            computer = "PAPER";
            imgPick.src = ('img/computer_paper.png');
            break;
        case 3:
            computer = "SCISSOR";
            imgPick.src = ('img/computer_scissor.png');
            break;
     }

}

function checkWinner(){
    if (player == computer) {
        result.textContent = "Result: It a Draw";
    }
    else if (computer == "ROCK") {
        if (player == "PAPER") { 
            result.textContent = "Result: You Win";
            playerScore = playerScore + 1;
            playerWin.textContent =  `Player Win: ${playerScore}`;
        }else{
            result.textContent = "Result: You Lose";
            computerScore = computerScore + 1;
            computerWin.textContent = `Computer Win: ${computerScore}`;
        }
    }
    else if (computer == "PAPER") {
            if (player == "SCISSOR") { 
                result.textContent = "Result: You Win";
                playerScore = playerScore + 1;
                playerWin.textContent =  `Player Win: ${playerScore}`;
            }else{
                result.textContent = "Result: You Lose";
                computerScore = computerScore + 1;
                computerWin.textContent = `Computer Win: ${computerScore}`;
            }
    }
    else if (computer == "SCISSOR") {
            if (player == "ROCK") { 
                result.textContent = "Result: You Win";
                playerScore = playerScore + 1;
                playerWin.textContent =  `Player Win: ${playerScore}`;
            }else{
                result.textContent = "Result: You Lose";
                computerScore = computerScore + 1;
                computerWin.textContent = `Computer Win: ${computerScore}`;
            }
        }
        
}

function scoreChecker(){
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        playerWin.textContent =  `Player Win: ${playerScore}`;
        computerWin.textContent = `Computer Win: ${computerScore}`;
        popup.style.display = "flex";
        message.textContent = "You Win!!!";
        
    }else if(computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        playerWin.textContent =  `Player Win: ${playerScore}`
        computerWin.textContent = `Computer Win: ${computerScore}`;
        popup.style.display = "flex";
        message.textContent = "You Lose!!!";
        
    }
}