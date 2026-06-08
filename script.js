document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. CONTROL DE LA BARRA DE NAVEGACIÓN FLOTANTE
       ========================================== */
    const navbar = document.querySelector('.portfolio-navbar');
    // Ajustá este número (en píxeles) para decidir cuándo aparece la barra
    const scrollUmbral = 250; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollUmbral) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
    });

    /* ==========================================
       2. INTERSECT OBSERVER PARA ANIMACIONES (Aparición en Scroll)
       ========================================== */
    const animatedBoxes = document.querySelectorAll('.animate-box');

    const observerOptions = {
        root: null, // usa la pantalla (viewport) como referencia
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: si solo querés que se anime una vez, descomentá la línea de abajo
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedBoxes.forEach(box => {
        scrollObserver.observe(box);
    });

    /* ==========================================
       3. EXTRA: INTERACCIÓN DE LOS SEGMENTOS DE LA ORUGA
       ========================================== */
    const orugaItems = document.querySelectorAll('.oruga-item');

    orugaItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Por si en el futuro querés que pase algo más en JS al posar el mouse
            console.log(`Posado sobre: ${item.classList[1]}`);
        });
    });

});