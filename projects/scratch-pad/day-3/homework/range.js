// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //input : start and end both are numbers
    //output: an array between the parameters including the parameters
    //Edge case: if start is greater than end, return the range in reverse order
    //create an array literal to hold the return values
    var values = [];
    //edge case: if start is smaller than end value, increment loop and push i into values array
    //be sure the code in inclusive of the start and end parameters
    if (start < end){
        for (var i = start; i <= end; i++){
         values.push(i)   
        } 
     //edge case: if start is larger than end value, decrement loop and push i into values array
    //be sure the code in inclusive of the start and end parameters
    } else if (start > end){
        for (var i = start; i >=end; i--){
            values.push(i);
    }
    }
    //finally, return the new array 
    return values;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
