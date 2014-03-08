/**
 * @author Sharanya Haridas
 */

//This project generates a google visualization from a json file
//The json file contains data from FRED and was downloaded from the lore library

/*Project Steps:
 * 1. Set up document ready
 * 2. Load Google Visualization library,Google charts package
 * 3.Load data
 * 4.Render chart
 */

//The following function loads data from the table "UNEMP"

function dataLoad(UNEMP){
	
	//mObsArray takes note of the observations in UNEMP
	
	var mObsArray =UNEMP.observations;
	console.log(mObsArray);
	//myDataList refers to a new array
	var mDataList = [];
	//mHeader is pushed to form this new array involving date and unemployment rate as the two variables
	var mHeader = ["Date", "Unemployment"];
	
	mDataList.push(mHeader);
	
	
	//The following code converts json data to an array of arrays 
	//It uses a for loop to do so and create the vizualization
	
	for(var i=0; i<mObsArray.length; i++){
		
		var mObsObj = mObsArray[i];
		var mDataArray = [mObsObj.date, Number(mObsObj.value)];
		mDataList.push(mDataArray);
		

		
	}
	
	
console.log(mDataList);

//the title of the chart is "Unemployment Data Over Time"
 var options = {
          title: "Unemployment Data Over Time"
        };

//data table object from google visualization library
var mDataTable = google.visualization.arrayToDataTable(mDataList);

//document.getelementbyid is the equivalent of jquery's $ sign with div name
var mChart = new google.visualization.LineChart(document.getElementById("mChartDiv"));
   
   mChart.draw(mDataTable, options);    

}


function gVizloaded(){
	
	console.log("google viz loaded!");
	
	//get function for loading data
	//it has 3 parameters- the file to be loaded, the function dataLoad and type of file
	
	$.get("UEMP270V_data.json", dataLoad, "json");
}

//Done function works together with document ready to successfully load  and display the visualization

function Done(){
	console.log("page done!");
	
	//load google charting package
	
	google.load("visualization", "1", {packages:["corechart"], "callback":gVizloaded});
}


/*document ready function*/

$(document).ready(Done);
