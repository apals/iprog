//ExampleView Object constructor
var PreparationsOverviewView = function (container, model) {


    model.addObserver(this);
    function setHtml(data) {
        var fullMenu = model.getFullMenu();
        console.log(fullMenu);

        fullMenu.forEach(function(meal) {
            console.log(meal);
            var row = $('<div>').addClass("meal-preparation").addClass("row");
            row.append($('<img>').attr('src', 'images/bakedbrie.jpg').addClass("col-md-4"));


            var middleColumn = $('<div>').addClass("col-md-4");
            middleColumn.append($('<h3>').append(meal.Title));
            middleColumn.append($('<p>').append(meal.Description));
            row.append(middleColumn);


            var prepColumn = $('<div>').addClass("col-md-4");
            prepColumn.append($('<h3>').append("Preparations"));
            prepColumn.append($('<p>').append(meal.Instructions));
            row.append(prepColumn);

            container.append(row);

        });
    }
    setHtml();

    this.update = function(data) {
        container.empty();
        setHtml(data);
    }

};
