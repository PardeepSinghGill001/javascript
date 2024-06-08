//arrays

const myArr= [0,1,2,3,4,5]
const myArr2=new Array(1,2,3,4,5)

myArr.push(6)
myArr.pop()//removes last value

myArr.unshift(9)//inserts a vlaue at the start of array
myArr.shift()//removes element from begining

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));//if some element not present, we get -1 implies that it does not know where that element is

const newArr=myArr.join()//changes elements of the array to string format

const myn1 =myArr.slice(1,3)
console.log("A",myArr);
console.log(myn1);

const myn2 =myArr.splice(1,3)
console.log("B",myArr);
console.log(myn2);