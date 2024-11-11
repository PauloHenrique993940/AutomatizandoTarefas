// Scroll suave ao clicar nos links do menu
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adiciona efeito de destaque nas imagens ao passar o mouse
const imageCards = document.querySelectorAll('.image-card img');

imageCards.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});
