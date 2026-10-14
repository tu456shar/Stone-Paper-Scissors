let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `You Lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    const compchoice = gencompChoice();

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userchoice === "stone") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "stone" ? false : true;
        }

        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});