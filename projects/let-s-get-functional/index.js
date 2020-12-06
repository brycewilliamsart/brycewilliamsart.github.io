// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-brycewilliamsart');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./brycewilliamsart.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
 //input: array of customer objects
 //output: number of male customers
 // create a variable that will hold can array of only male customers
 //use filter
 //customerObj refers to each customer object in the array
 let maleCustomers = _.filter(array, function(customerObj){
     //return only the male customers
     return customerObj.gender === 'male'
 })
 //return maleCustomers length to return a number
 return maleCustomers.length;
};

var femaleCount = function(array){
 //input: array of customer objects
 //output: number of female customers
 //use reduce
 //create an array to hold the return values
const females = []
//reduce the customer array
array.reduce((acc, curVal) => {
//the the gender property is female
//push into the new array
 if (curVal.gender === 'female'){
  females.push(curVal)
 }
}, {})
//return the array length
return females.length;
};

//Find the oldest customer's name
//input: array of customer Objects
//output: a string of the Oldest customers name
var oldestCustomer = function(array){
//reduce the customer array by comparing ages
let oldestObj = _.reduce(array, function(acc, curVal){
 //if the acc (starting customer's age) is greater than the curVal (current customer's age)
 // return the acc
 if (acc.age > curVal.age){
  return acc;
  //else return the curVal
 } else if (acc.age < curVal.age){
  return curVal;
 }
});
//an object will be returned from the reduce function
//return the value of name property, which is a string
return oldestObj.name;
}

//find the youngest customers name
//input: array of customer obj
//output: a string, the youngest persons name
var youngestCustomer = function(array){;
let youngestObj = _.reduce(array, function(acc, curVal){
 //if the acc (starting customer's age) is younger (less than) than the curVal (current customer's age)
 // return the acc
 if (acc.age < curVal.age){
  return acc;
  //else return the curVal
 } else if (acc.age > curVal.age){
  return curVal;
 }
});
//an object will be returned from the reduce function
//return the value of name property, which is a string
return youngestObj.name;
};

//find the average balance of all customers
//in0ut: array of customer obj
//output: number - average of all customers balances
var averageBalance = function(array){
//balance is currently stored as a string on numbers with a '$'
//first collect all the balances(which are string with $) into an array using filter
let balanceStr = []
//filter the customers array and push the balance values into the created array
array.filter(customer => balanceStr.push(customer.balance));
//console.log(balanceStr);
//remove the '$' with map and substring(return string after removing an element)
let noDollarSign = balanceStr.map(balance => balance.substring(1));
//console.log(noDollarSign);
let noCommas = noDollarSign.map(commas => commas.replace(/,/, ''))
// console.log(noCommas)
//turn the strings into numbers with map
let amounts = noCommas.map(balStrings => parseFloat(balStrings));
// console.log(amounts)
//find the sum - add all the numbers together 
let sum = amounts.reduce((acc, curVal) => acc + curVal);
//finally, return the average by dividing by the array's length
// console.log(sum)
// console.log(sum/array.length)
return (sum/array.length)

};

//find how many customers name begins with a given letter
//input: array (of customer objects), letter (string)
//output: a number
//EC: make it case insensative
var firstLetterCount = function(array, letter){
  //filter out all the customer names that start with the letter argument
  let matching = _.filter(array, function(customer){
   //make the function case insensative
   return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
  })
  //return the length to get a number
  return matching.length;
};

//find how mant frineds of a given customer have names that start with a given letter
//input: array(of customer obj), customer (obj), letter (string)
//output: a number
//make case insensative
var friendFirstLetterCount = function(array, customer, letter){
 //i think this is what filter is already doing because of the if statement
 //remember filter works on boolean values
 let arr = [];
 for (let i = 0; i < array.length; i++){
  if (array[i].name === customer){
  for (let friend of array[i].friends){
   if (friend.name.charAt(0).toLowerCase() === letter.toLowerCase()){
    arr.push(friend.name)
   }
  }
 }
 }
 return arr.length; 
};

//find a customers' names that have a given customer's name in their friend list
//input: array (of customer obj), name
//output: array of names
//ED : make case insensative
var friendsCount = function(array, name){
let arr = []
for (let i = 0; i < array.length; i++){
 for (let friend of array[i].friends){
  if (friend.name === name){
   arr.push(array[i].name)
  }
 }
}
return arr
};


//Find the three most common tags among all customers
//input: array
//output: array
//customerObj property <tags> are an array of strings

var topThreeTags = function(array){
 let newSet = []
 for (let i = 0; i < array.length; i++){
  for (let tag of array[i].tags){
   newSet.push(tag)
  }
 }
 // console.log(newSet)
 
 let tagCountObj = newSet.reduce((tagObj, t) => {
  if (tagObj[t]){
   tagObj[t] ++
  } else {tagObj[t] = 1}
  return tagObj;
 }, {})
 // console.log(tagCountObj)
 
 let arrNest = Object.entries(tagCountObj).sort((a,b) =>
 b[1] - a[1]).slice(0, 3);
 // console.log(arrNest);
let string = arrNest.join(' ').replace(/3/g, '')
// console.log(string)
return string.replace(/,/g, '').split(' ')

 
};

var genderCount = function(array){
 //use reduce to return an obj of customer genders count
 //the key of each customer will be the gender
 // the value will be a tally
 return array.reduce((genders, cusGender)=>{
  //if the gender property already exist in the genders return object
  if (genders[cusGender.gender]){
   //increment the value by 1
   genders[cusGender.gender] ++
  }
  //if the gender key doesnot exist, create it and set to 1
  else {genders[cusGender.gender] = 1}
  //return the genders obj to continue the loop
  return genders;
 },{})

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
