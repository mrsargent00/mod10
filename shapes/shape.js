const isCss3Color = require('is-css3-color');

class Shape {
  constructor({ logoName, textColour, logoColour, logoShape }) {
    this.logoShape = logoShape;
    this.validateTextInput(logoName);
    this.logoName = logoName;
    this.validateColourInput(textColour);
    this.textColour = textColour;
    this.validateColourInput(logoColour);
    this.logoColour = logoColour;
  }

  ifInputEmpty(input) {
    if (!input) throw new Error('Input cannot be empty');
  }

  validateTextInput(input) {
    this.ifInputEmpty(input);
    if (input.length > 3) throw new Error('Logo text cannot be more than 3 characters');
  }

  validateColourInput(input) {
    this.ifInputEmpty(input);
    input = input.toLowerCase();
    if (!isCss3Color(input)) throw new Error('Please enter a valid CSS color keyword or hex code');
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}

module.exports = Shape;
