 // Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute('data-theme', 
        body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeToggle.innerHTML = body.getAttribute('data-theme') === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Animated Counter
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // The lower the faster

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
};

// Start counter animation when element is in view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// Parallax Effect
const parallaxImage = document.querySelector('.parallax-image');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (parallaxImage) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        parallaxImage.style.transform = `perspective(1000px) rotateY(-5deg) translateY(${rate}px)`;
        lastScrollY = scrolled;
    }
});

// Live Events Ticker
const liveEvents = [
    "Hackathon 2024 - Registration Open",
    "Tech Workshop - AI & Machine Learning",
    "Cultural Fest - Early Bird Tickets Available",
    "Career Fair - Top Companies Participating"
];

const tickerContent = document.querySelector('.ticker-content');
if (tickerContent) {
    liveEvents.forEach(event => {
        const eventSpan = document.createElement('span');
        eventSpan.textContent = event;
        tickerContent.appendChild(eventSpan);
    });
}

// Sample Event Data
const sampleEvents = [
    {
        title: "Annual Tech Symposium",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        location: "Main Auditorium",
        category: "Conference"
    },
    {
        title: "Startup Weekend",
        date: "2024-03-20",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
        location: "Innovation Hub",
        category: "Workshop"
    },
    {
        title: "Cultural Fest",
        date: "2024-03-25",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
        location: "Campus Grounds",
        category: "Cultural"
    }
];

// Load Sample Events
const eventsGrid = document.querySelector('.events-grid');
if (eventsGrid) {
    sampleEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.setAttribute('data-aos', 'fade-up');
        
        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-date">${new Date(event.date).toLocaleDateString()}</div>
            </div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <div class="event-details">
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <p><i class="fas fa-tag"></i> ${event.category}</p>
                </div>
                <button class="btn-register">Register Now</button>
            </div>
        `;
        
        eventsGrid.appendChild(eventCard);
    });
}

// Sample Testimonials
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Event Organizer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        text: "EventEase has transformed how we manage campus events. The platform is intuitive and feature-rich."
    },
    {
        name: "Michael Chen",
        role: "Student Coordinator",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        text: "The registration and attendance tracking features have made our events more organized than ever."
    },
    {
        name: "Emily Rodriguez",
        role: "College Administrator",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        text: "As an administrator, I appreciate the analytics and reporting capabilities. It's a game-changer."
    }
];

// Load Testimonials
const testimonialsCarousel = document.querySelector('.testimonials-carousel');
if (testimonialsCarousel) {
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.setAttribute('data-aos', 'fade-up');
        
        testimonialCard.innerHTML = `
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
            </div>
        `;
        
        testimonialsCarousel.appendChild(testimonialCard);
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        // Here you would typically send this to your backend
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});