//const means constant value which cannot be changed
const accountId = 144553
let accountEmail = "Daksh@google.com"
var accountPassword = "12345"
accountCity = "New Delhi"  // global variable
let accountstate;
// {
//     //this is block scope
// }
//prefer not to use var due to its function scope and block scope confusion

accountEmail = "ds69@gmail.com" // allowed
accountPassword = "54321" // allowed
accountCity = "Noida" // allowed
// accountId = 2// not allowed
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);