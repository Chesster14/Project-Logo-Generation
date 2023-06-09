const inquirer = require("inquirer");
const prompts = require("./Lib/prompts");
const fs = require('fs');
const Circle = require("./Lib/shapes");

const init = async () => {
  try {
    // run inquirer to get answers from the user
    const responses = await inquirer.prompt(prompts);
    console.log(responses);

    // define some variables
    let shape;
    let output;

    // check what shape the user selected, i.e. triangle, circle, or square
    // you could use a switch statement to cover the three cases
    if (responses.shape == "Circle") {

      // if the user selected circle, create a new object instance of your Circle class
      // you would do something similar for the other shapes--don't forget to import them up above
      shape = new Circle();

      // use the answers from the user to set shape properties
      shape.setColor(responses.shapeColor);

      output = shape.render(responses.text, responses.textColor);
    }
    console.log("output", output);

    // write output to a file
    fs.writeFileSync('logo.svg', output);

    // FileSystemWritableFileStream("logo.svg", shape.render());
  } catch (err) {
    console.error(err);
  }
};

init();

// let shape = new Circle();
// shape.setColor('red');
// let output = shape.render();
// console.log('output', output);

// const generatemd = ({ title}) =>
//   `# ${title}

//   `;

// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'text',
//       message: 'Enter Character 1?',
//       choices: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     },
//     {
//         type: 'list',
//         name: 'text',
//         message: 'Enter Character 2?',
//         choices: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//       },
//       {
//         type: 'list',
//         name: 'text',
//         message: 'Enter Character 3?',
//         choices: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//       },
//     {
//       type: 'list',
//       name: 'textColor',
//       message: 'Please choose your text Color',
//       choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Violet"]
//     },
//     {
//       type: 'list',
//       name: 'shape',
//       message: 'Please choose your outline shape?',
//       choices: ["Circle", "Triangle", "Square"]
//     },
//     {
//       type: 'list',
//       name: 'shapeColor',
//       message: 'Please choose your shape color?',
//       choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Violet"]
//     },
//   ])
//   .then((answers) => {
//     const markdownPageContent = generatemd(answers);

//     fs.writeFileSync('index.md', generatemd(answers), (err) =>
//       err ? console.log(err) : console.log('Successfully generated logo.svg!')
//     );
//   });
