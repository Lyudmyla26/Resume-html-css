const hero = document.querySelector('.hero')
const avatar = document.querySelector('.avatar-container')
function mobile() {
    return window.innerWidth < 768;
    
}
if (mobile()) {
    const size = hero.getBoundingClientRect();
const height = size.height; 
avatar.style.marginBottom = height + 10 + 'px';
}


function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
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
  const sections2 = document.querySelectorAll('.animate-sections');
   sections2.forEach(function (section) { // Виправлено назву змінної
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