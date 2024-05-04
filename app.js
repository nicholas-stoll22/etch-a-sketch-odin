function sketchBoard(size) {
    let screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++) {
      let col = document.createElement("div");
      col.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "2px solid black";
        col.appendChild(row);
      }
      screen.appendChild(col);
      console.log(screen)
    }
  }

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  reset();
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries());
  userGenerate(data);
});

function reset() {
  document
    .querySelectorAll(".column")
    .forEach((e) => e.parentNode.removeChild(e));
}

function userGenerate(data){
  let gridSize = data["val"]
  if (gridSize > 100) {
    console.log("too big")
  } else
  sketchBoard(gridSize)
}