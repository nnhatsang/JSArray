function getEl(n) {
  return document.getElementById(n);
}
var exportArr = [];
function addNum() {
  var add = Number(getEl("inputArr").value);
  exportArr.push(add);
  getEl("outArr").innerHTML = exportArr;
  getEl("inputArr").value = "";
}
