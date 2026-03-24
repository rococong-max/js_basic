// swiper.js

const ssfHero = document.querySelector('.ssf_hero')
const brand = document.querySelector('.brand_slide')

console.log(ssfHero,brand)

const brandSwiper = new Swiper(brand,{
    slidesPerView:3,
    loop:true,
    spaceBetween:16,
    navigation:{
        prevEl:'.brand_slide ~ .b_prev',
        nextEl:'.brand_slide ~ .b_next',
    },
})

const ssfSwiper = new Swiper(ssfHero,{
    slidesPerView:3, // 한번에 보이는 슬라이드 개수
    spaceBetween:0, //슬라이드 사이 여백
    loop:true,
    autoplay:{delay:2000,},
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    },
})