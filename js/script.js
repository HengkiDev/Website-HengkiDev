(function() {
    const animateItems = document.querySelectorAll('.animate-item');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        animateItems.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - 80) {
                el.classList.add('show');
            }
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    const lihatProyekBtn = document.getElementById('lihatProyekBtn');
    if (lihatProyekBtn) {
        lihatProyekBtn.addEventListener('click', () => {
            window.location.href = 'projects.html';
        });
    }

    const komunitasBtn = document.getElementById('komunitasBtn');
    if (komunitasBtn) {
        komunitasBtn.addEventListener('click', () => {
            window.location.href = 'https://bibidkita.my.id';
        });
    }

    window.addEventListener('load', () => {
        checkScroll();
        document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
            el.style.opacity = '1';
        });
    });
    
    window.addEventListener('scroll', () => { 
        checkScroll(); 
    });
})();
