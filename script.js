// JavaScript for smooth scroll effect when the button is clicked
document.querySelector('.cta button').addEventListener('click', function() {
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
});

// Open Modal Function
function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('myModal').style.display = "block";
}

// Close Modal Function
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
