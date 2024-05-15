const accountId=123456 //immutable data
let accountEmail="pardeep@gill.com" //mutable
var accountPassword="150601" //mutable
accountCity="kolkata" //mutable
let accountState;
/*
Prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
