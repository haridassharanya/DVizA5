/**
 * @author Sharanya Haridas
 */

/*Project Steps:
 * 1. Set up document ready
 * 2. Load Google Viz library,Google charts package
 * 3.Load data
 * 4.Render chart
 */

/*page loaded function, responds to document ready*/

function dataLoaded(unempData){
	
	
	var myObsArray =unempData.observations;
	console.log(myObsArray);
	var myDataList = [];
	
	var myHeader = ["Date", "Unemployment"];
	
	myDataList.push(myHeader);
	
	
	//converting json data to an array of arrays 
	//using a for loop
	//this is to create my vizualization
	
	for(var i=0; i<myObsArray.length; i++){
		
		var myObsObj = myObsArray[i];
		var myDataArray = [myObsObj.date, myObsObj.value];
		myDataList.push(myDataArray);
		
	}
	
console.log(myDataList);

 var options = {
          title: "Unemployment Data Over Time"
        };

//data table object
var myDataTable = google.visualization.arrayToDataTable(myDataList);

//document.getelementbyid is the equivalent of jquery's $ sign with div name
var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));
   
   myChart.draw(myDataTable, options);    

}


function googleVizloaded(){
	
	console.log("google viz loaded!");
	
	//get function for loading data
	
	$.get("UEMP270V_data.json", dataLoaded, "json");
}

function pageDone(){
	console.log("page done!");
	
	//load google charting package
	
	google.load("visualization", "1", {packages:["corechart"], "callback":googleVizloaded});
}


/*document ready function*/

$(document).ready(pageDone);
