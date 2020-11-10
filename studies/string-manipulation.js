/*
 * STRING MANIPULATION:
 *
 * Process of using methods and operators to manipulate string data types.
 */
 
// Examples //

// '+' the addition operator will CONCATENATE the string values

var string1 = 'Hello ';         //prints => 'Hello '
var string2 = 'World!';         //prints => 'World!'

//Assign the value of two strings to a new string
var string3 = string1 + string2;//prints => 'Hello World!'

//There are several methods available

/**
 * .TOUPPERCASE / .TOLOWERCASE
*/
//Capitalize all characters in a string 
 string1.toUpperCase(); // prints =>'HELLO '

//Lowercase all characters in a string
 string1.toLowerCase(); // prints => 'hello '
 

/**
 * .SLICE()
*/
 //.slice(start, end) will return a new string determined by characters at the given arguments
 string2.slice(0, 3) //prints => 'Wor'

//if the parameter is negative, the position starts at the end of the string
 string2.slice(-5, -1) //prints => 'orld!'
 
 //omitting the second parameter will slice out the rest of the string
 string2.slice(3) //prints => 'ld!'
 
 
 /**
  * .SUBSTRING
 */
 //substring is like slice but does not take negative arguments
 //.substring(start, end)
 let str = 'Today is Wednesday.'
 str.substring(9) //pritns => 'Wednesday.'


/**
 * .SUBSTR
*/
//Similar to slice but the second parameter specifies the length of the
//extracted data, 
//.substr(start, length)
str.substr(9, 9) //prints => 'Wednesday'
//notice it does not print the '.' since Wednesday is 9 characters long
//without a second parameter, substr will slice out the rest of the string
//if the parameter is negative, it will slice from the end of the string

/**
 * .REPLACE
*/
//Replaces a speciic value with another value in a string
str.replace('Wednesday', 'Thursday') //prints => 'Today is Thursday'

//Replace does not change the string, it retruns a new string
//by default, this method replaces on the fisrt match and is case sensative
// use /i to replace case insensative
str.replace(/WEDNESDAY/i, 'Thursday') //prints => 'Today is Thursday'

//Global replace will replace all the matches, uses /g
let strGlobal = 'Replace two with three so three is no longer two'
strGlobal.replace(/two/g, 'three') //prints => 'Replace three with three so three is no longer three'

/**
 * .CONCAT
*/
//joins two or more strings together
//just like the + operator
let string4 = string1.concat(string2) // prints => 'Hello World!'


/**
 * .CHARAT
*/

//returns the character at a specificed index in a string
let str1 = 'E x a m p l e'
         // 0 1 2 3 4 5 6
str.charAt(3) // prints =>'m'


/**
 * CONVERT STRING TO ARRAY USING SPLIT
*/
//.split can convert strings into an array
// .split(separator) => tells the method how to separate the string into an array

let text = 'a,b,c,d,e';
//split on commas
text.split(','); // => ['a', 'b', 'c', 'd', 'e']

let text2 = 'a b c d e';
//split on spaces
text2.split(' ') //=> ['a', 'b', 'c', 'd', 'e']