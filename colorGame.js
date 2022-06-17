function main() {
  const colorDisplay = document.getElementById("colorDisplay");
  const message = document.getElementById("message");
  const reset = document.getElementById("reset");
  const title = document.getElementById("title");
  const easy = document.getElementById("easy");
  const normal = document.getElementById("normal");
  const hard = document.getElementById("hard");
  const count = document.getElementById("count");

  function createGame(squareQuantity) {
    const colors = getRandomColorArray(squareQuantity);
    const container = document.getElementById("container");
    container.innerHTML = "";
    const squares = createSquares(container, squareQuantity);
    console.log(squares);
    const pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.innerHTML = pickedColor;
    putColorInSquare(squares, colors);
    addEventOnClickToSquares(squares, colors, pickedColor);
  }

  reset.addEventListener("click", () => {
    reset.innerHTML = "New Colors";
    message.innerHTML = "";
    title.style.color = "#fbeedf";
    reset.style.backgroundColor = "";
    createGame(9);
    count.innerHTML = 0;
  });

  easy.addEventListener("click", () => {
    createGame(3);
  });

  normal.addEventListener("click", () => {
    createGame(6);
  });

  hard.addEventListener("click", () => {
    createGame(9);
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

  function clickCounter() {
    
  }

  function addEventOnClickToSquares(squareElements, colors, pickedColor) {
    let countClick = 0;
    for (let i = 0; i < squareElements.length; i++) {
      squareElements[i].addEventListener("click", () => {
        squareOnClick(squareElements[i], colors[i], pickedColor);
        count.innerHTML = countClick += 1;
      });
      dynamicSquare(squareElements);
    }
  }

  function dynamicSquare(squareElements) {
    for (let i = 0; i < squareElements.length; i++) {
      squareElements[i].addEventListener("mouseover", () => {
        squareElements[i].style.border = "5px solid #fbeedf";
      });
      squareElements[i].addEventListener("mouseout", () => {
        squareElements[i].style.border = "2px solid #fbeedf";
      });
    }
  }

  function squareOnClick(squareElement, color, pickedColor) {
    if (color === pickedColor) {
      message.innerHTML = "congratulations!!!";
      reset.innerHTML = "play again?";
      count.innerHTML = 0;
      container.innerHTML = "";
    } else {
      squareElement.style.backgroundColor = "#dfcdbf";
      squareElement.style.border = "#b79ff1";
      message.innerHTML = "try again!!!";
      reset.innerHTML = "new colors";
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
