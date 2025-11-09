document.addEventListener('DOMContentLoaded', () => {
  let resizeTimeout;

  const calculateMarquee = () => {
    const marqueeTrack = document.querySelector('.hero-marquee__track');
    if (!marqueeTrack) return;

    const items = marqueeTrack.querySelectorAll('.hero-marquee__item');
    if (items.length === 0) return;

    const itemCount = items.length;
    const halfCount = Math.floor(itemCount / 2);

    // S'assurer que tous les éléments sont rendus
    let allRendered = true;
    items.forEach(item => {
      if (item.offsetWidth === 0) {
        allRendered = false;
      }
    });

    if (!allRendered) {
      // Réessayer après un court délai si les éléments ne sont pas encore rendus
      setTimeout(calculateMarquee, 50);
      return;
    }

    const gap = parseFloat(getComputedStyle(marqueeTrack).gap) || 0;

    // Calculer la largeur exacte de la première moitié
    let firstHalfWidth = 0;
    for (let i = 0; i < halfCount; i++) {
      const itemWidth = items[i].offsetWidth;
      firstHalfWidth += itemWidth;
      if (i < halfCount - 1) {
        firstHalfWidth += gap;
      }
    }

    // Vérifier que la largeur est valide
    if (firstHalfWidth > 0) {
      const existingStyle = document.getElementById('marquee-keyframes');
      if (existingStyle) {
        existingStyle.remove();
      }

      const style = document.createElement('style');
      style.id = 'marquee-keyframes';
      style.textContent = `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${firstHalfWidth}px);
          }
        }
      `;
      document.head.appendChild(style);

      // Forcer le recalcul de l'animation en réappliquant la classe
      marqueeTrack.style.animation = 'none';
      requestAnimationFrame(() => {
        marqueeTrack.style.animation = '';
      });
    }
  };

  // Calcul initial avec plusieurs tentatives pour s'assurer que les éléments sont rendus
  const initMarquee = () => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        calculateMarquee();
        // Recalculer après un court délai supplémentaire pour être sûr
        setTimeout(calculateMarquee, 200);
      }, 100);
    });
  };

  initMarquee();

  // Recalculer lors du redimensionnement
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      calculateMarquee();
    }, 250);
  });
});

