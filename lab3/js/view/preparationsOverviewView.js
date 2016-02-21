//ExampleView Object constructor
var PreparationsOverviewView = function (container, model) {


    model.addObserver(this);
    function setHtml() {
        var fullMenu = model.getFullMenu();

        fullMenu.forEach(function(meal) {
            var row = $('<div>').addClass("meal-preparation").addClass("row");
            row.append($('<img>').attr('src', 'images/' + meal.image).addClass("col-md-4"));


            var middleColumn = $('<div>').addClass("col-md-4");
            middleColumn.append($('<h3>').append(meal.name));
            middleColumn.append($('<p>').append(meal.description));
            row.append(middleColumn);


            var prepColumn = $('<div>').addClass("col-md-4");
            prepColumn.append($('<h3>').append("Preparations"));
            prepColumn.append($('<p>').append(meal.description));
            row.append(prepColumn);

            container.append(row);

        });
    }
    setHtml();

    this.update = function() {
        container.empty();
        setHtml();
    }

};
