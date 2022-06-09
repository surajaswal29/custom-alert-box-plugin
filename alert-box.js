// Author: Suraj Aswal
'use strict';

const containerBox = document.querySelector('body');

let classAd;
let alertBtn;

const customAlert = (msg, allowCss, className) => {
  const alertBox = document.createElement('div');
  containerBox.appendChild(alertBox);
  alertBox.innerText = msg;

  classAd = alertBox.classList;
  classAd.add('custom-alert-box');

  customCss(allowCss, className);

  const hideAlertBox = function () {
    alertBox.remove();
  };

  setTimeout(hideAlertBox, 2000);
};

const customCss = (permission, className) => {
  if (permission == 'allow') {
    classAd.add(className);
    classAd.remove('custom-alert-box');
  }
};

const alertOnClick = function (idName, msg1, allowCss, className) {
  alertBtn = document.querySelector('#' + idName);

  alertBtn.addEventListener('click', function () {
    customAlert(msg1);
    customCss(allowCss, className);
    // console.log(customCss);
  });
};
