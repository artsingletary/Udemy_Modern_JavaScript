// query the dom for the first p tag
const para = document.querySelector('p');
console.log(para);

// query the dom for the first p tag with the error class
const para2 = document.querySelector('.error');
console.log(para2);

// get an element by ID - grabs a single element
const title = document.getElementById('page-title');
console.log(title);

// get and element by it's class name - grabs multiple elements of that class if available
const errors = document.getElementsByClassName('error');
console.log(errors);