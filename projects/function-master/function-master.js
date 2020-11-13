//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//input: an object
//output: an array
//EC: none
//create the array to hold the object values
    let arr = [];
//loop through the object and add the values to the array
    for (let key in object){
        arr.push(object[key]);
    }
//return the array
    return arr;
    
//return Object.values(object) - will return an array of the object's values
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //input: object
    //output: object key's as strings seperated by a space
    //create an array to hold the key values
    let arr= [];
    //loop through the object and add the keys to the created array
    for (let key in object){
        arr.push(key)
    }
    //return the array using .join()
    //this will return a string on the array values joined by a space
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //input: object
    //output: a string of the object's values
     //create an array to holf the values
    let arr= [];
    //loop through the object and add the values to the created array
    for (let key in object){
        //Edge Case: only return the values that are strings
        if (typeof object[key] === 'string'){
        arr.push(object[key])
        }
    }
    //return the array using .join()
    //this will return a string on the array values joined by a space
    return arr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  //input : collection either an array or an object
  //output: return the typeof the collection
  //if the collection is an array, return array
//   if(Array.isArray(collection)){
//       return 'array';
//   } 
//   //else, return object
//       return 'object'

//using the tenary operator
return Array.isArray(collection) ? 'array' : 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //input: string of on word
    //output: Capitalize the first letter of the argument string
    //uppercase the first letter and add the remaining string with slice  
   return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //input: a string of mulitple words
    //output: the string returned with all first letters Capitalized
    //use .split to seperate the string into an array by exisitng spaces
    //and assign the new array to the str variable
   let str = string.split(' ');
   //loop through the array and capilatize the first letter of each word
   for (let i = 0; i < str.length; i++){
       str[i] = str[i][0].toUpperCase() + str[i].slice(1);
   }
    //return the array with .join to return the values as strings
    return str.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//input: object with a name property
//output: string message 'Welcome <NAME>!'
//Edge Case: name must return first letter capitalized even is all lower was provided
//create a name variable to hold the Capitalized Name from the object parameter
let name = capitalizeWord(object['name']);
//return the message using temperate literal
return `Welcome ${name}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//input: an object with a name and species key
//output : "<NAME> is a <Species>"
//EdgeCase: firs letter of Name and Species must be cap
//use the CapWord func to cap first letters of name and species
//assign each to a variable to use later
let name = capitalizeWord(object['name']);
let species = capitalizeWord(object['species']);
//Return the message using temperate literal
return `${name} is a ${species}`; 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//input: object that may or may not have a nosies property
//output: if the object has a nosies property, return the noises as a string
//          seperate by a space
//      if there are no noises, return 'there are no noises'
if(object && object.noises){
    if(Array.isArray(object.noises)){
        if(object.noises.length > 0){
            return object.noises.join(' ')
        }
    }
}

return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//input: string of words, and a word
//output: return true if the <word> is in <string>, flase otherwise
//seperate teh string of words into an array with .split
let words = string.split(' ')
//Check if any of the words match the given argument word
for (let i = 0; i < words.length; i++){
    if (words[i] === word)
    return true;
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//input: a name and an object
//output: add the name to the object's friends array then return the object

object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//input: name and an object with a friends property
//Output: true is the name is in the objects friends property
// let arr = Object.values(object)
if (!object.friends){
    return false;
} else if (object.friends.includes(name)){
    return true
} return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//input: a name and an array of people object with friends list
//output: an array of all names not in friends property
let arr =[]
for (let i = 0; i < array.length; i++){
    //check two things:
    //is the object equal to <name>
    //and ignore the parametr's array
if (array[i]['name'] === name || array[i]['friends'].includes(name)){
   continue;
   //if they fail both push into the return array 
} else {arr.push(array[i]['name'])}
}
return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//input:  Should take an object, a key and a value
//output:Should update the property <key> on <object> with new <value>.
//       If <key> does not exist on <object> create it.

//simply assign the object[key] to the given value
//if the property does not exist, it will add it to the object
object[key] = value;
return object
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//input: an object and an array of strings
//output: <object> with any key propteries that match the <strings> removed
for (let key in object){
    if (array.includes(key)){
        delete object[key]
    }
} return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use the spread operator 
function dedup(array) {
    //input: array
    //output: array with no duplicate values
  //using the spread operator and set to create a unique set of data
  return [...new Set(array)]
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}