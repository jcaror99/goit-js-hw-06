const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const defaultValue = textOutput.textContent;

const replaceText = (e) => {
	if (e.currentTarget.value === '') {
		textOutput.textContent = defaultValue;
	} else {
		textOutput.textContent = e.currentTarget.value;
	}
};

textInput.addEventListener('input', replaceText);
