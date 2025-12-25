const score=400
const bonus=new Number(100)
console.log(score);
console.log(bonus);
console.log(typeof(bonus));
console.log(bonus.toString());
console.log(bonus.toString().length);
console.log(bonus.toFixed(2)); // toFixed is used to convert number to string with fixed decimal points

const other_number=28.66
// console.log(other_number.toPrecision(3)); // toPrecision is used to convert number to string with specified length

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN')); // toLocaleString is used to convert number to string with commas as thousands separator

// +++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++

// console.log(Math.PI);
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(2,4,6,1,8,-3,0));
// console.log(Math.max(2,4,6,1,8,-3,0));
// console.log(Math.sqrt(64));
// console.log(Math.pow(3,4));

console.log(Math.random()); // generates random number between 0 and 1
console.log((Math.random(1-6)*10)+1); // generates random number between 0 and 10
console.log((Math.floor(Math.random(1-6)*10)+1));
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)))


