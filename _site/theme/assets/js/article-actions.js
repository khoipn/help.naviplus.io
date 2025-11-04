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

    const emailSupportBtn = document.getElementById('emailSupportBtn');
    if (emailSupportBtn) {
        emailSupportBtn.addEventListener('click', () => {
            const currentUrl = window.location.href;
            const domain = window.location.hostname;
            const subject = encodeURIComponent(`Support request from ${domain}`);
            const body = encodeURIComponent(
                `Hello Navi+ Support Team,

I am currently viewing the following page and need some assistance:
Page URL: ${currentUrl}

Please let me know how you can help.

Thank you!`
            );
            window.location.href = `mailto:khoipn@naviplus.io?subject=${subject}&body=${body}`;
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

    // Add Copy to Clipboard functionality for code blocks
    document.querySelectorAll('pre').forEach(preElement => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('code-block-container');
        preElement.parentNode.insertBefore(wrapper, preElement); // Insert wrapper before pre
        wrapper.appendChild(preElement); // Move pre inside wrapper

        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-code-button');
        copyButton.innerHTML = '<i class="ri-file-copy-line"></i> Copy';
        wrapper.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            const codeToCopy = preElement.querySelector('code') ? preElement.querySelector('code').textContent : preElement.textContent;
            navigator.clipboard.writeText(codeToCopy).then(() => {
                copyButton.innerHTML = '<i class="ri-check-line"></i> Copied!';
                copyButton.classList.add('copied');
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="ri-file-copy-line"></i> Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy code:', err);
            });
        });
    });
});
