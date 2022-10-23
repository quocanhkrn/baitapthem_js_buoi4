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
  let ex03_num01 = parseInt(document.getElementById("ex03_num01").value)
  let ex03_num02 = parseInt(document.getElementById("ex03_num02").value)
  let ex03_num03 = parseInt(document.getElementById("ex03_num03").value)
  let ex03_result = document.getElementById("ex03_result")
  window.countEven = 0
  window.countOdd = 0
  checkOddEven(ex03_num01)
  checkOddEven(ex03_num02)
  checkOddEven(ex03_num03)
  ex03_result.classList.add("alert")
  ex03_result.innerHTML = ``
}

function ex04() {
  let ex04_edge01 = parseInt(document.getElementById("ex04_edge01").value)
  let ex04_edge02 = parseInt(document.getElementById("ex04_edge02").value)
  let ex04_edge03 = parseInt(document.getElementById("ex04_edge03").value)
  let ex04_result = document.getElementById("ex04_result")
  ex04_result.classList.add("alert")
  ex04_result.innerHTML = `Đây là một ${checkTriangle(ex04_edge01, ex04_edge02, ex04_edge03)}`
}