const loginForm = document.querySelector('form');
const submitButton = (e) => {
	e.preventDefault();

	const email = loginForm.elements.email.value;
	const pwd = loginForm.elements.password.value;
	const currentEvent = e.currentTarget;

	if (email.includes(' ') || pwd.includes(' ')) {
		alert('todos los espacios deben ser rellenados');
	} else {
		console.log(`email: ${email} y password: ${pwd}`);
		currentEvent.reset();
	}
};

loginForm.addEventListener('submit', submitButton);
