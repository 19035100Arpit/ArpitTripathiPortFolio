var typed = new Typed(".text",{
    strings:["Coder Data Aspirant"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2000,
    reset: true     
})
console.log(sr);
sr.reveal('.about h2',{ delay:100 } );
// sr.reveal('.btn-box',{delay:200})

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navbar = document.getElementById('navbar');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  // Close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      navbar.classList.remove('active');
    });
  });
});
