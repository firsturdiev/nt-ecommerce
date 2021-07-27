// accordion

let elAccordionToggle = document.querySelectorAll('.footer-nav__toggle');

elAccordionToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.footer-nav__item').classList.toggle('footer-nav__item--open');
  })
})