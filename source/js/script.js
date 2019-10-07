'use strict';

(function () {
  var bodyElement = document.body;
  var htmlElement = document.querySelector('html');
  var buttonCall = document.getElementById('order-call');
  var aboutText = document.querySelector('.tablet');
  var buttonCross = document.querySelectorAll('.button-cross');

  // slider show
  buttonCall.addEventListener('click', function () {
    var popup = document.getElementById('modalId');

    if (popup.classList.contains('visually-hidden')) {
      popup.classList.remove('visually-hidden');
      bodyElement.classList.add('left-padding');
      htmlElement.classList.add('stop-scroll');
    }
    var buttonClose = document.querySelector('.button-close');
    function byClose() {
      popup.classList.add('visually-hidden');
      popup.removeEventListener('click', byClose);
      bodyElement.classList.remove('left-padding');
      htmlElement.classList.remove('stop-scroll');
    }
    buttonClose.addEventListener('click', byClose);

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        byClose();
      }
    });
  });

  var text = aboutText.innerHTML;
  var arrayText = text.split('');
  arrayText.length = 267;

  var newText = arrayText.join('') + '...';

  if (window.innerWidth >= 768) {
    aboutText.innerHTML = text;
  } else {
    aboutText.innerHTML = newText;
  }

  buttonCross.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // var menu = document.querySelectorAll('.menu-closed');
      this.classList.toggle('open');
      this.nextElementSibling.classList.toggle('menu-opened');
    });
  });

})();
