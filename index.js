const inquirer = require("inquirer")
const prompts = require("./Lib/prompts");
const { writeFile } = require("fs").promises;
const Circle = require('./Lib/shapes');
const generateLogo = require('./Lib/generateLogo');

const init =async () => {
  try {
    const responses = await inquirer.prompt(prompts);
    console.log(responses)
    let shape
    if (responses.shape === "circle") {
      shape = new Circle()
      shape.setColor(responses.shapeColor)
    } 
    
    console.log("shape", shape);
    FileSystemWritableFileStream("logo.svg", shape.render());
  }
  catch (err) {
    console.error(err)
  }
};

init();



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