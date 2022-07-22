let btn = document.querySelector(".add");
let ul = document.querySelector(".ul");
let input = document.querySelector(".inp");



btn.addEventListener("click", function () {
  if (input.value == "") {
    alert("LEAVE YOUR COMFORT ZONE! TYPE SOMETHING");
  } else {
    var li = document.createElement("li");
    li.setAttribute("class", "li");
    li.innerHTML = input.value;

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "dbutton");

    deleteButton.innerHTML = "x";
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";

    var deleteButtons = document.querySelectorAll(".dbutton");

    deleteButtons.forEach((x) => {
      x.onclick = () => {
        ul.removeChild(x.parentElement);
      };
    });
  }
});
