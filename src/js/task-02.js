const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const liItems = document.createElement('li');
liItems.textContent = 'Potatoes';
liItems.classList.add('item');
list.append(liItems);

const joinIngredients = ingredients.map((element) => `<li class="item">${element}</li>`).join('');
list.innerHTML = joinIngredients;
