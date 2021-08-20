let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
  let list = document.querySelector("#myList"); //your code here
  let li = document.createElement("li");
  list.appendChild(li);
  li.innerHTML = "Fourth element";
  
});
