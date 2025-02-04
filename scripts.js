
let dimension = 16;
const grid = document.querySelector("#grid");

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

createGrid(dimension);




