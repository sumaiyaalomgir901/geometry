function calculateRectangleArea() {
  const rectangleWidthText = document.getElementById("rectangle-width");
  const rectangleWidthValue = rectangleWidthText.value;
  const width = parseFloat(rectangleWidthValue);

  const rectangleLengthText = document.getElementById("rectangle-length");
  const rectangleLengthValue = rectangleLengthText.value;
  const length = parseFloat(rectangleLengthValue);
  const area = width * length;

  const rectangleSpan = document.getElementById("rectangle");
  rectangleSpan.innerText = area;
}
