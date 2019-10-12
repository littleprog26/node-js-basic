
// Concept of Call Backs
const { add, minus } = require("./arithmetic-functions");

/*
    function find(showName, cn) {
        setTimeout(() => {
            console.log(`Show your Name ${showName}`);
            cn('Jan 13, 1995', '24');
        }, 3000);
    }


    find('James Roncesvalles', function(birthday, age) {
        console.log(birthday, age);
    });
*/
const sum = add(5, 10);

console.log(sum);

// Destructuring

const fullName = {
    firstName: 'James',
    lastName: 'Roncesvalles'
};

// const firstName = fullName.firstName;
// const lastName = fullName.lastName;

const { firstName, lastName } = fullName;

console.log(firstName, lastName);

const numbers = [1, 2 ,3 ,4];
const [firstNo, secondNumber,  ...theRest] = numbers;

console.log(firstNo, secondNumber, theRest);


const subjects = {
    english: {
        first: 95,
        second: 98
    },
    math: {
        first: 96,
        second: 97
    }
};

const { 
    english: {
        first: englishFirstGrading
    },
    math: {
        first: mathFirstGrading
    }
} = subjects;

// console.log(english, math);

console.log(englishFirstGrading, mathFirstGrading);

// Object Assignment

const firstGrading = {
    english: englishFirstGrading,
    math: mathFirstGrading
};

const grading = {
    englishFirstGrading,
    mathFirstGrading
};

console.log(firstGrading);

console.log(grading);






