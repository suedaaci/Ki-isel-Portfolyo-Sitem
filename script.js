
function createStars() {
    let starField = document.getElementById('star-field');
    if (!starField) {
        starField = document.createElement('div');
        starField.id = 'star-field';
        document.body.appendChild(starField);
    }

    const starCount = 400;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const duration = Math.random() * 3 + 4 + 's';
        star.style.setProperty('--duration', duration);
        star.style.animationDelay = Math.random() * 5 + 's';
        
        starField.appendChild(star);
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const feedback = document.getElementById('formFeedback');

            if (name === "" || email === "" || message === "") {
                feedback.innerText = "Lütfen tüm alanları doldurunuz!";
                feedback.style.color = "#ff7675";
            } else if (!email.includes("@")) {
                feedback.innerText = "Lütfen geçerli bir e-posta adresi giriniz!";
                feedback.style.color = "#ff7675";
            } else {
                feedback.innerText = "Mesajınız başarıyla alındı. Teşekkürler, " + name + "!";
                feedback.style.color = "#55efc4";
                contactForm.reset();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setupContactForm();
});

function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}