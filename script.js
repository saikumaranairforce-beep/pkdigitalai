// Page Navigation
function navigateTo(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateTo(page);
        });
    });
    
    // Career form submission
    const careerForm = document.getElementById('careerForm');
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(careerForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const position = formData.get('position');
            
            // Show success message
            alert(`Thank you ${name}! Your application for ${position} has been submitted successfully. We'll contact you at ${email} soon.`);
            
            // Reset form
            careerForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .review-card, .feature-card, .position-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});