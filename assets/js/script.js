const sideNav = document.querySelector('.my-side-nav');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.close');
const randomBtn = document.querySelector('.random')
const questionFaq = document.querySelectorAll('.question')
const reponseFaq = document.querySelectorAll('.reponse')
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

for(let i = 0; i < questionFaq.length; i++) {
    questionFaq[i].addEventListener('click', function(e){
        if(reponseFaq[i].style.display === 'block'){
            reponseFaq[i].style.display = 'none'
        } else {
            reponseFaq[i].style.display = 'block'
        }
    });
}