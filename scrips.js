// Navbar Scroll Behavior
let lastScroll = 0;
const navbar = document.querySelector('header');
const scrollThreshold = 5; // Minimal scroll pixels untuk trigger efek

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    // Di paling atas - reset navbar
    navbar.classList.remove('header-hidden');
    return;
  }

  if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

  if (currentScroll > lastScroll && !navbar.classList.contains('header-hidden')) {
    // Scroll ke bawah
    navbar.classList.add('header-hidden');
  } else if (currentScroll < lastScroll && navbar.classList.contains('header-hidden')) {
    // Scroll ke atas
    navbar.classList.remove('header-hidden');
  }
  
  lastScroll = currentScroll;
});

// Optimasi performa dengan requestAnimationFrame
let isTicking = false;

window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      // Logika scroll di sini
      isTicking = false;
    });
    isTicking = true;
  }
});
