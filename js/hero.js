/**
 * Hero Section Script
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Attendre le chargement de GSAP depuis le CDN
  try {
    await waitForGSAP();
  } catch (error) {
    console.warn('GSAP not loaded, animations skipped');
    return;
  }

  const { gsap, SplitText } = getGSAP();
  
  if (!gsap || !SplitText) {
    return;
  }

  // Animation blur GSAP mot par mot, ligne par ligne pour le titre hero
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && SplitText) {
    const dataText = document.querySelectorAll('.hero-title .line .text');
    if (dataText.length > 0) {
      // Créer un timeline pour animer chaque ligne
      const tl = gsap.timeline();
      
      dataText.forEach((textElement, lineIndex) => {
        // Diviser chaque ligne en mots avec SplitText
        const split = new SplitText(textElement, { type: 'words' });
        
        if (split.words && split.words.length > 0) {
          // Initialiser chaque mot avec blur
          gsap.set(split.words, {
            filter: 'blur(20px)',
            opacity: 0
          });
          
          // Animer chaque mot de la ligne avec un délai
          split.words.forEach((word, wordIndex) => {
            tl.to(word, {
              filter: 'blur(0px)',
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out'
            }, 0.3 + lineIndex * 0.3 + wordIndex * 0.1); // Délai initial de 0.3s
          });
        }
      });
    }
  }

  // Animation du bouton hero - pas d'effet flair pour le bouton hero (comme dans l'original)
  // Le bouton hero n'a pas data-block="button" donc initStrokeButtons() ne s'applique pas
  // C'est intentionnel - pas d'animation flair sur le bouton hero
});

