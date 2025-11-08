document.addEventListener('DOMContentLoaded', () => {
  const calculateMarquee = () => {
    const marqueeTrack = document.querySelector('.hero-marquee__track');
    if (!marqueeTrack) return;

    const items = marqueeTrack.querySelectorAll('.hero-marquee__item');
    if (items.length === 0) return;

    const itemCount = items.length;
    const halfCount = itemCount / 2;

    const gap = parseFloat(getComputedStyle(marqueeTrack).gap) || 0;

    let firstHalfWidth = 0;
    for (let i = 0; i < halfCount; i++) {
      firstHalfWidth += items[i].offsetWidth;
      if (i < halfCount - 1) {
        firstHalfWidth += gap;
      }
    }

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
    }
  };

  requestAnimationFrame(() => {
    setTimeout(calculateMarquee, 100);
  });
});

