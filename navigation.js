// ============================================
// STELLAR ARCHIVES - NAVIGATION SCRIPT
// ============================================

let navigationInitialized = false;

function initializeNavigation() {
    if (navigationInitialized) {
        return;
    }

    navigationInitialized = true;
    normalizeSidebarLinks();
    initNavigation();
    setupAnchorScrolling();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavigation, { once: true });
} else {
    initializeNavigation();
}

function normalizeSidebarLinks() {
    const currentPath = window.location.pathname;
    const isInPages = currentPath.split('/').includes('pages');
    const sidebar = document.getElementById('sidebar');

    if (!sidebar) {
        return;
    }

    sidebar.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');

        if (!href) {
            return;
        }

        if (href.startsWith('../pages/')) {
            link.setAttribute('href', isInPages ? href.replace('../pages/', '') : href.replace('../pages/', 'pages/'));
            return;
        }

        if (href.startsWith('pages/')) {
            link.setAttribute('href', isInPages ? href.replace('pages/', '') : href);
            return;
        }

        if (href === '../index.html' || href === 'index.html') {
            link.setAttribute('href', isInPages ? '../index.html' : 'index.html');
        }
    });
}

function initNavigation() {
    const navCategories = document.querySelectorAll('.nav-category');
    
    // Initialize each category
    navCategories.forEach(category => {
        const parent = category.querySelector('.nav-parent');
        
        if (parent) {
            parent.addEventListener('click', function(e) {
                e.preventDefault();
                toggleCategory(category);
            });
        }
    });
    
    // Highlight active page
    highlightActivePage();
    
    // Auto-expand category if child is active
    autoExpandActiveCategory();
}

function toggleCategory(category) {
    const isActive = category.classList.contains('active');
    
    if (isActive) {
        category.classList.remove('active');
    } else {
        category.classList.add('active');
    }
}

function highlightActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-child');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (currentPath === linkPath || currentPath.endsWith(linkPath)) {
            link.classList.add('active-page');
            link.style.color = 'var(--primary-accent)';
            link.style.background = 'var(--surface)';
        }
    });
}

function autoExpandActiveCategory() {
    const activeLink = document.querySelector('.nav-child.active-page');
    
    if (activeLink) {
        const parentCategory = activeLink.closest('.nav-category');
        if (parentCategory) {
            parentCategory.classList.add('active');
        }
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
