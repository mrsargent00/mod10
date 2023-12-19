// Import the base Shape class
const Shape = require('./shape');

// Define a Circle class that extends the Shape class
class Circle extends Shape {
  // Constructor that calls the parent class constructor with the provided data
  constructor(data) {
    super(data);
  }

  // Override the render method to generate SVG markup for a circle
  render() {
    // Return SVG markup for a circle with dynamic fill color based on the logoColour property
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColour}" />`;
  }
}

// Export the Circle class for use in other modules
module.exports = Circle;
