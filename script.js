// Admin Login Credentials (default)
const ADMIN_USERNAME = 'nervis';
const ADMIN_PASSWORD = 'ridu';

// Handle Giveaway Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const giveawayForm = document.getElementById('giveawayForm');
    
    if (giveawayForm) {
        giveawayForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const instagram = document.getElementById('instagram').value;
            const phone = document.getElementById('phone').value;
            
            // Get existing entries from localStorage
            let entries = JSON.parse(localStorage.getItem('giveawayEntries') || '[]');
            
            // Create new entry
            const newEntry = {
                instagram: instagram,
                phone: phone,
                date: new Date().toLocaleString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            
            // Add to entries
            entries.push(newEntry);
            
            // Save to localStorage
            localStorage.setItem('giveawayEntries', JSON.stringify(entries));
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            
            // Reset form
            giveawayForm.reset();
            
            // Redirect after 2 seconds
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
    
    // Handle Admin Login
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
                // Set admin session
                sessionStorage.setItem('isAdmin', 'true');
                
                // Redirect to list page
                window.location.href = 'list-pengikut-giveaway.html';
            } else {
                // Show error message
                const errorMessage = document.getElementById('errorMessage');
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                }
                
                // Clear password field
                document.getElementById('password').value = '';
            }
        });
    }
    
    // Handle Contact Form (optional - just prevent default for now)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah diterima. Kami akan menghubungi Anda segera.');
            contactForm.reset();
        });
    }
});

