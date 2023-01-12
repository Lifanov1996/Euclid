/*  бургер меню  */
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop__scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop__scroll');
  });
});


/*  поиск  */
let search = document.querySelector('.header__link');
let serchBlock = document.querySelector('.search');
let searchBlockLinks = document.querySelector('.search-form__close')

search.addEventListener('click', function () {
  serchBlock.classList.toggle('search--active');

  document.body.classList.toggle('stop__scroll');
});

searchBlockLinks.addEventListener('click', function () {
  serchBlock.classList.remove('search--active');

  document.body.classList.remove('stop__scroll');

  document.querySelector('.search-form').addEventListener('click', (el) => { el.preventDefault()})
});




/*  табы в секции “Как мы работаем”  */
let tabsBtn = document.querySelectorAll('.work__link');
let tabsItem = document.querySelectorAll('.work__block');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('work__link--active');
    });
    e.currentTarget.classList.add('work__link--active');

    tabsItem.forEach(function(element){
      element.classList.remove('work__block--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__block--active');
  });
});


/*  Аккордион  */
new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});


/*  слайдер  */
const swiper = new Swiper('.swiper-container', {
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
  });

