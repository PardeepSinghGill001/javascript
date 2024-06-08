//singleton : object made using constructor
//implies that it is a single object of it's type
//Object.create  

//when we declare objects using literals then singleton objects are not created

//declaring objects from both ways does not bring any difference in performance only difference that comes is of singleton

const mySym = Symbol("Key1")
//how to use this symbol as a key in the object

const JsUser = {
    name:"pardeep",
    [mySym]:"mykey1",//if i had not written mySym in square brackets then i would not be using it like a symbol
}
//by default, the system processes the key name as a string like "name":"pardeep"

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);//i did not use qoutes around the Symbol variable
// console.log(typeof(JsUser[mySym]));

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());//this will execute the function 
//console.log(JsUser.greeting);   //this only sends back the reference to the function
console.log(JsUser.greetingTwo());