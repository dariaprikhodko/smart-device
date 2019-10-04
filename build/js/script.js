'use strict';

(function () {
  var bodyElement = document.body;
  var htmlElement = document.querySelector('html');
  var buttonCall = document.getElementById('order-call');
  var aboutText = document.querySelector('.about-company__text--paragraph');

  console.log(aboutText);

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

  // var text = aboutText.innerHTML;
  // var arrayText = text.split();
  // arrayText.length = 60;

  // var newtext = arrayText.join('');

  // aboutText.innerHTML = newtext;

  // console.log(text);
  // console.log(arrayText);
  // console.log(newtext);

})();
