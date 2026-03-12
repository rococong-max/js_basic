//function.js
//function 함수명(전달인자){반복실행내용;}

//반복 함수 준비
function story1(){ //사용자정의함수
    story2(); //콜백함수
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'; //기존이야기에 더하기 필요 -> +=
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}
function story2(){ //사용자정의함수
    let b = '부모는 먹을 것이 없어'
    b += '계모가 아이들을 숲에 버리자고 제안한다.'
    console.log(b)
}

//반복 함수 실행(함수 밖)
story1();

//카페 키오스크 함수
function kiosk(){
    let cafe = '주문하기';
    cafe += '커피 메뉴 창 실행';
    cafe += '장바구니에 커피 담기';
    cafe += '결제하기';
    cafe += '결제 방식 선택 창 실행';
    cafe += '결제완료';
    cafe += '영수증 출력 메시지';
    cafe += '주문완료';
    console.log(cafe);
}
kiosk(); //함수선언 밖 함수 실행

// 2026/03/12
//---------------사용자정의함수 기초 연습
//---------------지역(블록)/전역 스코프 개념 포함
//스코프란? 변수가 접근 가능한 영역 위치

let num2 = 20; //블록스코프 밖(전역스코프) 전역 변수 생성
func1(); //함수 호출
//함수 준비와 함수 호출은 위 아래 위치 상관없음
//console.log(`num1+num2=${num1+num2}`);
//num1은 지역변수이므로 전역변수 위치에서 사용 불가 (오류)

//함수 준비
function func1(){//블록스코프 시작
    let num1 = 10; //지역변수
    console.log(`num1 : ${num1}`);//지역 변수 출력
    console.log(`num1+num2=${num1+num2}`);//지역+전역 동시 출력
    //(위) 콘솔 주의사항: num2 전역변수의 생성위치기가 함수호출보다 위에 있어야함
}//블록스코프 종료

console.log('--------------------------')
//---------------지역&전역 연습문제
//변수
let x = 1; //전역변수, 전역 위치에서 값 대입
let z; //전역변수, 값 x undefined
let y; //전역변수, 값 x undefined
console.log(x,y,z); //1 undefined undefined (지역의 값을 인식 x)

//함수호출
func_z(); //1+undefined -> NaN == Not a Number 약자 (숫자가 아니라 계산 할 수 없음)

//함수준비
function func_z(){
    z =5; //전역변수z 값5대입 위치 = 지역스코프(전역에서 인식 못함)
    func_y(); //지역변수 y10 값 인식을 위해 y10을 가지고 있는 함수 호출
    console.log(x+y); //11
}
function func_y(){
    y = 10; //전역변수y 값10대입 위치 = 지역스코프(전역에서 인식 못함)
    console.log(x+y+z); //16
}

console.log('--------------------------')
//---------------지역&전역 연습문제2
//최종목표) A방 간식: 초코파이, B방 간식 : 초코파이,콜라
//변수
let snack;

//함수호출
console.log(snack) //undefined (roomA 호출 전)
roomA(); //지역 스코프 안 전역변수 대입값 발생 '초코파이'
console.log(snack) // '초코파이'
roomB(); //roomA보다 먼저 호출할 경우 snack 안에 값이 대입되지 않아서 undefined
console.log(snack) // '초코파이'

//함수준비
function roomA(){
    snack = '초코파이'; //전역변수에 문자열 대입
    console.log(`A방에서 먹는 간식 : ${snack}`) //전역변수 호출(roomA를 호출해야 가능)
}
function roomB(){
    let drink = '콜라';
    console.log(`B방에서 먹는 간식 : ${snack},${drink}`) //전역변수 호출(roomB를 호출해야 가능)
}

console.log('--------------------------')
//---------------지역&전역 연습문제3
//지갑에 든 물건 에측하기
// 지갑 - 동전, 지갑- 지폐

//변수의 이름이 같아도 그 변수가 전역/지역으로 나눠져 있다면 동일설정이 가능하다.
//변수
let wallet = '동전'; //전역변수

//함수호출
bank(); //결과는? 지폐(o) -> 지역변수 값 출력
console.log(`wallet : ${wallet}`) //결과는? 지폐(x) 동전.. -> 전역변수 값 출력

//함수준비
function bank(){
    let wallet = '지폐'; //지역변수 전역변수와 이름이 같아도 오류가 안나는 이유는 위치가 다르기 때문
    console.log(`wallet : ${wallet}`)
}

console.log('=========================')
//------------------------------함수 내 전달인자(매개변수)
//함수가 반복될때마다 데이터를 바꾸고 싶을 때 매개변수가 필요하다.
//매개변수 : 함수를 호출할 때마다 데이터를 받는 변수를 함수 내에서 생성
console.log('--------------------------')
//오늘의 급식 메뉴 (학생이 요청하면 급식 메뉴 호출)

//함수호출
//원하는 호출 값을 (소괄호) 안에 넣을 수 있음
school('부대찌개');//학생1 요청 -> 호출
school('파스타');//학생2 요청 -> 호출
school();//학생3 요청 -> 기본값 

//함수준비
function school(meals='김밥'){//매개변수는 let, const 없이도 알아서 변수인식함
    //let meals = '부대찌개';
    console.log(`오늘의 급식 메뉴 : ${meals}`);
}

console.log('--------------------------')
//---------------------------------매개변수 활용 함수 응용2
//헨젤과 그래텔의 집찾는 재료(매개변수) 찾아주기

//함수호출
//house('조약돌');
house(); //매개변수의 기본값이 있을 때 호출괄호는 비워도됨
house('빵부스러기');

//함수준비
function house(item='조약돌'){
    let story = '';
    story += `헨젤은 ${item}를(을) 떨어뜨리면서 숲으로 갔습니다.`;
    story += `계모가 떠나고 `;
    story += `헨젤은 ${item}를(을) 따라서 집으로 돌아갔습니다.`;
    console.log(story);
}

console.log('--------------------------')
//---------------------------------커피 주문 매개변수 함수
//출력 예시) 손님요청에 따라 다른 메뉴와 잔 수가 출력
//카페라떼 1잔 주문완료
//아메리카노 2잔 주문완료

//함수호출 (매개변수를 호출하는게 아니라 **함수**를 호출하는 것)
coffee('카페라떼');
coffee('아메리카노', 2);

//함수준비
function coffee(menu, num=1){
    console.log(`${menu} ${num}잔 주문완료`);
}

console.log('--------------------------')
//-----------------------------장바구니 함수+매개변수
//한라봉 3kg 25,900원 1개
//치아바타 샌드위치 11,880원 2개

//함수 호출
cart('한라봉 3kg', 25900);
cart('치아바타 샌드위치', 11880, 2);


//함수 준비
function cart(product, price, num=1){
    let item = '';
    item += `상품명 : ${product}`;
    item += ` 가격 : ${price.toLocaleString('ko-kr')}원`;
    item += ` 수량 : ${num}개`;
    console.log(item);
}

console.log('--------------------------')
// --------------------------------- 커피주문2
//카페메뉴얼
const menuAll = ['카페라테', '아메리카노', '녹차라떼'];
console.log(menuAll[1]);
const hotICe = ['따뜻한', '차가운'];

cafeKiosk(0,0,2);
cafeKiosk(1,1,1);
cafeKiosk(0,2,2);
cafeKiosk(1,1,1); 
//cafeKiosk(undefined, 1,1); -> 기본값이 있지만 순서 상 앞에 있어 공백으로 둘 수 없을 때 기본값을 사용하는 방법 undefined

function cafeKiosk(temperature, menu, num=1){
    console.log(`${hotICe[temperature]} ${menuAll[menu]} ${num}잔 주문완료되었습니다.`);
}