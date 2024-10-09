const canvas = document.getElementById('lightning-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas(); // Set the initial size
window.addEventListener('resize', resizeCanvas); // Adjust the canvas size on window resize

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    drawLightning(mouse.x, mouse.y); // Draw lightning on mouse move
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function drawLightning(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
    ctx.strokeStyle = `rgba(255, 255, 255, ${random(0.5, 1)})`;
    ctx.lineWidth = random(1, 3);
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Create the lightning bolt shape
    for (let i = 0; i < 5; i++) {
        const newX = x + random(-10, 10);
        const newY = y + random(-10, 10);
        ctx.lineTo(newX, newY);
        x = newX;
        y = newY;
    }

    ctx.stroke();

    // Optionally, you can add a timeout to limit how often lightning is drawn
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 100); // Clear after 100 ms
}

function animate() {
    requestAnimationFrame(animate);
}

animate();
