// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)
console.log("2"==2)
console.log("02">1)
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//comparison operator and equality operator behave differently with null as operands 1nd 2nd example shows false but 3rd example shows true

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
//all the three examples with undefined shows false because undefined is not comparable with any other datatype except undefined and NaN

/// ===(strict equal) and !==(strict not equal) does not perform type conversion
console.log("2"===2)