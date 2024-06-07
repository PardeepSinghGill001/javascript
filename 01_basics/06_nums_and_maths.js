const score = 100
//automatically resolved by javascript that it is a number
// console.log(score);

const balance = new Number(100)
//explicitely casting 100 into a Number 
//there are many function available in the prototype of this object
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber=123.899
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++ MATHS+++++++++++++++++++
// maths library comes with js by default

console.log(Math);//object in itself and has multiple properties and functions in it

console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());//gives random value between 0 and 1
console.log(Math.floor(9.5478))


console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);









