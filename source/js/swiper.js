import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';

let partnersSwiper;
const principlesSwiper = new Swiper(`.principles-slider`, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
    },
  },
  loop: true
});

const breakpoint = window.matchMedia( '(max-width:1149px)' );

const enableSwiper = () => {
  partnersSwiper = new Swiper(`.partners__swiper`, {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
};

const breakpointChecker = () => {
  if (breakpoint.matches === true) {
    if (partnersSwiper !== undefined) partnersSwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

