// Modal logic for project showcase
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        document.getElementById('modalTitle').textContent = card.dataset.title;
        document.getElementById('modalDesc').textContent = card.dataset.desc;
        document.getElementById('modalImage').src = card.dataset.img;
        document.getElementById('projectModal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('projectModal').style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target == document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
});