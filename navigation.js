// ============================================
// STELLAR ARCHIVES - NAVIGATION SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
});

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
