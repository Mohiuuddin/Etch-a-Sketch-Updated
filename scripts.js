
let dimension = 16;
const grid = document.querySelector("#grid");
const newButton = document.querySelector(".btn-new");
const slidingDiv = document.querySelector(".sliding-div");
const eraseBtn = document.querySelector(".btn-clear");
const enter = document.querySelector("#enter");

function getRandomColor (){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid (dimension){
  grid.innerHTML = "";
  for (let i = 0; i < dimension; i++)
  {
    const row = document.createElement("div");
    row.classList.add("row");
    for( let j = 0; j < dimension; j++){
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
      
      cell.addEventListener("mouseover", ()=>{
        cell.style.backgroundColor = getRandomColor();
      });
      
    }
    grid.appendChild(row);
  }
}

function clickSound(){
    let audio = new Audio("sound/click-buttons.mp3");
    audio.play(); 
}

newButton.addEventListener("click", () => {
  clickSound();
  slidingDiv.classList.add("shifted");
  
  });

  eraseBtn.addEventListener('click', () => {
    clickSound();
    
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"; 
    });
  });


  enter.addEventListener("click", ()=>{
    clickSound();
    const size = document.querySelector("#size").value;
    dimension = parseInt(size);
    createGrid(dimension);
    slidingDiv.classList.remove("shifted");
  });

createGrid(dimension);








