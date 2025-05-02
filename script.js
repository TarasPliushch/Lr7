document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const departureDate = document.getElementById('departure-date').value;
            const package = document.getElementById('package').value;
            const passengers = document.getElementById('passengers').value;
            const terms = document.getElementById('terms').checked;
            
            if (!name || !email || !phone || !departureDate || !package || !passengers || !terms) {
                alert('Будь ласка, заповніть всі обов\'язкові поля');
                return;
            }
            
            // Simulate form submission
            alert('Дякуємо за ваше бронювання! Ми зв\'яжемося з вами найближчим часом для підтвердження.');
            bookingForm.reset();
            
            // In a real app, you would send the data to a server here
            // fetch('/api/bookings', {
            //     method: 'POST',
            //     body: JSON.stringify(formData),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     alert('Booking successful!');
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     alert('Error submitting booking');
            // });
        });
    }
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        
        showTestimonial(0);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (would need additional HTML/CSS)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navMenu = document.querySelector('nav ul');
    // 
    // if (menuToggle && navMenu) {
    //     menuToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('active');
    //     });
    // }
});
