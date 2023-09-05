function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const bodyColor = document.querySelector('body');

const changeColor = (e) => {
	const newColor = getRandomHexColor();
	spanText.textContent = newColor;
	bodyColor.setAttribute('style', 'background-color:' + newColor);
};

changeButton.addEventListener('click', changeColor);
