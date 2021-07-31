// accordion

let elAccordionToggle = document.querySelectorAll('.footer-nav__toggle');

elAccordionToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.footer-nav__item').classList.toggle('footer-nav__item--open');
  })
})

// menu

let elMenuOpen = document.querySelector('.js-menu-open');
let elMenuClose = document.querySelector('.categories__close');
let elMenu = document.querySelector('.categories');

elMenuOpen.addEventListener('click', () => {
  elMenu.classList.add('categories--open');
})

elMenuClose.addEventListener('click', () => {
  elMenu.classList.remove('categories--open');
})

// hover effects

let elPostLink = document.querySelectorAll('.index-blog__post-link');

elPostLink.forEach(link => {
  link.addEventListener('mousemove', () => {
    link.closest('.index-blog__post').classList.add('index-blog__post--hover')
  });

  link.addEventListener('mouseout', () => {
    link.closest('.index-blog__post').classList.remove('index-blog__post--hover')
  });
})
