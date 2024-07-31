const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const newList = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const listItem= document.createElement('li');

  listItem.textContent = ingredient;

  listItem.classList.add('item');
newList.append(listItem);
});
ingredientsList.append(newList);