/**
 * @author Sharanya Haridas
 */

//This project generates a google visualization from a json file

/*Project Steps:
 * 1. Set up document ready
 * 2. Load Google Viz library,Google charts package
 * 3.Load data
 * 4.Render chart
 */

function dataLoad(UNEMP){
	
	
	var mObsArray =UNEMP.observations;
	console.log(mObsArray);
	var mDataList = [];
	
	var mHeader = ["Date", "Unemployment"];
	
	mDataList.push(mHeader);
	
	
	//converting json data to an array of arrays 
	//using a for loop
	//this is to create my vizualization
	
	for(var i=0; i<mObsArray.length; i++){
		
		var mObsObj = mObsArray[i];
		var mDataArray = [mObsObj.date, Number(mObsObj.value)];
		mDataList.push(mDataArray);
		

		
	}
	
	
console.log(mDataList);

 var options = {
          title: "Unemployment Data Over Time"
        };

//data table object
var mDataTable = google.visualization.arrayToDataTable(mDataList);

//document.getelementbyid is the equivalent of jquery's $ sign with div name
var mChart = new google.visualization.LineChart(document.getElementById("mChartDiv"));
   
   mChart.draw(mDataTable, options);    

}


function gVizloaded(){
	
	console.log("google viz loaded!");
	
	//get function for loading data
	
	$.get("UEMP270V_data.json", dataLoad, "json");
}

function Done(){
	console.log("page done!");
	
	//load google charting package
	
	google.load("visualization", "1", {packages:["corechart"], "callback":gVizloaded});
}


/*document ready function*/

$(document).ready(Done);
