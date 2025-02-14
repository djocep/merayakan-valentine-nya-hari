window.onload = function() {
    document.body.style.opacity = '1';
    
    // Add floating hearts
    setInterval(createHeart, 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + '%';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}