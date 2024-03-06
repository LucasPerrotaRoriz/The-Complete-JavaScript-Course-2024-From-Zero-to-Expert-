'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    //console.log(firstName);

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT'; // will output this, redefines the output variable

            const output = 'NEW OUTPUT'; // will output the other message, creates new variable

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add() {
                return a + b;
            }
        }
        // console.log(str); Block scoped ReferenceError
        console.log(millenial); // varr is function scoped
        // add(2, 3); Functions are block scoped only in strict mode ReferenceError
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); ReferenceError
// printAge(); ReferenceError