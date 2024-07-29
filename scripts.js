document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const images = {
        about: document.getElementById('about-image'),
        timeline: document.getElementById('timeline-image'),
        awards: document.getElementById('awards-image'),
        contact: document.getElementById('contact-image')
    };

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        Object.keys(images).forEach(key => {
            images[key].classList.remove('active');
        });

        document.querySelector(`#${sectionId}`).classList.add('active');
        images[sectionId].classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
        });
    });

    // Set default section to About Me
    showSection('about');
});
