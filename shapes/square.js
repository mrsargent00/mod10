// Import the base Shape class
const Shape = require('./shape');

// Define a Square class that extends the Shape class
class Square extends Shape {
  // Constructor that calls the parent class constructor with the provided data
  constructor(data) {
    super(data);
    // Note: No need to explicitly set this.data = data, as the superclass constructor (super(data)) already handles it
  }

  // Override the render method to generate SVG markup for a square
  render() {
    // Return SVG markup for a square with dynamic fill color based on the logoColour property
    return `<rect width="100" height="100" rx="15" fill="${this.logoColour}" />`;
  }
}

// Export the Square class for use in other modules
module.exports = Square;
