// Import the base Shape class
const Shape = require('./shape');

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {
  // Constructor that calls the parent class constructor with the provided data
  constructor(data) {
    super(data);
  }

  // Override the render method to generate SVG markup for a triangle
  render() {
    // Return SVG markup for a triangle with dynamic fill color based on the logoColour property
    return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColour}" />`;
  }
}

// Export the Triangle class for use in other modules
module.exports = Triangle;
