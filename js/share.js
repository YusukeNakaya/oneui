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