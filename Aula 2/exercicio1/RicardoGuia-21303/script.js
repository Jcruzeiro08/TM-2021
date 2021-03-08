// Your JS Script here

function readInputFromText() {
	const textFromInput = document.getElementById("inputText").value;
	if (textFromInput) {
		document.getElementById("viewerText").innerText = textFromInput;
	} else {
		alert("Escreva algo no input");
	}
}
