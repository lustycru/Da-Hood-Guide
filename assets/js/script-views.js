const sideNav = document.querySelector('.my-side-nav');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.close');
const randomBtn = document.querySelector('.random')

const frenchFlag = document.querySelector('.french-flag')
const usaFlag = document.querySelector('.usa-flag')

openBtn.addEventListener('click', function(e){
    sideNav.classList.add('active')
})
closeBtn.addEventListener('click', function(e){
    sideNav.classList.remove('active')
})

randomBtn.addEventListener('click', function(e){
    var pages = [
    "credits.html",
    "graffitis.html",
    "index-notice.html",
    'insignes.html',
    "lexique.html",
    ];

    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];

    window.location.href = randomPage;
})

