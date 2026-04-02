// 비교연산자와 차므 거짓 데이터 + 논리 연산자
// 논리연산자 종류
// && (end) 모두 참이어야 참
// || (or) 하나만 참이어도 참
// ! 데이터 참, 거짓 상태 반전

let data1 = 'wed' && 'javascript';
let data2 = 0;
let data3;
console.log(data1, Boolean(data1));

data1 = 0 && 'figma'; // 왼쪽 첫번째 데이터가 거짓이므로 오른쪽은 수행안하고 바로 결과냄
console.log(data1, Boolean(data1));

data1 = ++data2 && '';
console.log(data1, Boolean(data1), data2);

data1 = 'html' || 'css'; // html이 참이므로 css 수행안함
console.log(data1, Boolean(data1));

data1 = data3 || data2; // data3이 거짓이므로 data2 처리함
console.log(data1, Boolean(data1),data3);

data1 = !true; // 값을 반전
console.log(data1, Boolean(data1));

