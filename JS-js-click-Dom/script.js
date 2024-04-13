var btn = document.querySelector("button");
var head = document.querySelector("h1");

function handleClick(){
  head.classList.toggle("heading");
  btn.classList.toggle("btn");
}

btn.addEventListener("click", handleClick);