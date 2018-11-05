//checkIfLoadedAlready();
addClassToAccountLink();
actionWhenHoveringClass(insertTableInPopup, "ta-hover-load");

function addClassToAccountLink() {
    var element = document.getElementById("cas4_ileinner");
    element.classList.add("ta-hover-load");
}

function actionWhenHoveringClass(action, className) {
	var element = document.getElementsByClassName(className)[0];
	element.addEventListener("mouseover", action);
}

function insertTableInPopup() {
	console.log("Hovered");
	insertTableAfterPopupLoads();
}

function insertTableAfterPopupLoads() {
	if(!popupIsLoaded()) {
    	window.setTimeout(insertTableAfterPopupLoads, 200);
    } 
    if (popupIsLoaded()) {
    	insertTable();
    }

}

function insertTable() {
	//Used to check if already loaded the table. 
	var tempClass = document.getElementsByClassName("bPageBlock brandSecondaryBrd bDetailBlock secondaryPalette")[0];

	if (!tempClass.classList.contains("ta-table-appended")) {
		tempClass.className += " ta-table-appended";
		var referenceNode = document.getElementsByClassName("accountBlock topLeft")[0];
		var lastOriginalTable = referenceNode.getElementsByClassName("pbBody")[0].getElementsByClassName("detailList")[0];

		var div = document.createElement("table");
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.color = "black";
		div.innerHTML = "Hello"

		lastOriginalTable.parentNode.insertBefore(div, lastOriginalTable.nextSibling);
	}
}

function popupIsLoaded() {
	var element = document.getElementsByClassName("labelCol last");
	var textIndicator = "Parent Account";
	var popupLoaded = false;
	for (var i = 0; i < element.length; i++) {
		if (element[i].textContent == textIndicator) {
			popupLoaded = true; 
			break;
		}
	}
	return popupLoaded;
}