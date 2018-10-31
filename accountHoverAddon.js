checkIfLoadedAlready();
addClassToAccountLink();
actionWhenHoveringClass("ta-hover-load", insertTableInWindow);
populateTableWithRecentTickets();

function checkIfLoadedAlready() {

}

function addClassToAccountLink() {
    var element = document.getElementById("cas4_ileinner");
    element.classList.add("ta-hover-load");
}

function actionWhenHoveringClass(className, action) {
	var element = document.getElementsByClassName(className)[0];
	element.addEventListener("mouseover", action);
}

function insertTableInWindow() {
	console.log("Hovered");
	var element = document.getElementsByClassName("accountBlock topLeft")[0];
	console.log(element);
}

function populateTableWithRecentTickets() {

}