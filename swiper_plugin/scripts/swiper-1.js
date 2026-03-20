// swiper-1.js
const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const graphic = document.querySelector('.graphic')

console.log(graphic)

const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션:값,옵션:값,},
    mousewheel:true,
    speed:800,
    direction:'vertical',
});

const webSwiper = new Swiper(web,{
    //effect:'fade',
    loop:true,
    //autoplay:{delay:2000,},
    pagination:{
        // 페이지대상html연결, 모양, 동적옵션
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction',//bullets(기본값), fraction(페이지 넘버)
        //dynamicBullets:true,//typed이 bullets(기본값)일때만 가능
    },
})

const graphicSwiper = new Swiper(graphic,{
    loop:true,
    pagination:{
        el:'.graphic_group .graphic_page',
    },
})
