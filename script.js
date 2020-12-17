function solveArea() {
  let width= document.getElementById("width").value;
  width= parseInt(width);
  let length= document.getElementById("length").value;
  length= parseInt(length);
  let height= document.getElementById("height").value;
  height= parseInt(height)
  let area = width+length*height/2;
  document.getElementById("area").value = area;
}