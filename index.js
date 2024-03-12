function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function animateSections() {
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(function (section) {
        if (isElementVisible(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
 
}

window.addEventListener('scroll', function() {
    animateSections();
});

document.addEventListener('DOMContentLoaded', function() {
    animateSections();
});