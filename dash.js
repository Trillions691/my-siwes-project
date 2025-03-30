document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        content.classList.toggle("active");
    });
});