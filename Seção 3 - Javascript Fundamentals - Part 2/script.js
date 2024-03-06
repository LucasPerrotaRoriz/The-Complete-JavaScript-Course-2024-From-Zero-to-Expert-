// Activating strict mode
/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

// if(passTest) hasDriverLicense = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');


const interface = 'Audio';
const private = 534;
*/

// ********************
// Functions

/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23'); */



// ********************
// Function Declarations vs Expressions
/*
// Function declaration
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;

    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2); */



// ********************
// Arrow Functions

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



// ********************
// Functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and
    ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3)); */



// ********************
// Reviewing Functions
/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName)  {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);

    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike')); */



// ********************
// Challenge
// all-coding-challenges Página 9
/* MINHA SOLUÇÃO
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgKoalas, avgDolphins) {
    if(avgKoalas > (avgDolphins * 2)) {
        console.log(`Koala wins (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`Dolphin wins (${avgDolphins} vs ${avgKoalas})`);
    }
}

const avgKoalas = calcAverage(44, 23, 71);
const avgDolphins = calcAverage(65, 54, 49);

const avgKoalas = calcAverage(85, 54, 41);
const avgDolphins = calcAverage(23, 34, 27);
checkWinner(avgKoalas, avgDolphins);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs . ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs . ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas); */




// ********************
// Arrays
/*
const friend = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Ellis'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); */


// ********************
// Basic Arrays Operations(methods)

/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newFriends = friends.push('Jay');
console.log(friends);
console.log(newFriends);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}*/

// ********************
// Challenge
// all-coding-challenges Página 10
// Minha solução
/*
function calcTip(bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(bills, tips, total);

// Solução Jonas
const calcTip2 = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills2 = [125, 555, 44];
const tips2 = [calcTip2(bills2[0]), calcTip2(bills2[1]), calcTip2(bills2[2])];
console.log(bills2, tips2); */



// ********************
// Introduction to objects
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; */




// ********************
// Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about jonas? ' +
'Choose between firstName, lastName, age, job and friends');
// console.log(jonas.interestedIn);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends,
and hist best friend is called ${jonas.friends[0]}`); */



// ********************
// Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function(birthYear) {
    //    return 2037 - birthYear;
    // }

    //calcAge: function() {
    //    console.log(this);
    //    return 2037 - this.birthYear;
    //}

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ` +
        `${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
console.log(jonas.age);

// Challenge
// "Jonas is a 46 year old teacher, and he has a drivers license"
console.log(jonas.getSummary()); */




// ********************
// Challenge
// all-coding-challenges Página 11
// Minha solução
/*
const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
if(mark.bmi > john.bmi) {
    console.log("Mark's BMI is greater than John's");
} else {
    console.log("John's BMI is greater than Mark's");
}

// Solução Jonas
if(mark.bmi > john.bmi) {
    console.log(`${mark.name}'s BMI (${mark.bmi})
    is higher than ${john.name}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.name}'s BMI (${john.bmi})
    is higher than ${mark.name}'s BMI (${mark.bmi})`)
} */


// ********************
// Iteration: The for Loop
/*
// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}*/




// ********************
// Looping Arrays: Arrays, Breaking and Continuing
/*
const jonas = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] != 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
} */




// ********************
// Looping Backwards and Loops in Loops
/*
const jonas = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
} */




// ********************
// The while loop
/*
//for(let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifting weights repetition ${rep}`);
//}

//let rep = 1;
//while(rep <= 10) {
//    console.log(`WHILE: Lifting weights repetition ${rep}`);
//    rep++;
//}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}*/




// ********************
// Challenge
// all-coding-challenges Página 12
// Minha solução
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for( let i = 0; i < bills.length; i++) {
   tips[i] = calcTip(bills[i]);
   totals[i] = bills[i] + tips[i];
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));*/

// Solução Jonas
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips)); */

