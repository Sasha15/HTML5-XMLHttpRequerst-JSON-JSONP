
var lastReportTime = 0;

window.onload = function() {
	//setInterval(handlerRefresh, 3000);
}
function updateSales(sales){
	var salesDiv = document.getElementById("sales");

	// going through the array, get each element, create for each element div
	// insert text from each element
	for( var i = 0; i < sales.length; i++){
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}

function handlerRefresh () {
	//random parameter is need to avoid caching the url by browser
	var url = "http://gumball.wickedlysmart.com" +
			"?callback=updateSales" +
			"&lastreporttime=" + lastReportTime +
			"&random="+ (new Date()).getTime();

	//each 3 seconds script tag will be created
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src",url);
	newScriptElement.setAttribute("id","jsonp");

	//check if tag script with id jsonp is already exist
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		// if doesn't exist yet than add script
		head.appendChild(newScriptElement);
	} else {
		// if alredy exist, replace old script with new one
		head.replaceChild(newScriptElement, oldScriptElement);
	}
	if(sales.length > 0) {
		lastReportTime = sales[sales.length-1].time;
	}
}