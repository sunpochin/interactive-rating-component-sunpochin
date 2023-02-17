let scoreButtons;

window.addEventListener('load', (e) => {
	console.log('js loaded');
	let rating = document.getElementById('rating');
	let result = document.getElementById('result');

	let button = document.getElementById('submit-button');
	button.addEventListener(
		'click',
		function (e) {
			rating.style.display = 'none';
			result.style.display = 'block';
		},
		false
	);

	scoreButtons = document.querySelectorAll('.circle');
  console.log('score: ', scoreButtons)
  scoreButtons.forEach(button => {
    button.addEventListener('click', ()=> {
      addSelected(button)
    })
  })
});

const addSelected = (curButton) => {
  scoreButtons.forEach(button => button.classList.remove('active'))
  curButton.classList.add('active')
}

