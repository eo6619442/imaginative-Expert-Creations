// Toggle the menu when clicking on the hamburger icon
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth',
        });
    });
});

// Form validation and submission
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    // Send data to server (e.g., via AJAX)
    const formData = new FormData(this);
    fetch('contact-handler.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent successfully!');
                this.reset(); // Clear the form
            } else {
                alert('Something went wrong. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
});

// Back-to-top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
