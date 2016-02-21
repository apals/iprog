/**
 * Created by apals on 21/02/16.
 */


/*


 <h2>Lasagne</h2>

 <img src="images/sourdough.jpg">

 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis a massa eget fringilla. Fusce ac
 orci elit. Morbi finibus feugiat nibh id consequat. Fusce maximus mi a odio interdum finibus.
 Suspendisse fringilla placerat ligula, vel mattis magna placerat vel. Ut laoreet auctor mi nec
 venenatis. Sed id sem magna. Morbi nisl orci, dictum in tempus vitae, venenatis eget justo. Quisque
 elit
 nulla, accumsan at bibendum luctus, ornare eget augue. Aliquam gravida egestas dui, vel tempor
 lectus
 egestas at. Ut nec porttitor purus. Praesent sit amet elit lorem. Phasellus aliquet elit id mi
 facilisis, et elementum augue varius. Curabitur mattis maximus enim, nec ullamcorper tellus viverra
 nec.</p>


 */

//ExampleView Object constructor
var DetailView = function (container, model) {


    console.log(model.getFullMenu());

    var meal = model.getFullMenu()[0];
    container.append($('<h2>').append(meal.name));
    container.append($('<img>').attr("src", "images/" + meal.image));
    container.append($('<p>').addClass("small-text").append(meal.description));

};