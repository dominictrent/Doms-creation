// Get all the options elements
const colorOptions = document.querySelectorAll(".color-options input");
const graphicsOptions = document.querySelectorAll(".graphics-options input");
const visorOptions = document.querySelectorAll(".visor-options input");
const sizeOptions = document.querySelectorAll(".size-options input");

// Add event listeners to the options
colorOptions.forEach((option) =>
  option.addEventListener("change", updatePreview)
);
graphicsOptions.forEach((option) =>
  option.addEventListener("change", updatePreview)
);
visorOptions.forEach((option) =>
  option.addEventListener("change", updatePreview)
);
sizeOptions.forEach((option) =>
  option.addEventListener("change", updatePreview)
);

// Update the preview image based on the selected options
function updatePreview() {
  // Get the selected options
  const color = getSelectedOption(colorOptions);
  const graphics = getSelectedOption(graphicsOptions);
  const visor = getSelectedOption(visorOptions);
  const size = getSelectedOption(sizeOptions);

  // Update the preview image with the selected options
  const preview = document.querySelector(".preview img");
  preview.src = `/images/helmets/${color}-${graphics}-${visor}-${size}.png`;
}

// Get the value of the selected option in a group of options
function getSelectedOption(options) {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return options[i].value;
    }
  }
}
