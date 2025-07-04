const article = document.querySelector('article');

/*
console.log(article.children);

// Turn the HTMLcollection into an array and print it out
console.log(Array.from(article.children));

// for each element of the array add a class named article.element to each child element
Array.from(article.children).forEach(child => {
   child.classList.add('article-element');
});

*/
const title = document.querySelector('h2');

//find the parent of the h2
console.log(title.parentElement);

// go further up the node tree to get the parent of the article which should is the body
console.log(title.parentElement.parentElement);


console.log(title.nextElementSibling);

// you get a null here because there is no previous element
console.log(title.previousElementSibling);

// chaining we can traverse between siblings, parents, children
console.log(title.nextElementSibling.parentElement.children);