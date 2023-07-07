function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let btnEl = document.querySelector('.change-color');

let bodyEl = document.querySelector('body');

let spanColor = document.querySelector('.color')

btnEl.addEventListener('click', ()=> {
  let color = getRandomHexColor();
  bodyEl.setAttribute("style", `background-color: ${color};`);
  spanColor.textContent = color;
});


