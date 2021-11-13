export const viewMore = {
    centeredSlides: false,
    spaceBetween: 20,
    speed: 600,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next swiper-smallBtn-next',
        prevEl: '.swiper-button-prev swiper-smallBtn-prev'
    }
}

export const viewOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 500,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next swiper-next',
      prevEl: '.swiper-button-prev swiper-prev'
    }
}
