document.addEventListener('DOMContentLoaded', () => {
    const addFavoriteBtn = document.getElementById('addFavoriteBtn');
    const currentUrl = window.location.pathname;
    const currentPageTitle = document.title;

    function getFavorites() {
        try {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            return favorites;
        } catch (e) {
            console.error('Error parsing favorites from localStorage:', e);
            return [];
        }
    }

    function saveFavorites(favorites) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    function isFavorite(url) {
        return getFavorites().some(item => item.url === url);
    }

    function toggleFavorite() {
        let favorites = getFavorites();
        if (isFavorite(currentUrl)) {
            // Remove from favorites
            favorites = favorites.filter(item => item.url !== currentUrl);
            addFavoriteBtn.innerHTML = '<i class="ri-flag-line"></i> <span class="d-none d-md-inline">Add to Favorites</span>';
            addFavoriteBtn.classList.remove('active');
        } else {
            // Add to favorites
            favorites.push({ url: currentUrl, title: currentPageTitle });
            addFavoriteBtn.innerHTML = '<i class="ri-flag-fill"></i> <span class="d-none d-md-inline">Added to Favorites</span>';
            addFavoriteBtn.classList.add('active');
        }
        saveFavorites(favorites);
        renderFavorites();
    }

    function renderFavorites() {
        // Find ALL favoritesList elements (desktop and mobile sidebars)
        const favoritesLists = document.querySelectorAll('#favoritesList');
        const favoritesHeadings = document.querySelectorAll('.favorites-heading');
        const favoritesSeparators = document.querySelectorAll('.favorites-separator');
        
        if (favoritesLists.length === 0) {
            console.error('No favoritesList elements found in DOM.');
            return;
        }

        const favorites = getFavorites();
        
        // Hide or show the entire favorites section based on whether there are favorites
        if (favorites.length === 0) {
            favoritesLists.forEach(list => list.classList.add('d-none'));
            favoritesHeadings.forEach(heading => heading.classList.add('d-none'));
            favoritesSeparators.forEach(separator => separator.classList.add('d-none'));
            return;
        }

        // Show favorites section
        favoritesLists.forEach(list => list.classList.remove('d-none'));
        favoritesHeadings.forEach(heading => heading.classList.remove('d-none'));
        favoritesSeparators.forEach(separator => separator.classList.remove('d-none'));
        
        favoritesLists.forEach(favoritesList => {
            favoritesList.innerHTML = ''; // Clear existing list

            favorites.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('nav-item', 'favorite-item');

                const link = document.createElement('a');
                link.classList.add('nav-link');
                link.href = item.url;
                
                // Add flag icon before title
                const flagIcon = document.createElement('i');
                flagIcon.classList.add('ri-flag-fill');
                flagIcon.style.marginRight = '8px';
                flagIcon.style.fontSize = '0.9em';
                flagIcon.style.color = '#0366d6';
                
                const titleSpan = document.createElement('span');
                titleSpan.classList.add('sidebar-title-text');
                titleSpan.textContent = item.title;
                
                link.appendChild(flagIcon);
                link.appendChild(titleSpan);
                
                if (currentUrl === item.url) {
                    link.classList.add('active');
                }

                const deleteIcon = document.createElement('i');
                deleteIcon.classList.add('ri-close-circle-line', 'delete-favorite-icon');
                deleteIcon.title = 'Remove from favorites';
                deleteIcon.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation(); // Prevent link click when deleting
                    removeFavorite(item.url);
                });

                link.appendChild(deleteIcon);
                listItem.appendChild(link);
                favoritesList.appendChild(listItem);
            });
        });
    }

    function removeFavorite(urlToRemove) {
        let favorites = getFavorites();
        favorites = favorites.filter(item => item.url !== urlToRemove);
        saveFavorites(favorites);
        renderFavorites();
        // If the current page was removed, update the button
        if (currentUrl === urlToRemove) {
            addFavoriteBtn.innerHTML = '<i class="ri-flag-line"></i> Add to Favorites';
            addFavoriteBtn.classList.remove('active');
        }
    }

    // Initialize button state
    if (addFavoriteBtn) {
        if (isFavorite(currentUrl)) {
            addFavoriteBtn.innerHTML = '<i class="ri-flag-fill"></i> <span class="d-none d-md-inline">Added to Favorites</span>';
            addFavoriteBtn.classList.add('active');
        } else {
            addFavoriteBtn.innerHTML = '<i class="ri-flag-line"></i> <span class="d-none d-md-inline">Add to Favorites</span>';
            addFavoriteBtn.classList.remove('active');
        }
        addFavoriteBtn.addEventListener('click', toggleFavorite);
    }

    // Render favorites on sidebar load with a slight delay to avoid conflicts with other DOM manipulations
    setTimeout(renderFavorites, 100);
});
