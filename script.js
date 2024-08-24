document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('cinema-overlay');
    const cinemaImage = document.getElementById('cinema-image');
    const headerImage = document.getElementById('header-image');
    const aboutSection = document.getElementById('about');

    // Set the initial position for the header image
    headerImage.style.position = 'absolute'; // Make it absolute for proper positioning

    setTimeout(() => {
        // Move the image from the cinematic overlay to the header
        const overlayRect = cinemaImage.getBoundingClientRect();
        const headerRect = headerImage.getBoundingClientRect();
        
        // Calculate the translation values
        const translateX = headerRect.left - overlayRect.left;
        const translateY = headerRect.top - overlayRect.top;

        // Animate the movement
        headerImage.style.transition = 'transform 1s ease'; // Smooth transition
        headerImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

        // Hide the cinematic overlay after the animation completes
        setTimeout(() => {
            overlay.classList.add('hidden');
            headerImage.style.position = 'static'; // Reset position after animation
            headerImage.style.transform = 'none'; // Reset transform

            // Scroll down to the About section after the transition
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }, 1000); // Duration matches the transition duration
    }, 1000); // Delay before the animation starts
});
