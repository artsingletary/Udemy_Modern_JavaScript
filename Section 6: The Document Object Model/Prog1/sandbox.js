/*
// qet a reference for the first p tag
const para = document.querySelector('p');
console.log(para);

// get a reference for the first element the error class
const para2 = document.querySelector('.error');
console.log(para2);

// get a reference for the first div with an error class
const para3 = document.querySelector('div.error');
console.log(para3);

// get a reference for all the p tags 
// the references will be stored in a nodelist
// the nodelist looks like an array but it is not an array
// it's just a group of elements or group of nodes.

const paras = document.querySelectorAll('p');

paras.forEach(para => {
   console.log(para);
})

console.log(paras);

// Even though its not an array you can still grab a specific element of the nodelist
// like you would for an array

console.log(paras[0]);

// querySelector and querySelectorAll are the two best methods to select elements 
//from the html document

// Get element by ID
const title = document.getElementById('page-title');
console.log(title);

// Get elements by their class name.  Note that you don't need a dot as you would in 
// a CSS selector like querySelector.  It is already implied.  Note that getElementByClassName
// returns an HTML collection rather than a nodelist.  You can't use a forEach method on an HTML
// collection

const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// Get elements by their tag name.  References will be stored as an HTML collection.
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
// User the innerText property to grab the text of the first ptag element
const para = document.querySelector('p');
console.log(para.innerText);

// Change the the text of the first ptag element
// When we do this it overrides the old text completely.
para.innerText = 'Ninjas are awesome!';
const paras =  document.querySelectorAll('p'); 

paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text';
});
// Grabbing content inside the divtag
const content = document.querySelector('.content');
console.log(content.innerHTML);

// Replace the HTML content inside the the content class
content.innerHTML = '<h2>This is new H2</h2>';

// Use += rather than = to append to the HTML content inside the the content class
//content.innerHTML += '<h2>This is new H2</h2>';
*/

const content = document.querySelector('.content');

const people = ['erich', 'mark', 'art'];

people.forEach(person => {
   content.innerHTML += `<p>${person}</p>`;
});