// index.js
const heroBnr = document.querySelector('.hero_bnr')
const fullBnr = document.querySelector('.full_bnr');
console.log(heroBnr,fullBnr)


const heroSlide = new Swiper(heroBnr,{
    // 옵션:값,
    // 옵션:{옵션:값, 옵션:값,},
    loop:true,/* 슬라이드 끝->시작 반복 true, false */
    //direction:'vertical',/* 슬라이드 방향 : horizontal 수평 (기본값) / vertical 수직 */
    //제자리 나타나고 사라지게 할때는 direction 적용해제
    effect:'fade', // fade, cube, flip 
    // mousewheel:true, /* 마우스 휠 가능 옵션 (마우스 휠로 슬라이드 조작) */
    autoplay:{ // 자동재생
        delay:1000,//1000 1초
        pauseOnMouseEnter:true,//마우스가 올라오면 일시정지
        disableOnInteraction:true,
        //마우스 상호작용 후 멈출건지(true) 움직일건지(false) 옵션
    },
});

const fullslide = new Swiper(fullBnr,{
    loop:true,
    autoplay:{
        delay:1500,
        pauseOnMouseEnter:true,
    }
});