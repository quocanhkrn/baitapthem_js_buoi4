function checkOddEven(num) {
  if (num % 2 === 0) {
    countEven++
  } else {
    countOdd++
  }
}

function checkTriangle(a, b, c) {
  if (a === b && b === c) {
    return `Tam giác đều`
  } else if (a === b || b === c || a === c) {
    return `Tam giác cân`
  } else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
    return `Tam giác vuông`
  } else {
    return `Tam giác thường`
  }
}

function ex01() {
  let ex01_date = new Date(document.getElementById("ex01_date").value)
  let ex01_date_before = new Date(ex01_date)
  ex01_date_before.setDate(ex01_date_before.getDate() - 1)
  let ex01_date_after = new Date(ex01_date)
  ex01_date_after.setDate(ex01_date_after.getDate() + 1)
  let ex01_result = document.getElementById("ex01_result")
  ex01_result.classList.add("alert")
  ex01_result.innerHTML = `Ngày hôm trước: ${ex01_date_before.toLocaleDateString('vi-VI')} <br/> Ngày hôm sau: ${ex01_date_after.toLocaleDateString('vi-VI')}`
}

function ex02() {
  let ex02_user = document.getElementById("ex02_user").value
  let ex02_result = document.getElementById("ex02_result")

  switch (ex02_user) {
    case `B`:
      ex02_user = `Bố`
      break;
    case `M`:
      ex02_user = `Mẹ`
      break;
    case `A`:
      ex02_user = `Anh trai`
      break;
    case `E`:
      ex02_user = `Em gái`
      break;
    default:
      break;
  }
  ex02_result.classList.add("alert")
  ex02_result.innerHTML = `Xin chào, ${ex02_user} !!!`
}

function ex03() {
  let ex03_num = parseInt(document.getElementById("ex03_num").value)
  hundreds = Math.floor(ex03_num / 100)
  tens = Math.floor(ex03_num / 10) % 10
  units = ex03_num % 10
  let hundreds_read = ""
  let tens_read = ""
  let units_read = ""
  switch (hundreds) {
    case 1:
      hundreds_read = "Một trăm"
      break;
    case 2:
      hundreds_read = "Hai trăm"
      break;
    case 3:
      hundreds_read = "Ba trăm"
      break;
    case 4:
      hundreds_read = "Bốn trăm"
      break;
    case 5:
      hundreds_read = "Năm trăm"
      break;
    case 6:
      hundreds_read = "Sáu trăm"
      break;
    case 7:
      hundreds_read = "Bảy trăm"
      break;
    case 8:
      hundreds_read = "Tám trăm"
      break;
    case 9:
      hundreds_read = "Chín trăm"
      break;
  }
  switch (tens) {
    case 0:
      if (units === 0) {
        tens_read = ""
      } else { tens_read = "lẻ" }
      break;
    case 1:
      tens_read = "mười"
      break;
    case 2:
      tens_read = "hai mươi"
      break;
    case 3:
      tens_read = "ba mươi"
      break;
    case 4:
      tens_read = "bốn mươi"
      break;
    case 5:
      tens_read = "năm mươi"
      break;
    case 6:
      tens_read = "sáu mươi"
      break;
    case 7:
      tens_read = "bảy mươi"
      break;
    case 8:
      tens_read = "tám mươi"
      break;
    case 9:
      tens_read = "chín mươi"
      break;
  }
  if (tens !== 0) {
    switch (units) {
      case 1:
        units_read = "mốt"
        break;
      case 2:
        units_read = "hai"
        break;
      case 3:
        units_read = "ba"
        break;
      case 4:
        units_read = "bốn"
        break;
      case 5:
        units_read = "lăm"
        break;
      case 6:
        units_read = "sáu"
        break;
      case 7:
        units_read = "bảy"
        break;
      case 8:
        units_read = "tám"
        break;
      case 9:
        units_read = "chín"
        break;
    }
  } else {
    switch (units) {
      case 1:
        units_read = "một"
        break;
      case 2:
        units_read = "hai"
        break;
      case 3:
        units_read = "ba"
        break;
      case 4:
        units_read = "bốn"
        break;
      case 5:
        units_read = "năm"
        break;
      case 6:
        units_read = "sáu"
        break;
      case 7:
        units_read = "bảy"
        break;
      case 8:
        units_read = "tám"
        break;
      case 9:
        units_read = "chín"
        break;
    }
  }
  ex03_result.classList.add("alert")
  ex03_result.innerHTML = `${hundreds_read} ${tens_read} ${units_read}`
}

function ex04() {
  let ex04_edge01 = parseInt(document.getElementById("ex04_edge01").value)
  let ex04_edge02 = parseInt(document.getElementById("ex04_edge02").value)
  let ex04_edge03 = parseInt(document.getElementById("ex04_edge03").value)
  let ex04_result = document.getElementById("ex04_result")
  ex04_result.classList.add("alert")
  ex04_result.innerHTML = `Đây là một ${checkTriangle(ex04_edge01, ex04_edge02, ex04_edge03)}`
}