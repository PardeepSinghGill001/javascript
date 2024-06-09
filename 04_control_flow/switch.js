// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//if we do not provide break, then all the cases will be executed except default

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}