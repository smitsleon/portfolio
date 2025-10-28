// Auto-hide navigation on scroll
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScrollTop = 0;
  let scrollThreshold = 100; // Start hiding after 100px
  let isScrolling;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // At the top of the page, always show nav in normal state
    if (scrollTop < scrollThreshold) {
      nav.classList.remove('nav--hidden', 'nav--visible');
      lastScrollTop = scrollTop;
      return;
    }

    // Scrolling down - hide nav
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      nav.classList.add('nav--hidden');
      nav.classList.remove('nav--visible');
    } 
    // Scrolling up - show nav with backdrop
    else if (scrollTop < lastScrollTop) {
      nav.classList.remove('nav--hidden');
      nav.classList.add('nav--visible');
    }

    lastScrollTop = scrollTop;
  }

  // Throttle scroll events for better performance
  window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(handleScroll, 10);
  });
})();

// Mobile hamburger menu toggle
(function () {
  const navMenus = document.querySelectorAll('.nav__menu');
  const hamburgers = document.querySelectorAll('.nav__hamburger');

  if (hamburgers.length === 0 || navMenus.length === 0) return;

  function closeAllMenus() {
    hamburgers.forEach(btn => btn.classList.remove('nav__hamburger--active'));
    navMenus.forEach(menu => menu.classList.remove('nav__menu--open'));
    hamburgers.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  }

  hamburgers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const container = btn.closest('.nav__container');
      const menu = container ? container.querySelector('.nav__menu') : null;
      const isOpen = menu && menu.classList.contains('nav__menu--open');

      // Close others first for single-open behavior
      closeAllMenus();

      if (!isOpen && menu) {
        btn.classList.add('nav__hamburger--active');
        btn.setAttribute('aria-expanded', 'true');
        menu.classList.add('nav__menu--open');
      }
    });
  });

  // Close when clicking a nav link (use capture to catch before navigation)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav__link');
    if (link) {
      closeAllMenus();
    }
  }, true);

  // Close on resize to desktop (align with CSS breakpoint 920px)
  let resizeTO;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      if (window.innerWidth > 920) {
        closeAllMenus();
      }
    }, 150);
  });

  // Active nav highlighting by URL (fallback if not present in HTML)
  try {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach((a) => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('nav__link--active');
      }
    });
  } catch (_) {}
})();

// Work page project filtering
(function () {
  const filterButtons = document.querySelectorAll('.work-page__filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove('work-page__filter-btn--active'));
      button.classList.add('work-page__filter-btn--active');

      // Filter projects
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          // Animate in
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();