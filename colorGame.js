function main() {
  const colorQ = 6;
  const colorP = 3;
  const colors = getRandomColorArray(colorP);
  //
  const container = document.getElementById("container");
  // const squares = document.querySelectorAll(".square");
  const squares = createSquares(container, colorP);
  //
  const colorDisplay = document.getElementById("colorDisplay");
  const message = document.getElementById("message");
  const reset = document.getElementById("reset");
  const title = document.getElementById("title");
  const easy = document.getElementById("easy");
  const hard = document.getElementById("hard");

  const pickedColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.innerHTML = pickedColor;
  putColorInSquare(squares, colors);
  addEventOnClickToSquares(squares, colors);

  reset.addEventListener("click", () => {
    // main()
  });

  easy.addEventListener("click", () => {
    buttonEasy();
  });

  hard.addEventListener("click", () => {
    buttonHard();
  });

  function createSquares(parentElement, number) {
    let arrDiv = [];
    for (let i = 0; i < number; i++) {
      const element = document.createElement("div");
      element.classList.add("square");
      parentElement.appendChild(element);
      arrDiv.push(element);
    }
    return arrDiv;
  }

  function putColorInSquare(squares, colors) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
  }

  function addEventOnClickToSquares(squareElements, colors) {
    for (let i = 0; i < squareElements.length; i++) {
      squareElements[i].addEventListener("click", () => {
        squareOnClick(squareElements[i], colors[i]);
      });
    }
  }

  function squareOnClick(squareElement, color) {
    if (color === pickedColor) {
      title.style.color = color;
      message.innerHTML = "CONGRATULATIONS!!!";
      message.style.color = color;
      reset.innerHTML = "PLAY AGAIN??";
    } else {
      squareElement.style.backgroundColor = "#b79ff1";
      squareElement.style.border = "#b79ff1";
      message.innerHTML = "TRY AGAIN!!!";
      reset.innerHTML = "New Colors";
    }
  }

  function generateRandomNumber(limit) {
    return (Math.random() * limit).toFixed(0);
  }

  function generateColorString() {
    return (
      "RGB(" +
      generateRandomNumber(255) +
      "," +
      generateRandomNumber(255) +
      "," +
      generateRandomNumber(255) +
      ")"
    );
  }

  function buttonEasy() {
    getRandomColorArray(colorP);
  }

  function buttonHard() {
    getRandomColorArray(colorQ);
  }

  function getRandomColorArray(n) {
    const arrColors = [];
    for (let i = 0; i < n; i++) {
      const color = generateColorString();
      arrColors.push(color);
    }
    return arrColors;
  }
}

main();
