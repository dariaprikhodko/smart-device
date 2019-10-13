'use strict';

(function () {
  var bodyElement = document.body;
  var htmlElement = document.querySelector('html');
  var buttonCall = document.getElementById('order-call');
  var aboutText = document.querySelector('.tablet');
  var buttonCross = document.querySelectorAll('.button-cross');
  var buttonScroll = document.getElementById('scroll');
  var features = document.querySelector('.company-features');
  var lists = Array.from(document.querySelectorAll('.menu-closed'));
  var btns = Array.from(document.querySelectorAll('.button-cross'));

  // popup show
  buttonCall.addEventListener('click', function () {
    var popup = document.getElementById('modalId');

    if (popup.classList.contains('visually-hidden')) {
      popup.classList.remove('visually-hidden');
      // bodyElement.classList.add('left-padding');
      htmlElement.classList.add('stop-scroll');
      setFocus();
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
      var that = this;
      lists.forEach(function (elem) {
        if (elem.classList.contains('menu-opened') && elem !== that.nextElementSibling) {
          elem.classList.toggle('menu-opened');
        }
      });
      btns.forEach(function (elem) {
        if(elem.classList.contains('open') && elem !== that) {
          elem.classList.toggle('open');
        }
      });
      this.nextElementSibling.classList.toggle('menu-opened');
      this.classList.toggle('open');
    });
  });

  function handleGoToFeatures() {
    features.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
  buttonScroll.addEventListener('click', handleGoToFeatures);

  var phoneMask = IMask(
      document.getElementById('phone'), {
        mask: '+{7}(000)000-00-00'
      });

  var popupMask = IMask(
      document.getElementById('phone1'), {
        mask: '+{7}(000)000-00-00'
      });

  function setFocus() {
    document.getElementById('name1').focus();
  }

})();
