'use strict';

//DinnerModel Object constructor
var DinnerModel = function () {

    //TODO Lab 2 implement the data structure that will hold number of guest
    // and selected dinner options for dinner menu

    //TODO - Add dish to menu is bugged, does not splice correctly
    const URL = "http://api.bigoven.com";
    const api_key = "?api_key=18f3cT02U9f6yRl3OKDpP8NA537kxYKu&pg=1&rpp=6";

    this.numberOfGuests = 1;
    this.fullMenu = [];
    this.nameOfParty = "";
    var observers = [];
    this.currentSearch = "";
    this.currentType = "";
    this.inspectedDishId = 1;
    this.currentId = 1;


    this.generateTestParty = function () {
        this.numberOfGuests = 8;
        this.nameOfParty = "Elite Dinner";
        this.addDishToMenu(1);
        this.addDishToMenu(100);
        this.addDishToMenu(200);
    };

    /*****************************************
     Observable implementation
     *****************************************/
    this.addObserver = function (observer) {
        observers.push(observer);
    };

    var notifyObservers = function (data) {
        console.log("notifying everyone..");
        for (var i = 0; i < observers.length; i++) {
            observers[i].update(data);
        }
    };

    this.setCurrentId = function (num) {
        this.currentId = num;
        notifyObservers();
    };

    this.getCurrentId = function () {
        return this.currentId;
    };

    this.setNumberOfGuests = function (num) {
        this.numberOfGuests = num;
        notifyObservers();
    };

    // should return
    this.getNumberOfGuests = function () {
        return this.numberOfGuests;
    };


    this.setPartyName = function (name) {
        this.nameOfParty = name;
        notifyObservers();
    };

    this.getPartyName = function () {
        return this.nameOfParty;
    };


    this.setCurrentSearch = function (s) {
        this.currentSearch = s;
        notifyObservers();
    };

    this.getCurrentSearch = function () {
        return this.currentSearch;
    };


    this.setType = function (type) {
        this.currentType = type;
        notifyObservers();
    }

    this.getType = function () {
        return this.currentType;
    }


    /*========= End variable getters and setters =========*/


    //Returns the dish that is on the menu for selected type
    this.getSelectedDish = function (type) {
        for (var i = 0; i < this.fullMenu.length; i++) {
            if (type === this.fullMenu[i].type) {
                return this.fullMenu[i];
            }
        }
    };

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return this.fullMenu;
    };

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {
        var ingredients = [];
        for (var i = 0; i < this.fullMenu.length; i++) {
            for (var j = 0; j < this.fullMenu[i].Ingredients; j++) {
                ingredients.push(this.fullMenu[i].Ingredients[j]);
            }
        }
        return ingredients;
    };

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var totalMenuPrice = 0;
        for (var i = 0; i < this.fullMenu.length; i++) {
            for (var j = 0; j < this.fullMenu[i].Ingredients.length; j++) {
                totalMenuPrice += 1;
            }
        }
        return totalMenuPrice;
    };

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getDishPrice = function (id) {
        var totalDishPrice = 0;
        /*for (var i = 0; i < dishes.length; i++) {
            if (dishes[i].id == id) {
                for (var j = 0; j < dishes[i].ingredients.length; j++) {
                    totalDishPrice += dishes[i].ingredients[j].price;
                }
            }

        }*/
        return totalDishPrice;
    };

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        console.log("Add dish to menu with id : " + id);
        var type;

        var xmlhttp = new XMLHttpRequest();

        console.log("Get alld ishes");


        xmlhttp.onreadystatechange = (function (x, menu) {
            return function () {
                console.log("yeah");
                if (x.readyState == 4 && x.status == 200) {
                    for (var i = 0; i < menu.length; i++) {
                        if (menu[i].type === type) {
                            //remove
                            menu.splice(i, 1);
                        }
                    }

                    //add the new one
                    menu.push(JSON.parse(x.responseText));
                    console.log(JSON.parse(x.responseText));

                    notifyObservers(JSON.parse(x.responseText));
                }
            }
        })(xmlhttp, this.fullMenu);

        xmlhttp.open("GET", URL + "/recipe/" + id + api_key, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send();


    };

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        for (var i = 0; i < this.fullMenu.length; i++) {
            if (this.fullMenu[i].id === id.id) {
                this.fullMenu.splice(i, 1);
            }
        }
        notifyObservers();
    };

    this.getCurrentList = function () {
        return this.getAllDishes(this.currentType, this.currentSearch);
    };


    function doGet(url) {



        var xmlhttp = new XMLHttpRequest();



        xmlhttp.onreadystatechange = (function (x) {
            return function () {
                console.log("yeah");
                if (x.readyState == 4 && x.status == 200) {
                    //console.log(x.responseText);
                    var json = JSON.parse(x.responseText);
                    notifyObservers(json);
                }
            }
        })(xmlhttp);

        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send();
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {

        doGet(URL + "/recipes" + api_key + "&any_kw=" + type);

        return $(dishes).filter(function (index, dish) {
            var found = true;
            if (filter) {
                found = false;
                $.each(dish.ingredients, function (index, ingredient) {
                    if (ingredient.name.indexOf(filter) != -1) {
                        found = true;
                    }
                });
                if (dish.name.indexOf(filter) != -1) {
                    found = true;
                }
            }
            return dish.type == type && found;
        });
    };

    //function that returns a dish of specific ID
    this.getDish = function (id) {

        doGet(URL + "/recipe/" + id + api_key);


        var key;
        for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }
    };


    // the dishes variable contains an array of all the
    // dishes in the database. each dish has id, name, type,
    // image (name of the image file), description and
    // array of ingredients. Each ingredient has name,
    // quantity (a number), price (a number) and unit (string
    // defining the unit i.e. "g", "slices", "ml". Unit
    // can sometimes be empty like in the example of eggs where
    // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
    var dishes = [{
        'id': 1,
        'name': 'French toast',
        'type': 'starter',
        'image': 'toast.jpg',
        'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
        'ingredients': [{
            'name': 'eggs',
            'quantity': 0.5,
            'unit': '',
            'price': 10
        }, {
            'name': 'milk',
            'quantity': 30,
            'unit': 'ml',
            'price': 6
        }, {
            'name': 'brown sugar',
            'quantity': 7,
            'unit': 'g',
            'price': 1
        }, {
            'name': 'ground nutmeg',
            'quantity': 0.5,
            'unit': 'g',
            'price': 12
        }, {
            'name': 'white bread',
            'quantity': 2,
            'unit': 'slices',
            'price': 2
        }]
    }, {
        'id': 2,
        'name': 'Sourdough Starter',
        'type': 'starter',
        'image': 'sourdough.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'active dry yeast',
            'quantity': 0.5,
            'unit': 'g',
            'price': 4
        }, {
            'name': 'warm water',
            'quantity': 30,
            'unit': 'ml',
            'price': 0
        }, {
            'name': 'all-purpose flour',
            'quantity': 15,
            'unit': 'g',
            'price': 2
        }]
    }, {
        'id': 3,
        'name': 'Baked Brie with Peaches',
        'type': 'starter',
        'image': 'bakedbrie.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'round Brie cheese',
            'quantity': 10,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'raspberry preserves',
            'quantity': 15,
            'unit': 'g',
            'price': 10
        }, {
            'name': 'peaches',
            'quantity': 1,
            'unit': '',
            'price': 4
        }]
    }, {
        'id': 100,
        'name': 'Meat balls',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
        'ingredients': [{
            'name': 'extra lean ground beef',
            'quantity': 115,
            'unit': 'g',
            'price': 20
        }, {
            'name': 'sea salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'small onion, diced',
            'quantity': 0.25,
            'unit': '',
            'price': 2
        }, {
            'name': 'garlic salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 2
        }, {
            'name': 'Italian seasoning',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'dried oregano',
            'quantity': 0.3,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'crushed red pepper flakes',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'Worcestershire sauce',
            'quantity': 6,
            'unit': 'ml',
            'price': 7
        }, {
            'name': 'milk',
            'quantity': 20,
            'unit': 'ml',
            'price': 4
        }, {
            'name': 'grated Parmesan cheese',
            'quantity': 5,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'seasoned bread crumbs',
            'quantity': 15,
            'unit': 'g',
            'price': 4
        }]
    }, {
        'id': 101,
        'name': 'MD 2',
        'type': 'main dish',
        'image': 'bakedbrie.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 15,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 10,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 3',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 2,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 10,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 5,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 4',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 4
        }, {
            'name': 'ingredient 2',
            'quantity': 12,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 6,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 200,
        'name': 'Chocolate Ice cream',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Firstly, place the ice cream in a small bowl. Sprinkle some sprinkles all over that cold ice cream. Finish by adding chocolate.",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 201,
        'name': 'Vanilla Ice cream',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 202,
        'name': 'Strawberry',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }
    ];

};
