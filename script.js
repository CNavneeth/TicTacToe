let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageDisplay = document.getElementById("message");

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementById(`cell${index}`).innerText = currentPlayer;
        const winningIndex = checkWin();
        if (winningIndex !== null) {
            gameActive = false;
            messageDisplay.innerText = `${currentPlayer} wins!`;
        } else if (board.includes("")) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            messageDisplay.innerText = `${currentPlayer}'s turn`;
        } else {
            gameActive = false;
            messageDisplay.innerText = "It's a draw!";
        }
    }
}

function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return i;
        }
    }
    return null;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    messageDisplay.innerText = `${currentPlayer}'s turn`;
}

document.addEventListener("DOMContentLoaded", () => {
    messageDisplay.innerText = `${currentPlayer}'s turn`;
});
