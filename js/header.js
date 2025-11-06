/**
 * Header Navigation Script
 */

document.addEventListener('DOMContentLoaded', async () => {
    let gsap;
    try {
        await waitForGSAP();
        const gsapResult = getGSAP();
        gsap = gsapResult.gsap;
    } catch (error) {
        gsap = null;
    }

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');

    if (!mobileToggle || !mobileMenu) return;

    let isOpen = false;

    mobileToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        mobileToggle.setAttribute('aria-expanded', String(isOpen));

        if (gsap) {
            // Menu avec animations GSAP
            if (isOpen) {
                // Ouvrir le menu
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-screen', 'z-40', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-8');

                gsap.fromTo(mobileMenu,
                    { x: '-100%', opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                );

                // Animation des liens
                const links = mobileMenu.querySelectorAll('a');
                gsap.from(links, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.4,
                    ease: 'power2.out',
                    delay: 0.2
                });

                // Animation hamburger
                hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgerLines[1].style.opacity = '0';
                hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                // Fermer le menu
                gsap.to(mobileMenu, {
                    x: '-100%',
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.in',
                    onComplete: () => {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'h-screen', 'z-40', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-8');
                    }
                });

                // Réinitialiser hamburger
                hamburgerLines.forEach(line => {
                    line.style.transform = '';
                    line.style.opacity = '';
                });
            }
        } else {
            // Menu basique sans GSAP (fallback)
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-screen', 'z-40', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-8');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'h-screen', 'z-40', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-8');
            }
        }
    });

    // Fermer le menu au clic sur un lien
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) {
                mobileToggle.click();
            }
        });
    });

    // Animation hover par lettre pour les liens de navigation
    function setupLetterHoverAnimation() {
        // Sélectionner uniquement les liens du menu desktop (pas ceux du menu mobile)
        const allNavLinks = document.querySelectorAll('.main-navigation__link');
        const navLinks = Array.from(allNavLinks).filter(link => {
            // Exclure les liens qui sont dans le menu mobile ou qui ont la classe mobile
            return !link.classList.contains('main-navigation__link--mobile') &&
                !link.closest('#mobile-menu');
        });

        navLinks.forEach(link => {

            const textElements = link.querySelectorAll('.main-navigation__link-text');

            textElements.forEach(textElement => {
                const text = textElement.textContent.trim();
                const letters = text.split('').map(letter => {
                    if (letter === ' ') {
                        return '<span class="nav-letter" style="display: inline-block;">&nbsp;</span>';
                    }
                    return `<span class="nav-letter" style="display: inline-block;">${letter}</span>`;
                }).join('');
                textElement.innerHTML = letters;
            });

            // Animation au hover
            if (gsap) {
                const firstText = link.querySelector('.main-navigation__link-text:first-child');
                const secondText = link.querySelector('.main-navigation__link-text:last-child');

                if (firstText && secondText) {
                    const firstLetters = firstText.querySelectorAll('.nav-letter');
                    const secondLetters = secondText.querySelectorAll('.nav-letter');

                    link.addEventListener('mouseenter', () => {
                        // Animation du premier texte (remonte)
                        gsap.to(firstLetters, {
                            y: '-100%',
                            duration: 0.4,
                            stagger: 0.02,
                            ease: 'power2.out'
                        });

                        // Animation du second texte (remonte depuis le bas)
                        gsap.fromTo(secondLetters,
                            { y: '100%' },
                            {
                                y: '0%',
                                duration: 0.4,
                                stagger: 0.02,
                                ease: 'power2.out'
                            }
                        );
                    });

                    link.addEventListener('mouseleave', () => {
                        // Animation inverse
                        gsap.to(firstLetters, {
                            y: '0%',
                            duration: 0.4,
                            stagger: 0.02,
                            ease: 'power2.out'
                        });

                        gsap.to(secondLetters, {
                            y: '100%',
                            duration: 0.4,
                            stagger: 0.02,
                            ease: 'power2.out'
                        });
                    });
                }
            }
        });
    }

    // Initialiser l'animation des lettres
    if (gsap) {
        setupLetterHoverAnimation();
    }
});

