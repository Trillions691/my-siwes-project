document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        content.classList.toggle("active");
    });
});

document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;

    if (!username || !email || !oldPassword || !newPassword) {
        document.getElementById("message").textContent = "All fields are required.";
        document.getElementById("message").style.color = "red";
        return;
    }

    // Simulate profile update process
    document.getElementById("message").textContent = "Profile updated successfully!";
    document.getElementById("message").style.color = "green";
});