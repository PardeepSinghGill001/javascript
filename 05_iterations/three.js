// for (const greet of object) {  //here object keyword is being used in a broader sense
    
// }here, object can be an array, string, map

arr = [1,2,3,4,5]
for (const i of arr) {
   // console.log(i);
}
const greetings ="Hello World!"
for (const greet of greetings) {
   // console.log(`each character is ${greet}`);    
}

//map is another object in js, holds unique values and preserves the order in which values were inserted
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    // console.log(key);   prints the key and value as an array
}

for (const [key, value] of map) {
    // console.log(key, ':-', value); prints key and value in the given format
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } // this gives error refer four.js
