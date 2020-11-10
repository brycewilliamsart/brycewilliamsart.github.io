/*
 * CONTROL FLOW:
 *
 * uses conditional statements to control the flow of code
 * This code makes decisions based on 'true' and 'false' values from an if or switch statement.
 * 
 * All statement intially begin with 'if' followed by a true or false condition in ().
 * If the condtion is true, the code block run and the if conditonal is ended - meaning anything
 * following the first return statement (if true) will not execute
 *
 * If more than one condition needs to be checked, use an 'else if' statement. There is no limit to 
 * the amount of else if conditions. Once an else if conditon evaluates to true and the 
 * return code is activated, the if conditional is exited.
 *
 * Finally, the end of a conditional statement is a final 'else' statement. Since this code runs
 * as a last step if all other conditons fail, it is written with {}.
 *
 * If statements can be only an if condition, or include multiple else if conditions as part of the flow.
 * You cannot start a conditon with else if or else.
 */
 
// if/else if statements //

if ('condition'){         //if the condition evaluates to true, the code below will run
    'execute this code'
} else if ('condition2'){ //else if condition 2 evalutes to treu, the code here will run
    'execute this code'
} else { 'do this'};   //else any false value will return 'do this'

// switch statements can help with readability if the code has several else if statements
// the default acts the same as an else statement.
switch ('expression'){
    case 1:             //
        'code block'
        break;
    case 2:
        'code block'
        break;
    case 3:
        'code block'
        break;
    default:
        'code block'
}