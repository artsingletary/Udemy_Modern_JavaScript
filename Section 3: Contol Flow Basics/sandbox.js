///////////////
// FOR LOOP ///
///////////////
/*

// Basic for loop
for (let i = 0; i <= 5; i++){
  console.log('in loop:',i);
}

console.log('loop finished');

// For loop with array of unknown length
const names =  ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


/////////////////
// WHILE LOOP ///
/////////////////

// Basic while loop 
let i = 0;

while (i < 10){
    console.log('in loop: ', i);
    i++;
}


// While loop with unknown length 
const names =  ['shaun', 'mario', 'luigi'];

let i = 0;

while (i < names.length){
   console.log(names[i]);
   i++;
}


////////////////////
// DO WHILE LOOP ///
////////////////////
let i = 5;

do {
    console.log('val of i is: ', i);
    i++;
}
while(i < 5);

////////////////////
/// IF STATEMENT ///
////////////////////

// Basic if statement
const age = 25;

if (age > 20){
    console.log('You are over 20 years old');
} 


//  If statement using the length property
const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3){
    console.log("that's a lot of ninjas");
}


/////////////////////////
/// IF ELSE STATEMENT ///
/////////////////////////

const password = 'p@ss';

if (password.length >= 8){
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough!');
}


///////////////////////////////////////////////////
/// IF ELSE IF STATEMENT with logical operators ///
///////////////////////////////////////////////////

const password = 'p@ssword1234';

if (password.length >= 12 && password.includes('@')){
    console.log('that password is very strong');
} else if (password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is strong enough!');
} else {
    console.log('that password is not long enough!');
}

///////////////////
/// Logical Not ///
///////////////////

let user = false;

if(!user){
  console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);


////////////////////////
/// BREAK & CONTINUE ///
////////////////////////

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){

    if (scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if (scores[i] === 100){
      console.log('congrats, you got the top score!');
      break;
    }
}

*/
/////////////////////////
/// SWITCH STATEMENTS ///
/////////////////////////

const grade = 'D';

switch (grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'F':
        console.log('you got an F!');
        break;
    default:
        console.log('not a valid grade!');
}

let age = 30;

if (true){

}