const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./shapes/generateSvg');
const { makeShape } = require('./shapes/makeShape');

inquirer.prompt([
  { type: 'input', name: 'logoName', message: 'Please enter text (max 3 letters)' },
  { type: 'input', name: 'textColour', message: 'Enter text color' },
  { type: 'input', name: 'logoColour', message: 'Enter background color' },
  { type: 'list', name: 'logoShape', message: 'Choose logo shape', choices: ['triangle', 'circle', 'square'] },
])
  .then((data) => {
    const svgPath = './Complete Logo/logo.svg';
    const finalLogo = makeShape(data);

    fs.writeFile(svgPath, generateSvg(finalLogo), (err) => {
      if (err) console.error(err);
      else console.log('Generated logo.svg');
    });
  })
  .catch((err) => console.error(err));
