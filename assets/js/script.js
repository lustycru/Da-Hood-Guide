const sideNav = document.querySelector('.my-side-nav');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.close');
const randomBtn = document.querySelector('.random')
const questionFaq = document.querySelector('.question')
const reponseFaq = document.querySelector('.reponse')

const frenchFlag = document.querySelector('.french-flag')
const usaFlag = document.querySelector('.usa-flag')

openBtn.addEventListener('click', function(e){
    sideNav.classList.add('active')
})
closeBtn.addEventListener('click', function(e){
    sideNav.classList.remove('active')
})


randomBtn.addEventListener('click', function(e){
    const viewsDirectory = "views/";
    const pages = [
    "credits.html",
    "graffitis.html",
    "index-notice.html",
    "insignes.html",
    "lexique.html",
    "baseball-affil.html"
    ];

    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = viewsDirectory + pages[randomIndex];
    window.location.href = randomPage;
})

questionFaq.addEventListener('click', function(e){
    reponseFaq.style.display = 'block';
});