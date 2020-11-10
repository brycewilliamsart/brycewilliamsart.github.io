/*
 * OPERATORS:
 *
 * Act on Data
 * They are classes but what they do and how many operands they require. 
 * Operands are the values operators act on.
 */
 
 // assignment operator '=' //
 // initialize variables
var a = 1

 // arithmetic operators [+ - * / %]//
 // simple math with numbers 
 1 + 2; // = 3
 3 - 8; // = -5
 4 * 2; // = 8
 10 / 5; // = 2
 17 % 2 // = 8.5
 
 // concatenate or add together
 var string1 = 'hello';
 var string2 = 'world';
 string1 + ' ' + string2 // = 'hello world'
 
 // increment or increase /decrement or decrease
//i++ , i--; //in for loops, this will add or subtract one from each loop pass
 
 // comparison operators [> < >= <= === ==]//
 // return a boolean value
 7 > 2; // true
 8 <= 5; // false
 
 // strictly equal to will compare the data types
 8 === 8; // true
 8 === '8'; // false
 
 // logical operators [&& || !]//

 // AND '&&' used when the compared values must both equal true to pass
var a = 9;
var b = 3;
 if (a > b && b >= 0){ //if 9 > 3 and 3 >= 0
  return true;
 }
 
 // OR '||' used when either of the compare values can be true to pass
 if (a > b || b >= 0){ //if 9 > 3 or 3 >= 0
  return true;
 }
 
 // BANG [!] will convert the value into the opposite boolean
 var a = []; // a is assigned to an empty array
 // ! is asking: is 'a' NOT assigned a value
 // 'a' is assinged a value, the boolean value is true
 !a; // the BANG prints false
 
 // unary operators //
 // only work with one value
 // ex. typeof or bang
 
 // ternary(conditional) operator //
 // works with three values
 var age = 28;
                         //operator     operator
 var beverage = (age >+ 21)   ?   'Beer'   :   'Juice';
                 //operand        operand      operand
 console.log(beverage); // prints => 'Beer'