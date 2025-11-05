document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main .content-wrapper');
    const tocContainer = document.getElementById('tableOfContents');
    
    if (!mainContent || !tocContainer) return;

    // Get all headings (h2-h4 for better readability)
    const headings = mainContent.querySelectorAll('h2, h3, h4');
    
    // Hide TOC completely if no headings found
    if (headings.length === 0) {
        tocContainer.classList.add('d-none');
        // Set content to full width when TOC is hidden
        mainContent.style.maxWidth = '100%';
        return;
    }
    
    // Show TOC if headings exist
    tocContainer.classList.remove('d-none');
    // Reset content width when TOC is visible
    mainContent.style.maxWidth = '';

    // Create TOC structure
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    let currentLevel = 2;
    let currentList = tocList;
    const listStack = [tocList];
    
    headings.forEach((heading, index) => {
        // Add ID to heading if it doesn't have one
        if (!heading.id) {
            const id = 'heading-' + index;
            heading.id = id;
        }
        
        const level = parseInt(heading.tagName.substring(1)); // h2 -> 2, h3 -> 3, etc.
        const listItem = document.createElement('li');
        listItem.className = `toc-item toc-level-${level}`;
        
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        link.className = 'toc-link';
        
        // Smooth scroll on click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Update URL hash without jumping
            history.pushState(null, null, '#' + heading.id);
            
            // Update active state
            document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
        
        listItem.appendChild(link);
        
        // Handle nesting for h3, h4 under h2
        if (level > currentLevel) {
            // Create nested list
            const nestedList = document.createElement('ul');
            nestedList.className = 'toc-list toc-nested';
            const lastItem = currentList.lastElementChild;
            if (lastItem) {
                lastItem.appendChild(nestedList);
            } else {
                currentList.appendChild(nestedList);
            }
            listStack.push(nestedList);
            currentList = nestedList;
        } else if (level < currentLevel) {
            // Go back to parent list
            for (let i = currentLevel; i > level; i--) {
                listStack.pop();
            }
            currentList = listStack[listStack.length - 1];
        }
        
        currentList.appendChild(listItem);
        currentLevel = level;
    });
    
    tocContainer.appendChild(tocList);
    
    // Highlight active heading on scroll
    let ticking = false;
    
    function updateActiveHeading() {
        const scrollPosition = window.scrollY + 100;
        
        let activeHeading = null;
        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPosition) {
                activeHeading = heading;
            }
        });
        
        document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.remove('active');
        });
        
        if (activeHeading) {
            const activeLink = tocContainer.querySelector(`a[href="#${activeHeading.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveHeading);
            ticking = true;
        }
    });
    
    // Initial active state
    updateActiveHeading();
});

