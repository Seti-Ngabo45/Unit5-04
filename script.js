function solveArea() {
  let width= document.getElementById('width').value;
  width= parseInt(width);
  let length= document.getElementById('length').value;
  length= parseInt(length);
  let height= document.getElementById('height').value;
  height= parseInt(height)
  let area = length + width * height / 2;
  area= parseInt(area);
  document.getElementById('area').value = area;
}