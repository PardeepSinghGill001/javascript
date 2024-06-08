const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,10]

const arr3=[...arr1,...arr2,11]
console.log(arr3);
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//here, we specify the depth to which we need to flatten the object
console.log(real_another_array);



console.log(Array.isArray("pardeep"))
console.log(Array.from("pardeep"))
console.log(Array.from({name: "pardeep"})) // interesting as it prints an empty array to make array from objects, we may need to specify that form array from keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));