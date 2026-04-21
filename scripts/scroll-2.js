// ------------------------------------------ 위로 script
// 1. 초기 숨기기
// 2. 스크롤 특정 위치만큼 내리면 나타나기
// 3. 위로 클릭 시 위로 이동하기
// 4. 위로 이동하고 나면 다시 숨기기

const fixedTop = document.querySelector('#fixed_group .top');
const header = document.querySelector('header');

console.log(fixedTop,header, header.children[0],header.children[1]);

// 1. 초기 숨기기
fixedTop.style.display = 'none';

// 2. 스크롤(scroll) 특정 위치만큼 내리면 나타나기
// 객체.addEventListener(이벤트,함수);
// 스크롤 이벤트가 여러 개 있으면 꼬일 수 있으므로 스크롤 이벤트 1개에 원하는 여러 동작 삽입하기
window.addEventListener('scroll',function (){
    // console.log('스크롤 중...');
    // 특정 위치만큼 내리면 '위로' 나타나기
    // scrollY 속성 : 얼만큼 스크롤을 움직이고 있지는 px로 보여주는 속성
    // console.log(window.scrollY);
    // 100 위치만큼 내리면 '위로' 나타내기
    if(window.scrollY >= 100) fixedTop.style.display = 'block';
    else fixedTop.style.display = 'none';

    // -------------------------------------------------- header 2행 -> 1행
    // 1. 특정 위치까지 스크롤을 내리면 header 고정시키고 디자인 변경
    // 2. 스크롤을 올리면 header 디자인 복구, 고정 해제 
    if(window.scrollY >= 200){
        // console.log('200보다 큰 위치');
        // header.style.position = 'fixed'; // body 기준으로 고정하여 기존 위치 값 해제
        // header.style.position = 'sticky'; // 태그 구조 상 부모 기준 고정 
        // header.style.top = '0';
        header.classList.add('scroll');
    }else{
        // header.style.position = 'relative';
        header.classList.remove('scroll');
    }
});

// 3. 위로 클릭 시 위로 이동하기
fixedTop.addEventListener('click',function(e){window.scrollTo(0,0); e.preventDefault();});




