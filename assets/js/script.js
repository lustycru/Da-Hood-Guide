const sideNav = document.querySelector('.my-side-nav');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.close');

const frenchFlag = document.querySelector('.french-flag')
const usaFlag = document.querySelector('.usa-flag')

openBtn.addEventListener('click', function(e){
    sideNav.classList.add('active')
})
closeBtn.addEventListener('click', function(e){
    sideNav.classList.remove('active')
})
