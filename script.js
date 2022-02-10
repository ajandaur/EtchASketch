const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.resetButton');
const rainbowBtn = document.querySelector('.rainbowButton');
const defaultBtn = document.querySelector('.defaultButton');
const eraserBtn = document.querySelector('.eraserButton');
const settings = document.querySelector('.settings');

const buttons = document.getElementsByTagName("button");

var rainbowToggle = false;
var eraserToggle = false;
var defaultToggle = true;

// Pen and background colors 
let penColor = "#FFF";
let backgroundColor = "#333";

penColor = document.getElementById("color-select");
backgroundColor = document.getElementById("background-select");
backgroundColor.addEventListener("input", changeBackgroundColor);


// Add active button properties 
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].classList.contains("clear-button") == false) {
    buttons[i].addEventListener("click", () => {
      buttons[i].classList.toggle("button-active");
    });
  }
}


// Call function to make divs
createDivs()

// f(x) to make divs
function createDivs(gridNum = 16) { 
  let totalDivs = gridNum * gridNum;
  grid.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
  grid.style.gridTemplateRows = `repeat(${gridNum}, auto)`;

  for (let i = 0; i <= totalDivs; i++) {
    let div = document.createElement('div');
    div.classList ="box";
    div.addEventListener('mouseover', changePenColor);
    grid.appendChild(div);
  }
}

function changeBackgroundColor(e) { 
  gridItems = document.querySelectorAll('.box');
  backgroundColor = e.target.value;
  for (let i = 0; i < gridItems.length; i++) { 
    grid.style.backgroundColor = backgroundColor;
    settings.style.boxShadowd = `inset 0 0 10px ${backgroundColor}`;
  }
}

// f(x) to change color
function changePenColor(e) { 

  if (rainbowBtn.classList.contains("button-active") == true) {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    return;
  } else if (defaultBtn.classList.contains("button-active") == true) {
    e.target.style.backgroundColor = penColor.value;
    return;
  } else { 
    e.target.style.backgroundColor = 'white';
  }
  
}

// f(x) to destory divs
function resetDivs() { 
  let gridDivs = grid.querySelectorAll('div');
  gridDivs = Array.from(gridDivs);
  gridDivs.forEach(div => { 
    grid.removeChild(div);
  })
}

// event listeners
rainbowBtn.addEventListener('click', () => {
  rainbowToggle = true;
  eraserToggle = false;
});

eraserBtn.addEventListener('click', () => {
  eraserToggle = true 
  rainbowToggle = false 
});

resetBtn.addEventListener('click', () => { 
  const divs = grid.querySelectorAll('div');
  divs.forEach(div => { 
    div.style.backgroundColor = "white";
  })
  let input = prompt("Please a number of squares between 1-100 ");
  if(input == 0 || input == NaN) {
    return;
  } else { 
    if (resetBtn.classList.contains("button-active") === true) {
      resetBtn.classList.remove("button-active");
    }
    resetDivs();
    createDivs(input);
  }
})