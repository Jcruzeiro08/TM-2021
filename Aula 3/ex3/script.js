// Your JS Script here
window.onload = function (){
    console.log("Página Iniciada")

    for(let elem of document.getElementsByTagName('td')){

        elem.onclick = (clickedEvent)=>{
            const response = prompt("Novo valor do TD?")
            const elementHtmlTD = clickedEvent.target;
            elementHtmlTD.style.backgroundColor = "green";
            elementHtmlTD.innerText = response;
        }
    }
}

function getAtributes(){
    const linkElement = document.getElementsByTagName('a')[0];
    const listOfProps = document.getElementsByTagName('ul')[0];


    for(var i=0; i< linkElement.attributes.length; i++){
        const item = linkElement.attributes[i]
        listOfProps.appendChild(createdLi(item.name,item.value))
    }

    // listOfProps.appendChild(createLi("id",linkElement));
    //listOfProps.appendChild(createLi("href",linkElement));
    //listOfProps.appendChild(createLi("type",linkElement));
    //listOfProps.appendChild(createLi("target",linkElement));


}

function createdLi(paraName, linkElement){
    const itemOfProps = document.createElement("li");
    itemOfProps.innerText =  paraName+": " + linkElement;
    return itemOfProps;
}

function changeColorTitles() {
    for(let elem of document.getElementsByClassName("titulo")){
        elem.style.color = "red";
    }
}