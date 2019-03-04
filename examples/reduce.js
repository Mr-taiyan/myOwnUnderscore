const _ = require("underscore");

const array = [2,3,5,1,7,9,4,0,6,8];

let sum = _.reduce(array, (memo, num) => {
    return memo + num;
}, 0);

console.log(sum);
console.log(array);