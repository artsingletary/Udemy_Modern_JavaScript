// Grab the copy-me class
const copy = document.querySelector('.copy-me');

// Grab the box class
const box = document.querySelector('.box');

// Add a copy event listener
if (copy) {
  copy.addEventListener('copy', () => {
  console.log('text copied');
 });
}

// Add a box event listener
if (box) {
  box.addEventListener('mousemove', e => {
  box.textContent = `x.pos - ${e.offsetX} y pos - ${e.offsetY}`;
  });
}

// Add an event listener directly to the document object
document.addEventListener('wheel', e => {
  console.log(`${e.pageX}, ${e.pageY}`);
});