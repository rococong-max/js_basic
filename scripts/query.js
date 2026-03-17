// query.js
// tag : header, nav, ul, li a
// class : gnb, lnb

//변수 태그 5개, 클래스 2개
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let ul = document.querySelectorAll('ul');
let li = document.querySelectorAll('.gnb > li'); // 자식 자손 li를 구분
let li2 = document.querySelectorAll('.gnb > li li')
//let tagLi2 = document.querySelectorAll('.lnb > li')
let gnbA = document.querySelectorAll('.gnb > li > a');
let lnbA = document.querySelectorAll('.lnb > li > a');
let gnbCls = document.querySelector('.gnb');
let lnbCls = document.querySelector('.lnb');

//콘솔확인(오류 조기 확인)
console.log(header,nav,ul[0],ul[1],li,li[1],li2,gnbA,lnbA,gnbCls,lnbCls);

console.log('-----------------');
// -----------함수 기초 활용
// function 함수명(매개변수){반복실행명령어} 함수호출();
// 1. 할인율 계산기
// (100 - 할인율) / 100
// (100 - 5) / 100 = 0.95
// 판매가 * 0.95
// let disCount = 0; 숫자열 초기값 설정
let disCount = ''; // 빈 문자열로 초기값 설정

// disCountfunc(24990);
// disCountfunc(85100);
console.log(disCountfunc(24990));
//alert(disCountfunc(85100));

function disCountfunc(price){
    disCount = `5% 할인 : ${price * 0.95}원, `
    disCount += `10% 할인 : ${price * 0.9}원, `
    disCount += `20% 할인 : ${price * 0.8}원, `
    disCount += `30% 할인 : ${price * 0.7}원, `
    //console.log(disCount);
    return disCount; // 함수 밖으로 disCount 값만 보낸다. (함수 호출 시에)
    // 함수의 결과값은 다양한 함수로 실행할 수 있어야 하기 때문에 함수 내부에서 실행함수를 정하는것이 아닌 리턴으로 값만 내보내고 함수밖에서 실행함수를 정한다.
}
