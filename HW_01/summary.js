document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".prints-table img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxClose = document.getElementById("lightboxClose");

    // open on image click
    images.forEach(img => {
        img.style.cursor = "zoom-in";  // little hint
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;      // same image, bigger
            lightbox.classList.add("open");
        });
    });

    // close on X click
    lightboxClose.addEventListener("click", () => {
        lightbox.classList.remove("open");
    });

    // close when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("open");
        }
    });

    // close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.classList.remove("open");
        }
    });
});
