// ============================================
// NAOMI NAIL-STUDIO - COMPLETE JAVASCRIPT
// All Pages: Home, About, Services, Gallery, Contact, Enquiry
// ============================================

// ============================================
// 0. DATETIME DISPLAY - Runs immediately
// ============================================

function updateDateTime() {
    const now = new Date();
    
    // Format: "Friday, 19 June 2026 at 21:28:35"
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = now.toLocaleString('en-US', options);
    }
}

// Update immediately
updateDateTime();

// ============================================
// Wait for the DOM to fully load before executing
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Naomi Nail-Studio JavaScript loaded!');
    
    // ============================================
    // 1. HAMBURGER MENU TOGGLE
    // ============================================
    
    const menuBtn = document.getElementById('menuBtn');
    const navbar = document.getElementById('navbar');
    
    console.log('menuBtn found:', menuBtn ? '✅ Yes' : '❌ No');
    console.log('navbar found:', navbar ? '✅ Yes' : '❌ No');
    
    if (menuBtn && navbar) {
        console.log('Both elements found! Adding click listener...');
        
        // Toggle menu on button click
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Menu button clicked!');
            navbar.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = this.querySelector('i');
            const menuText = this.querySelector('.menu-text');
            
            if (icon) {
                if (navbar.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                    if (menuText) menuText.textContent = 'Close';
                } else {
                    icon.className = 'fas fa-bars';
                    if (menuText) menuText.textContent = 'Menu';
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
                const menuText = menuBtn.querySelector('.menu-text');
                if (icon) {
                    icon.className = 'fas fa-bars';
                    if (menuText) menuText.textContent = 'Menu';
                }
            }
        });

        // Close menu when a link is clicked
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                const menuText = menuBtn.querySelector('.menu-text');
                if (icon) {
                    icon.className = 'fas fa-bars';
                    if (menuText) menuText.textContent = 'Menu';
                }
            });
        });
        
    } else {
        console.log('Menu elements not found!');
        console.log('menuBtn:', menuBtn);
        console.log('navbar:', navbar);
    }

    // ============================================
    // 2. NEWSLETTER POPUP
    // ============================================
    
    const popup = document.getElementById('newsletterPopup');
    const closePopup = document.getElementById('closePopup');
    const skipPopup = document.getElementById('skipPopup');
    const newsletterForm = document.getElementById('newsletterForm');

    if (popup && closePopup && skipPopup && newsletterForm) {
        console.log('Popup elements found!');
        
        // Show popup after 3 seconds
        setTimeout(function() {
            popup.classList.add('show');
        }, 3000);

        // Close button
        closePopup.addEventListener('click', function() {
            popup.classList.remove('show');
        });

        // No Thanks button
        skipPopup.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.remove('show');
        });

        // Form submit
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to Naomi Nail Studio!');
            popup.classList.remove('show');
            newsletterForm.reset();
        });

        // Close on outside click
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });
    }

    // ============================================
    // 3. ACTIVE NAVIGATION LINK HIGHLIGHT
    // ============================================
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.navbar a');
    
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
    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
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
    // 5. IMAGE LOADING WITH FADE-IN EFFECT
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
    // 6. FOOTER YEAR AUTO-UPDATE
    // ============================================
    
    const footerCopyright = document.querySelector('.copyright p');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.innerHTML = footerCopyright.innerHTML.replace('2026', currentYear);
    }

    // ============================================
    // 7. SCROLL-TO-TOP BUTTON
    // ============================================
    
    if (!document.getElementById('scrollTopBtn')) {
        const scrollBtn = document.createElement('button');
        scrollBtn.id = 'scrollTopBtn';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #9c6b98;
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
            this.style.background = '#d4a373';
            this.style.transform = 'scale(1.05)';
        });
        scrollBtn.addEventListener('mouseleave', function() {
            this.style.background = '#9c6b98';
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
    // 8. KEYBOARD ACCESSIBILITY - ESC to close menu
    // ============================================
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbar && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            const menuText = menuBtn.querySelector('.menu-text');
            if (icon) {
                icon.className = 'fas fa-bars';
                if (menuText) menuText.textContent = 'Menu';
            }
        }
    });

    // ============================================
    // 9. CONSOLE WELCOME
    // ============================================
    
    console.log('%c💅 Naomi Nail-Studio', 'font-size: 24px; font-weight: bold; color: #9c6b98;');
    console.log('%cBeauty • Elegance • Confidence', 'font-size: 16px; color: #666;');
    console.log('%c✨ Thank you for visiting! ✨', 'font-size: 14px; color: #888;');

});