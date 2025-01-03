let ninjas = ['shaun', 'ryu', 'chun-li'];
let monks = ['thor', 'david', 'michael']

console.log(ninjas[1]);

// Store elements with different datatypes in the same array
let random = ['hello', 'Art', 50, 40]
console.log(random);

console.log(ninjas.length);

// Join the elements inside an array into a single string
let result = ninjas.join(',');
console.log(result);

// Find the index of an array element
let result1 = ninjas.indexOf('chun-li');
console.log(result1);

// Add elements to the end of an array
let result2 = ninjas.concat('ken', 'crystal');
console.log(result2);

// Combine two arrays
let result3 = ninjas.concat(monks)
console.log(result3);

//Push elment to the front of the array.  Note that 
//the push method alters the original value so we call it a destructive method
let result4 = ninjas.push('ken', 'alice');
console.log(result4);

//Pop element off of the back of the array.  Like push, pop is a destructive method
let result5 = ninjas.pop();
console.log(result5);
console.log(result3);
console.log(result2);

console.log(ninjas);

// Search for a character in an array
let email = 'luigi@thenetninja.co.uk';
let check = email.includes('@');
console.log(check);

// Search for a string in an array
let names = ['mario', 'luigi', 'toad'];
let check1 = names.includes('luigi');
console.log(check1);

let dog = 'POODLE';
console.log(dog.toLowerCase());
