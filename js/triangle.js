function calculateTriangleArea() {
  const triangleBaseText = document.getElementById("triangle-base");
  const triangleBaseValue = triangleBaseText.value;
  const base = parseFloat(triangleBaseValue);

  const triangleHeightText = document.getElementById("triangle-height");
  const triangleHeightValue = triangleHeightText.value;
  const height = parseFloat(triangleHeightValue);

  const area = 0.5 * base * height;
  console.log(area);
  const triangleSpan = document.getElementById("triangle");
  triangleSpan.innerText = area;
}
