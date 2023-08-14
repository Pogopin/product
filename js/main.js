
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
//анимация
let tl = gsap.timeline();

let builtIcon = () => {
    const ICON = gsap.timeline({default: {duration: 1}, repeat: -1, repeatDelay: 3});
    ICON.to('.built__img', {rotate: 5})
        .to('.built__img', {rotate: -5})
        .to('.built__img', {rotate: 5})
        .to('.built__img', {rotate: 0});
    return ICON;
}
tl.from('.get__start', {opacity: 0, y: 120, duration: 1})
  .from('.content__image', {opacity: 0, x: 120, duration: 1})
  .add(builtIcon);
  
//анимация end
let wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       300,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );

wow.init();