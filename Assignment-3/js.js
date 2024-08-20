// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current section in the navigation bar
window.addEventListener('scroll', function() { 
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === #${currentSection}) {
            link.classList.add('active');
        }
    });
});

// Fullscreen functionality
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function() {
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.className = 'fullscreen';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'fullscreen-content';
        contentDiv.innerHTML = this.innerHTML;

        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = function() {
            document.body.removeChild(fullscreenDiv);
        };

        fullscreenDiv.appendChild(closeButton);
        fullscreenDiv.appendChild(contentDiv);
        document.body.appendChild(fullscreenDiv);
    });
});