const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./Shapes/generateSvg');
const { makeShape } = require('./Shapes/makeShape');

// Prompt the user for input using Inquirer
inquirer.prompt([
  { type: 'input', name: 'logoName', message: 'Please enter text (max 3 letters)' },
  { type: 'input', name: 'textColour', message: 'Enter text color' },
  { type: 'input', name: 'logoColour', message: 'Enter background color' },
  { type: 'list', name: 'logoShape', message: 'Choose logo shape', choices: ['triangle', 'circle', 'square'] },
])
  .then((data) => {
    // Define the path where the SVG file will be saved
    const svgPath = './Complete Logo/logo.svg';

    // Create the final logo shape based on user input
    const finalLogo = makeShape(data);

    // Write the generated SVG to a file
    fs.writeFile(svgPath, generateSvg(finalLogo), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((err) => console.error(err));
