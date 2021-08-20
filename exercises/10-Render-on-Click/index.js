let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
  //your code here
  let div = document.createElement("div");
  div.style.background = "yellow";
  div.innerHTML = "Hello World";

  // let addBody = document.querySelector("body");
  // addBody.appendChild(div);
  document.body.appendChild(div);
});
