const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const proposal = document.getElementById("proposal");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("bgMusic");

const text = "Starwin 💖 From the moment you came into my life, everything feels magical. ✨ Your smile lights up my darkest nights, and your voice is my favorite melody. Every heartbeat whispers your name...";

let i = 0;

function typeEffect() {
    if (i < text.length) {
        message.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

startBtn.addEventListener("click", function () {
    music.play();
    startBtn.style.display = "none";
    typeEffect();

    setTimeout(() => {
        proposal.classList.remove("hidden");
    }, 6500);

    createHearts();
});

yesBtn.addEventListener("click", function () {
    document.body.innerHTML = `
        <div style="margin-top:30vh; text-align:center; color:white;">
            <h1 style="font-size:30px;">
                Starwin 💍 You Just Made Me The Happiest Person Alive ❤️✨
            </h1>
            <p>Our forever begins now... 🌙💖</p>
        </div>
    `;
});

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}