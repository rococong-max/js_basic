// bom_dom.js
// 함수 기초 연습
function calc(num2){
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total => ${total}`)
}

calc(1000);
calc(20);
calc(`1`);

console.log('----------------------------')
// 1400px / 4 - 20px
// 1024px / 3 - 20px
// 420px / 2 - 20px
// 결과 예시) width = ?px

function widthCalc(full, num){
    let clac = (full - 20)/num;
    let total = `width = ${clac.toFixed(1)}`;
    // .toFixed(1) 반올림해서 소수점을 한자리까지 표시하도록 하는 함수 (문자열로 처리됨)
    console.log(total)
}

widthCalc(1400,4);
widthCalc(1024,3);
widthCalc(420,2);
console.log('----------------------------')

// BOM 내장함수 종류
// window.함수(); // window 최상위객체라 생략 가능
// let bom1 = alert('경고 메세지'); // 사용자에게 경고(오류)메세지 전달

//document.write('메세지1');
//document.write('메세지2');
//document.write('메세지3');

//DOM(document object model)
// 변수생성 -> 변수활용 연산자 또는 함수 진행
// DOM변수생성 -> 나머지 순서 동일

const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag)
// js에 의해 동적으로 변경되는 결과에 따라 스타일 변동을 위해 자바스크립트 안에서도 css를 작성할 수 있다.
// DOM객체.style.속성 = '값'; 여러개의 값을 쌓을 수 있음
// DOM객체.style = '속성:값'; 1개의 값만 입력
h1Tag[0].style.backgroundColor = '#ccc';
h1Tag[0].style.border = '1px solid #000';
// 대부분 여러 번 등장하는 태그 특성 상 어떤 태그를 사용하는 것인지 선언을 하기위해서 []대괄호(인덱스) 사용
// h1Tag[0].style = 'background-color:#ccc';
// h1Tag[0].style = 'border:1px solid #000';

//클래스 DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls);
titleCls[0].style.display = 'inline-block';
titleCls[0].style.background = 'linear-gradient(pink, yellowgreen)';
titleCls[1].style.borderBottom = '2px dashed pink';

//아이디DOM
const txtId = document.getElementById('txt');
console.log(txtId);
txtId.style.fontSize = '1.25rem';
txtId.style.width = 'max-content';
txtId.style.padding = '8px 24px';
txtId.style.borderRadius = '30px';
txtId.style.backgroundColor = 'skyblue';
txtId.style.margin = '0 auto';

// ES6ver DOM
// title 클래스 잡기
const titleClsQ = document.querySelector('.title'); // 2개 이상의 태그를 잡을 땐 먼저있는 태그를 잡음
console.log(titleClsQ);

// h1 태그 잡기
const h1TagQ = document.querySelector('.box h1');
console.log(h1TagQ);

// 아이디 잡기
// 변수 생성 -> 스타일 적용
const txtIdQ = document.querySelector('#txt');
console.log(txtIdQ); // null, undefined 오류
txtIdQ.style.color = 'yellow';
txtIdQ.style.boxShadow = '0 0 10px blue';

// All키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title');
console.log(titleAll);
titleAll[1].style.backgroundColor = '#888';

console.log('-----------------------')
// 스타벅스 카테고리/테마 메뉴 JS만들기
// 특정 목표 달성을 위한 절차적 순서 흐름 계획
// 초기 모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
// html, css 준비된 것을 기준으로 작성
// -----초기 모습
// 1. 테마 내용 숨기기(display:none;) 
// -----사용자의 동적 움직임에 따라 변화하는 모습
// 2. 사용자가 테마 제목 클릭
// 3. 카테고리 내용 안보이도록 숨기기, 테마 내용 보임(display:block;)
// 4. 사용자가 카테고리 제목 클릭
// 5. 테마 내용 안보이도록 숨기기, 카테고리 내용 보임

// 1. 테마 내용 숨기기(display:none;) 
// 숨기기(동작) 실행하려면 테마내용(요소) 필요
//변수
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category');
const categoryTitle = document.querySelector('.tab_title a:nth-child(1)')

//변수 테스트 (에러 조기 확인)
console.log(theme,themeTitle,category,categoryTitle)

//실행
theme.style.display = 'none';
// 2. 사용자가 테마 제목 클릭
themeTitle.addEventListener('click', thmemShow);
// 3. 카테고리 내용 안보이도록 숨기기, 테마 내용 보임(display:block;)
function thmemShow(){
    category.style.display = 'none';
    theme.style.display = 'block';
}
// 4. 사용자가 카테고리 제목 클릭
categoryTitle.addEventListener('click',categoryShow)
// 5. 테마 내용 안보이도록 숨기기, 카테고리 내용 보임
function categoryShow(){
    theme.style.display = 'none';
    category.style.display = 'block';
}
