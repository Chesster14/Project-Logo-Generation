module.exports = [
        {
            type: 'input',
            name: 'text',
            message: 'Please nter 3 chararacters for your logo',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Please choose your shape',
            choices: ["Circle", "Triangle", "Square"]
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or a hexidecimaal number for the text color',
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or a hexidecimaal number for the shape color',
          },
]