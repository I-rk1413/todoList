var button = document.getElementsByClassName("Add")[0];
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var Del=document.getElementsByClassName('delete')[0];
var dateInput=document.getElementById("dateInput");



// If you click on the list item, it toggles the .done  class on and off.


// ul.onclick = function(e){
// 	var target = e.target;
// 	console.log(target);
// 	target.classList.toggle("done");
// }


// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
Del.onclick=function(){
	Del.parentNode.remove();
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);


	var date=document.createElement('span');
	date.appendChild(document.createTextNode(dateInput.value));
	li.appendChild(date);


	button2 = document.createElement("button");
	button2.appendChild(document.createTextNode('Done'));
	li.appendChild(button2);
	input.value = "";

	button2.addEventListener("click", function(){
           li.style.display='none';
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

