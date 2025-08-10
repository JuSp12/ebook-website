function userScroll() {
  const navbar = document.querySelector('.navbar');
  const collapse = document.querySelector('#navbarNavDropdown');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark', 'navbar-sticky');
    } else {
      navbar.classList.remove('navbar-sticky');
      if (!collapse.classList.contains('show')) {
        navbar.classList.remove('bg-dark');
      }
    }
  });

  collapse.addEventListener('show.bs.collapse', () => {
    console.log('Menu otwarte — dodaję bg-dark');
    navbar.classList.add('bg-dark');
  });

  collapse.addEventListener('hide.bs.collapse', () => {
    console.log('Menu zamknięte — usuwam bg-dark jeśli scroll < 50');
    if (window.scrollY <= 50) {
      navbar.classList.remove('bg-dark');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
