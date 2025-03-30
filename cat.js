document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        content.classList.toggle("active");
    });
});

function showForm() {
    document.getElementById('medicineForm').style.display = 'block';
}

function hideForm() {
    document.getElementById('medicineForm').style.display = 'none';
}

function addMedicine() {
    const name = document.getElementById('name').value;
    if (name && category && type && price && stock) {
        const table = document.getElementById('medicineTable');
        const row = table.insertRow();
        row.innerHTML = `
            <td>${table.rows.length}</td>
            <td>${name}</td>
            <td><span class="edit">✔</span> <span class="delete">✖</span></td>
        `;

        hideForm();
        document.getElementById('name').value = '';
    } else {
        alert('Please fill all fields');
    }
}
