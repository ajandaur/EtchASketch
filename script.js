const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.resetButton');
const rainbowBtn = document.querySelector('.rainbowButton');
const defaultBtn = document.querySelector('.defaultButton');
const eraserBtn = document.querySelector('.eraserButton');
var rainbowToggle = false;
var eraserToggle = false;
var defaultToggle = true;

// Call function to make divs
createDivs()

// f(x) to make divs
function createDivs(gridNum = 16) { 
  let totalDivs = gridNum * gridNum;
  grid.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
  grid.style.gridTemplateRows = `repeat(${gridNum}, auto)`;

  for (let i = 0; i <= totalDivs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', changePenColor);
    grid.appendChild(div);
  }
}

// f(x) to change color
function changePenColor(e) { 
  if(rainbowToggle) {
     let red = Math.floor(Math.random() * 256);
     let green = Math.floor(Math.random() * 256);
     let blue = Math.floor(Math.random() * 256);
     let color = `rgb(${red}, ${green}, ${blue})`;
     e.target.style.backgroundColor = color;
     return;
  }

  if(defaultToggle) { 
    e.target.style.backgroundColor = 'black';
    return
  }

  if (eraserToggle) {
    e.target.style.backgroundColor = 'white';
    return
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
  defaultToggle = false;
});

// event listeners
defaultBtn.addEventListener('click', () => {
  rainbowToggle = false;
  eraserToggle = false;
  defaultToggle = true;
});


eraserBtn.addEventListener('click', () => {
  eraserToggle = true 
  rainbowToggle = false 
  defaultToggle = false
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
    resetDivs();
    createDivs(input);
  }
})