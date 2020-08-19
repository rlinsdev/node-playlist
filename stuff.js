
const counter = function(arr){
    return `There are ${arr.length} elements in this array`;
};

const adder = function(a,b){
    return `The sum of the 2 number is ${a+b}`;
};

const pi = 3.1415;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;