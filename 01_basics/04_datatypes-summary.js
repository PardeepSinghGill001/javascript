//JS is dynamically typed language

//based on how data is stored in the memory and how it is accesed,  datatypes are of two types - Primitive and Non-Primitive(or reference type) type


//Primitive: 7 types (when accessed from the memory, we get a copy not the reference) :- String, Number, Boolean, null, undefined, symbol(used to make any value unique), BigInt

const score = 100
const score1 = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail=undefined //( or "let userEmail;")

const id =  Symbol('123') //return type is also a different data type called a symbol
const id2 = Symbol('123')

console.log(id === id2);//id != id2 even though same values were passed to the Symbol datatype

const bigNumber = 646464647578476886856674534679895787564545n
console.log(bigNumber);


//Arrays, Objjects, Functions

const heros = ["Shaktiman","Krish","Baba Baaj Singh Ji"];

let myobj= {
    name:"pardeep",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);

const newNumber = null
console.log(typeof newNumber); //prints typeof null as object



//Reference(Non-Primitive):  (memory reference can be directly allocated) :- Arrays, Objects, Functions
//datatype of all non primitive types is an object, say for function it is function object



