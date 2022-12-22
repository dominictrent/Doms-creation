const customizerForm = document.getElementById("customizer");
const colorOptions = document.querySelectorAll(".color-options input");
const graphicsOptions = document.querySelectorAll(".graphics-options input");
const visorOptions = document.querySelectorAll(".visor-options input");

customizerForm.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches(".color-options input")) {
    handleColorChange(target.value);
  } else if (target.matches(".graphics-options input")) {
    handleGraphicsChange(target.value);
  } else if (target.matches(".visor-options input")) {
    handleVisorChange(target.value);
  }
});

function handleColorChange(color) {
  // Update the color of the object based on the selected option
  console.log(`Color changed to: ${color}`);
}

function handleGraphicsChange(graphics) {
  // Update the graphics of the object based on the selected option
  console.log(`Graphics changed to: ${graphics}`);
}

function handleVisorChange(visor) {
  // Update the visor of the object based on the selected option
  console.log(`Visor changed to: ${visor}`);
}
