//ExampleView Object constructor
var PreviousView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var previousList = container.find("#prevparties");
	
	var parties = ["party 1", "party2"];

	previousList.html("Previous parties yolo");

	var list = $("<ul>");

	for (var i = parties.length - 1; i >= 0; i--) {
		var li = $("<li>");
		list.append(
				li.append(parties[i]).attr("href", "#")
			);
	};

	previousList.append(list);
	
}
 
