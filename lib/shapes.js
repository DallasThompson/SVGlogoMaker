class Shape {
  constructor(text, textColor) {
    this.svgTagOpen = `<svg version="1.1"
        width="300" 
        height="200"
        xmlns="http://www.w3.org/2000/svg">`;
    this.svgTagClose = "</svg>";
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  getSvgImage() {
    return this.svgTagOpen + this.tag + this.text + this.svgTagClose;
  }
}

class Rectangle extends Shape {
  constructor(color, text, textColor) {
    super(text, textColor);
    this.tag = `<rect width="100%" height="100%" fill="${color}" />`;
  }
}
class Circle extends Shape {
  constructor(color, text, textColor) {
    super(text, textColor);
    this.tag = `<circle cx="50%" cy="50%" r="100" fill="${color}" />`;
  }
}
class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(text, textColor);
    this.tag = `<polygon points="150, 0 0, 200 300,200" fill="${color}" />`;
  }
}

module.exports = { Rectangle, Circle, Triangle };
