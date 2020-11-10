/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. let //
/*
 * let containers are reassignable values but CANNOT be hoisted from their codeblock.
 * let limits the value of the vaiable to the scope of the code block.
 */
let variable = 1; 

if (variable === 1){
    let variable = 2;
    console.log(variable); // prints => 2
}

console.log(variable); // prints => 1

// 5. constant //
/*
 * const containers values CANNOT be changed, they are block scoped, and not hoisted to the top
 * of their block scope, meaning they are pinned to the code block in which they are assigned.
 * It is common for const variables to be all UpperCase.
 */
// Constants are declared using the keyword 'const' and must be assigned value immediatly
const LASTNAME = 'Williams';
console.log(LASTNAME) // prints => 'Williams'

//They CANNOT be reassigned
    //LASTNAME = 'Smith'; // prints => Error, LASTNAME already defined

// 6. hoisting //
/*
 * In JavaScript, hoisting moves all declarations to the top of the current scope.
 * JavaScript only hoist DECLARATIONS, not INITIALIZATIONS(assignments).
 */
// Example 1
var x = 5; //declare x and assign = 5
var y = 7; //declare y and assign = 7
console.log(x + y); //prints => 12

// Example 2
// JavaScript will hoist 'var y' but not '= 7'
var x = 5; //declare x and assign = 5
console.log(x + y); //prints => NaN
var y = 7; //declare y and assign = 7

// Example 3
// Prints corectly because the assignment is before the scope and the declaration
// is hoisted above the scope.
var x = 5; //declare x and assign = 5
y = 7; //assign y = 7
console.log(x + y); //prints => 12
var y; //declare y 

/*
 * NOTE: It is good to understand how JavaScript hoist variable declarations to help 
 * prevent bugs in future code. It is good practice to always declare all variables 
 * at the beginning of every scope.
 */
 