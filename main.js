let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScors = document.querySelector("#user-score");
const compScors = document.querySelector("#computer-score");


const playGame = (choiceId) => {
    console.log("choice id =", choiceId);
    const computerChoice = compChoice();
    console.log("computer choice =", computerChoice);

    if (choiceId === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (choiceId === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (choiceId === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, choiceId, computerChoice);

    }


};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw . Play again";
}

const showWinner = (userWin, choiceId, computerChoice) => {
    if (userWin) {
        userScore++;
        userScors.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! Your ${choiceId} beats ${computerChoice}`;
        msg.stylebackgroundColor = "green";
    }
    else {
        compScore++;
        compScors.innerText = compScore;
        console.log("you lost");
        msg.innerText = `You Lost! ${computerChoice} beats Your ${choiceId}`;
        msg.stylebackgroundColor = "red";
    }
}

const compChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}




choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id")

        playGame(choiceId);

    });
});

