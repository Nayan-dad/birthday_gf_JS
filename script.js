window.addEventListener("load", () => {
    // After 10 seconds, trigger romantic section
    setTimeout(() => {
        startRomanticSurprise();
    }, 2000); // 3 seconds
});

function startRomanticSurprise() {
    // Hide shopping page, show romantic page
    document.getElementById("shopping-page").style.display = "none";
    document.getElementById("romantic-page").classList.remove("hidden");

    // Start music
    document.getElementById("bg-music").play();

    // Start confetti
    startConfetti();

    // Show Happy Birthday message
    typeWriterEffect("Happy Birthday My Love ❤️", "typewriter", () => {
        // After main greeting, show romantic lines
        typeWriterEffect(
            "From the first moment I saw you... Every day with you is a blessing... You are my heart, my love, my everything ❤️",
            "romantic-lines"
        );
    });
}

// Confetti animation
function startConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Typewriter effect with optional callback
function typeWriterEffect(text, elementId, callback) {
    let i = 0;
    const speed = 50;
    const target = document.getElementById(elementId);
    target.innerHTML = "";

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    type();
}

// Cake click → final message
document.getElementById("cake").addEventListener("click", () => {
    document.getElementById("final-message").classList.remove("hidden");
    typeWriterEffect(
        "You are the most special person in my life. I’m so lucky to have you. I hope this birthday brings you as much happiness as you bring me every day. – [Your Brother’s Name]",
        "final-typewriter"
    );
});
