// start.js
// 객체 사용 전 반드시 변수(저장소) 등록하기!
// 변수생성키워드 생성변수명;
var box; //변수 생성
var box2; // undefined (값이 정의되지 않음)
box = 1; // 값1을 box변수에 대입한다.
box = 2; // 2
box2 = 5; // undefined -> 5 값 대입
box = box2; // 2 제거 -> 5 대입
box2 = 10; // 5 제거 -> 10 대입