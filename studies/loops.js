/*
 * LOOPS:
 *
 * Help shuffle through iterable (able to repeat) data.
 * Loops cycle through data values and take action on those values
 * 
 * There are four types of loops
 * => for loops - cycle through part or entire array
 * => for..of loops - cycle through an entire objects including strings, arrays, and others
 * => for-in loops - cycle through objects
 * => while loop - take one condition, and while the condition is true, the loop runs
 */
 
// 1. for loops //
/*
 * Loops over values in an array.
 * Can loop forward or backwards over values 
 * for loops have a starting conditon, stopping conditon, and increment/decrement
 */
 for (var i = 0; i <= 10; i++){
     console.log(i); // prints => 0,1,2,3,4,5,6,7,8,9,10
 }
 
 for (var i = 5; i >=0; i--){
     console.log(i); // prints 5,4,3,2,1,0
 }
 
 // 2. for...of loops //
 /**
  * Loop over iterable objects
  * two things are needed:
  * the variable - what value to change each iteration
  * the iterable - fancy way to say the object to loop over
  */
  const iterable = [10, 20 ,30]
  
  for (let variable of iterable){
      variable += 1;
      console.log(variable); // prints => 11, 21 ,31
  }
 
 // 3. for-in loops //
 /*
  * Cycle through key value pairs in an array
  */
var myObj = {
    name: 'Bryce',
    age: 28
};

//the key represents the key:value pairs held by the object. 
//The loop has access to => ['name', 'age']
//myObj refers to the object to loop through
for (var key in myObj){
    //surrounding the word key with [] returns the value of the key in the object
    console.log(myObj[key]); // prints 'Bryce' 28
    console.log(key); // prints 'name', 'age'
};

// 4. while loops//
var count = 1;
while(count <= 5){        //while var count is less than 5
    console.log(count);   // print count
    count ++;             // adding 1 to the value each loop
}

// prints => 1, 2, 3, 4, 5