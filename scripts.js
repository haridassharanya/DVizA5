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
	
	console.log(unempData);
}

function googleVizloaded(){
	
	console.log("google viz loaded!");
	
	$.get("UEMP270V_data.json", dataLoaded, "json");
}

function pageDone(){
	console.log("page done!");
	
	//load google charting package
	
	google.load("visualization", "1", {packages:["corechart"], "callback":googleVizloaded});
}


/*document ready function*/

$(document).ready(pageDone);
