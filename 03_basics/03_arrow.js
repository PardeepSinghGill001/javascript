 const user={
    username:"pardeep",
    price:999,

    welcomeMessage: function(){
       // console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
 }
 user.welcomeMessage()
 user.username="Pardeep Singh"
 user.welcomeMessage()
//the global object in a browser is a window object
//in a node environment the global object to which this is referring to is null
 //console.log(this);

//  function chai(){
//     let username='pardeep'
//     console.log(this.username);
//  }
//  chai()
//not being able to use this in a function like this gives output undefined

// const chai=  function(){
//         let username ='pardeep'
//         console.log(this.username);
//      }
// chai()
//even this definition does not work

const chai= () => {
    let username='pardeep'
    console.log(this);
 }
 chai()
//  In Node.js:

// this at the top level of a script file is not the global object. Instead, it is an empty object {} within the module scope.
// Inside a regular function, if not called as a method, this refers to the global object.


// const addTwo = (num1,num2) => {
//     return num1 + num2  // explicit return
// }
// console.log(addTwo(3,4));


//writing above function as implicit return
//const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3,4));
//also returning an object
const addTwo = (num1,num2) => ({username:"pardeep"})
console.log(addTwo(3,4));



