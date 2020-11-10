/*
 * DATATYPES:
 *
 * 0. There are many ways to catergorize data in JavaScript. They are similar in some ways but 
 * unique in others and allow programmers to effectivly work many types of data. 
 * 
 * Simple or Primative datatypes including numbers, strings, booleans, NaN, undefined and null. 
 * These values are immutable meaning they do not hold, collect, or aggregrate other values. 
 * Operations on Primative values create new values. 
 */
 
 // 1. number //
 // A number is any numeric value.
 var number = 1;
 
 // 2. string //
 // A string is any collection of characters between quotes.
 // The value will alway be a string if '' are used despite the characters in the ''.
 var string = 'Hello'; // prints => 'Hello'
 var string2 = '1'; // prints => '1' and has no numerical value
 
 // 3. boolean //
 // A boolean hold the value 'true' or 'false' to handle logic.
 var boolean = false; 
 
 // 4. undefined //
 // A undefined value
 var unDefined 
 console.log(unDefined) //prints => undefinded
 
 // 5. null //
 // An absence of value or none.
 
 // 6. NaN //
 // A numeral type that stands for not a number.

 /* 
  * Complex datatypes include objects, arrays, and functions. These aggrigate and hold values
  * therefore, complex dataypes have an indefinite size. 
  */
  
 // 1. array //
 // An array is collection of values as a list.
 var myArray = [1, 'Hello', false];
 
 // 2. object //
 // A collection of key : 'value' pairs.
 var myObject ={
     number: 1,
     string: 'Hello',
     boolean: false
 }
 // 3. function //
 // Functions perform actions on data and then return the data
 function add(x, y){
     return x + y;
 }
 

 // infinity and -infinity //
 /**
  * Infinity is a global numerical value representing infinity.
  * Positive infinity is a value greater than any other numerical value.
  * Negative infinity is the least of any numerical values.
  * /
 
 // PRIMITIVE vs. COMPLEX //
 /*
  * Variables are a fixed amount of memory and can hold the actual value of primative datatypes,
  * but they can only reference the values of complex datatypes.
  * Think: primaitive variables are named contatiners like a book in the library.
  * Complex types tell you more information- what shelf the book is on, what section of the library
  * houses the book, what other books are on the same shelf. These values have not fixed size and 
  * are too big for memory, so the computer stores a reference to the memory address but not the
  * data value itself. 
  */
  
 // COPY BY VALUE vs. COPY BY REFERENCE
 /*
  * The difference in datatypes is seen further by how each type is copied.
  * Primitive types are copied by value while Complex types are copied by reference.
  */
 
 // copy by value //
 var a = 1;
 var b = a; // the value stored in 'a' is COPIED into 'b'
 
 b = 2; // changes the value of 'b' only
 console.log(a) // prints => 1
 
 //copy by reference:
 var a = {one: 'hey'};
 var b = a; // value stored in 'b' is a reference to the value of 'a'
 
 b.one = 'hi';
 console.log(a.one) // prints => 'hi'