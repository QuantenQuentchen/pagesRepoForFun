// ============================================
// STELLAR ARCHIVES - NAVIGATION SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadComponents().then(() => {
        initNavigation();
    });
});

// ============================================
// COMPONENT LOADING
// ============================================

async function loadComponents() {
    // Determine the base path for components based on current page location
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/pages/');
    const basePath = isInSubfolder ? '../components/' : 'components/';
    
    const components = [
        { id: 'sidebar-container', file: 'sidebar.html' },
        { id: 'header-container', file: 'page-header.html' },
        { id: 'footer-container', file: 'page-footer.html' }
    ];
    
    const promises = components.map(component => 
        loadComponent(basePath + component.file, component.id)
    );
    
    await Promise.all(promises);
}

async function loadComponent(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
            
            // Fix relative paths in links if we're in a subfolder
            if (window.location.pathname.includes('/pages/')) {
                fixRelativePaths(container);
            }
        }
    } catch (error) {
        console.error(`Error loading component from ${url}:`, error);
        // Optionally show user-friendly error
    }
}

function fixRelativePaths(container) {
    // Fix links that point to pages/ - they should point to current directory
    const links = container.querySelectorAll('a[href^="pages/"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Remove 'pages/' prefix since we're already in the pages folder
        link.setAttribute('href', href.replace('pages/', ''));
    });
    
    // Fix links to index.html - they should go up one level
    const indexLinks = container.querySelectorAll('a[href="index.html"]');
    indexLinks.forEach(link => {
        link.setAttribute('href', '../index.html');
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
