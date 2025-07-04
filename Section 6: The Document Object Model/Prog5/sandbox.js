const paras = document.querySelectorAll('p');

paras.forEach(p => {
   if (p.textContent.includes('error')){
      p.classList.add('error');
   }
   if (p.innerText.includes('success')){
      p.classList.add('success');
   }

});

// Toggle classes.  If element has a class we want to remove it.  If an
// element doesn't have a class we want to add it.
const title = document.querySelector('.title');

// Toogle on
title.classList.toggle('test');

// Toogle off
title.classList.toggle('test');