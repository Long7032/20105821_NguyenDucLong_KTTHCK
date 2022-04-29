$(document).ready(function() {
    $("#btnDangKi").click(function() {
        $("#myModal").modal();
    })

    $("#txtHoTen").blur(function() {
        let mau = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/
        let chuoi = $("#txtHoTen").val();
        if (mau.test(chuoi) == true) {
            $("#resultName").text("Nhập Đúng");
        } else {
            $("#resultName").text("Không được chứa số, chữ cái đầu ghi hoa");
        }
    })

    $("#txtSCMND").blur(function() {
        let mau = /^[0-9]{4}-[0-9]{3}-[0-9]{3}$/
        let chuoi = $("#txtSCMND").val();
        if (mau.test(chuoi) == true) {
            $("#resultSCMND").text("Nhập Đúng");
        } else {
            $("#resultSCMND").text("Ghi đúng mẫu xxxx-xxx-xxx");
        }
    })

    $("#txtQueQuan").blur(function() {
        let mau = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        let chuoi = $("#txtQueQuan").val();
        if (mau.test(chuoi) == true) {
            $("#resultQueQuan").text("Nhập Đúng");
        } else {
            $("#resultQueQuan").text("Không được chứa số, chữ cái đầu ghi hoa");
        }
    })

    $("#txtEmail").blur(function() {
        let mau = /^[a-zA-Z0-9]+@bc.com.vn$/;
        let chuoi = $("#txtEmail").val();
        if (mau.test(chuoi) == true) {
            $("#resultEmail").text("Nhập Đúng");
        } else {
            $("#resultEmail").text("Email nhập theo mẫu xxxxxx@bc.com.vn");
        }
    })
    $("#txtSDT").blur(function() {
        let mau = /^(09)\d{2}-\d{3}-\d{3}$/;
        let chuoi = $("#txtSDT").val();
        if (mau.test(chuoi) == true) {
            $("#resultSDT").text("Nhập Đúng");
        } else {
            $("#resultSDT").text("Không được chứa chữ, bắt đầu bằng 09");
        }
    })

    $("#btnSave").click(function() {
        var i = 1;
        let ten = $("#txtHoTen").val();
        let cmnd = $("#txtSCMND").val();
        let que = $("#txtQueQuan").val();
        let mail = $("#txtEmail").val();
        let SDT = $("#txtSDT").val();
        let anh = "anhMoi";

        let row = "<tr><td>" + i + "</td>" +
            "<td>" + ten + " </td>" +
            "<td>" + cmnd + "</td>" +
            "<td>" + que + "</td>" +
            "<td>" + mail + "</td>" +
            "<td>" + SDT + "</td>" +
            "<td>" + anh + "</td>";
        i++;
        $("#danhSach").append(row);
    })
})
