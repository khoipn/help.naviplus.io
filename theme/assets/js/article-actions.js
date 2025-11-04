document.addEventListener('DOMContentLoaded', () => {
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', () => {
            // Use browser's print functionality which usually includes "Save as PDF"
            window.print();
        });
    }

    const sharePageBtn = document.getElementById('sharePageBtn');
    if (sharePageBtn) {
        sharePageBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: document.title,
                        url: window.location.href
                    });
                    console.log('Page shared successfully');
                } catch (error) {
                    console.error('Error sharing:', error);
                }
            } else {
                // Fallback for browsers that do not support Web Share API
                // Copy URL to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('URL đã được sao chép vào clipboard!');
                    console.log('URL copied to clipboard');
                }).catch(err => {
                    console.error('Failed to copy URL:', err);
                });
            }
        });
    }

    // Hide/show article actions on scroll for desktop
    const articleActions = document.querySelector('.article-actions');
    if (articleActions) {
        let lastScrollTop = 0;
        const scrollThreshold = 30; // Pixels to scroll before hiding

        window.addEventListener('scroll', () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (window.innerWidth >= 768) { // Only for desktop
                if (st > lastScrollTop && st > scrollThreshold) {
                    // Downscroll past threshold
                    articleActions.classList.add('hidden');
                } else if (st <= scrollThreshold) {
                    // At or near the top
                    articleActions.classList.remove('hidden');
                } else if (st < lastScrollTop) {
                    // Upscroll
                    articleActions.classList.remove('hidden');
                }
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        });
    }
});
