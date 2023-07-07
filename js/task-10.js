function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let inputEl = document.querySelector(`#controls input`);
let createEl =document.querySelector('[data-create]');
let destroyEl =document.querySelector('[data-destroy]');
let boxesEl = document.querySelector(`#boxes`);



createEl.addEventListener('click',()=>{
  let numberOfBoxes = boxesEl.childNodes.length;
  console.log(numberOfBoxes);
  let boxes = createBoxes((parseInt(inputEl.value)),numberOfBoxes);+
  boxesEl.append(...boxes);
  inputEl.value='';
});

destroyEl.addEventListener('click',()=>{
  inputEl.value='';
  boxesEl.innerHTML='';
});


function createBoxes(amount,numberOfBoxes) {
  let array = [...Array(amount).keys()];
  let size = 30 + numberOfBoxes*10;
  return array.map((i)=> addBox(i,size));
}

function addBox(boxNumber,size) {
  let box = document.createElement('div');
  let elementSize = size + 10*boxNumber;
  box.style.width = `${elementSize}px`;
  box.style.height= `${elementSize}px`;
  box.style.backgroundColor= `${getRandomHexColor()}`;
  return box;
} 