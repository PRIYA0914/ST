// Parallax movement
window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    const riftBg = document.querySelector(".rift-bg");
    if (riftBg) {
        riftBg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    }
});

// Enter button effect
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".enter-btn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.style.transition = "2s";
            document.body.style.filter = "brightness(0)";
            setTimeout(() => {
                alert("WELCOME TO THE UPSIDE DOWN");
            }, 2000);
        });
    }
});
