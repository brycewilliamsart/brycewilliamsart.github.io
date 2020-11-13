/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called search
//input: ARRAY of animal objects
//      STRING of animal name to search
//output:the aniaml's object if the STRING matches an animal's name
//      or null if no aniaml's name match
function search(animals, name){
    //loop through the array of animal objects and check the name properties
    //against the given argument name 
    for (var i = 0; i < animals.length; i++){
        if(animals[i]['name'] === name){
            return animals[i];
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++){
        if (animals[i]['name'] === name){
            animals.splice(i, 1, replacement)
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i]['name'] === name){
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    for (var i = 0; i < animals.length; i++){
        if (animal.name === animals[i].name){
            return; 
        }
    else if (animal.name.length > 0 && animal.species.length > 0){
        animals.push(animal);
    }
}
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
