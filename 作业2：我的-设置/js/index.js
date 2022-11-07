// 获取html
var html_ = document.getElementsByTagName("html")[0];
// 获取body
var body_ = document.body;
// 节流阀
var flg = true;
function setRem() {
  if (flg) {
    // 关掉节流阀
    flg = false;
    let ui_w = 375;
    let cl_w =
      document.documentElement.clientWidth || document.body.clientWidth;
    html_.style.fontSize = (cl_w / ui_w) * 10 + "px";
    body_.style.fontSize = (cl_w / ui_w) * 10 + "px";
    console.log(cl_w);
    // 节流阀打开
    setTimeout(function () {
      flg = true;
    }, 100);
  }
}
window.onresize = setRem;
