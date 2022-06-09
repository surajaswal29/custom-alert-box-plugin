// Author: Suraj Aswal
'use strict';

const containerBox = document.querySelector('body');

let classAd;
let alertBtn;

const customAlert = (msg, permCss, className) => {
  const alertBox = document.createElement('div');
  containerBox.appendChild(alertBox);
  alertBox.innerText = msg;

  classAd = alertBox.classList;
  classAd.add('custom-alert-box');

  customCss(permCss, className);

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

const alertOnClick = function (permission, idName, msg1, permCss, className) {
  if (permission == 'allow') {
    alertBtn = document.querySelector('#' + idName);

    alertBtn.addEventListener('click', function () {
      customAlert(msg1);
      customCss(permCss, className);
      // console.log(customCss);
    });
  }
};
