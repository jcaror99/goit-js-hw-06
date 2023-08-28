const listItems = document.querySelector('#categories').querySelectorAll('li.item');
console.log(`Number of categories: ${listItems.length}`);
const text = listItems.forEach(function (element) {
	const h2Element = element.querySelector('h2');
	const tittle = h2Element.textContent;

	const liElement = element.querySelectorAll('li');
	const quantity = liElement.length;
	console.log(`Category: ${tittle}`);
	console.log(`Elements: ${quantity}`);
});
