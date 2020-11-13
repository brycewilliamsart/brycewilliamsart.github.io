/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable name animal and assign it to an empty object
var animal = {};
//use dot notation to give animal a species property with the value
//of any animal species
animal.species = 'cat';
//use bracket notation to give a property of name
animal['name'] = 'China';
//give animal a property of nosies
//nosies is assigned an empty array
animal.noises = [];

//print the object with console.log
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named nosies and assign to an empty array
var noises = [];
//Use bracket notation to assign nosies it's first element - a string
//that is a noise the animal would make
noises[0] = 'meow';
//use an array method to add a sound to the end of the array
noises.push('glare');
//use array method unshift() to add another sound to the beggining of the nosies array
noises.unshift('purr');
//use bracket notation to add a noise to the end of the array
//do not hard code the position
noises[noises.length] = 'grr';



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket notation to add the new noises array to the value of 
//noises in the aniaml object
animal['noises'] = noises; 
//add another sound to the noises property on aniaml
animal.noises.push('coo');



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable names aniamls assigned ot an empty array
var animals = [];
//push the animal we created into the new array
animals.push(animal);
//create a duck variable and assign it the provided values
var duck ={
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck); 
//create two more animal objects to add to the animals
//they must each have two sounds
var dragon ={
    species: 'dragon', 
    name: 'Smaug', 
    noises: ['ROAR', 'Fire']
};

var cow ={
    species: 'cow', 
    name: 'Bessie', 
    noises: ['moo', 'fart']
};

animals.push(dragon, cow);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an array to hold a friends list
var friends = [];
//write a function called getRandom
//It takes an index from the friends list
function getRandom(animals){
    let friend = animals[Math.floor(Math.random() * animals.length)];
    //add a random animal to the friends array
    return friends.push(friend)
}
//assign the friends array to one of the animals in the animals array
animals[0].friends = friends; 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}