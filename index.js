const tiles = document.querySelectorAll(".tile");
const resultContainer = document.querySelector(".result-container");
const resultMessage = document.querySelector(".result-container p");
const resetButton = document.querySelector(".result-container button");
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
let patternX = [];
let patternO = [];
let isXTurn = true;

const checkIfWon = (pattern, player) => {
  winningPatterns.forEach((winningPattern) => {
    if (winningPattern.every((el) => pattern.includes(el))) {
      resultMessage.innerText = `🏆 ${player} wins! 🏆`;
      resultContainer.classList.toggle("result-container--hidden");
      return;
    }
  });
};

const resetGame = () => {
  for (let tile of tiles) {
    tile.innerText = "";
    patternX = [];
    patternO = [];
  }
  resultContainer.classList.toggle("result-container--hidden");
};

const gameOn = (e, i) => {
  {
    if (isXTurn) {
      if (!patternX.includes(i)) patternX.push(i);
      e.target.innerText = "X";
      checkIfWon(patternX, "Player X");
      isXTurn = false;
    } else {
      if (!patternO.includes(i)) patternO.push(i);
      e.target.innerText = "O";
      checkIfWon(patternO, "Player O");
      isXTurn = true;
    }
  }
};
resetButton.addEventListener("click", resetGame);
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", (e) => gameOn(e, i));
}
