//date is an object
let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.getHours());

let newDate = new Date(2024,5,7)
//console.log(newDate.toDateString());

let newDate1 = new Date(2024,5,7,16,7)
//console.log(newDate1.toLocaleString());

let myCreatedDate = new Date("06-7-2024")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);//this return a millisecond value and it is difficult to infer and find out some value from that long string

// console.log(myCreatedDate.getTime());
//also return a millisecond value. millisecond values can be compared now !!

//converting millisecond to second
//console.log(Math.floor(Date.now()/1000));


let newDate2 = new Date()
console.log(newDate2.getMonth());

newDate2.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate2.getDay());




