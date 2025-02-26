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

    // Language translation toggle
    const translateButton = document.createElement("button");
    translateButton.textContent = "日本語";
    translateButton.style.position = "fixed";
    translateButton.style.top = "10px";
    translateButton.style.right = "10px";
    document.body.appendChild(translateButton);
    
    let isJapanese = false;
    translateButton.addEventListener("click", function () {
        if (!isJapanese) {
            document.querySelector("h1").textContent = "Assan Ular";
            document.querySelector("#about h2").textContent = "私について";
            document.querySelector("#about p").textContent = "Hi! My name is Ular and I am 16 years old. I am from Kazakhstan, Astana and study 10th grade in the Bilim-Innovation school for Boys. My main interest is 3D computer graphics focused on Game Development and consider it as a future field of work. In addition I have several hobbies like sketching and reading books. My personality type in MBTI is INFJ.";
            document.querySelector("#projects h2").textContent = "プロジェクト";
            document.querySelector("#projects p").textContent = "1) Chemistry Olympiads
2) Informatrix 2025
3) Digital Design Contest";
            document.querySelector("#contact h2").textContent = "連絡先";
            document.querySelector("#contact p").textContent = "Email: ular.assan@gmail.com
Phone Number: +7 *******608
Telegram: @ulariko";
            translateButton.textContent = "English";
        } else {
            document.querySelector("h1").textContent = "Assan Ular";
            document.querySelector("#about h2").textContent = "About Me";
            document.querySelector("#about p").textContent = "Hi! My name is Ular and I am 16 years old. I am from Kazakhstan, Astana and study 10th grade in the Bilim-Innovation school for Boys. My main interest is 3D computer graphics focused on Game Development and consider it as a future field of work. In addition I have several hobbies like sketching and reading books. My personality type in MBTI is INFJ.";
            document.querySelector("#projects h2").textContent = "Projects";
            document.querySelector("#projects p").textContent = "1) Chemistry Olympiads
2) Informatrix 2025
3) Digital Design Contest";
            document.querySelector("#contact h2").textContent = "Contact";
            document.querySelector("#contact p").textContent = "Email: ular.assan@gmail.com
Phone Number: +7 *******608
Telegram: @ulariko";
            translateButton.textContent = "日本語";
        }
        isJapanese = !isJapanese;
    });
});
