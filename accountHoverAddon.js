//checkIfLoadedAlready();
addClassToAccountLink();
actionWhenHoveringClass(insertTableInPopup, "ta-hover-load");
populateTableWithRecentTickets();


function checkIfLoadedAlready() {
	console.log("Checking if loaded. ");
}

function tableLoadedAlready() {
	return false;
}

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
	var element = document.getElementsByClassName("accountBlock topLeft")[0];
	console.log(popupIsLoaded());
	waitUntilPopupIsLoaded();
	checkIfLoadedAlready();
}

function waitUntilPopupIsLoaded() {
	if(!popupIsLoaded()) {
       window.setTimeout(waitUntilPopupIsLoaded, 200);
    } else {
      console.log("Popup loaded. ");
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

function populateTableWithRecentTickets() {

}