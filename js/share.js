document.write('<script src="//yusukenakaya.github.io/oneui/js/jquery-2.2.4.min.js"></script>');
document.write('<script src="//yusukenakaya.github.io/oneui/js/velocity.min.js"></script>');

window.onload = function() {
  var btn = document.getElementById('ui');
  var timer = (btn.getAttribute('data-timing')) ? parseInt(btn.getAttribute('data-timing')) : 4000;
  var flg = false;
  setInterval(function() {
    if (!flg) {
      btn.setAttribute('class', 'on');
      flg = true;
    } else {
      btn.setAttribute('class', 'off');
      flg = false;
    }
  }, timer);
}