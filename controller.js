function layThongTin() {
  // lay thong tin
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;

  // tao object
  var sv = {
    ma: ma,
    ten: ten,
    matKhau: matKhau,
    email: email,
    toan: toan,
    ly: ly,
    hoa: hoa,
    tinhDTB: function () {
      var dtb = (this.toan + this.ly + this.hoa) / 3;
      return dtb;
    },
  };
  return sv;
}

function renderSV(dssv) {
  contentHTML = "";

  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    // tao chuoi string
    var string = `
        <tr>
                <td>${sv.ma}</td>
                <td>${sv.ten}</td>
                <td>${sv.email}</td>
                <td>0</td>
                <th>
                <button class="btn btn-primary" onclick="suaSV('${sv.ma}')">
                Sửa
                </button>


                <button class="btn btn-danger" onclick="xoaSV('${sv.ma}')">
                Xóa
                </button>
                </th>
        </tr>
        `;
    // cong don chuoi HTML
    contentHTML += string;
  }
  document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
}
