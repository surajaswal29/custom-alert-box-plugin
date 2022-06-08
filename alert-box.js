// Author: Suraj Aswal
'use strict';

const containerBox = document.querySelector('#container-b');

let classAd;
let alertBtn;

const customAlert = (msg, cssPerm, className) => {
  const alertBox = document.createElement('div');
  containerBox.appendChild(alertBox);
  alertBox.innerText = msg;

  classAd = alertBox.classList;
  classAd.add('custom-alert-box');

  customCss(cssPerm, className);

  const hideAlertBox = function () {
    alertBox.remove();
  };

  setTimeout(hideAlertBox, 4000);
};

const customCss = (permission, className) => {
  if (permission == 'allow') {
    classAd.add(className);
    classAd.remove('custom-alert-box');
    // console.log(customAlert());
  }
};

const alertOnClick = function (permission, idName, msg1, cssPerm, className) {
  if (permission == 'allow') {
    alertBtn = document.querySelector('#' + idName);

    alertBtn.addEventListener('click', function () {
      customAlert(msg1);
      customCss(cssPerm, className);
      // console.log(customCss);
    });
  }
};
