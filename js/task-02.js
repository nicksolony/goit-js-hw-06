const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList= document.querySelector("#ingredients");
// console.log(ingredientsList);


function addIngridientEl(ingridient) {
  let ingredientEl = document.createElement('li');
  ingredientEl.innerText = ingridient;
  ingredientEl.classList.add('item');
  return ingredientEl;
}

let ingredientEls = ingredients.map(addIngridientEl);

ingredientsList.append(...ingredientEls);