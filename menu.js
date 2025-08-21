// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    // Toggle menu when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navbar.classList.toggle('open');
            
            // Update aria-expanded state for accessibility
            const isExpanded = navbar.classList.contains('open');
            hamburger.setAttribute('aria-expanded', isExpanded);
            
            // Optional: Toggle hamburger animation
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target) && navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900 && navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
        }
    });
});
