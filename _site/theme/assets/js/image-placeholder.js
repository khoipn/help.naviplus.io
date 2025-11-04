document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('main img');
    
    images.forEach(img => {
        // If image is already loaded (cached)
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            // Add loaded class when image loads successfully
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            
            // Add error class and placeholder content when image fails to load
            img.addEventListener('error', () => {
                img.classList.add('error');
                img.alt = img.alt || 'Image not available';
            });
        }
    });
});

