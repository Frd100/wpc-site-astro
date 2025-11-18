document.addEventListener('DOMContentLoaded', () => {
    let isCorrecting = false;
    let lastScrollTop = 0;

    const getScrollLimits = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        return {
            min: 0,
            max: Math.max(0, scrollHeight - clientHeight)
        };
    };

    const correctScrollPosition = () => {
        if (isCorrecting) return;
        isCorrecting = true;

        requestAnimationFrame(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const limits = getScrollLimits();

            if (scrollTop < limits.min) {
                window.scrollTo({ top: limits.min, behavior: 'auto' });
            } else if (scrollTop > limits.max) {
                window.scrollTo({ top: limits.max, behavior: 'auto' });
            }

            isCorrecting = false;
        });
    };

    const preventOverscroll = (e) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const limits = getScrollLimits();
        const deltaY = e.deltaY || 0;

        if (scrollTop <= limits.min && deltaY < 0) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            correctScrollPosition();
            return false;
        }

        if (scrollTop >= limits.max && deltaY > 0) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            correctScrollPosition();
            return false;
        }

        const scrollAmount = Math.abs(deltaY);
        const futureScrollTop = deltaY > 0 ? scrollTop + scrollAmount : scrollTop - scrollAmount;

        if (futureScrollTop < limits.min) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            correctScrollPosition();
            return false;
        }

        if (futureScrollTop > limits.max) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            correctScrollPosition();
            return false;
        }
    };

    const handleTouchMove = (e) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const limits = getScrollLimits();

        if (scrollTop <= limits.min || scrollTop >= limits.max) {
            const touch = e.touches[0] || e.changedTouches[0];
            if (touch) {
                const startY = parseFloat(e.target.dataset.touchStartY) || touch.clientY;
                const currentY = touch.clientY;
                const deltaY = currentY - startY;

                if ((scrollTop <= limits.min && deltaY > 0) || (scrollTop >= limits.max && deltaY < 0)) {
                    e.preventDefault();
                    return false;
                }
            }
        }
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const limits = getScrollLimits();

        if (scrollTop < limits.min) {
            window.scrollTo({ top: limits.min, behavior: 'auto' });
            lastScrollTop = limits.min;
        } else if (scrollTop > limits.max) {
            window.scrollTo({ top: limits.max, behavior: 'auto' });
            lastScrollTop = limits.max;
        } else {
            lastScrollTop = scrollTop;
        }
    };

    window.addEventListener('wheel', preventOverscroll, { passive: false, capture: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true });
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    document.addEventListener('touchstart', (e) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const limits = getScrollLimits();

        if (scrollTop <= limits.min || scrollTop >= limits.max) {
            const touch = e.touches[0];
            if (touch) {
                e.target.dataset.touchStartY = touch.clientY;
            }
        }
    }, { passive: true });
});

