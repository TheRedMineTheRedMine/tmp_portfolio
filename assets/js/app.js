const letter = document.querySelector('header .name .first.letter');
const texts = document.querySelectorAll('header .name div span');

const animation_menu = document.querySelectorAll('header .content > li');

var titleShadow = setInterval(() => {
    letter.classList.toggle("active");
    
    [].forEach.call(texts, el => {
        el.classList.toggle("active");
    });

}, 400);

[].forEach.call(animation_menu, el => {
    el.addEventListener('mouseover', () => {
        el.querySelector('.animation').classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
        el.querySelector('.animation').classList.remove('active');
    });
});
