const rangeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

const currentValue = (e) => {
	let fontSize = e.target.value + 'px';
	textOutput.setAttribute('style', 'font-size:' + fontSize);
};
rangeInput.addEventListener('input', currentValue);
