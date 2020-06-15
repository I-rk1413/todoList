//Taking all the required variables and constants

var button = document.getElementsByClassName("Add")[0];
var input = document.getElementById("userinput");
const table=document.querySelector('table');
const tbody=document.querySelector('tbody');
var Del=document.getElementsByClassName('delete')[0];
var dateInput=document.getElementById("dateInput");




// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// Del.onclick=function(){
// 	Del.parentNode.remove();
// }


function checkLength(item) {
	return item.value.length>0 ? true : false;
}
	


//Function to create a new todo item

function createListElement() {

	var tr = document.createElement("tr");
	 tr.innerHTML=`<th>1</th><td>${input.value}</td><td>${dateInput.value}</td><td><button>Done</button></td>`;
	tbody.appendChild(tr);
	input.value = "";
	dateInput.value='';

}

//Adding the functionality of adding list item on click

function addListAfterClick() {
	let inputLengthCheck=checkLength(input);
	let dateInputLengthCheck=checkLength(dateInput);
	if (inputLengthCheck && dateInputLengthCheck) {
		createListElement();
	}
}






//Adding the event listeners of adding list item on click

button.addEventListener("click", addListAfterClick);


