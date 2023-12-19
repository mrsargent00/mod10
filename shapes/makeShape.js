// Import the different shape classes
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Function to create a shape based on user input
const makeShape = (data) => {
  // Destructure the data object to get the logoShape property
  const { logoShape } = data;

  // Use a switch statement to determine the shape type and create an instance of the corresponding class
  switch (logoShape) {
    case 'circle':
      // Create a new Circle instance with the provided data
      const makeCircle = new Circle(data);
      return makeCircle;
      break;

    case 'triangle':
      // Create a new Triangle instance with the provided data
      const makeTriangle = new Triangle(data);
      return makeTriangle;
      break;

    case 'square':
      // Create a new Square instance with the provided data
      const makeSquare = new Square(data);
      return makeSquare;
      break;

    // Default case for handling unknown shapes
    default:
      return `Something is not right!`;
      break;
  }
};

// Export the makeShape function for use in other modules
module.exports = { makeShape };
