// JavaScript Code
const helmet = document.getElementById("helmet");
const colorSelect = document.getElementById("color");
const decalSelect = document.getElementById("decal");

function updateHelmet() {
  helmet.style.backgroundColor = colorSelect.value;
  helmet.style.backgroundImage = `url(decals/${decalSelect.value}.png)`;
}

colorSelect.addEventListener("change", updateHelmet);
decalSelect.addEventListener("change", updateHelmet);

updateHelmet();
