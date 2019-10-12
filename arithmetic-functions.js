
// preferred way
module.exports.add = (x, y) => x + y;

module.exports.minus = function(x, y) {
    return x - y;
};


/*
module.exports json type
module.exports = {
    add: function(x, y) {
        return x + y;
    },
    minus: function(x, y) {
        return x - y;
    }
};
*/

/*

Arrow functions
module.exports = {
    add: (x, y) => {
       return x + y
    },
    minus: (y, x) => { 
       return y - x
    }
}
*/