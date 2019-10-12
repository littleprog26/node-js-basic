
// Concept of Call Backs

function find(showName, cn) {
    setTimeout(() => {
        console.log(`Show your Name ${showName}`);
        cn('Jan 13, 1995', '24');
    }, 3000);
}


find('James Roncesvalles', function(birthday, age) {
    console.log(birthday, age);
});


