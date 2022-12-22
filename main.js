// JavaScript Code
const helmet = document.getElementById("helmet");
const base = document.getElementById("base");
const faceMask = document.getElementById("face-mask");
const shell = document.getElementById("shell");
const decals = document.getElementById("decals");
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");

// Customization options
const colors = ["#fff", "#000", "#f00", "#0f0", "#00f"];
const patterns = ["solid", "striped", "dotted", "checkered"];
const decalImages = ["image1.png", "image2.png", "image3.png"];
const decalElement = document.getElementById("my-decal");
decalElement.addEventListener("click", function () {
  // Get the decal image source
  const decal = this.src;

  // Update the helmet decal
  document.getElementById("left-side").style.backgroundImage = `url(${decal})`;
  document.getElementById("right-side").style.backgroundImage = `url(${decal})`;
});

// Set default customization options
let color = "#fff";
let pattern = "solid";
let decal = "image1.png";

function updateHelmet() {
  base.style.backgroundColor = color;
  faceMask.style.backgroundColor = color;
  shell.style.backgroundColor = color;

  if (pattern === "striped") {
    base.style.backgroundImage = "linear-gradient(#fff, #fff)";
    faceMask.style.backgroundImage = "linear-gradient(#fff, #fff)";
    shell.style.backgroundImage = "linear-gradient(#fff, #fff)";
  }
}
