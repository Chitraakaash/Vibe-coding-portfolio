// ============================================
// CORE INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Year auto-update
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    // Initialize features
    initCategoryFilter();
    initSecurityGate();
    initStaggerAnimation();
});

// ============================================
// CATEGORY FILTERING WITH SCROLL-TO-TOP
// ============================================

function initCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    const workGrid = document.getElementById('workGrid');
    
    if (!filterBtns.length || !workCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Smooth scroll to grid top
            workGrid.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // Small delay for scroll, then filter
            setTimeout(() => {
                filterCards(category, workCards);
            }, 300);
        });
    });
}

function filterCards(category, cards) {
    cards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            card.style.animation = 'none';
            
            // Force reflow
            void card.offsetWidth;
            
            // Re-apply staggered animation
            setTimeout(() => {
                card.style.animation = `fadeInUp 600ms cubic-bezier(0.33, 1, 0.68, 1) forwards`;
            }, index * 60);
        } else {
            card.classList.add('hidden');
        }
    });
}

// ============================================
// EMAIL/PHONE SECURITY GATE
// ============================================

function initSecurityGate() {
    const securityInput = document.getElementById('securityInput');
    const securityBtn = document.getElementById('securityBtn');
    const securityMessage = document.getElementById('securityMessage');
    const protectedContent = document.getElementById('protectedContent');
    
    if (!securityBtn) return;
    
    securityBtn.addEventListener('click', () => {
        const email = securityInput.value.trim();
        
        if (validateGmailEmail(email)) {
            // Success
            securityMessage.textContent = 'Access granted! Contact details revealed below.';
            securityMessage.className = 'security-message success';
            protectedContent.classList.add('revealed');
            
            // Smooth scroll to revealed content
            setTimeout(() => {
                protectedContent.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 300);
        } else {
            // Error
            securityMessage.textContent = 'Please enter a valid Gmail address to view contact details.';
            securityMessage.className = 'security-message error';
            protectedContent.classList.remove('revealed');
        }
    });
    
    // Enter key support
    securityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            securityBtn.click();
        }
    });
}

function validateGmailEmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    return gmailRegex.test(email);
}

// ============================================
// STAGGERED ANIMATION ON SCROLL
// ============================================

function initStaggerAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe timeline items, connect cards, etc.
    document.querySelectorAll('.timeline-item, .connect-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 600ms ease, transform 600ms ease';
        observer.observe(item);
    });
}

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Keyboard support
    document.addEventListener('keydown', handleLightboxKeyboard);
    
    // Click outside to close
    lightbox.addEventListener('click', handleLightboxBackdrop);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox) return;
    
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Clean up listeners
    document.removeEventListener('keydown', handleLightboxKeyboard);
    lightbox.removeEventListener('click', handleLightboxBackdrop);
}

function handleLightboxKeyboard(e) {
    if (e.key === 'Escape') closeLightbox();
}

function handleLightboxBackdrop(e) {
    if (e.target.id === 'lightbox') closeLightbox();
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href.length <= 1) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                history.pushState(null, null, href);
            }
        });
    });
});

// ============================================
// LAZY LOADING SUPPORT
// ============================================

if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => img.src = img.src);
} else {
    // Fallback for older browsers
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    });
}

// ============================================
// PERFORMANCE UTILITIES
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scroll behavior
if (CSS.supports('scroll-behavior', 'smooth')) {
    document.documentElement.style.scrollBehavior = 'smooth';
}
