function updateOrder() {
	const SHIRTPRICE = 1.2;
	const PANTPRICE = 1.0;
	const BLAZERPRICE = 2.0;
	const SLACKPRICE = 1.2;
	const TUXPRICE = 2.5;
	const TAXRATE = .0925;

	var numShirts = parseInt(document.getElementById("shirts").value);
	var numPants = parseInt(document.getElementById("pants").value);
	var numBlazers = parseInt(document.getElementById("blazers").value);
	var numSlacks = parseInt(document.getElementById("slacks").value);
	var numTux = parseInt(document.getElementById("tux").value);
	var subTotal = (numShirts*SHIRTPRICE) + (numPants*PANTPRICE) + (numBlazers*BLAZERPRICE) + (numSlacks*SLACKPRICE) + (numTux*TUXPRICE);
	var tax = subTotal*TAXRATE;
	var total = subTotal + tax;
	document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
	document.getElementById("tax").value = "$" + tax.toFixed(2);
	document.getElementById("total").value = "$" + total.toFixed(2);
}

// function placeOrder () {
// 	if document.getElementById("name").value == "")
// 		alert("I'm sorry but you must provide your name before submitting and order.");
// 	form.submit();
//file:///Users/arsamesqajar/Downloads/Head%20First%20JavaScript.pdf
// }

