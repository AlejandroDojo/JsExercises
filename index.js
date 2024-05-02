/* Ejercicio 1*/
console.log(hello);                                   
var hello = 'world';
console.log('-----------------------------');
// var hello;
//console.log(hello); //logs undefined
// hello = "world";

/* Ejercicio 2*/
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
console.log('-----------------------------');
// var needle = 'haystack';
// // fuction defined here
// test();
// //Start fuction
//      var needle = 'magnet'; // 
//      console.log(needle) // logs magent
// //ends fuction

/* Ejercicio 3*/
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
console.log('-----------------------------');
// var brendan = 'super cool';
// fuction defined here // ignored
// console.log(brendan); // logs 'super cool'

/* Ejercicio 4*/
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log('-----------------------------');
// var food = 'chicken';
// console.log(food); // logs 'chicken'
// fuction defined here
// eat(); call fuction
// //fuction start
//      food = 'half-chicken';
//      console.log('food'); // logs 'half-chicken'
//      var food = 'gone';
// // fuction ends 

/* Ejercicio 5*/

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
console.log('-----------------------------');
// var mean; // this is undefined
// mean() // undefined is not a fuction
// ends script with error. line 59

/* Ejercicio 6*/
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
console.log('-----------------------------');
// var genre; // undefied
// console.log(genre) // logs undefined
// var genre = "disco";
// //fuction defined
// rewind()
// //fuction start 
//      genre = 'rock';
//      console.log(genre); // logs rock
//      var genre = 'r&b'
//      console.log(genre) // logs r&b
// //fuction end
// console.log(genre) // logs disco

/* Ejercicio 7*/
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
console.log('-----------------------------');
// dojo = 'san jose' // global variable
// console.log(dojo) // logs 'san jose'
// define fuction
// learn();
// //start fuction
//      dojo = 'seattle';
//      console.log(dojo); // logs seattle
//      var dojo = 'burbank'; 
//      console.log(dojo); //logs burbank
// //end fuction
// console.log(dojo) //logs san jose

/* Ejercicio 7*/

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// define fuction
// console.log(makeDojo('Chicago, 65')) // logs object
// console.log(makeDojo('Berkeley', 0)) // Error, because whe can't make an assigment into a const var (dojo);
// script ends with error, assigment to a constant variable. line 134.