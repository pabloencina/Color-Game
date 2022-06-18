function main() {
  const colorDisplay = document.getElementById("colorDisplay");
  const message = document.getElementById("message");
  const reset = document.getElementById("reset");
  const title = document.getElementById("title");
  const easy = document.getElementById("easy");
  const normal = document.getElementById("normal");
  const hard = document.getElementById("hard");
  const count = document.getElementById("count");
  let dificulty;

  function createGame(squareQuantity) {
    const colors = getRandomColorArray(squareQuantity);
    const container = document.getElementById("container");
    container.innerHTML = "";
    const squares = createSquares(container, squareQuantity);
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
    count.innerHTML = 0;
    dificulty = 0;
  });

  normal.addEventListener("click", () => {
    createGame(6);
    count.innerHTML = 0;
    dificulty = 1;
  });

  hard.addEventListener("click", () => {
    createGame(9);
    count.innerHTML = 0;
    dificulty = 2;
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

  let countClick = 0;

  function clickCounter(val) {
    count.innerHTML = val;
  }

  function increment(color, pickedColor) {
    countClick += 1;
    clickCounter(countClick);
    colorMatching(color, pickedColor);
  }

  function colorMatching(color, pickedColor) {
    if (color === pickedColor) {
      let point = getPlayerPoints(countClick);
      message.innerHTML = `congratulations, you got ${point} points!!!`;
    }
  }

  function getPlayerPoints(countClick) {
    if(dificulty === 0 && countClick === 1){
      return 500
    }else if(dificulty === 0 && countClick === 2){
      return 400
    }else if(dificulty === 0 && countClick === 3){
      return 100
    }

    if(dificulty === 1 && countClick === 1){
      return 700
    }else if(dificulty === 1 && countClick === 2){
      return 600
    }else if(dificulty === 1 && countClick === 3){
      return 500
    }else if(dificulty === 1 && countClick === 4){
      return 400
    }else if(dificulty === 1 && countClick === 5){
      return 300
    }else if(dificulty === 1 && countClick === 6){
      return 100
    }

    if (countClick <= 2 && dificulty === 2) {
      return 1000;
    } else if (countClick > 2 && countClick <= 5 && dificulty === 2) {
      return 700;
    } else if (countClick > 5 && countClick <= 9 && dificulty === 2) {
      return 200;
    }
  }

  function addEventOnClickToSquares(squareElements, colors, pickedColor) {
    countClick = 0;
    for (let i = 0; i < squareElements.length; i++) {
      squareElements[i].addEventListener("click", () => {
        squareOnClick(squareElements[i], colors[i], pickedColor);
        increment(colors[i], pickedColor);
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
