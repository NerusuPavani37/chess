document.addEventListener("DOMContentLoaded", function () {
  const size = 8;
  const body = document.querySelector("body");
  const chessboard = document.createElement("div");
  chessboard.className = "chessboard";
  body.appendChild(chessboard);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const chessElement = document.createElement("div");
      chessElement.className = "box";

      if (i % 2 == j % 2) {
        chessElement.classList.add("white");
      } else {
        chessElement.classList.add("black");
      }

      chessElement.dataset.row = i;
      chessElement.dataset.col = j;

      chessboard.appendChild(chessElement);
    }
  }

  chessboard.addEventListener("click", function (e) {
    // console.log("added event listener");
    console.log(e.target.dataset.row);
    console.log(e.target.dataset.col);
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;

    diagonalsRed(row, col);
  });

  function diagonalsRed(row, col) {
    console.log("functioncallled");
    const allBox = document.querySelectorAll(".box");
    allBox.forEach((box) => {
      let boxRow = box.dataset.row;
      let boxCol = box.dataset.col;
      if (Math.abs(boxRow - row) == Math.abs(boxCol - col)) {
        console.log("condition true");
        box.classList.add("highlight");
      } else {
        box.classList.remove("highlight");
      }
    });
  }
});
