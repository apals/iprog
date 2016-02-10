//ExampleView Object constructor
var PreviousView = function (container) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    var previousList = container.find("#prevparties");

    var parties = ["Martin's Wedding", "Birthday Party for Anna", "Dinner at Home", "New Year's Eve", "Christmas Day Party"];

    previousList.html("Here is a list of your previous parties:");

    var list = $("<ul>");

    for (var i = parties.length - 1; i >= 0; i--) {
        var li = $("<li>");
        list.append(
            li.append(parties[i]).attr("href", "#")
        );
    }

    previousList.append(list);

};
 
