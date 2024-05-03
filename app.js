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
    }
  }
  
  sketchBoard(16);