// operator.js
let greeting = '안녕'+'봄'; //반복데이터 변수
// let greeting 변수 생성
// '안녕'+'봄' 문자열 2개 연결
// = 우측의 값을 좌측 변수로 대입
console.log(greeting+'잘가'); //'잘가' 일회성데이터
//console.log() 객체.함수()
//console 출력되고 싶은 위치대상(객체)
//log 실행하고 싶은 함수 명령어
console.log(typeof(greeting)); //변수의 데이터 타입은?
//greeting 변수의 데이터타입을 typeof 함수로 확인하고
//console.log로 출력한다.

let a = 1; //숫자 대입 a
let b = '1'; //문자 대입 b
//결과를 담는 변수
let total = a+b;//1+'1'=11
//결과를 출력하는 함수
console.log(total);

let x;
const y = '20';
console.log(x, y); //x값 정의안됨 (undefined), '20'
console.log(y+a) //201
// y초기화 하고싶음 -> 불가능 -> const 상수이기때문
x = '10'; //정의 안됨 -> 문자 10 대입
console.log(x+y) //1020
x = null; //x 변수 값을 초기화한다. null == 0
//null의 경우 데이터종류에 따라 다른 결과 값이 출력되기도 한다.
console.log(x+y) //null20 (null+'문자열' -> null도 문자로 출력)
console.log(x+a) //1 (null+'숫자열' -> null == 0으로 계산되어 출력)

console.log('---------------------------');

//log(), typeof()
//prompt() 질문, 답변 창을 띄우는 함수(문자열로 인식)
//Number()
//괄호 안 데이터를 숫자로 변환하는 함수, 괄호 안에는 연산자를 넣을 수 없음(데이터만 가능)
//유치원생 대상 두 수 더하는 문제 프로그래밍
const num1 = Number(prompt('첫번째 수를 입력하세요.'));
//1. const num1로 상수를 생성
//2. prompt() 질문하고 사용자에게 문자열 답변받고
//3. Number() 문자열을 숫자로 변환
//4. = 대입연산자로 num1 대입완료
const num2 = Number(prompt('두번째 수를 입력하세요.'));
//console.log(num1,typeof(num1));
// 결과 담는 변수
//let result = Number(num1) + Number(num2);
let result = num1 + num2;
// 결과 출력 변수
console.log(result);
//1+1의 정답은 2입니다~!
console.log(`${num1}+${num2}의 정답은 ${result}입니다~!`);