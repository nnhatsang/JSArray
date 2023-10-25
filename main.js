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

function Ex1() {
  var result = 0;
  for (let i = 0; i < exportArr.length; i++) {
    if (exportArr[i] > 0) {
      result += exportArr[i];
    }
  }
  getEl("Ex_1").innerHTML = result;
}

function Ex2() {
  var result = 0;
  for (let i = 0; i < exportArr.length; i++) {
    if (exportArr[i] > 0) {
      result++;
    }
  }
  getEl("Ex_2").innerHTML = result;
}
function Ex3() {
  var result = Math.min(...exportArr);
  getEl("Ex_3").innerHTML = result;
}
function findSmallestPositiveNumber(arr) {
  const positiveNumbers = arr.filter((number) => number > 0);
  if (positiveNumbers.length === 0) {
    return "Không có số dương trong mảng";
  }
  return Math.min.apply(null, positiveNumbers);
}

function Ex4() {
  var result = findSmallestPositiveNumber(exportArr);
  getEl("Ex_4").innerHTML = result;
}

function findLastEvenNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return "Không có số chẵn trong mảng";
}

function Ex5() {
  const result = findLastEvenNumber(exportArr);
  getEl("Ex_5").innerHTML = result;
}
function Ex6() {
  var result = exportArr.sort((a, b) => a - b);
  getEl("Ex_6").innerHTML = result;
}
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function findFirstPrimeInArray(arr) {
  for (const number of arr) {
    if (isPrime(number)) {
      return number;
    }
  }
  return null; 
}
function Ex7() {
  const result = findFirstPrimeInArray(exportArr);
  getEl("Ex_7").innerHTML = result;
}