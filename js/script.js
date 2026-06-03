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
    
    function smoothScrollToElement(element) {
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-scroll');
            if (targetId) {
                let targetElement = null;
                if (targetId === 'home') targetElement = document.getElementById('home');
                else if (targetId === 'proyek') targetElement = document.getElementById('proyek');
                else if (targetId === 'skills') targetElement = document.getElementById('skills');
                else if (targetId === 'kontak') targetElement = document.getElementById('kontak');
                if (targetElement) smoothScrollToElement(targetElement);
            } else if (link.getAttribute('href') === '#') {
                const homeSection = document.getElementById('home');
                if (homeSection) smoothScrollToElement(homeSection);
            }
        });
    });

    const lihatProyekBtn = document.getElementById('lihatProyekBtn');
    if (lihatProyekBtn) {
        lihatProyekBtn.addEventListener('click', () => {
            const proyekSection = document.getElementById('proyek');
            if (proyekSection) smoothScrollToElement(proyekSection);
        });
    }

    const komunitasBtn = document.getElementById('komunitasBtn');
    if (komunitasBtn) {
        komunitasBtn.addEventListener('click', () => {
            const kontakSection = document.getElementById('kontak');
            if (kontakSection) smoothScrollToElement(kontakSection);
        });
    }

    window.addEventListener('load', () => {
        checkScroll();
        document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
            el.style.opacity = '1';
        });
    });
    window.addEventListener('scroll', () => { checkScroll(); });

    // FIX: Matiin efek kuning di mobile dan cegah scroll cacat
    const clickableElements = document.querySelectorAll('.project-card, .owner-card, button, a, .nav-links a, .logo span');
    
    clickableElements.forEach(el => {
        el.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(() => {
                this.click();
            }, 10);
        }, { passive: false });
    });

    document.body.addEventListener('touchmove', function(e) {
        if (document.body.scrollWidth > window.innerWidth) {
            e.preventDefault();
        }
    }, { passive: false });

    const allCards = document.querySelectorAll('.project-card, .owner-card');
    allCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            const link = this.querySelector('a');
            if (link && link.href && !e.target.closest('a')) {
                window.open(link.href, '_blank');
            }
        });
    });
})();
