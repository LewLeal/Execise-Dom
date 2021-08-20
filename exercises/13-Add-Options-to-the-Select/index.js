window.onload = function () {
  console.log("The website was loaded...");
  let countries = [
    "USA",
    "France",
    "Italy",
    "Brazil",
    "Colombia",
    "Belize",
    "Venezuela",
  ];

  // your code here
  countries.forEach(function (item) {
    let myCountriesSelect = document.querySelector("#mySelect");
    let options = document.createElement("option");
    let text = document.createTextNode(item);
    options.appendChild(text);
    options.add(options);
    console.log(options);
  });
};
