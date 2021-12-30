const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');
const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');
const links = document.querySelectorAll('.navbar a');

let linkMouseenterHandler = function () {
  cursor1.classList.add('active');
  cursor2.classList.add('active');
};

let linkMouseleaveHandler = function () {
  cursor1.classList.remove('active');
  cursor2.classList.remove('active');
};

let windowMousemoveHandler = function (e) {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
};

let menuClickHandler = function () {
  this.classList.toggle('fa-times');
  header.classList.toggle('active');
};

let windowScrollHandler = function (e) {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
};

menu.addEventListener('click', menuClickHandler);
window.addEventListener('scroll', windowScrollHandler);
window.addEventListener('mousemove', windowMousemoveHandler);

links.forEach((link) => {
  link.addEventListener('mouseenter', linkMouseenterHandler);
  link.addEventListener('mouseleave', linkMouseleaveHandler);
});
