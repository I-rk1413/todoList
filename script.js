//Taking all the required letiables and constants

let button = document.getElementsByClassName("Add")[0];
let input = document.getElementById("userinput");
const tbody=document.querySelector('tbody');
let dateInput=document.getElementById("dateInput");
let count=0;




// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// Del.onclick=function(){
// 	Del.parentNode.remove();
// }


function checkLength(item) {
	return item.value.length>0 ? true : false;
}
	


//Function to create a new todo item

function createListElement() {
	count+=1;
	let tr = document.createElement("tr");
	 tr.innerHTML=`<th>${count}</th><td>${input.value}</td><td>${dateInput.value}</td><td><button>Done</button></td>`;
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
	else{
		alert('Enter todo and due date')
	}
}

//Adding the event listeners of adding list item on click

button.addEventListener("click", addListAfterClick);


