function splitCoorX(str) {
  return str.slice(1)
}

function splitCoorX(str) {
  return str.slice(-1)
}

function distanceCompare(item) {
  if (item.distance > maxDistance) {
    maxDistance = item.distance
    maxDistanceStd = item.name
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
  let ex02_year = document.getElementById("ex02_year").value
  let ex02_month = document.getElementById("ex02_month").value
  days = new Date(ex02_year, ex02_month, 0).getDate()
  ex02_result.classList.add("alert")
  ex02_result.innerHTML = `Tháng ${ex02_month}/${ex02_year} có ${days} ngày`
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
  if (tens !== 0 && tens !== 1) {
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
  let ex04_std01_name = document.getElementById("ex04_std01_name").value
  let ex04_std01_coor = document.getElementById("ex04_std01_coor").value
  let ex04_std02_name = document.getElementById("ex04_std02_name").value
  let ex04_std02_coor = document.getElementById("ex04_std02_coor").value
  let ex04_std03_name = document.getElementById("ex04_std03_name").value
  let ex04_std03_coor = document.getElementById("ex04_std03_coor").value
  let ex04_sch_coor = document.getElementById("ex04_sch_coor").value
  window.sch_X = ex04_sch_coor.slice(0, ex04_sch_coor.indexOf(","))
  window.sch_Y = ex04_sch_coor.slice(ex04_sch_coor.indexOf(",") + 1, ex04_sch_coor.length)
  class Std {
    constructor(name, x, y) {
      this.name = name
      this.x = x
      this.y = y
    }
    get distance() {
      return this.distanceCal()
    }
    distanceCal() {
      return Math.sqrt((this.x - sch_X) ** 2 + (this.y - sch_Y) ** 2)
    }
  }
  let std01 = new Std(ex04_std01_name, ex04_std01_coor.slice(0, ex04_std01_coor.indexOf(",")), ex04_std01_coor.slice(ex04_std01_coor.indexOf(",") + 1, ex04_std01_coor.length))
  let std02 = new Std(ex04_std02_name, ex04_std02_coor.slice(0, ex04_std02_coor.indexOf(",")), ex04_std02_coor.slice(ex04_std02_coor.indexOf(",") + 1, ex04_std02_coor.length))
  let std03 = new Std(ex04_std03_name, ex04_std03_coor.slice(0, ex04_std03_coor.indexOf(",")), ex04_std03_coor.slice(ex04_std03_coor.indexOf(",") + 1, ex04_std03_coor.length))
  window.maxDistance = 0
  window.maxDistanceStd = ""
  distanceCompare(std01)
  distanceCompare(std02)
  distanceCompare(std03)
  let ex04_result = document.getElementById("ex04_result")
  ex04_result.classList.add("alert")
  ex04_result.innerHTML = `${maxDistanceStd} xa trường nhất`
}