class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render(text, color) {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="${this.color}" />
        <text x="100" y="100" style="color: ${color};">${text}</text>
        </svg>`;
  }
}

// let shape = new Circle();
// shape.setColor('red');
// let output = shape.render();
// console.log('output', output);

module.exports = Circle;
