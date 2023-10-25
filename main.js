function getEl(n) {
  return document.getElementById(n);
}
var exportArr = [],
  arrEx8 = [];
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
function addNumFloat() {
  var add = Number(getEl("inputArr8").value);
  arrEx8.push(add);
  getEl("outArr8").innerHTML = arrEx8;
  getEl("inputArr8").value = "";
}
function Ex8() {
  for (var dem = 0, i = 0; i < arrEx8.length; i++)
    Number.isInteger(arrEx8[i]) && dem++;
  getEl("Ex_8").innerHTML = dem;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function Ex9() {
  const index1 = parseInt(getEl("inputIndex1").value, 10);
  const index2 = parseInt(getEl("inputIndex2").value, 10);

  if (
    !isNaN(index1) &&
    !isNaN(index2) &&
    index1 >= 0 &&
    index2 >= 0 &&
    index1 < exportArr.length &&
    index2 < exportArr.length
  ) {
    swap(exportArr, index1, index2);
    getEl("Ex_9").innerHTML = "Mảng sau khi đổi: " + exportArr;
  } else {
    getEl("Ex_9").innerHTML = "Vị trí không hợp lệ.";
  }
}
function Ex10() {
  for (var demDuong = 0, demAm = 0, i = 0; i < exportArr.length; i++)
    exportArr[i] > 0 ? demDuong++ : exportArr[i] < 0 && demAm++;
  var result =
    demDuong > demAm
      ? "Số dương > Số âm"
      : demDuong < demAm
      ? "Số âm > Số dương"
      : "Số dương = Số âm";
  getEl(
    "Ex_10"
  ).innerHTML = `Có ${demAm} số âm và ${demDuong} số dương trong mảng. Như vậy, ${result}`;
}
