// Function to generate an SVG markup for a given shape
const generateSvg = (shape) => {
  return `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()} <!-- Render the shape-specific SVG markup -->
    <text
      x="50%"
      y="${shape.logoShape != 'triangle' ? '50%' : '40%'}"
      text-anchor="middle"
      fill="${shape.textColour}"
      font-size="2.3rem" letter-spacing="2" dy=".3em"
      font-family="monospace">${shape.logoName} <!-- Render the logo text -->
    </text>
  </svg>
  `;
};

// Export the generateSvg function for use in other modules
module.exports = { generateSvg };
