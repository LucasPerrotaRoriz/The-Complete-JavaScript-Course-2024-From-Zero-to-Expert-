'use strict';

/*
Flight is a primitive type as the value is passed to the function, the flightNum in the 
function is a copy of the original value, therefore is a completely different value. If the copy
is changed it will not reflect on the original value.
It's like doing this flightNum = flight.

The passenger object was affected by the change. When a reference is passed to a function
what is copied is really just the reference to the object in the memory heap.
It's like doing this const passenger = jonas.
The copy and the original value point to the same object in the memory. So when the copy is changed
it reflects on the original object.

Javascript does not have passing by reference only passing by value. In objects we do
pass as reference, the memory address of the object, however that reference itself is 
still a value. It's simply a value that contains a memory address. We pass a reference to
the function but we dot not pass by reference.
*/

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 24739479284) {
        alert('CheckIn');
    } else {
        alert('Wrong passport!');
    }
}

/*
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}
newPassport(jonas);
checkIn(flight, jonas);