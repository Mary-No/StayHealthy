import '../scss/app.scss';
// import '../../node_modules/autoplay';


import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation,Pagination]);

const slider = new Swiper('.program_slider',{
    speed:1000,
    wrapperClass: "program_slider_wrapper",
    slideClass: "program_slider_item",
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: 4000,

    loop:true,


    keyboard:{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    navigation: {
        nextEl: '.arrow_right',
        prevEl: '.arrow_left',
    },


});

