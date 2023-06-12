const inquirer = require("inquirer");
const prompts = require("./Lib/prompts");
const fs = require('fs');
const Circle = require("./Lib/shapes");
// const Triangle = require("./Lib/shapes");
// const Square = require("./Lib/shapes");

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
      // shape = new Triangle();
      // shape = new Square();

      // use the answers from the user to set shape properties
      shape.setColor(responses.shapeColor);

      output = shape.render(responses.text, responses.textColor);
    }
    // if (responses.shape == "Triangle") {

    //  if the user selected triangle, create a new object instance of your Triangle class
    //you would do something similar for the other shapes--don't forget to import them up above
   // shape = new Triangle();
   
    // use the answers from the user to set shape properties
    //   shape.setColor(responses.shapeColor);

    //   output = shape.render(responses.text, responses.textColor);
    // }
    // if (responses.shape == "Triangle") {

    // if the user selected triangle, create a new object instance of your Triangle class
    //  you would do something similar for the other shapes--don't forget to import them up above
    //   // shape = new Triangle();

    //   // use the answers from the user to set shape properties
    //   shape.setColor(responses.shapeColor);

    //   output = shape.render(responses.text, responses.textColor);
    // }
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

