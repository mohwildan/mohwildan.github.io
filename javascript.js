const nav = document.querySelector('nav')
const btn = document.querySelector('#menu-btn')
const header = document.querySelector('header')


btn.addEventListener('click', function() {
    btn.classList.toggle('fa-times')
    nav.classList.toggle('aktiv')
    
})

window.addEventListener('scroll', function() {
    header.classList.toggle('header', window.scrollY > 150 )
})

window.addEventListener('load', function () {
    let progressbar = document.querySelector('.progress-bar');
    // let progress = document.querySelector('.progress');
    let ini =  ['80%','70%','50%'];




})


ScrollReveal({
    reset: false,
   distance: '60px',
   duration: 2500,
   delay: 400 }); 

   ScrollReveal().reveal('.media i', { delay: 500 , origin: 'top',interval:200});
   ScrollReveal().reveal('.right i ', { delay: 200 , origin: 'top', interval:200});


   const html = document.querySelector('.html')
   const css = document.querySelector('.css')
   const js = document.querySelector('.js')
   window.addEventListener('scroll', function() {
    html.classList.toggle('htmll', window.scrollY > 1000)
})
   window.addEventListener('scroll', function() {
    css.classList.toggle('csss', window.scrollY > 1000 )
})
   window.addEventListener('scroll', function() {
    js.classList.toggle('jss', window.scrollY > 1000 )
})