const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

ul.addEventListener("click", (e) => {
  // This event listener is added to the ul element
  if (e.target.tagName === "LI") {
    // If the target element is a li element
    //e.target.remove();
    console.log(e);
  }
});
