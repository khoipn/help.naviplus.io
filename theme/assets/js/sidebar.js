document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded fired. Initializing sidebar icons...');
  var collapseElements = document.querySelectorAll('.collapse');
  console.log('Found collapse elements:', collapseElements.length);

  collapseElements.forEach(function(collapseEl) {
    console.log('  Collapse Element:', collapseEl);
    var collapseId = collapseEl.id;
    // Robustly find the navLink that triggers this collapse element
    var navLink = document.querySelector('a[data-bs-target="#' + collapseId + '"]');
    var folderIconClosed = navLink ? navLink.querySelector('.sidebar-folder-icon-closed') : null;
    var folderIconOpen = navLink ? navLink.querySelector('.sidebar-folder-icon-open') : null;
    console.log('  Processing collapse ID:', collapseEl.id, 'NavLink:', navLink, 'FolderIconClosed:', folderIconClosed, 'FolderIconOpen:', folderIconOpen);

    if (!navLink) {
      console.warn('    NavLink not found for collapse ID:', collapseId);
      return;
    }

    if (!folderIconClosed || !folderIconOpen) {
      console.warn('    One or both folder icons not found for navLink:', navLink);
      return;
    }

    // Initial state: ensure correct icon if already open (e.g., from Liquid 'show' class)
    if (collapseEl.classList.contains('show')) {
      console.log('    Initial state: Collapse is SHOW, showing open icon.');
      folderIconOpen.classList.remove('d-none');
      folderIconClosed.classList.add('d-none');
    } else {
      console.log('    Initial state: Collapse is HIDDEN, showing closed icon.');
      folderIconClosed.classList.remove('d-none');
      folderIconOpen.classList.add('d-none');
    }

    collapseEl.addEventListener('show.bs.collapse', function () {
      console.log('  Collapse event: SHOW, showing open icon.');
      folderIconOpen.classList.remove('d-none');
      folderIconClosed.classList.add('d-none');
    });

    collapseEl.addEventListener('hide.bs.collapse', function () {
      console.log('  Collapse event: HIDE, showing closed icon.');
      folderIconClosed.classList.remove('d-none');
      folderIconOpen.classList.add('d-none');
    });
  });

  // Highlight active item's parent folders on load
  console.log('Checking for active links and parents...');
  var activeLink = document.querySelector('.nav-link.active');
  if (activeLink) {
    console.log('  Active link found:', activeLink);
    var parentCollapse = activeLink.closest('.collapse');
    while (parentCollapse) {
      console.log('    Current Parent Collapse Element:', parentCollapse);
      var parentId = parentCollapse.id;
      var parentNavLink = document.querySelector('a[data-bs-target="#' + parentId + '"]');
      console.log('    Current Parent NavLink:', parentNavLink);
      
      if (!parentNavLink) {
        console.warn('    Parent NavLink not found for parent collapse ID:', parentId);
        break; 
      }

      // Ensure parent collapse is shown and update icon
      if (!parentCollapse.classList.contains('show')) {
        new bootstrap.Collapse(parentCollapse, { toggle: false }).show();
      }

      if (parentNavLink.classList.contains('nav-link')) {
        var parentFolderIconClosed = parentNavLink.querySelector('.sidebar-folder-icon-closed');
        var parentFolderIconOpen = parentNavLink.querySelector('.sidebar-folder-icon-open');
        if (parentFolderIconClosed && parentFolderIconOpen) {
          console.log('    Found parent folder icons. Showing open icon.');
          parentFolderIconOpen.classList.remove('d-none');
          parentFolderIconClosed.classList.add('d-none');
        }
      }
      parentCollapse = parentNavLink ? parentNavLink.closest('.collapse') : null; 
    }
  } else {
    console.log('  No active link found on this page.');
  }

  // --- Persistence Logic (New) ---
  // Function to save collapse states to localStorage
  function saveCollapseStates() {
    const states = {};
    collapseElements.forEach(function(collapseEl) {
      states[collapseEl.id] = collapseEl.classList.contains('show');
    });
    localStorage.setItem('sidebarCollapseStates', JSON.stringify(states));
  }

  // Function to load and apply collapse states from localStorage
  function loadCollapseStates() {
    const savedStates = JSON.parse(localStorage.getItem('sidebarCollapseStates'));
    if (savedStates) {
      collapseElements.forEach(function(collapseEl) {
        const isExpanded = savedStates[collapseEl.id];
        if (isExpanded) {
          // Use Bootstrap's programmatic API to show without triggering events initially
          new bootstrap.Collapse(collapseEl, { toggle: false }).show();
        }
      });
    }
  }

  // Restore states on initial load
  loadCollapseStates();

  // Attach event listeners to save states on collapse show/hide
  collapseElements.forEach(function(collapseEl) {
    collapseEl.addEventListener('shown.bs.collapse', saveCollapseStates);
    collapseEl.addEventListener('hidden.bs.collapse', saveCollapseStates);
  });
  // --- End Persistence Logic ---


});
