
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // autoplay: {
    //     delay: 2000,
    // },
    // slidesPerGroup: 3,
    // slideToClickedSlide: true,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
        640: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1100: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        

    }
  });


let burger = document.querySelector('.header__menu-burger'),
    mobile_menu = document.querySelector('.header__menu-mobile');

burger.addEventListener('click', (event)=> {
    mobile_menu.classList.toggle('active');
        
});

window.addEventListener('resize',function(){
	if (window.matchMedia("(max-width: 1100px)").matches) mobile_menu.classList.remove('active');
    //if(window.innerWidth > 1100) mobile_menu.classList.remove('active');
    //console.log(window.innerWidth);
});
