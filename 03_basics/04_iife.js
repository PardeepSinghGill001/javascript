//immediately invoked function expression (IIFE)

//1. TO HAVE THE FILES RUN IMMEDIATELY AS APPLICATION STARTS
//ex: a database connection code written in a file

//2. TO PREVENT GLOBAL SCOPE VARIABLE POLLUTION

(function chai(){
    console.log("DB CONNECTED");
})();

//the following function will not be invoked unless the above function knows where it should end the context. the above function gets invoked immediately but does not know where to stop the context for that we use a semicolon

(function aurcode(){  //named IIFE
    console.log("DB CONNECTED");
})();

((name) => {    //un-named IIFE
    console.log(`DB CONNECTED ${name}`);
})('pardeep');

