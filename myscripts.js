let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + '</h1>';

let card = document.getElementById('card');
let button = document.getElementById('button');
button.addEventListener(
	'click',
	function (e) {
		alert('<事件1>Hello，您好！');
	},
	false
);
