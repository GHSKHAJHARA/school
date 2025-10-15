document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-menu a").forEach(link => 
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    );

    // Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) { // Reveal when 100px from bottom
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load

    // Image Popup (Modal) Functionality
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img-src");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.querySelector(".close-btn");
    const images = document.querySelectorAll(".popup-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            if (popup) {
                popup.classList.add("active");
                popupImg.src = img.src;
                popupText.textContent = img.dataset.details || "No details available.";
            }
        });
    });

    const closePopup = () => { if (popup) popup.classList.remove("active"); };
    if (popup) {
        closeBtn.addEventListener("click", closePopup);
        popup.addEventListener("click", e => { if (e.target === popup) closePopup(); });
    }
});
