// Your JS Script here

window.onload = function() {
	for (let elem of document.getElementsByTagName('td')) {
		elem.onclick = (clickedEvent) => {
			const response = prompt("Novo valor do TD?");
			const elementHtmlTD = clickedEvent.target
			elementHtmlTD.style.backgroundColor = "green";
			elementHtmlTD.innerText = response;
		}
	}
}

function getAttributes() {
	const linkElement = document.getElementsByTagName('a')[0];
	const listOfProps = document.getElementsByTagName('ul')[0];

	for (let i = 0; i < linkElement.attributes.length; i++) {
		const item = linkElement.attributes[i]
		listOfProps.appendChild(createdLi(item.name, item.value))
	}

	// listOfProps.appendChild(createdLi("id",linkElement))
	// listOfProps.appendChild(createdLi("href",linkElement))
	// listOfProps.appendChild(createdLi("type",linkElement))
	// listOfProps.appendChild(createdLi("target",linkElement))
}

function createdLi(paramName, linkElement) {
	const itemOfProps = document.createElement("li");
	itemOfProps.innerText = paramName + ": " + linkElement
	return itemOfProps
}

function changeColorTitles() {
	for (let elem of document.getElementsByClassName('titulo')) {
		elem.style.color = "red";
	}
}



