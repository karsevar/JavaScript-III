/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: Also called window binding since through only writing the 
					console.log(this) you can look into the entire window of 
					the JavaScript program. In my words, I can say that the 'this'
					keyword written within a function binding can be defined as 
					looking into the window binding. 

					example:
					
					let name = 'mason';

					function sayName() {
						console.log(this);
					} 

					// 'mason'

					As you can see 'this' looked one level below the function 
					sayName and printed the name variable defined in the global
					scope.

* 2. Implicit Binding: Implicit binding is primarily used within objects in the 
						creation of methods or prototype methods that use the binding 
						object's attributes. 

						example:

						const myCat = {
							name: 'kittenDude',
							speak: function() {
								return `${this.name} speaks`;
							}
						}

						myCat.speak()

						As you can see the speak method is pointing to the 
						name attribute contained in the myCat object binding
						(which is the parent binding of the speak method).

* 3. New Binding: The new binding principle only occurs with the command 
					new <constructor function>(Attributes). 

					example: 
					function Cat(catAttributes) {
					  Animal.call(this, catAttributes);
					  this.name = catAttributes.name;
					  this.favoriteToy = catAttributes.favoriteToy;
					}
}

					Cat.prototype = Object.create(Animal.prototype);

					Cat.prototype.plays = function() {
					  return `${this.name} plays with ${this.favoriteToy}`;
					}

					const newCat = new Cat({
					  'name': 'Commodore Decker',
					  'animalCommonName': "cat",
					  'weight': 10,
					  'height': 4,
					  'food': 'catnip',
					  'favoriteToy': 'dice!'
					}); 

					As you can see in the code snippet above the this binding 
					is created through the new Cat() command and it points to 
					the attributes within the newCat object as well as the parent 
					object 'Animal'.

* 4. Explicit Binding: Can be described as a work around solution in that you 
						can bind this to any object you desire through the methods 
						apply, call, and bind. 

						example: 

						const yourObject = {
						  name: 'Mason Karsevar',
						  city: 'Spokane',
						  favoriteFood: '🍕'
						};

						const thingsYouEnjoy = ['Hiking', 'JavaScript', 'Teaching'];

						function tellUsAboutYourself(thing1, thing2, thing3){
  							return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
						}

						console.log(tellUsAboutYourself.call(yourObject, ...thingsYouEnjoy));

						In this example I used .call() to set the this to point towards 
						the object 'yourObject'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this);

// Principle 2

// code example for Implicit Binding

const myCat = {
	name: 'kittenDude',
	speak: function() {
		return `${this.name} says hello!`;
	}
}

console.log(myCat.speak());

// Principle 3

// code example for New Binding

function Animal(attributes) {
  this.weight = attributes.weight;
  this.height = attributes.height;
  this.food = attributes.food;
  this.animalCommonName = attributes.animalCommonName;
  this.food = attributes.food
}

Animal.prototype.eat = function() {
  console.log(`The ${this.animalCommonName} eats ${this.food}.`);
}

function Cat(catAttributes) {
  Animal.call(this, catAttributes);
  this.name = catAttributes.name;
  this.favoriteToy = catAttributes.favoriteToy;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.plays = function() {
  return `${this.name} plays with ${this.favoriteToy}`;
}

const newCat = new Cat({
  'name': 'Commodore Decker',
  'animalCommonName': "cat",
  'weight': 10,
  'height': 4,
  'food': 'catnip',
  'favoriteToy': 'dice!'
});

console.log(newCat.animalCommonName); 
newCat.eat(); 
console.log(newCat.plays());

// Principle 4

// code example for Explicit Binding

favoriteVideoGames = ['Super Smash Bros', 'Space Station Silicon Valley', 'Chameleon Twist'];

mySelf = {
	name: 'Mason',
	age: 12
}

function twilightZone (game1, game2, game3) {
	return `${this.name} age ${this.age} while being immersed in a day filled with playing ${game1}, ${game2}, and ${game3} will embark on a journey. No, not the average journey that most people his age has to endure but one that encapsulates the darkest corners of the twilight zone!`; 
}

console.log(twilightZone.call(mySelf, ...favoriteVideoGames));