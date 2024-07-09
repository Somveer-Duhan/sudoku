document.addEventListener("DOMContentLoaded", () => {
    const board = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    const sudokuBoard = document.getElementById("sudoku-board");

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (board[row][col] !== 0) {
                cell.innerText = board[row][col];
            } else {
                const input = document.createElement("input");
                input.type = "number";
                input.min = 1;
                input.max = 9;
                cell.appendChild(input);
            }

            sudokuBoard.appendChild(cell);
        }
    }
});

function checkSolution() {
    const cells = document.querySelectorAll("#sudoku-board .cell input");
    const board = Array.from(cells).map(cell => parseInt(cell.value) || 0);
    // Add logic to check the solution
    alert("Check Solution function is not yet implemented.");
}

function resetBoard() {
    const cells = document.querySelectorAll("#sudoku-board .cell input");
    cells.forEach(cell => cell.value = "");
}