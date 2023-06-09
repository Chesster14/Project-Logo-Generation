class Shape {
    constructor () {
        this.color = ""
    }

    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" f="80" fill="${this.color}" /> </svg>`
}
}

module.exports = Circle
