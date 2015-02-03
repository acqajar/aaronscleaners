function myFunction() {
	var x =document.getElementById("mySelect").selectedIndex;
	alert(document.getElementByTagName("option")[x].value);
}