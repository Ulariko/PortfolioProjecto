document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 10,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dark mode toggle
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark Mode";
    darkModeButton.style.position = "fixed";
    darkModeButton.style.top = "10px";
    darkModeButton.style.left = "10px";
    document.body.appendChild(darkModeButton);
    
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Language translation to Japanese
    const translateButton = document.createElement("button");
    translateButton.textContent = "日本語";
    translateButton.style.position = "fixed";
    translateButton.style.top = "10px";
    translateButton.style.right = "10px";
    document.body.appendChild(translateButton);
    
    translateButton.addEventListener("click", function () {
        document.querySelector("h1").textContent = "あなたの名前";
        document.querySelector("#about h2").textContent = "私について";
        document.querySelector("#about p").textContent = "自分自身についての短い紹介を書いてください。";
        document.querySelector("#projects h2").textContent = "プロジェクト";
        document.querySelector("#projects p").textContent = "リンクと説明付きの作品を紹介します。";
        document.querySelector("#contact h2").textContent = "連絡先";
        document.querySelector("#contact p").textContent = "メール: your.email@example.com";
    });
});
