function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const createBoxes = (amount) => {
	const newDiv = [];
	let dimensions = 20;
	for (let i = 0; i < amount; i += 1) {
		let newDimension = (dimensions += 10);
		newDiv.push(
			`<div id='${i}' style="width: ${newDimension}px; height: ${newDimension}px; background-color: ${getRandomHexColor()}">${newDimension}</div>`,
		);
	}
	return newDiv.join('');
};

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const divList = document.querySelector('#boxes');
const quantityDiv = document.querySelector('input');

const createDiv = (e) => {
	const quantityDivValue = quantityDiv.value;
	divList.innerHTML = createBoxes(quantityDivValue);
};

const destroyDiv = () => {
	divList.innerHTML = '';
};

createButton.addEventListener('click', createDiv);
destroyButton.addEventListener('click', destroyDiv);
