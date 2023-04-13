// Select the image element
const image = document.querySelector("img");

// Set initial rotation angle to 0 degrees
let angle = 0;

// Set up animation loop
function animate() {
  // Increment rotation angle by 1 degree
  angle += 1;

  // Apply rotation transform to the image
  image.style.transform = `rotate(${angle}deg)`;

  // Request another animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
// animate();
