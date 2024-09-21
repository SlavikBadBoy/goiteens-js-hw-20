const input = document.querySelector("#controls input");
const renderBtn = document.querySelector("[data-action-render]");
const destroyBtn = document.querySelector("[data-action-destroy]");
const boxesContainer = document.querySelector("#boxes");

renderBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (!isNaN(amount) && amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

const createBoxes = (amount) => {
  destroyBoxes();
  let size = 30;
  let boxesHTML = "";

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
};

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
