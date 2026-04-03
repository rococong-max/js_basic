// 반복문 for
// for(초기변수생성(i, j, k, m, n)과 초기값대입; 조건식; 증감식){반복실행문}
// => 변수를 생성하고 대입된 값을 조건식에서 참일때 반복실행문을 실행하고 증감식을 통해 변수의 숫자가 증감, 조건식에 거짓이 될 때 까지 반복

// 자바스크립트 10번 반복 출력(반복문 이용)
// DOM요소(예시 - li[index]) 20개 1~20 기준으로 생각해서 숫자 데이터로 생각해야함
for(let i = 0; i < 10; i++){
    console.log('자바스크립트');
}

// css 5번 반복 출력
for(let i = 0; i <= 4; i++){
    console.log('CSS');
}

// html 20번 반복 출력
for(let i = 0; i < 20; i++){
    console.log(`HTML${i+1}`); // 출력은 1 더해서 하도록 함
}

// 구구단 2단 반복 출력 "2x1=2"

// 반복문 없이 함수 활용한 2단 예시
function dan2(){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    result += `${num}x2=${num*2}`;
    result += `${num}x3=${num*3}`;
    return result;
}
// 반복문 활용 2단 출력
const danResult = document.querySelectorAll('.dan .result');
//console.log(dan2Result);

// 1로 시작한 예시
for(let i = 1; i<10; i++){
    //console.log(result);
    //dan2Result.textContent += result; // 글자로만 대입
    let result = `2x${i}=${2*i}<br>`;
    danResult[0].innerHTML += result; // 태그로 대입 - 단순한 구조일 때
    result = `3x${i}=${3*i}<br>`;
    danResult[1].innerHTML += result;
    result = `4x${i}=${4*i}<br>`;
    danResult[2].innerHTML += result;
}
console.log('-------------------')
// 0으로 시작한 예시
for(let i = 0; i<9; i++){
    let result = `2x${i+1}=${2*(i+1)}`;
    console.log(result);
}

// 자바스크립트 10번 반복 출력(반복문 없을때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');

// 자바스크립트를 이용한 태그 생성
const target = document.querySelector('.target');
// 태그 생성 목적의 변수(저장소) 생성
const ul = document.createElement('ul'); // html에 없는 태그를 생성
ul.innerHTML = ' <li>목록1</li>';
console.log(ul);
// target.innerHTML = ul;
target.appendChild(ul); // createElement로 생성한 태그삽입법
// => target의 마지막 자식에게 ()값을 넣어라
// console.log(target);
/* target.innerHTML = '<ul>';
target.innerHTML += '<li>목록1</li>';
target.innerHTML += '<li>목록2</li>';
target.innerHTML += '</ul>'; */


