document.addEventListener('DOMContentLoaded', () => {
    // Vérifier la préférence utilisateur pour les animations réduites
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        return;
    }

    let isScrolling = false;
    let scrollTarget = 0;
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let rafId = null;

    // Facteur d'easing pour un effet plus lourd (plus bas = plus lourd)
    const easeFactor = 0.18;

    const smoothScroll = () => {
        if (!isScrolling) return;

        const diff = scrollTarget - currentScroll;

        // Appliquer une courbe d'easing pour un effet plus lourd et fluide
        const ease = diff * easeFactor;
        currentScroll += ease;

        // Vérifier si on est assez proche de la cible
        if (Math.abs(diff) < 0.5) {
            currentScroll = scrollTarget;
            isScrolling = false;
            window.scrollTo({ top: currentScroll, behavior: 'auto' });
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            return;
        }

        window.scrollTo({ top: currentScroll, behavior: 'auto' });
        rafId = requestAnimationFrame(smoothScroll);
    };

    const getScrollLimits = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        return {
            min: 0,
            max: Math.max(0, scrollHeight - clientHeight)
        };
    };

    const handleWheel = (e) => {
        const limits = getScrollLimits();
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const delta = e.deltaY;

        // Vérifier les limites avant d'appliquer le smooth scroll
        if ((currentScrollTop <= limits.min && delta < 0) ||
            (currentScrollTop >= limits.max && delta > 0)) {
            // Ne pas intercepter si on est aux limites
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        // Réduire légèrement la vitesse de scroll pour un effet plus lourd mais moins prononcé
        const scrollAmount = delta * 0.9;

        scrollTarget += scrollAmount;

        // Limiter le scroll aux limites de la page
        scrollTarget = Math.max(limits.min, Math.min(scrollTarget, limits.max));

        if (!isScrolling) {
            isScrolling = true;
            currentScroll = currentScrollTop;
            smoothScroll();
        }
    };

    // Synchroniser avec les événements de scroll natifs (pour les ancres, etc.)
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollTimeout = null;

    const handleNativeScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Si le scroll vient d'un autre script (ancres, etc.), synchroniser
        if (Math.abs(currentScrollTop - lastScrollTop) > 5 && !isScrolling) {
            scrollTarget = currentScrollTop;
            currentScroll = currentScrollTop;
        }

        lastScrollTop = currentScrollTop;

        // Désactiver temporairement notre smooth scroll si un scroll natif est détecté
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (isScrolling) {
                scrollTarget = window.pageYOffset || document.documentElement.scrollTop;
                currentScroll = scrollTarget;
            }
        }, 100);
    };

    // Gestion du touch pour mobile
    let touchStartY = 0;
    let touchStartScroll = 0;

    const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartScroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollTarget = touchStartScroll;
        currentScroll = touchStartScroll;
        isScrolling = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    };

    const handleTouchMove = (e) => {
        const limits = getScrollLimits();
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;

        scrollTarget = touchStartScroll + (deltaY * 1.5);

        // Limiter le scroll aux limites de la page
        scrollTarget = Math.max(limits.min, Math.min(scrollTarget, limits.max));

        if (!isScrolling) {
            isScrolling = true;
            currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            smoothScroll();
        }
    };

    // Ajouter les écouteurs d'événements (sans capture pour éviter les conflits avec scroll-limit.js)
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    // Synchroniser la position initiale
    scrollTarget = window.pageYOffset || document.documentElement.scrollTop;
    currentScroll = scrollTarget;
});

