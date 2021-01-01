const addBtn = document.querySelector("button");
const currentList = document.getElementById("ul");

//  TIME OVERKILLLLL

// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

var months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const date = new Date();
var hours = date.getHours();

//TIME OVERKILLLLLL

function focus() {
  document.querySelector("input").focus();
}
focus();
var monthDate = date.getMonth();
var count = 0;
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input");
  count++;
  if (hours >= 12) {
    pmAm = "PM";
  } else {
    pmAm = "AM";
  }

  hours = hours - 12;
  var liText = document.createTextNode(count + ". " + input.value);
  var timeVal = document.createTextNode(
    // "Posted In : " +
    date.getDate() +
      "/" +
      months[date.getMonth()] +
      "/" +
      date.getFullYear() +
      "  at. " +
      hours +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      ":" +
      " " +
      pmAm
  );
  var newLi = document.createElement("LI");
  var newBr = document.createElement("br");
  var timeOfPost = document.createElement("h6");
  newLi.appendChild(liText);
  timeOfPost.appendChild(timeVal);
  timeOfPost.classList.add("timeStyle");

  currentList.appendChild(newBr);
  currentList.appendChild(newLi);
  currentList.appendChild(timeOfPost);
  newLi.classList.add("foo");

  input.value = "";
  location.reload();

  //localstorage things

  //PRINTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

  var foo = document.querySelectorAll(".foo");
  foo.forEach((e) =>
    e.addEventListener("click", () => {
      e.classList.toggle("DONE");
    })
  );

  localStorage.setItem("List", currentList.innerHTML);
  localStorage.setItem("counter", count);

  function printFromLocalStorage() {
    currentList.innerHTML = localStorage.getItem("List");
    count = localStorage.getItem("counter");
  }
  printFromLocalStorage();
  //PRINTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
});

function printFromLocalStorage() {
  currentList.innerHTML = localStorage.getItem("List");
  count = localStorage.getItem("counter");
}
printFromLocalStorage();
var foo = document.querySelectorAll(".foo");
foo.forEach((e) =>
  e.addEventListener("click", () => {
    e.classList.toggle("DONE");
    // localStorage.setItem("List Classes", e.classList);
    localStorage.setItem("List", currentList.innerHTML);
    localStorage.setItem("counter", count);
  })
);

//RESETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
function ClearLocalStorage() {
  localStorage.clear();
  location.reload();
  count = 0;
}
