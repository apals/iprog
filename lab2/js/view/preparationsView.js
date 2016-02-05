//ExampleView Object constructor
var PreparationsView = function (container, model) {

	var dishDescription = [model.getDish(1), model.getDish(100)];

	var result = dishDescription.map(function(a) {return a.description;});

	var prepSteps = [];

	for (var i = result.length - 1; i >= 0; i--) {
		prepSteps.push.apply(prepSteps, result[i].split(". "));
	};

    //var prepSteps = ["Do this thing first", "Then do this thing", "Finally pls do this or u suck"];
    var prepForm = container.find("#prep-form");
	var list = $("<ol>");

	console.log(result[0]);

	prepSteps.reverse();

	for (var i = prepSteps.length - 1; i >= 0; i--) {
		var li = $("<li>");
		list.append(
				li.append(prepSteps[i]).attr("href", "#")
			);
	};

	prepForm.append("This is how to do it:");
	prepForm.append(list);

};