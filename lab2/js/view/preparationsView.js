//ExampleView Object constructor
var PreparationsView = function (container, model) {

    //TODO - For each element in the menu, do its own list of ingreds, as a seperate list

    model.generateTestParty();
    container.prepend($('<h2>').append("Preparations"));

    var dishDescription = model.getFullMenu();


    var result = dishDescription.map(function (a) {
        return a.description;
    });

    var prepSteps = [];

    for (var i = result.length - 1; i >= 0; i--) {
        prepSteps.push.apply(prepSteps, result[i].split(". "));
    }


    //var prepSteps = ["Do this thing first", "Then do this thing", "Finally pls do this or u suck"];
    var prepForm = container.find("#prep-form");
    var list = $("<ol>");

    console.log(result[0]);

    prepSteps.reverse();

    console.log(prepSteps)

    for (var i = prepSteps.length - 1; i >= 0; i--) {
        var li = $("<li>");
        list.append(
            li.append(prepSteps[i]).attr("href", "#")
        );
    }


    prepForm.append("This is how to do it:");
    prepForm.append(list);

};