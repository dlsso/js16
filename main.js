var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree =  citrusFree;
	this.toString = function(){
		return "\n\nName: " + name + "\nCalories: " + calories + "\nVegan? " + vegan + "\nGluten free? " + glutenFree + "\nCitrus free? " + citrusFree 
	}
}

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function(){
		return "\n\nName: " + name + "\nDescription: " + description + "\nPrice: " + price + "\nIngredients " + ingredients
	}
}


var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

	this.isVegan = function(){
		v = false
		for (var i = 0; i < ingredients.length; i++) {
			if(ingredients[i].vegan === true){ v = true}
			else{ v = false; return v }
		};
		return v;
	}

	this.isGlutenFree = function(){
		gf = false
		for (var i = 0; i < ingredients.length; i++) {
			if(ingredients[i].glutenFree === true){ gf = true}
			else{ gf = false; return gf }
		};
		return gf;
	}

	this.isCitrusFree = function(){
		cf = false
		for (var i = 0; i < ingredients.length; i++) {
			if(ingredients[i].citrusFree === true){ cf = true}
			else{ cf = false; return cf }
		};
		return cf;
	}	


	this.toString = function(){
		
		return "\n\nName: " + name + "\nDescription: " + description + "\nPrice: " + price + "\nIngredients: " + ingredients
	}
}

var Order = function(plates) {
	this.plates = plates;
	this.toString = function(){
		var menuItem = "";
		for (var i = 0; i < plates.length; i++) {
			menuItem += plates[i].name + "\n";
		};
		return "Plates: \n" + menuItem
	}
}

var Menu = function(plates) {
	this.plates = plates;
	this.toString = function(){
		var menuItem = "";
		for (var i = 0; i < plates.length; i++) {
			menuItem += plates[i].name + "\n";
		};
		return "\n" + menuItem + plates
	}
}


var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
	this.toString = function(){
		return "Name: " + name + "\nDescription: " + description + "\nMenu: " + menu
	}
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
	this.toString = function(){
		return "Dietary preference: " + dietaryPreference
	}
}


var beans = new FoodItem("beans", 25, true, true, true)
var rice = new FoodItem("rice", 10, true, true, true)
var chicken = new FoodItem("chicken", 300, false, true, true)
var tortilla = new FoodItem("tortilla", 25, true, true, true)

var avacado = new FoodItem("avacado", 25, true, true, true)
var lime = new FoodItem("lime", 10, true, true, false)
var tomato = new FoodItem("tomato", 300, true, true, true)
var chips = new FoodItem("chips", 25, true, false, true)

var tequilla = new FoodItem("tequilla", 75, true, true, true)


var burrito = new Plate("Giant Burrito", "This is a giant burrito.", 4.99, [beans, rice, chicken, tortilla])
var guacamole = new Plate("Guacamole", "Chip dip", 3.00, [avacado, lime, tomato, chips])
var margarita = new Drink("Margarita", "Lime margarita", 4.00, [tequilla, lime])

var mainMenu = new Menu([burrito, guacamole, margarita])

var restaurant = new Restaurant('Juan\'s', 'Cheap food and drinks', mainMenu)



$(document).on('ready', function() {



});



// the Menu object should call toString on each of its plates to reuse that functionality instead of having to duplicate the code for each plate


// var Student = function() {} 
// var sarah = new Student()



// var snake = {
//   deadSkin: 100,
//   slither: function(){
//     console.log("Sss, sss");
//     this.deadSkin +=5
//   },
//   molt: function(){
//     var oldSkin = this.deadSkin
//     this.deadSkin = 0
//     return oldSkin
// }}


var Person = function(name, age){
	this.name = name;
	this.age = age;
};

var Athlete = function(name, age, fatigue, height, weight) {
	Person.call(this, name, age)
	this.fatigue = fatigue;
	this.height = height;
	this.weight = weight;
	this.warmUp = function(){
		console.log("Ready to go!")
	};
};

var Rollerblader = function(name, age, fatigue, height, weight, isWearingHelmet, skateType) {
	Athlete.call(this, name, age, fatigue, height, weight);
	this.isWearingHelmet = isWearingHelmet;
	this.skateType = skateType;
};

var Swimmer = function(name, age, fatigue, height, weight, breath) {
	Athlete.call(this, name, age, fatigue, height, weight);
	this.breath = breath;
	this.warmUp = function(){
		console.log("Hyperventilates")
	}
};


Rollerblader.prototype = new Athlete();
Swimmer.prototype = new Athlete();
Athlete.prototype = new Person();

Rollerblader.prototype.constructor = Rollerblader;
Swimmer.prototype.constructor = Swimmer;
Athlete.prototype.constructor = Athlete;

var athList = [new Swimmer("Mark", 27, 80, 6, 180, 100), new Swimmer("Jim", "ancient", 20, 6, 150, 50)]

