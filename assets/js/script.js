const sideNav = document.querySelector('.my-side-nav');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', function(e){
    sideNav.classList.add('active')
})
closeBtn.addEventListener('click', function(e){
    sideNav.classList.remove('active')
})