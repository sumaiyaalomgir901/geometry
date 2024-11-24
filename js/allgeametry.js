////////////////////////////////////////Triangle
function calculateTriangleArea() {
  const base = getInputById("triangle-base");
  const height = getInputById("triangle-height");
  const calculate = 0.5 * base * height;
  setInnerText("triangle", calculate);
}
/////////////////////////////////////Rectangle
function calculateRectangleArea() {
  const width = getInputById("rectangle-width");
  const length = getInputById("rectangle-length");
  const calculate = width * length;
  setInnerText("rectangle", calculate);
}
///////////////////////////////Parallelogram
function calculateParallelogramArea() {
  const width = getInputById("parallelogram-width");
  const height = getInputById("parallelogram-height");
  const calculate = width * height;
  setInnerText("parallelogram", calculate);
}
///////////////////////////////Rhombus
function calculateRhombusArea() {
  const diagonalOne = getInputById("diagonal1");
  const diagonalTwo = getInputById("diagonal2");
  const calculate = 0.5 * diagonalOne * diagonalTwo;
  setInnerText("rhombus", calculate);
}
/////////////////////////////////
function getInputById(inputFieldID) {
  const inputField = document.getElementById(inputFieldID);
  const inputFieldValue = inputField.value;
  const input = parseFloat(inputFieldValue);
  return input;
}
function setInnerText(value, calculate) {
  const element = document.getElementById(value);
  element.innerText = calculate;
}
