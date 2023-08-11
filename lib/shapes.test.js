// 
class Shape {
    constructor(renderedShape) {
        this.renderedShape = renderedShape;
    }

    render() {
        return this.renderedShape;
    }
}

describe("Shapes", () => {
    test("Square rendering", () => {
        const square = new Shape("<rect x='50' y='50' width='200' height='200' style='fill:green'/>");
        expect(square.render()).toEqual("<rect x='50' y='50' width='200' height='200' style='fill:green'/>");
    });

    test("Triangle rendering", () => {
        const triangle = new Shape("<polygon points='100,50 50,150 150,150' style='fill:blue'/>");
        expect(triangle.render()).toEqual("<polygon points='100,50 50,150 150,150' style='fill:blue'/>");
    });

    test("Circle rendering", () => {
        const circle = new Shape("<circle cx='150' cy='150' r='100' style='fill:red'/>");
        expect(circle.render()).toEqual("<circle cx='150' cy='150' r='100' style='fill:red'/>");
    });
});
