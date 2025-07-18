const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
}

function createPalette() {
  palette.innerHTML = "";
  const colors = [];
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    colors.push(color);
    const colorDiv = document.createElement("div");
    colorDiv.className = "flex-1 h-20 rounded mx-1 cursor-pointer border-2 border-gray-200 hover:border-gray-400 flex flex-col items-center justify-center";
    colorDiv.style.backgroundColor = color;
    colorDiv.innerHTML = `<span class="bg-white bg-opacity-70 px-2 py-1 rounded text-xs font-mono mt-12">${color}</span>`;
    colorDiv.onclick = () => {
      navigator.clipboard.writeText(color);
      colorDiv.querySelector("span").textContent = "Copied!";
      setTimeout(() => colorDiv.querySelector("span").textContent = color, 800);
    }
    palette.appendChild(colorDiv);
  }
  return colors;
}

let currentColors = createPalette();

generateBtn.onclick = () => {
  currentColors = createPalette();
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(currentColors.join(", "));
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy HEX Codes", 800);
};
