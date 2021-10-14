`use strict`;

console.log(
  '----------------------------------->\n--> Designed By Jonas Schmedtmannm\n-->Built by Thomas Reynolds\n----------------------------------->'
);

const messageElement = document.querySelectorAll('.user-nav__icon-box')[1];
const userElement = document.querySelector('.user-nav__user');
const userPop = document.querySelector('.user-nav__popup');
const chatBox = document.querySelector('.user-nav__chat-box');

let chatIsOpen = false;
let popIsOpen = false;

console.log(messageElement);

messageElement.addEventListener('touchstart', () => {
  if (popIsOpen) {
    userPop.classList.remove('open');
    chatBox.classList.toggle('open');
    popIsOpen = false;
    chatIsOpen = true;
  } else {
    chatBox.classList.toggle('open');
    chatIsOpen = true;
  }
});

userElement.addEventListener('touchstart', () => {
  if (chatIsOpen) {
    chatBox.classList.remove('open');
    userPop.classList.toggle('open');
    chatIsOpen = false;
    popIsOpen = true;
  } else {
    userPop.classList.toggle('open');
    popIsOpen = true;
  }
});
