document.addEventListener('DOMContentLoaded', () => {
    
    // స్క్రోల్ చేసినప్పుడు హెడర్ బ్యాక్‌గ్రౌండ్ మారే స్మార్ట్ ఎఫెక్ట్ బాస్
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(212, 175, 55, 0.3)";
            header.style.background = "#000000";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "rgba(10, 10, 10, 0.95)";
        }
    });
});