
function validate_input(input) {
	
	let val = input.value;
	let label = findChildById(input.parentNode, input.id + "-label");
	
	let regExp = new RegExp(input.pattern);
	if (!(regExp.test(val))) {
		
		input.style = "border-color: red;";
		label.innerHTML = "Email - user@domain.com";
		label.style.color = "red";
	} else {
		
		input.style = "border-color: ";
		label.innerHTML = "Your email";
		label.style.color = "inherit";
	}
}

function childExists(element, id) {
	
	let i;
	let childNodes = element.childNodes;
	for (i = 0; i < childNodes.length; i++) {
		if (childNodes[i].id === id) { return true; }
	}
	return false;
}


function findChildById(element, id) {
	
	let i;
	let childNodes = element.childNodes;
	for (i = 0; i < childNodes.length; i++) {
		if (childNodes[i].id === id) { return childNodes[i]; }
	}
	return null;
}