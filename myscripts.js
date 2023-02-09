let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + '</h1>';

let rating = document.getElementById('rating');
let result = document.getElementById('result');


let button = document.getElementById('button');
button.addEventListener(
	'click',
	function (e) {
		rating.style.display = "none";
    result.style.display = "block";
	},
	false
);
