// start of game
let getComputerChoice = ()=> {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// dom
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

let userScore = 0;
let computerScore = 0;



let convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
// function for win
let win = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}
// function for losing
let lose = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}    
// function for draw
let draw = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}    
// switch statement instead on conditional statement
let game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}    

let main = () => {
    rock.addEventListener('click', function() {
    game("r");
    })

    paper.addEventListener('click', function() {
    game("p");
    })

    scissors.addEventListener('click', function() {
    game("s");
    })
}

main();
