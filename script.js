var button = document.getElementsByClassName("Add")[0];
var input = document.getElementById("userinput");
const table=document.querySelector('table');
const tbody=document.querySelector('tbody');
var Del=document.getElementsByClassName('delete')[0];
var dateInput=document.getElementById("dateInput");



// If you click on the list item, it toggles the .done  class on and off.


// ul.onclick = function(e){
// 	var target = e.target;
// 	console.log(target);
// 	target.classList.toggle("done");
// }


// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// Del.onclick=function(){
// 	Del.parentNode.remove();
// }


function inputLength() {
	return input.value.length;
}

function createListElement() {

	var tr = document.createElement("tr");
	 tr.innerHTML=`<th>1</th><td>${input.value}</td><td>${dateInput.value}</td><td><button id='button2'>Done</button></td>`;
	tbody.appendChild(tr);
	input.value = "";
	let button2=document.getElementById('button2');
	button2.addEventListener("click", function(){
           tr.style.display='none';
});

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}






button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

