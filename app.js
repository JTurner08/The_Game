// Game begins
const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
  
        }
      
      
      //Computer array a.k.a options
      const computerOptions = ["rock", "paper", "scissors"];

      

      options.foreach(option =>{
            option.addEventListener('click',function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice =computerOptions[computerNumber];
                // Here is where we call compare hand
            });
      });
const compareHands = (playerChoice, computerChoice) =>{
    // update Text
    const winner = document.queryselector('.winner')
if(playerChoice === computerChoice){
    winner.textContent = 'It is a tie'
    return;
}
// if rock is choosen
if(playerChoice === 'rock'){
    if(computerChoice === 'scissors'){
        winner.textcontent = 'Player Wins'
    }
}
}
    }  
    playMatch()