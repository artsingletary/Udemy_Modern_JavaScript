
// Get the first anchor tag
const link = document.querySelector('a');
console.log(link);

// Log the current href attribute to the console
console.log(link.getAttribute('href'));

// Set the href attribute to the ninjas website
link.setAttribute('href', 'https://www.thenetninja.co.uk');

// Change the link innerText to the name of the website
link.innerText = 'The Net Ninja Website';

// Get the class attribute from the first paragraph tag
const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success'); 

// Add a new attribute
msg.setAttribute('style', 'color: green;');