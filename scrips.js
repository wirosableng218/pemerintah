// Navbar Scroll Behavior
let lastScroll = 0;
const navbar = document.querySelector('header');
const scrollThreshold = 5; // Minimal scroll pixels untuk trigger efek

// Toggle Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Fungsi untuk handle scroll
const handleScroll = () => {
  const currentScroll = window.pageYOffset;

  // Reset navbar jika di paling atas
  if (currentScroll <= 0) {
    navbar.classList.remove('header-hidden');
    return;
  }

  // Abaikan jika scroll kurang dari threshold
  if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

  // Scroll ke bawah
  if (currentScroll > lastScroll && !navbar.classList.contains('header-hidden')) {
    navbar.classList.add('header-hidden');
    navMenu.classList.remove('active'); // Tutup menu hamburger saat scroll ke bawah
    hamburger.classList.remove('active'); // Reset tombol hamburger
  }
  // Scroll ke atas
  else if (currentScroll < lastScroll && navbar.classList.contains('header-hidden')) {
    navbar.classList.remove('header-hidden');
  }

  lastScroll = currentScroll;
};

// Event listener untuk scroll
window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      isTicking = false;
    });
    isTicking = true;
  }
});

// Event listener untuk hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Tutup menu saat link diklik
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
