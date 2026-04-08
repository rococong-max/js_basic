// for_es6
// 1. for~in 객체 및 배열의 인덱스를 반복할 때 사용
// for(초기값; 조건식; 증감식){반복결과}
// for(let i=배열; 조건식; 증감식){반복결과}
// for(초기값 in 대입대상){반복결과}
// for(let i in 배열){반복결과}

const study = ['figma', 'html', 'css', 'js'];
console.log(study); //변수가 올바른지 확인
console.log(study[0]); //실제 사용 예시
console.log(study[1]);
console.log(study[2]);
console.log(study[3]);

for(let i in study){
    console.log(study[i]);
}

const boxDd = document.querySelectorAll('.box dd');
console.log(boxDd);

/* for(let i in boxDd){
    console.log(boxDd[i]);
    //boxDd[i].style.borderBottom = '2px solid #f00'
    // for~in은 마지막에 끝나는 인덱스를 출력하는데(실제로는 존재하지 않음) 그 인덱스에 style이 적용되면서 오류 발생
} */

for(let i of boxDd){
    console.log(i);
    i.style.borderBottom = '2px solid #f00'
    // 객체를 다룰 때에 더 편리한 for~of
    i.addEventListener('mouseover',function(){
        i.style.borderBottom = '2px solid #000'
    })
    i.addEventListener('mouseout',function(){
        i.style.borderBottom = '2px solid #f00'
    })
}

// ----------------------이낙근찹쌀떡 header
console.log('------------이낙근찹쌀떡 header')

// gnb 메뉴에 마우스 올렸을 때 관련 lnb 출력
const gnb = document.querySelectorAll('nav .gnb > li'); // > 표시 잊지말기
const lnb = document.querySelectorAll('nav .lnb'); //depth단계가 하나더 있을 때 li 잡아야 하는것
console.log(gnb, lnb)

for(let i of gnb){
    console.log(i);
    console.log(i.children[1])
    i.addEventListener('mouseover', function(){
        i.children[1].style.display = 'block'
    })
    i.addEventListener('mouseout', function(){
        i.children[1].style.display = 'none'
    })
}

// 전체메뉴 클릭 시 전체메뉴 나타나기
const mNavOpen = document.querySelector('#m_nav_open');
const mBg = document.querySelector('.m_bg');
const mNavClose = mBg.querySelector('.close')
console.log(mNavOpen,mBg,mNavClose); 

mNavOpen.addEventListener('click', function(){mBgSH('block')})// 클릭을 하면 바로 실행할 것만 안에 넣어줘야함
mNavClose.addEventListener('click', function(){mBgSH('none')})
//mBg.addEventListener('click', function(){mBgSH('none')})

function mBgSH(status){return mBg.style.display = status;}

// 데스크톱 메뉴(gnb) 복제해서 모바일 메뉴 위치(m_nav)에 붙여넣기
const mNav = mBg.querySelector('.m_nav');
const gnbUl = document.querySelector('nav .gnb');// 복제 전 선택
// 특정 대상 복제 `객체.cloneNode()` 내장함수 사용
const gnbClone = gnbUl.cloneNode(true); // 복제(Ctrl+C 유사) 괄호안을 비우면 자기 자신 태그만 복제한다는 의미, true는 자식자손까지 복제
console.log(mNav,gnbUl,gnbClone);

mNav.appendChild(gnbClone); //자식에 붙여 넣기

// 로그인 로그인/장바구니(login_cart > a*2) 복제해서 모바일 메뉴 위치(login_cart)에 옮기기
const mLoginCart = mBg.querySelector('.login_cart');
const dLoginCart = document.querySelectorAll('.right_menu .login_cart a');//복제 전 선택
console.log(mLoginCart,dLoginCart);

const dLoginClone = dLoginCart[0].cloneNode(true);// 복제(Ctrl+C 유사)
const dCartClone = dLoginCart[1].cloneNode(true);// 복제(Ctrl+C 유사)
mLoginCart.appendChild(dLoginClone);//자식에 붙여 넣기
mLoginCart.appendChild(dCartClone);//자식에 붙여 넣기

// 모바일 메뉴기준 
// gnb 클릭 시 lnb 보이기(height값 활용)
const mGnb = mBg.querySelectorAll('.gnb li');
const mLnb = mBg.querySelectorAll('.lnb');
console.log(mGnb,mLnb);

for(let i of mLnb){i.style.transition = 'height 0.3s';}

for(let i of mGnb){// i = mGnb
    i.addEventListener('click',function(){
        console.log('클릭확인');
        mLnbHide()
        // height:max-content 숫자로 수치화한 속성 => scrollHeight
        console.log(i.children[1].scrollHeight)
        i.children[1].style.height = `${i.children[1].scrollHeight}px`;
    })
}

function mLnbHide(){// i = mLnb
    for(let i of mLnb) i.style.height = 0;
};

