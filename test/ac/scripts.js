document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');
    const paths = document.querySelectorAll('svg path');

    paths.forEach(path => {
        path.addEventListener('mouseenter', function (e) {
            const name = this.getAttribute('data-name');
            tooltip.innerText = name;
            tooltip.style.display = 'block';
        });

        path.addEventListener('mousemove', function (e) {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });

        path.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });
});
