let playGame = confirm("shall we play a game");
if(playGame){
   let playerChoice =prompt("Rock,Paper,and Scissors");
   if (playerChoice){
      let playerOne = playerChoice.trim().toLowerCase();
      if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
         let computerChoice = Math.floor(Math.random() *3 +1);
         let computer = computerChoice === 1 ? "rock"
         : computerChoice === 2 ? "paper"
         : "scissors";
         let result = playerOne === computer ? "tie game"
         : playerOne === "paper" && computer === "rock"
         ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
         : playerOne === "paper" && computer === "scissors"
         ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins `
         : playerOne === "rock" && computer === "scissors"
         ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
         : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`;
         alert(result);
         let playAgain = confirm("play again");
         if (playAgain) {
            location.reload();     
         } else {
            alert("thanks for playing");
         }
      }else {
         if (playAgain) {
            confirm("exit game");
         } else {
            location.reload;
         }
         alert("you did not chose rock,paper or scissors");
      }
      
   }else {
      alert("changed your mind? later then");
   }
}else alert("Maybe next time");




 let myNumber = "buny";
 while (myNumber < 3) {
    myNumber += 1;
   console.log(charAt().myNumber.length());
 }