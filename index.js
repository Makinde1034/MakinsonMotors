const but = document.querySelector('.scroll-down');
const main = document.querySelector('.main');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const prod = document.querySelector('.product-scroll');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const foot = document.querySelector('.foot');



const scrollDown = () =>{
    window.scrollTo({
        top:500,
        behavior:'smooth'
    })

    mobileNav.classList.remove('active');

}

const openMobileNav = () =>{
    mobileNav.classList.toggle('active');
}

const closeNav = () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
    mobileNav.classList.remove('active')
}

const ScrollToBottom=()=>{
    foot.scrollIntoView(true,);
    mobileNav.classList.remove('active')
}



but.addEventListener('click',scrollDown);
burger.addEventListener('click',openMobileNav);
prod.addEventListener('click',scrollDown);
about.addEventListener('click',closeNav);
contact.addEventListener('click',ScrollToBottom);
