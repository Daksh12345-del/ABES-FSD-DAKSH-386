const name='Daksh'
const repocount=50
console.log("Hello"+" World")

// console.log(name + repocount+ " Value");

console.log('hELLO MY NAME IS ${name} and my repo count is ${repocount}');

const game=new String("Singhal-Sahab")
console.log(game);
console.log(typeof(game));
console.log(game.length);
console.log(typeof(game));
console.log(game[0]);
console.log(game.indexOf('S'));
console.log(game.__proto__);
console.log(game.toUpperCase());
console.log(game.charAt((3))); //it shows at the indexing

const newString=game.substring(0,4)// it provides a small string with positive indexing only
console.log(newString); 

const anotherString=game.slice(0,4)// it provides a small string with negative indexes also
console.log(anotherString);

const newString2="  Daksh "
console.log(newString2);
console.log(newString2.trim());// it removes the extra spaces from starting and ending
console.log(newString2.trim().length);
console.log(newString2.replace('D','B'))
console.log(newString2.includes('ak'));// it checks whether the string contains the given substring or not

const url="https://www.dakshsahab.com/"
let a=url.replace("https://www","JaiShreeRam")
console.log(a);

console.log(url.split(''));// it splits the string at the given character and returns an array of strings
console.log(url.split('.'));
