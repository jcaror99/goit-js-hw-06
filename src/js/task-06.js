const textInput = document.querySelector('#validation-input');
const defaultLength = textInput.getAttribute('data-length');

const inputLength = (e) => {
	let currentValue = e.target.value.length;

	textInput.classList.remove('invalid', 'valid');

	if (currentValue > defaultLength) {
		textInput.classList.add('invalid');
	} else if (currentValue > 0 && currentValue <= defaultLength) {
		textInput.classList.add('valid');
	} else {
		textInput.classList.add('#validation-input');
	}
};

textInput.addEventListener('blur', inputLength);
