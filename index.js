// Khoi tao dssv
var dssv = [];

// render lai date khi user reload
const DSSV_LOCAL = "DSSV_LOCAL";
// Lay du lieu tu localStorage dua vao keyword
var dataJSON = localStorage.getItem(DSSV_LOCAL);
// convert tu JSOn sang array
if (dataJSON != null) {
  var svArr = JSON.parse(dataJSON);
  renderSV(svArr);
}

function themSV() {
  var sv = layThongTin();

  // them SV vua tao vao dssv
  dssv.push(sv);
  renderSV(dssv);

  // Luu data da nhap vao LocalStorage
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJson);
}

function xoaSV(id) {
  // Tim vi tri index can xoa
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  // xoa index
  dssv.splice(index, 1);
  // Goi lai ham render dssv sau khi xoa => tao moi lai data
  renderSV(dssv);
}

function suaSV(id) {
  // Tim vi tri index can sua bang findIndex
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  // Sua sv
  var sv = dssv[viTri];
  console.log("🚀 ~ file: index.js:47 ~ suaSV ~ sv:", sv);
  document.getElementById("txtMaSV").value = sv.ma;

  //   Xoa phan tu can sua
  dssv.splice(viTri, 1);
  // hien thi dssv moi nhat
  renderSV(dssv);
}
