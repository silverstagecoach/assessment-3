console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully! Thank you.');
}

function giveCompliment(evt) {
	evt.preventDefault();

	alert('You are a compitent member of our society. Thank you!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector("img")

picture.addEventListener('mouseover', giveCompliment);