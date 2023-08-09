const Shape = require("./Shapes")

class Triangle extends Shape {
    constructor(shapeColor, text, textColor){
        super(shapeColor,text,textColor)
    }
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.shapeColor}"/>`;
    }
    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}
module.exports=Triangle