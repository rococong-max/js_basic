
// 변수 
const filterVeiw = document.querySelector('#filter_view');
const filterList = document.querySelector('.filter .filter_list');
let filterListShowHide = false; // 초기값 숨김

console.log(filterVeiw,filterList);


// 필터목록 초기 숨기기(false)
// 객체.속성.속성 = 값;
filterList.style.display = 'none';

// 필터보기를 클릭 시
filterVeiw.addEventListener ('click',function(){
    // 필터가 보이는(true) 상태 -> 숨기기
    // if(filterList == style.display = 'none';){}  // (x)
    if(filterListShowHide == false) {
        filterList.style.display = 'flex';
        // filterListShowHide = true;
        // 위 코드 해석
        // flex로 보이는 상태가 되었으므로 js의 상태변수도 참(true)로 대입해서 추적가능하게 만들기
        filterListShowHide = !filterListShowHide;
        // 위 코드 해석
        // flex로 보이는 상태가 되었으므로 상태변수의 값을 반전(!)시켜서 상태변수에 대입(=) 
        console.log(filterListShowHide);
    } 
    // 필터가 숨겨진(false) 상태 -> 보이기
    else if(filterListShowHide == true) {
        filterList.style.display = 'none';
        filterListShowHide = !filterListShowHide;
    }
})

// 필터 기능 
// 전체보기 -> 사과,바나나,브로콜리, 당근
// 과일 -> 사과,바나나
// 채소 -> 브로콜리, 당근
const filterA = filterList.querySelectorAll('.list');
const filterContents = document.querySelectorAll('.contents li');
console.log(filterA,filterContents);// Node List 출력 시 [index] 개별 구분

// data-name, data-category
// 필터 data-name 중 원하는 값을 클릭하면 data-category 중 같은 값을 가지고 있는 대상을 화면에 출력함

for(let f of filterA){// 필터보기 메뉴
    console.log(f) // for문으로 반복출력 [index] 필요없음
    f.addEventListener('click', function(e){// 클릭이벤트는 해당 부분에서 완료된 것임
        e.preventDefault();
        console.log('클릭된 a:', f);
        for(let list of filterContents){//필터보기메뉴 클릭 시 인식해야하는 상품목록들
            console.log(list);
            // 클릭한 f가 전체보기면  -> list 전체 보이기
            // console.log(f.dataset.name); // 클릭한 필터의 data name출력 테스트
            list.style.display = 'none'; // 클릭하면 내용을 모두 숨겼다가 
            if(f.dataset.name == 'all') list.style.display = 'block'; // 필터 설정 시 그에 맞게 보이도록 
            // 클릭한 f가 과일이면 -> data-name="fruit"와 일치하는 list찾아서 보이기
            // console.log(list.children[0].dataset.category);
            // 클릭한 f가 채소면 -> data-name="veggi"와 일치하는 list찾아서 보이기
            else if(f.dataset.name == list.children[0].dataset.category) list.style.display = 'block';
        }
    })  
}