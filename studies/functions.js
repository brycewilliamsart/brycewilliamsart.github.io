/*
 * FUNCTIONS:
 *
 * Functions are data types that store reusable data like a list of instructions.
 * Like baking, the function is the recipe needed to produce a baked good.
 * So the function takes data and executes the 'recipe' (runs through the code block)
 * and produces a cookie (so sort of new data).
 *
 */
 
// 1. To create a function first declare/define the function. 
// The keyword to declare a Function is 'function'.
function sting(){
  return ('ZAP!');
};


// 2. To Call a function, simply use the name given follwed by ()s.
sting(); //=> prints 'ZAP!'


// 3. parameters
// Parameters are placeholders in a function
// Parameters can be any datatype simple, complex, even other functions

//Declare an array of things found in the ocean
const enviroment = ['fish', 'swimmer', 'sea turtle', 'jellyfish', 'nothing', ' '];

//Use some Math functions to generate a random encounter
//This is an example of assigning a function to a variable
//later, ocean will act as a parameter for the main function,
//that means the code will run this function every time 'ocean' is used in our code
let ocean = enviroment[Math.floor(Math.random()*enviroment.length)];

//Functions allow for parameters (placeholders). These inputs are listed
//between the parenthesis.
//Function reaction takes one parameter, an array.
function reaction(array){
  switch(ocean){
    case 'fish':
    console.log(sting(), 'we found food!')
    break;
    case 'swimmer':
    console.log(sting(), 'ugh, humans.')
    break;
    case 'sea turtle':
    console.log(sting(), 'ENEMY! SWIM AWAY!')
    break;
    case 'jellyfish':
    console.log('you wanna go sting swimmers?')
    break;
    case 'nothing':
    console.log('drift along')
    break;
    default:
    console.log('I\'m not bored because I have no brain.')
  }
}

// 4. arguments
// Arguments are the specific values used in the function's logic
// Parameters provide an input spaceholder for the arguments to pass
    reaction(ocean); 