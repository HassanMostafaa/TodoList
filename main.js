const addBtn = document.querySelector("button");
const currentList = document.getElementById("ul");

var count = 0;
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input");
  count++;
  var liText = document.createTextNode(count + ". " + input.value);
  var newLi = document.createElement("LI");
  var newBr = document.createElement("br");
  currentList.appendChild(newBr);
  newLi.appendChild(liText);
  currentList.appendChild(newLi);
  newLi.classList.add("foo");
  input.value = "";
  location.reload();
  //localstorage things
  localStorage.setItem("List", currentList.innerHTML);
  localStorage.setItem("counter", count);
});

function printFromLocalStorage() {
  currentList.innerHTML = localStorage.getItem("List");
  count = localStorage.getItem("counter");
}
printFromLocalStorage();

function ClearLocalStorage() {
  localStorage.clear();
  location.reload();
  count = 0;
}

var foo = document.querySelectorAll(".foo");
foo.forEach((e) =>
  e.addEventListener("click", () => {
    e.classList.toggle("DONE");
    if (e.style.textDecoration == "line-through") {
      e.style.textDecoration = "none";
    } else {
      e.style.textDecoration = "line-through";
    }
  })
);
document.getElementById("closeNotification").addEventListener("click", () => {
  document.querySelector(".notif").style.display = "none";
});
