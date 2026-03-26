// swiper-responsive.js
// 변수
const best = document.querySelector('.best_swiper')
const season = document.querySelectorAll('.season_wrap .swiper')
const season_title = document.querySelectorAll('.season_wrap .tab_title a')
//const nike = document.querySelector('.nike_swiper')
//const converse = document.querySelector('.converse_swiper')
console.log(best,season,season_title)

// swiper 연결
const bestSwiper = new Swiper(best,{
    // 반응형 Swiper 제작 시 모바일부터 계산하면서 시작
    slidesPerView:2, // 모바일에서 보이는 개수
    spaceBetween:20,
    // 반응형 옵션 breackpounts (사용자의 디바이스 너비 기준)
    // 반응형 너비 평균 640 / 768 / 1024 (디자인에 따라 수정,추가 가능)
    breakpoints:{
        640:{}, // 640이상일 때
        768:{
            slidesPerView:3,
        }, // 768이상일 때
        1024:{
            slidesPerView:4,
        }, // 1024이상일 때
    },
    navigation:{
        nextEl:'.best_swiper ~ .next',
        prevEl:'.best_swiper ~ .prev',
    },
})
const nikeSwiper = new Swiper(season[0],{
    slidesPerView:2,
    spaceBetween:20,
    breakpoints:{
        640:{},
        768:{slidesPerView:3,},
        1024:{slidesPerView:4,spaceBetween:30,},
    },
})
const converseSwiper1 = new Swiper(season[1],{
    slidesPerView:2,
    spaceBetween:20,
    breakpoints:{
        640:{},
        768:{slidesPerView:3,},
        1024:{slidesPerView:4,spaceBetween:30,},
    },
})

// tab제목 클릭 시 관련 내용 나오는 js
// 1. 컨버스 숨기기 (기본 활성화 대상이 아니기 때문)
season[1].style.display = 'none'

// 2. 컨버스 탭 제목 클릭(active 변경) -> 컴버스 내용 보이기, 나이키 숨기기
season_title[1].addEventListener('click',function(e){
    e.preventDefault();
    season_title[1].classList.add('active');
    season_title[0].classList.remove('active');
    season[0].style.display = 'none';
    season[1].style.display = 'block';
})

// 3. 나이키 탭 제목 클릭(active 변경) -> 컴버스 내용 숨기기, 나이키 보이기
season_title[0].addEventListener('click',function(e){
    e.preventDefault();
    season_title[0].classList.add('active');
    season_title[1].classList.remove('active');
    season[1].style.display = 'none';
    season[0].style.display = 'block';
})

// a변수를 클릭이벤트함수로 사용 시 a의 다른 페이지 이동속성(href)때문에 스크롤이 위로 올라가는 문제 해결법
// HTML 해결법) <a href="javascript:viod(0)"
// JS 해결법) a태그.addEventListener('클릭',function(){}); 명령기준
// 1. 위 명령 function(매개변수 //주로 e,event를 자주 사용함 )입력
// 2. 매개변수.preventDefault(); //a의 기본기능 막기를 의미함
