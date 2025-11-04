document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main'); // Changed from '.main-content' to 'main'
    if (!mainContent) return;

    mainContent.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'IMG' && target.closest('main')) {
            event.preventDefault(); // Prevent default image behavior if any
            openLightbox(target.src);
        }
    });

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none'; // Hidden by default
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-button">&times;</span>
            <img src="" alt="Full size image">
        </div>
    `;
    document.body.appendChild(lightbox);

    const closeButton = lightbox.querySelector('.close-button');
    closeButton.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    function openLightbox(imageSrc) {
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex'; // Use flex to center content
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
});
