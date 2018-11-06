//checkIfLoadedAlready();
addClassToAccountLink();
actionWhenHoveringClass(insertTableAfterPopupLoads, "ta-hover-load");
//console.log(currentAccountLink());

/** *********************************** **/
/** START: Setting Up And Checking Page **/
/** *********************************** **/
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

function getCustomTableElement() {
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

		var customTable = getCustomTableElement();
		lastOriginalTable.parentNode.insertBefore(customTable, lastOriginalTable.nextSibling);

		//Need the value after the forward slash, since it is used for various pages related to the account. 
		console.log(getRowData(currentAccountLink().split(".com/")[1]));
	}
}
/** ********************************** **/
/** END: Setting Up And Checking Page  **/
/** ********************************** **/

/** *************************************** **/
/** START: Getting Links And Data With AJAX **/
/** *************************************** **/

function currentAccountLink() {
	return document.getElementById("cas4_ileinner").getElementsByTagName("a")[0].href;
}

function getRowData(accountURL) {
	var fullURL = "https://visier.my.salesforce.com/500?rlid=RelatedCaseList&id=" + accountURL;
	getHTML( fullURL, function (response) {
		var accountName = response.getElementsByClassName("listRelatedObject caseBlock")[0];
		console.log(accountName);
		return accountName;
	});

}

//Gets the HTML document of a page
var getHTML = function ( url, callback ) {
	// Feature detection
	if ( !window.XMLHttpRequest ) return;
	// Create new request
	var xhr = new XMLHttpRequest();
	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof( callback ) === 'function' ) {
			callback( this.responseXML );
		}
	}
	//Get the HTML document for the customer page.
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();
};
/** ************************************** **/
/** END: Getting Links And Data With AJAX  **/
/** ************************************** **/