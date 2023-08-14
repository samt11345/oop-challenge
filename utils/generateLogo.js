const Square = require('../lib/Square')
const Triangle = require('../lib/Triangle')
const Circle = require('../lib/Circle')

function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'triangle') {
        shape = new Triangle(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === 'square') {
        shape = new Square(data.shapeColor, data.text, data.textColor) 
        } else {
            shape = new Circle(data.shapeColor, data.text, data.textColor)
        }
        return shape.renderSvg();

    }

 module.exports = generateLogo

