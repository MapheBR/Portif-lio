document.addEventListener("DOMContentLoaded", function () {
    showAnimatedMessage("Bem-vindo ao meu portfólio!");

    const title = document.querySelector("h1");
    const originalText = title.textContent;
    title.textContent = "";
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);

    document.querySelectorAll(".skill").forEach(item => {
        item.addEventListener("click", function () {
            let info = this.querySelector(".skill-info");
            if (info) {
                info.classList.toggle("hidden");
            }
        });
    });

    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    document.getElementById("scroll-top").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        let scrollButton = document.getElementById("scroll-top");
        if (window.scrollY > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    function showAnimatedMessage(message) {
        let msgDiv = document.createElement("div");
        msgDiv.className = "animated-message";
        msgDiv.textContent = message;
        document.body.appendChild(msgDiv);
        setTimeout(() => {
            msgDiv.remove();
        }, 3000);
    }

    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseover", function () {
            showAnimatedMessage("Confira este projeto!");
        });
    });

    const contactForm = document.createElement("form");
    contactForm.innerHTML = `
        <input type="text" id="name" placeholder="Seu nome" required>
        <input type="email" id="email" placeholder="Seu email" required>
        <textarea id="message" placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
    `;
    document.getElementById("contato").appendChild(contactForm);

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        showAnimatedMessage(`Obrigado, ${name}! Sua mensagem foi enviada.`);
        contactForm.reset();
    });

    // New features
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(section => {
        observer.observe(section);
    });

    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.textContent = "🌙";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        this.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
    });
});