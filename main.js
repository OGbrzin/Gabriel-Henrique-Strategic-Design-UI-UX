// INICIALIZAÇÃO DE ÍCONES
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Lucide Icons
    lucide.createIcons();

    // LÓGICA DO MENU MOBILE
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            // Altera ícone para 'X'
            menuIcon.setAttribute('data-lucide', 'x');
            // Remove scroll do body
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('hidden');
            // Altera ícone para 'Menu'
            menuIcon.setAttribute('data-lucide', 'menu');
            // Restaura scroll do body
            document.body.style.overflow = '';
        }
        
        // Reinicializa o ícone que acabou de ser trocado
        lucide.createIcons();
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // EFEITO DE BLUR/BACKGROUND NA NAVBAR AO SCROLLAR
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-0');
            navbar.classList.remove('py-2');
        } else {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-0');
        }
    });

    // REVEAL ON SCROLL (ANIMAÇÕES)
    // Usando Intersection Observer para adicionar classes quando element entra na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    // Observa todos os elementos com a classe reveal-up
    document.querySelectorAll('.reveal-up').forEach(element => {
        revealObserver.observe(element);
    });
});
