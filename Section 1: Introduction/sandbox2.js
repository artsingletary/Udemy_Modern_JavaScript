const title = 'Super Mario Brothers go to Japan';
const author = 'Mario';
const likes = 30;

// Concatenation way 
let result1 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result1);

// Template string way
let result2 = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);

// Creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
