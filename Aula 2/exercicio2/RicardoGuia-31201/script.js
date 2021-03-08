// Your JS Script here
let addedNumbers = [];

function pushArray() {
	const number = document.getElementById("numbers").value
	addedNumbers.push(number)
	document.getElementById("arrayNumbers").innerText = addedNumbers.toString()
}

calculateMaxNumber = () => {
	if (addedNumbers.length >= 5) {
		const maxNumber = addedNumbers.reduce((a, b) => Math.max(a, b));
		const maxNumberCopy = addedNumbers.reduce(function(a, b) {
			return Math.max(a, b);
		});
		const maxNumberCopyV2 = Math.max.apply(Math, addedNumbers);

		document.getElementById("maxNumber").innerText = maxNumber + " é igual "
			+ maxNumberCopy + "=" + maxNumberCopyV2;
	}
}
