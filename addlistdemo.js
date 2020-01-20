function addList() {
	//var tt= myfun(event);
	//console.log(tt);
	
	var textNode=document.getElementById("t1").value;
	var li=document.createElement('li');
	li.append(textNode);
	document.getElementById("ul1").append(li);
	
}
function keyboardenter(event) {
	
	if(event.keyCode===13)//13 is value of enter key
	{
		addList();
	}
}
/*function myfun(event) {
	// body...
	var t=event.target.value;
	return t;
	//console.log(t);
}*/