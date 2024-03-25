
var slider = document.getElementById('slider');
slider.addEventListener('input', sliderChange);
function sliderChange () {
  document.getElementById("size").innerHTML="Grid: " + this.value + "X" + this.value;
}
function randomColor() {
document.getElementById("gridara").addEventListener('mouseover', getColor);
function getColor(event) {
    let square = event.target;
    square.classList.add("colored");
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
}
function blackColor(){
  document.getElementById("gridara").addEventListener('mouseover', getColor);
function getColor(event) {
    let square = event.target;
    square.classList.add("colored");
    return square.style.backgroundColor = "black";
}
}
document.addEventListener("DOMContentLoaded", function() {
  createDefaultBoard();
})

function createDefaultBoard() {
  let board = document.querySelector(".board");
  board.innerHTML="";
  board.style.gridTemplateColumns = `repeat(16, 1fr)`;
  board.style.gridTemplateRows = `repeat(16, 1fr)`;
  for (let i = 0; i < 16*16; i++) {
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend",div);
  }
}
  
function createBoard(){
var size = document.getElementById("slider").value;
let board = document.querySelector(".board");
board.innerHTML="";
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
for (let i = 0; i < size*size; i++) {
  let div = document.createElement("div");
  board.insertAdjacentElement("beforeend",div);
}
}

var gridButton = document.getElementById("grid-btn");
gridButton.addEventListener('onclick',createBoard);

function clearGrid() {
  var obojen = document.getElementsByClassName("colored");
  for (let i = 0; i < obojen.length; i++) {
  obojen[i].style.backgroundColor = "white";
  }
}