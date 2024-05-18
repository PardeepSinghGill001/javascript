const name="pardeep"
const repoCount=50
console.log(name + repoCount);// do not use this way 

//use this instead : string interpolation
console.log(`my name is ${name} and repo count is ${repoCount}`);

/*JavaScript strings are immutable, meaning any operation that transforms a string returns a new string without modifying the original.
Using the String constructor with new creates a string object, but methods like toUpperCase() still do not mutate the original string object.
To avoid confusion, prefer using primitive strings ('...') rather than creating string objects with new String(...). */
//another way to declare string
const gameName = new String('pardeepps')// return a string obj
console.log(gameName[0]);

console.log(gameName.toUpperCase());// did not change my original string
console.log(gameName[0]);
console.log(gameName.charAt(1));
console.log(gameName.indexOf('d'));
const newString =gameName.substring(0, 4)//substring does not accept negative indices
console.log(newString);
const anotherString=gameName.slice(-9, 4)
console.log(anotherString);

const s1 = " pardeep "
console.log(s1);
console.log(s1.trim());


const url ="https://pardeep.com/pardeep%20singh"
console.log(url.replace('%20','- '));
console.log(url.includes('pardeep'));

const s2="pardeep-p-s-g"
console.log(s2.split('-'));
