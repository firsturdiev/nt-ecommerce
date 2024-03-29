// accordion

let elAccordionToggle = document.querySelectorAll('.footer-nav__toggle');

elAccordionToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.footer-nav__item').classList.toggle('footer-nav__item--open');
  })
})

// menu
  let elMenu = document.querySelector('.categories');
  let elMenuOpen = document.querySelector('.js-menu-open');
  let elMenuClose = document.querySelector('.categories__close');
  let elsMenuCategories = document.querySelectorAll('.categories__item');

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


// products

let elsProduct = document.querySelectorAll('.products__item');
let elProductGridBtn = document.querySelector('.js-product-grid');
let elProductListBtn = document.querySelector('.js-product-list');

if (elProductListBtn) {
  elProductListBtn.addEventListener('click', () => {
    elProductGridBtn.classList.remove('products__view-actions-item--grid--active')
    elProductListBtn.classList.add('products__view-actions-item--list--active');

    elsProduct.forEach(product => {
      product.classList.add('product--list')
    })
  })
}

if (elProductGridBtn) {
  elProductGridBtn.addEventListener('click', () => {
    elProductListBtn.classList.remove('products__view-actions-item--list--active');
    elProductGridBtn.classList.add('products__view-actions-item--grid--active')

    elsProduct.forEach(product => {
      product.classList.remove('product--list')
    })
  })
}

// filter menu

if (document.documentElement.clientWidth <= 1024) {
  let elFilter = document.querySelector('.products__filter');
  let elFilterToggle = document.querySelector('.products__filter-toggle');

  if (elFilterToggle) {
    elFilterToggle.addEventListener('click', () => {
      elFilter.classList.add('filter--open');
    })
  }

  window.addEventListener('click', (e) => {
    if (e.target == elFilter) {
      elFilter.classList.remove('filter--open')
    }
  })
}

// cart 

let elCart = document.querySelector('.cart');
let elCartOpen = document.querySelector('.js-cart-open');
let elCartClose = document.querySelector('.js-cart-close');

elCartOpen.addEventListener('click', () => {
  elCart.classList.add('cart--open');
})

elCartClose.addEventListener('click', () => {
  elCart.classList.remove('cart--open');
})
