# Swiper Javascript Plugin
* 플러그인을 통해 쉽게 만드는 슬라이드 자바스크립트 동작
## Swiper 작성 준비
0. `head` 태그 안 `title`아래 Swiper사용을 위한 CDN 연결
    `</title> **CDN연결파일들** reset, css, 개별 js 등 연결 마무리`
    <!--swiper 필수 css cdn 연결-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <!--swiper 필수 JS cdn 연결-->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
1. `html`파일 내에서 슬라이드삽입위치에 다음과 같이 태그 작성
    `div.swiper>div.swiper-wrapper>.swiper-slide`
    `div.swiper` : swiper플러그인 시작 위치 (js 연결지점)
    `div.swiper-wrapper` : 슬라이드들 부모역할(flex 내장)
    `div.swiper-slide` : 개별슬라이드들 `*숫자` 개수작성
2. 1번에서 생성한 태그에 대상 구분용의 별도 클래스 따로 생성
    `div.swiper.개별클래스명`
    -> `<div class="swiper 개별클래스명">`
    `div.swiper-slide.slide번호`
    -> `<div class="swiper-slide slide1">`
3. 프로젝트에 따라 필요한 추가 태그들 작성
    `div.swiper-slide`안에 `a, h, p, table, form, div 등..`
4. CSS 선택자 준비(개별, 공통용 모두)
    * **주의사항**
    * `swiper-wrapper,swiper-slide`
        `display, width, height, position` 적용하지 않기
    * `swiper` 제일 바깥쪽 swiper시작 태그한테만 크기 적용
    * `swiper-slide`안 3번 목적으로 만든 태그들은 속성 자유
5. JS DOM변수 준비 -> swiper 연결
    * `const 변수명  = document.querySelector(대상);`
    * `const 변수명 = newSwiper(스와이프적용변수명, {옵션:값, 옵션:값,})`
## swiper {option:value,} 종류와 뜻
* `loop: true / false,` : 슬라이드 끝 -> 시작 반복
* `direction: 'horizontal'(수평) / 'vertical'(수직),` : 슬라이드 방향 (제자리에서 나타나고 사라지는 모션을 적용할 때는 적용해제)
* `effect: 'fade'(제자리에서 나타나고 사라짐) / 'cude'(큐브 모양) / 'flip'(평면),` : 슬라이드 전환 방법
* `mousewheel: true / false,` : 마우스 휠로 슬라이드 조작 가능
* `autoplay:{},` : 자동재생
    * `delay:1000 == 1초,` : 지연시간
    * `pausOnMouseEnter: true / false,` : 마우스가 영역 안으로 들어오면 일시정지
    * `disableOnInteraction: true / false,` : 마우스 상호작용 후 멈출건지(true) 움직일건지(false)
* `speed:1000 == 1초,` : 슬라이드 이동 속도 조절
## Swiper 선택요소(페이지번호, 이전다음버튼, 스크롤바) 주의사항
* 기본 작성 위치는 `swiper-wrapper`의 다음 형제 위치
    * `swiper`의 첫번째 자식(swiper-wrapper) 두번째 자식(선택요소들)
    * **절대 `swiper-slide`와 형제,자식,자손 위치에 삽입하지 않기**
* 기본 순서 : html -> js swiper option세팅 -> (선택)css
* **아래 선택요소들 태그는 자식, 자손으로 다른 태그 삽입 금지**
    * `div.swiper-pagination`
    * `div.swiper-button-prev`
    * `div.swiper-button-next`
    * `div.swiper-scrollbar`
    * `<div class="swiper-pagination">내용금지</div>`
## Swiper 선택요소(pagination, prev, nextm scrollbar) 디자인 규칙&주의사항
### 기존 Swiper-slide 겹치는 디자인을 하고싶을 때 
* 태그 위치 `div.swiper` 두번째 자식 위치로 생성
### 기존 Swiper-slide 외부 바깥 쪽으로 안겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swiper` 다음 형제 위치로 생성
* `div.swiper`와 생성된 선택태그를 묶어주는 추가 태그 생성(디자인에 따라 다름)
### 교차 여부에 따라 위치를 다르게 해야하는 이유
* `div.swiper`에 기본CSS로 `overflow:hidden;` 있으므로 그 값을 `visible`로 바꾸면 선택요소 뿐 아닌 `swiper-slide`들도 모두 보이기 때문에 원하는 레이아웃을 만들 수 없음.
## Swiper 안에 추가 Swiper 생성 시 안쪽 Swiper 마우스 드래그 안될 때 해결 방법
* 안쪽 swiper js 옵션:값으로 아래와 같이 작성
    * `nested:true,`
    * 부모 swiper와 겹쳐 있을 때 드래그 충돌 방지 옵션:값
## swiper plugin 대표 css 내장속성:값
* 1. swiper : position, overflow
* 2. swiper-wrapper : flex
* 2. swiper-slide : flex,transform
## Swiper Custom function
1. `renderFraction:function(){}`
    * pagination:{} 안에 작성해야함.
    * type:'fraction' 일 때 사용 가능
    * `const 변수명 = new Swiper(적용대상,{`
        `pagination:{`
            `el:'적용대상',`
            `type:'fraction',`
            `renderFraction:function(current,total){`
                `let 변수 = <태그 class=${매개변수}></태그>`
                `return 변수;`
            `}`
        `}`
    `})`
## 슬라이드 변경 시 실행되는 Custom 함수 `on:{}`
* `new Swiper(대상,{옵션})` 옵션위치에 바로 작성되는 함수
1. `init:function(){}`
    * 슬라이드가 처음 시작할 때 실행되는 함수
    * `on:{ init:function(){}, },`
2. `slideChangeTransitionStart:function(){}`
    * 슬라이드 전환이 시작될 때 실행되는 함수
3. `slideChangeTransitonEnd;function(){}`
    * 슬라이드 전환이 종료되고 실행되는 함수
    * 초기화(reset) 용도로 가끔 사용
## 클래스 적용/해제 함수
1. `요소.ClassList.add('.적용클래스명')`
2. `요소.ClassList.remove('.삭제클래스명')`
## 한 화면에 여러 개의 슬라이드가 보이는 경우 사용할 수 있는 옵션 값
* `slidesPerView:,`한 화면에 보이는 슬라이드 개수 (.5단위 가능)
* `spaceBetween:,` 슬라이드 사이 간격
* `slidesPerGroup:,` 드래그 시 넘어가는 슬라이드 개수 조절

