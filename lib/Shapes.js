class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeColor=shapeColor;
        this.text=text;
        this.textColor=textColor;
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}



module.exports = Shape

