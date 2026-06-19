// ============================================
// NAOMI NAIL-STUDIO - Complete JavaScript
// ============================================

// Wait for the DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. MOBILE MENU TOGGLE
    // ============================================
    const menuBtn = document.getElementById('menuBtn');
    const navbar = document.getElementById('navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navbar.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navbar.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navbar.classList.contains('active') && 
                !navbar.contains(e.target) && 
                e.target !== menuBtn && 
                !menuBtn.contains(e.target)) {
                navbar.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        });
        // ============================================
// NEWSLETTER POPUP
// ============================================

const popup = document.getElementById("newsletterPopup");
const closePopup = document.getElementById("closePopup");
const skipPopup = document.getElementById("skipPopup");
const newsletterForm = document.getElementById("newsletterForm");

// Show popup after 3 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        popup.classList.add("show");
    }, 3000);
});

// Close button
closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});

// No Thanks button
skipPopup.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("show");
});

// Form submit
newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you for subscribing to Naomi Nail Studio!");

    popup.classList.remove("show");
    newsletterForm.reset();
});

        // Close menu when a link is clicked
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            });
        });
    }

    // ============================================
    // 2. ACTIVE NAVIGATION LINK HIGHLIGHT
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.navbar a, .footer-links a');
    
    allNavLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href');
        if (linkHref) {
            const linkPage = linkHref.split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active-link');
            }
        }
    });

    // ============================================
    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // 4. IMAGE LOADING WITH FADE-IN EFFECT
    // ============================================
    const mainImage = document.getElementById('image');
    if (mainImage) {
        mainImage.style.opacity = '0';
        mainImage.style.transition = 'opacity 0.8s ease-in-out';
        
        mainImage.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        if (mainImage.complete) {
            mainImage.style.opacity = '1';
        }
        
        setTimeout(function() {
            mainImage.style.opacity = '1';
        }, 1500);
    }

    // ============================================
    // 5. FOOTER YEAR AUTO-UPDATE
    // ============================================
    const footerCopyright = document.querySelector('.copyright p');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.innerHTML = footerCopyright.innerHTML.replace('2026', currentYear);
    }

    // ============================================
    // 6. SCROLL-TO-TOP BUTTON
    // ============================================
    if (!document.getElementById('scrollTopBtn')) {
        const scrollBtn = document.createElement('button');
        scrollBtn.id = 'scrollTopBtn';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #d4a0a0;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            display: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.background = '#b88383';
            this.style.transform = 'scale(1.05)';
        });
        scrollBtn.addEventListener('mouseleave', function() {
            this.style.background = '#d4a0a0';
            this.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // 7. STICKY HEADER
    // ============================================
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // ============================================
    // 8. KEYBOARD ACCESSIBILITY - ESC to close menu
    // ============================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbar && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });

    // ============================================
    // 9. CONSOLE WELCOME
    // ============================================
    console.log('%c💅 Naomi Nail-Studio', 'font-size: 24px; font-weight: bold; color: #d4a0a0;');
    console.log('%cBeauty • Elegance • Confidence', 'font-size: 16px; color: #666;');
    console.log('%c✨ Thank you for visiting! ✨', 'font-size: 14px; color: #888;');

});