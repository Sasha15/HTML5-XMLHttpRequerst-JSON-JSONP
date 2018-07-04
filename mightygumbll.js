

function Movie (title, genre, rating, showtimes) {
	this.title = title;
	this.genre =  genre;
	this.rating = rating;
	this.showtimes =  showtimes;
}

var plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2, ["3:00pm", "7:00pm", "11:00pm"]);

var jsonString = JSON.stringify(plan9Movie);
var jsonMovieObject = JSON.parse(jsonString);


window.onload = function() {
	var url = "http://localhost/gumball/sales.json";
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		//check if return response status is 200 - OK
		if(request.status  == 200) {
			updateSales(request.responseText);
		}
	}
	//Set up request
	request.open("GET", url);
	//this send a request to server
	request.send(null);
}
function updateSales(responseText){
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);

	for( var i = 0; i < sales.length; i++){
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}