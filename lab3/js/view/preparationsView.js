//ExampleView Object constructor
var PreparationsView = function (container, model) {

    model.addObserver(this);

    container.prepend($('<h2>').append("Preparations"));
    function setHtml() {


        var result = model.getDish(model.getCurrentId()).description;

        var prepSteps = result.split(". ");


        var list = $("<ol>");

        for (var i = 0; i < prepSteps.length; i++) {
            var li = $("<li>");
            list.append(
                li.append(prepSteps[i]).attr("href", "#")
            );
        }

        container.append(list);
    }


    this.update = function () {
        container.empty();
        setHtml();
    };

};