document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');

    sidebar.addEventListener('mouseover', () => {
        sidebar.style.width = '280px';
    });

    sidebar.addEventListener('mouseout', () => {
        sidebar.style.width = '80px';
    });
});
