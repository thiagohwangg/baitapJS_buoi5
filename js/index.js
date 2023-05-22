// Bài tập 1: Quản lý tuyển sinh
function calcAreaGrade(area) {
    if (area === "A") {
        return 2;
    }

    if (area === "B") {
        return 1;
    }

    if (area === "C") {
        return 0.5;
    }

    return 0;

}

function calcTypeGrade(type) {
    if (type === "1") {
        return 2.5;
    }

    if (type === "2") {
        return 1.5;
    }

    if (type === "3") {
        return 1;
    }

    return 0;

}

function exercise1() {

    // INPUT
    var benchmark = +document.getElementById("benchmarkInput").value;
    var subject1 = +document.getElementById("subject1").value;
    var subject2 = +document.getElementById("subject2").value;
    var subject3 = +document.getElementById("subject3").value;
    var areaVal = document.getElementById("areaSelect").value;
    var typeVal = document.getElementById("typeSelect").value;

    var araGrade = calcAreaGrade(areaVal)
    var typeGrade = calcTypeGrade(typeVal)

    // PROGRESS
    var total = subject1 + subject2 + subject3 + araGrade + typeGrade;
    var result = document.getElementById("result");
    if (
        total >= benchmark &&
        subject1 !== 0 &&
        subject2 !== 0 &&
        subject3 !== 0
    ) {
        result.innerHTML = 'Bạn đã đậu. Tổng điểm: ' + total;
    } else {
        result.innerHTML = 'Bạn đã rớt. Tổng điểm: ' + total;
    }

}

document.getElementById("btnSubmit").onclick = exercise1;

// OUTPUT total:number

//  Bài 2 : Tính tiền điện
var btn2 = document.getElementById("btn2");
btn2.onclick = function () {

    // INPUT
    var hoTen = document.getElementById("hoTen").value;
    var soKw = document.getElementById("soKw").value;
    var tienDien = 0;
    var gia1Kw = 500;
    var result2 = document.getElementById("result2");

    // PROGRESS
    if (soKw <= 50) {
        tienDien = soKw * gia1Kw;
    } else if (soKw <= 100 && soKw >= 51) {
        tienDien = soKw * gia1Kw + (soKw - 50) * 650;
    } else if (soKw <= 200 && soKw >= 100) {
        tienDien = 50 * gia1Kw + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350 && soKw >= 201) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    // OUTPUT tienDien:number
    result2.innerHTML = 'Họ tên : ' + hoTen + ';  Tiền điện : ' + new Intl.NumberFormat("vn-VN").format(tienDien) + 'Đ';
}

// Bài 3 : Tính thuế thu nhập cá nhân
var btn3 = document.getElementById("btn3");
btn3.onclick = function () {

    // INPUT
    var hoTen1 = document.getElementById("hoTen1").value;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value - 4e6 - 16e5 * nguoiPhuThuoc;
    var thue = 0;
    var result3 = document.getElementById("result3");

    // PROGRESS
    if (tongThuNhap <= 60e6) {
        thue = tongThuNhap * 0.05;
    } else if (tongThuNhap <= 120e6 && tongThuNhap >= 61e6) {
        thue = tongThuNhap * 0.1;
    } else if (tongThuNhap <= 210e6 && tongThuNhap >= 121e6) {
        thue = tongThuNhap * 0.15;
    } else if (tongThuNhap <= 384e6 && tongThuNhap >= 211e6) {
        thue = tongThuNhap * 0.2;
    } else if (tongThuNhap <= 624e6 && tongThuNhap >= 385e6) {
        thue = tongThuNhap * 0.25;
    } else if (tongThuNhap <= 960e6 && tongThuNhap >= 625e6) {
        thue = tongThuNhap * 0.3;
    } else {
        thue = tongThuNhap * 0.35;
    }

    // OUTPUT thue:number
    result3.innerHTML = 'Họ tên: ' + hoTen1 + '; Tiền thuế thu nhập cá nhân: ' + new Intl.NumberFormat("vn-VN").format(thue) + 'Đ';

}

// Bài 4: Tính tiền cáp
function addInput () {
    var loaiKhachHang = document.getElementById("mySelect").value;
    if (loaiKhachHang == "2") {
        document.getElementById("soKetNoi").style.display = "inline";
    } else {
        document.getElementById("soKetNoi").style.display = "none";

    }
}


var btn4 =document.getElementById("btn4");
btn4.onclick = function() {

    // INPUT
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = Number(document.getElementById("soKenh").value);
    var loaiKhachHang = document.getElementById("mySelect").value;
    var soKetNoi = document.getElementById("soKetNoi").value;
    var hoaDonNhaDan = 4.5;
    var dichVuNhaDan = 20.5;
    var hoaDonDoanhNghiep = 15;
    var dichVuDoanhNghiep = 75;
    var tienCap = 0;
    var result4 = document.getElementById("result4");


    // PROGRESS
    if (loaiKhachHang == "2" && soKetNoi <= 10) {
        tienCap = hoaDonDoanhNghiep + dichVuDoanhNghiep + soKenh * 50;
    } else if (loaiKhachHang == "2" && soKetNoi > 10) {
        tienCap = hoaDonDoanhNghiep + dichVuDoanhNghiep +(soKetNoi-10) *5 + soKenh * 50;
    } else if (loaiKhachHang == "1") {
        tienCap = hoaDonNhaDan + dichVuNhaDan + soKenh * 7.5;
    }
  
// OUTPUT tienCap:number
result4.innerHTML = 'Mã khách hàng : '+ maKhachHang +' Tiền cáp: $' +tienCap;

}

