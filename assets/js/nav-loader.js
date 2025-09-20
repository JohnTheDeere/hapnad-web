document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // Activate the correct tab
            let currentPage = window.location.pathname.split('/').pop();
            // If the currentPage is empty, it means we are on the root page (index.html)
            if (currentPage === '') {
                currentPage = 'index.html';
            }

            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });

            // Initialize the hamburger menu functionality
            initializeHamburgerMenu();
        });
});