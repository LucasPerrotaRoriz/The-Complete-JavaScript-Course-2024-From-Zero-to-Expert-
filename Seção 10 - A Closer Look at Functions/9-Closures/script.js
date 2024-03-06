'use strict';

// Have a look at the pdf slide
/* 
A closure is not a feature that is explicitly used. You don't create closures manually
like a array or a function, a closure happens automatically in certain situation.

The code is running in the global executing context, in there is the secureBooking 
function. The global scope contains secureBooking. When secureBooking is executed
a new execution context is put on top of the execution stack.

Each execution context has a variable environment which contains all its local variables.
In this case it only contains the passengerCount set to 0. The variables environment is 
also the scope of the function, so the scope chain of this execution context is that 
passengerCount is on the local scope, but this scope also gets access to all variables 
of the parent's scopes and in this case just the global scope.

In the secureBooking function a new function is returned and it will be stored in the 
booker variable, the global context will also contain the booker variable.

What happens when secureBooking function returns? It's execution context pops off the
stack and disappears.

The closure has not happened yet.
*/

/*
The secureBooking environment is no longer active when it finishes execution but still 
th booker function continues to have access to the variables that were present at the time
the function was created, and in particular the passengerCount variable.

This happens because of a closure. A closure makes a function remember all the variables that 
existed at the function 'birthplace' essentially, ypu can imagine the secureBooking as
the birthplace of the booker function.
*/

/*
The execution context of secureBooking is no longer on the call stack because the function has finished
execution.

booker is this function - const booker = secureBooking(); - is located in the global scope.

The first thing that will happen is that a new execution context is created and put on the call stack and
the variable environment for this context is empty since there are no variables declared in this 
function.

Since booker is in the global scope context it's simply a child scope of the global scope. 
How will booker access passengerCount, it's not in the scope chain. 

Any function always has access to the variable environment of the execution context in which
the function was created even after it's gone. In the case of booker this function was created 
in the execution context of secureBooking which was popped off the stack. Therefore the booker 
function will get access to this variable environment which contains passengerCount, and this is 
how the function will be able to read and manipulate passengerCount. It's this connection that is 
called closure.

The closure is then basically this variable environment attached to the function exactly
as it was at the time and place that the function was created. The scope chain is preserved
through the closure even when a scope is already destroyed because it execution context
is gone.

It can be said that the booker function closed over its parent scope or over its parent
variable environment. This includes all function arguments even though in this example
there is none.

This attached or closed over variable environment stays with the function forever. Thanks to
the closure a function does not lose connection to variables that existed at the function.
*/

/*
What happens when booker executes?
The function attempts to increase the passenger count variable. However the variable is
not in the current scope, so JS will look into the closure if it can find the variable there. 
JS does that even before looking at the scope chain, so if there are a passengerCount
variable in the global scope set to 10, it would stills use the one in the closure.The closure
has priority over the scope chain. After running the function passengerCount becomes one,
the message is logged then the execution context is popped off the stack. Execution moves
to the next line and we get a new execution context and a closure is still there attached
to the function and the value is still one. This function executes increasing passengerCount to 2
and logging a message.
*/

/*
Some definition of closures
// Formal
A closure is the closed-over variable environment of the execution context in which a function was
created, even after that execution context is gone.

// Less formal
A closure gives a function access to all the variables of its parent function, even after that parent
function has returned. The function keeps a reference to its outer scope, which preserves the 
scope chain throughout time.

// Less formal
A closure makes sure that a function doesn't loose connection to variables that existed at the
function's birth place.

// Less formal
A closure is like a backpack that a function carries around wherever it goes. This backpack has all
the variables that were present in the environment where the function was created.

We do not have to manually create closures, this is a JS feature that happens automatically. We can't
even access closed-over variables explicitly. A closure is not a tangible JS object.

However the closure can be seen with console.dir
*/

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// when you see double brackets it means it's a internal property which we cannot access
// from our code
console.dir(booker); 