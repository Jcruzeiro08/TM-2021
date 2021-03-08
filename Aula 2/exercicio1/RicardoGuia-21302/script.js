// Your JS Script here

function readTextInput() {
	const inputText = document.getElementById("inputText").value;
	if (inputText) {
		document.getElementById("viewText").innerText = inputText;
	}
}
