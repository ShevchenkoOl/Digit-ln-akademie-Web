
const words = document.querySelectorAll('li');
words.forEach((word) => {
	const textPozpatky = word.textContent.split('').reverse().join('');
	if(word.textContent.toLowerCase() === textPozpatky.toLowerCase()) {
		word.classList.add('palindrom')
	}
})
