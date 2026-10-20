const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  // this allows drop lactaion to know which element is being moved when you release it
  e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
  console.log("Drag ended");
}

function dragLeave(e) {
  // This line is important becasue by default, browwsers don't allow  you to drop elements onto ther elements

  e.preventDefault();

  this.classList.remove("over");
}

function dragEnter(e) {
  e.preventDefault();

  this.classList.add("over");
}

function dragOver(e) {
  e.preventDefault();

  this.classList.add("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");

  const card = document.getElementById(id);

  this.appendChild(card);

  this.classList.remove("over");
}
