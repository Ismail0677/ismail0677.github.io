
// Hamburger menu logic
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.getElementById('navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', function() {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navbar.classList.toggle('open');
    });
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
        navbar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    // Close menu on link click (mobile)
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Form logic (if present)
  const form = document.getElementById("formInscription");
  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      // Remplacer par une vraie API ou Google Apps Script
      // Ici, on simule une réussite
      document.getElementById("msg").style.display = "block";
      e.target.reset();
    });
  }
});
