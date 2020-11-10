/*
 * SCOPE & CLOSURE
 * 
 * Scope - what variales are accesible, where
 * There are two types of Scope: GLOBAL and LOCAL
 * Global scope is anything outside of Function bodies, while local scope are
 * local to the functions code block
 * Functions enclose a scope and protect their variables from the parent scope.
 * That includes the Global scope.
 *
 * Functions can access variables from the parent scopes and the global scope.
 *
 * Closure - maintaining acces to values by enclosing them in Function bodies
 * Functions can carry references to variables in parent scopes.
 */
 
 
// 1. global scope //
// create a global variable
let global = 1          // prints => 1
// create a fucntion that uses the global variable
function useGlobal(){
    global = 2          // prints => 2
}
// the function has access to the global variable


// 2. fucntion scope or local scope //
// This scope refers to declarations within a function body. The declarations
// are available only to the function or any function called within the function.

function localScoped(){
    let scope = 1;      //local scope cannot be accessed outside the function
    console.log(scope);
}
// console.log(scope); // => error scope is undefined
// scope is not accessable beyond the function it was declared within.

// 3. nested scope //
// If a function is declared in another function, it has access to the variables 
// from the parent functions scope. 

function parent(){
    let parentScope = 1;
    function child(){
        parentScope = 2 //function child has asscess the function parent
    }
}

//but parent scopes do not have access to the declarations of children scopes
function parent(){ //cannot use 'scope' argument in parnet function
    function child(){
        let scope = 'not available to parent function'
    }
}

// 4. closure //
// Closures protect variables from causing problems in code.
function add(x, y){
    return x + y 
}
//Here the variables are declared and used within the function. the funciton is closed