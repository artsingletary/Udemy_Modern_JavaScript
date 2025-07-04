/*
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('you clicked me');
});
*/

const items = document.querySelectorAll('li');

// Cycle through each item and add an event listner
items.forEach(item =>  {
  item.addEventListener('click', e => {
    // console.log('item clicked')
    // console.log(e);
    //console.log(e.target);
    //console.log(item);
    e.target.style.textDecoration = 'line-through';
  })
})