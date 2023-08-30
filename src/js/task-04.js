const valueElement = document.querySelector('#value');
let counterValue = Number(valueElement.textContent);

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

const btnIncrementPressed = () => {
	counterValue += 1;
	valueElement.textContent = counterValue;
};

const btnDecrementPressed = () => {
	counterValue -= 1;
	valueElement.textContent = counterValue;
};

incrementButton.addEventListener('click', btnIncrementPressed);
decrementButton.addEventListener('click', btnDecrementPressed);
