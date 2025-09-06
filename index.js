document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle
    const moonIcon = document.querySelector('.moon-icon');
    const body = document.body;

    moonIcon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            moonIcon.innerHTML = '<i class="bx bxs-sun"></i>';
        } else {
            moonIcon.innerHTML = '<i class="bx bx-moon"></i>';
        }
    });

    // Skills Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.skills-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button and corresponding content
            const tabName = button.getAttribute('data-tab');
            const targetContent = document.querySelector(`.skills-content[data-content="${tabName}"]`);
            
            button.classList.add('active');
            targetContent.classList.add('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.navbar a[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);


    document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle
    const moonIcon = document.querySelector('.moon-icon');
    const body = document.body;

    moonIcon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            moonIcon.innerHTML = '<i class="bx bxs-sun"></i>';
        } else {
            moonIcon.innerHTML = '<i class="bx bx-moon"></i>';
        }
    });

    // Skills Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.skills-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button and corresponding content
            const tabName = button.getAttribute('data-tab');
            const targetContent = document.querySelector(`.skills-content[data-content="${tabName}"]`);
            
            button.classList.add('active');
            targetContent.classList.add('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.navbar a[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

});
});