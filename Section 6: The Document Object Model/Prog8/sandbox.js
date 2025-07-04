const ul = document.querySelector('ul');

const items = document.querySelectorAll('li');

// Cycle through each item and add an event listner
items.forEach(item =>  {
  item.addEventListener('click', e => {

   //Strike through item when someone clicks on it
   // e.target.style.textDecoration = 'line-through';

    //Remove item when someone clicks on it 
    e.target.remove()

  });
});