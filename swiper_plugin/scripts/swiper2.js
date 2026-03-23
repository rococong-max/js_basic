// swiper2.js

const heroBnr = document.querySelector('.hero_bnr');
const barBg = document.querySelector ('.bar_bg')
const bestItem = document.querySelector ('.best_swiper')
const newItem = document.querySelector ('.new_swiper')

console.log(heroBnr,barBg,bestItem) 

const newSwiper = new Swiper(newItem,{
    slidesPerView:3,
    spaceBetween:16,
    autoplay:{delay:1500,},
    loop:true,
})
const bestSwiper = new Swiper(bestItem,{
    // 한 화면 기준 보이는 슬라이드 개수 (총 슬라이드 개수보단 작아야 함)
    slidesPerView:3.5,
    spaceBetween:20, //슬라이드 여백(px 기준)
    loop:true,
    autoplay:{delay:2000,},
    //slidesPerGroup:2,//한번에 슬라이드 넘어가는 개수 조절
    speed:1000,
    centeredSlides:true, // 옆에 틈이보이면 슬라이드 갯수가 부족한 것임
});

const heroSwiper = new Swiper(heroBnr,{
    autoplay:{delay:3000,},
    loop:true,
    // 슬라이드 변경시 실행함수
    on:{
        // 처음 시작할때 실행함수
        init:function(){
            // 부모요소에 active 클래스 적용하는 법
            barBg.classList.add('active')
        },
        slideChangeTransitionStart:function(){//슬라이드 전환 시 시작함수
            barBg.classList.remove('active')
        },
        slideChangeTransitionEnd:function(){//슬라이드 전환종료 후 시작함수
            barBg.classList.add('active')
        }
    },
    // 페이지번호 사용자 함수
    pagination:{
        el:'.hero_bnr .pg',
        type:'fraction',
        // swiper-pagination-current
        // swiper-pagination-total
        // 위 고유 클래스명 활용 custom javascript - renderFraction
        // swiper고유옵션:function(매개변수){return}
        renderFraction:function(current,total){
            console.log(current,total)
            let customPg = `<span class=${current}></span>`;
            //customPg += `<span>💫</span>`;
            customPg += `<span class=${total}></span>`;
            return customPg;
        }
    },
});
