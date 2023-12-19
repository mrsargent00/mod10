// Import the 'is-css3-color' module for CSS color validation
const isCss3Color = require('is-css3-color');

// Define a Shape class
class Shape {
  // Constructor takes an object with logo properties and sets up the initial state
  constructor({ logoName, textColour, logoColour, logoShape }) {
    // Save the logo shape type
    this.logoShape = logoShape;
    
    // Validate and set the logo name
    this.validateTextInput(logoName);
    this.logoName = logoName;

    // Validate and set the text color
    this.validateColourInput(textColour);
    this.textColour = textColour;

    // Validate and set the background color
    this.validateColourInput(logoColour);
    this.logoColour = logoColour;
  }

  // Helper function to check if input is empty
  ifInputEmpty(input) {
    if (!input) throw new Error('Input cannot be empty');
  }

  // Validate and set logo text input
  validateTextInput(input) {
    this.ifInputEmpty(input);
    if (input.length > 3) throw new Error('Logo text cannot be more than 3 characters');
  }

  // Validate and set color input
  validateColourInput(input) {
    this.ifInputEmpty(input);

    // Convert color input to lowercase for consistency
    input = input.toLowerCase();

    // Check if the color is a valid CSS color keyword or hex code
    if (!isCss3Color(input)) throw new Error('Please enter a valid CSS color keyword or hex code');
  }

  // Placeholder render method to be implemented by child shapes
  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}

// Export the Shape class for use in other modules
module.exports = Shape;
