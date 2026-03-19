// FORM VALIDATION

document.getElementById("contactForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("All fields are required!");
        return;
    }

    if(!email.includes("@")){
        alert("Enter valid email");
        return;
    }

    alert("Form submitted successfully!");
});
// SIMPLE ANIMATION USING DOM

window.addEventListener("scroll", function(){
    document.querySelectorAll("section").forEach(sec=>{
        let pos = sec.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

function toggleFAQ(element){
    let p = element.nextElementSibling;
    if(p.style.display === "none"){
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
function goToPage(page){
    window.location.href = page;
}

// LOGIN VALIDATION

document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("loginMessage");

    // Empty check
    if(username === "" || password === ""){
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    // Simple login check (demo purpose)
    if(username === "admin" && password === "1234"){
        message.textContent = "Login successful!";
        message.style.color = "green";

        // Redirect after login
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } else {
        message.textContent = "Invalid username or password!";
        message.style.color = "red";
    }
});

// DARK MODE TOGGLE

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});

// Load saved theme
window.addEventListener("load", () => {
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
});