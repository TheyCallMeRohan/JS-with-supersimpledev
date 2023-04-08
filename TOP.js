function playRound(playerSelection, computerSelection) {
  let value = " ";
  if (
    playerSelection.toUpperCase() === "rock".toUpperCase() &&
    computerSelection === 0
  ) {
    value = "It's a Tie";
  } else if (
    playerSelection.toUpperCase() === "paper".toUpperCase() &&
    computerSelection === 0
  ) {
    value = "You Win! Paper beats Rock";
  } else if (
    playerSelection.toUpperCase() === "scissor".toUpperCase() &&
    computerSelection === 0
  ) {
    value = "You Lose! Rock beats scissor";
  } else if (
    playerSelection.toUpperCase() === "rock".toUpperCase() &&
    computerSelection === 1
  ) {
    value = "You Lose! Paper beats rock";
  } else if (
    playerSelection.toUpperCase() === "paper".toUpperCase() &&
    computerSelection === 1
  ) {
    value = "It's a Tie";
  } else if (
    playerSelection.toUpperCase() === "scissor".toUpperCase() &&
    computerSelection === 1
  ) {
    value = "You Win! scissor beats paper";
  } else if (
    playerSelection.toUpperCase() === "rock".toUpperCase() &&
    computerSelection === 2
  ) {
    value = "You Win! Rock beats scissor";
  } else if (
    playerSelection.toUpperCase() === "paper".toUpperCase() &&
    computerSelection === 2
  ) {
    value = "You Lose! Scissor beats paper";
  } else if (
    playerSelection.toUpperCase() === "scissor".toUpperCase() &&
    computerSelection === 2
  ) {
    value = "It's a tie";
  } else {
    value = "wrong value";
  }
  return value;
}
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter Rock Paper Scissor");
    const computerSelection = Math.floor(Math.random() * 3);
    const rock = 0;
    const paper = 1;
    const scissor = 2;
    console.log(computerSelection);
    console.log(playerSelection);
    alert(playRound(playerSelection, computerSelection));
  }
}
game();
