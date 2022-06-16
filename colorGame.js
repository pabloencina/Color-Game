function main() {
  const colorDisplay = document.getElementById("colorDisplay");
  const message = document.getElementById("message");
  const reset = document.getElementById("reset");
  const title = document.getElementById("title");
  const easy = document.getElementById("easy");
  const hard = document.getElementById("hard");
  
  function createGame(squareQuantity) {
    const colors = getRandomColorArray(squareQuantity);
    const container = document.getElementById("container");
    container.innerHTML = ""
    const squares = createSquares(container, squareQuantity);
    const pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.innerHTML = pickedColor;
    putColorInSquare(squares, colors);
    addEventOnClickToSquares(squares, colors,pickedColor);
  }

  function stopEvents() {
    squareOnClick(squareElement, color, pickedColor)
  }

  reset.addEventListener("click", () => {
     //main()
  });

  easy.addEventListener("click", () => {
    createGame(3) 
  });

  hard.addEventListener("click", () => {
    createGame(6);
  });

  function createSquares(parentElement, squareQuantity) {
    let arrDiv = [];
    for (let i = 0; i < squareQuantity; i++) {
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

  function addEventOnClickToSquares(squareElements, colors,pickedColor) {
    for (let i = 0; i < squareElements.length; i++) {
      squareElements[i].addEventListener("click", () => {
        squareOnClick(squareElements[i], colors[i], pickedColor);
      });
    }
  }

  function squareOnClick(squareElement, color, pickedColor) {
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

  function getRandomColorArray(squareQuantity) {
    const arrColors = [];
    for (let i = 0; i < squareQuantity; i++) {
      const color = generateColorString();
      arrColors.push(color);
    }
    return arrColors;
  }
}

main();
