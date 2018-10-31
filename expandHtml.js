//The addon makes the text box height bigger everytime you click it.
var textBoxHeight = document.querySelectorAll('[title="HTML Body"]')[0].offsetHeight;
var textBox = document.querySelectorAll('[title="HTML Body"]')[0];
document.querySelectorAll('[title="HTML Body"]')[0].style.setProperty('height', textBoxHeight+150+'px','');
