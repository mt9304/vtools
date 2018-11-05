//checkIfLoadedAlready();
addClassToAccountLink();
actionWhenHoveringClass(insertTableAfterPopupLoads, "ta-hover-load");
console.log(currentAccountLink());

/** START: Setting Up And Checking Page **/
function addClassToAccountLink() {
    var element = document.getElementById("cas4_ileinner");
    element.classList.add("ta-hover-load");
}

function actionWhenHoveringClass(action, className) {
	var element = document.getElementsByClassName(className)[0];
	element.addEventListener("mouseover", action);
}

function insertTableAfterPopupLoads() {
	if(!popupIsLoaded()) {
    	window.setTimeout(insertTableAfterPopupLoads, 200);
    } 
    if (popupIsLoaded()) {
    	insertTable();
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

function customTableElement() {
		var custTable = document.createElement("table");
	 		custTable.className += " list";

		var custTableBody = document.createElement("tbody");

		var custHeaderRow = document.createElement("tr");
	 		custHeaderRow.className += " headerRow";

		var custTableHeader1 = document.createElement("th");
		 	custTableHeader1.className += " zen-deemphasize";
		 	custTableHeader1.textContent = "Support Ticket";

 		var custTableHeader2 = document.createElement("th");
		 	custTableHeader2.className += " zen-deemphasize";
		 	custTableHeader2.textContent = "Contact Name";

		var custTableHeader3 = document.createElement("th");
		 	custTableHeader3.className += " zen-deemphasize";
		 	custTableHeader3.textContent = "Subject";

		var custTableHeader4 = document.createElement("th");
		 	custTableHeader4.className += " zen-deemphasize";
		 	custTableHeader4.textContent = "Status";

		var custTableHeader5 = document.createElement("th");
		 	custTableHeader5.className += " zen-deemphasize";
		 	custTableHeader5.textContent = "Owner";

		var custBodyRow = document.createElement("tr");
	 		custBodyRow.className += " dataRow";
		var custBodyCell = document.createElement("td");
	 		custBodyCell.className += " dataCell";

		custBodyRow.appendChild(custBodyCell);

		//Insert td elements for cell.

		custHeaderRow.appendChild(custTableHeader1);
		custHeaderRow.appendChild(custTableHeader2);
		custHeaderRow.appendChild(custTableHeader3);
		custHeaderRow.appendChild(custTableHeader4);
		custHeaderRow.appendChild(custTableHeader5);

		custTableBody.appendChild(custHeaderRow);
		custTableBody.appendChild(custBodyRow);
		custTable.appendChild(custTableBody);

		return custTable;
}

function insertTable() {
	//Used to check if already loaded the table. 
	var tempClass = document.getElementsByClassName("bPageBlock brandSecondaryBrd bDetailBlock secondaryPalette")[0];

	if (!tempClass.classList.contains("ta-table-appended")) {
		tempClass.className += " ta-table-appended";
		var referenceNode = document.getElementsByClassName("accountBlock topLeft")[0];
		var lastOriginalTable = referenceNode.getElementsByClassName("pbBody")[0].getElementsByClassName("detailList")[0];

		var customTable = customTableElement();
		lastOriginalTable.parentNode.insertBefore(customTable, lastOriginalTable.nextSibling);

		
	}
}
/** END: Setting Up And Checking Page  **/

/** START: Getting Links And Data With AJAX **/

function currentAccountLink() {
	return document.getElementById("cas4_ileinner").getElementsByTagName("a")[0].href;
}

/** END: Getting Links And Data With AJAX  **/