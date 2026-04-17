const topA = document.querySelector('.popup .top');
const cateTitle = document.querySelectorAll('.category_title a');
const cateContent = document.querySelectorAll('.category_contents section');
console.log(topA,cateTitle,cateContent);

topA.addEventListener('click',function(e){
    e.preventDefault(); // a href 막기
    //객체.함수();
    //window.scrollTo(x좌표,y좌표);
    window.scrollTo(0, 100);
})

// // 반품 안내 클릭 시 반품 위치로 이동
// cateTitle[3].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[3].offsetTop-200);
//     // scrollTo y좌표 수치값은 최상단(0) 또는 header의 높이 위치 정도일때 숫자로 작성한다. 그 이상의 큰 값은 객체.속성을 활용해야한다.
//     console.log(cateContent[3].offsetTop);
//     activeFunc(cateTitle[3])
// })

// // 추천
// cateTitle[2].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[2].offsetTop-200);
//     activeFunc(cateTitle[2])
// })

// // 리뷰
// cateTitle[1].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[1].offsetTop-200);
//     activeFunc(cateTitle[1])
// })

// // 상세
// cateTitle[0].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[0].offsetTop-200);
//     activeFunc(cateTitle[0])
// })

// for ~ of로 위 이벤트 4개 압축하기

for(let title of cateTitle){
    console.log(title); //Nodelist 출력이 아닌 개별 출력 확인
    title.addEventListener('click',function(e){
        e.preventDefault();
        activeFunc(title);
        // 클릭한 제목에 관련한 내용으로 스크롤이동하기
        // window.scrollTo(0, cateContent[3].offsetTop);
        // 객체속성매개변수.e.currentTarget.dataset.데이터속성이름
        console.log(e.currentTarget.dataset.index);
        const i = e.currentTarget.dataset.index;
        window.scrollTo(0, cateContent[i].offsetTop-200);
    })
}


// active 적용/해제 함수 
function activeFunc(target){
    for(let i of cateTitle) i.classList.remove('active')
    return target.classList.add('active');
}