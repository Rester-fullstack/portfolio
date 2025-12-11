const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Abrir/fechar menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

// Fechar menu ao clicar em um link
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });
});
