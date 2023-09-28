const inquirer = require("inquirer");
const maxLength = require("inquirer-maxlength-input-prompt");
const { Rectangle, Triangle, Circle } = require("./lib/shapes");
const fs = require("fs");

inquirer.registerPrompt("maxlength-input", maxLength);

inquirer
  .prompt([
    {
      type: "maxlength-input",
      name: "text",
      message: "Enter your text.",
      maxLength: 3,
    },
    {
      type: "input",
      message: "Enter your text color.",
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose your shape.",
      name: "shape",
      choices: ["Circle", "Triangle", "Rectangle"],
    },
    {
      type: "input",
      message: "Enter your shape color.",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    var userShape;
    switch (response.shape) {
      case "Rectangle":
        userShape = new Rectangle(
          response.shapeColor,
          response.text,
          response.textColor
        );
        break;
      case "Circle":
        userShape = new Circle(
          response.shapeColor,
          response.text,
          response.textColor
        );
        break;
      case "Triangle":
        userShape = new Triangle(
          response.shapeColor,
          response.text,
          response.textColor
        );
        break;
      default:
        break;
    }
    fs.writeFileSync("SVGImage.svg", userShape.getSvgImage(), (err) => {
      if (err) {
        if (err) {
          console.error("Error writing SVG file:", err);
        } else {
          console.log(`SVG file saved as SVGImage.svg`);
        }
      }
    });
  });
