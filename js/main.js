// Header Search 영역 동작 제어 코드
const searchElement = document.querySelector(".search");

// document는 현재 문서의 DOM 트리에서 해당 값을 찾지만, searchElement과 같이 해당 태그 위치의 DOM Tree의 하위 후손을 선택할 수 있다.
const searchInputElemenet = searchElement.querySelector("input");

searchElement.addEventListener("click", () => {
  searchInputElemenet.focus();
});

searchInputElemenet.addEventListener("focus", () => {
  searchElement.classList.add("focused");
  searchInputElemenet.setAttribute("placeholder", "통합 검색");
});

searchInputElemenet.addEventListener("blur", () => {
  searchElement.classList.remove("focused");
  searchInputElemenet.setAttribute("placeholder", "");
});

// Header Badges 영역 동작 제어 코드
const badgesElement = document.querySelector("header .badges");

// docuement -> HTML 문서 자체의 요소들의 DOM Tree
// Window -> 프로젝트가 나타나고 있는 브라우저 탭을 의미한다.

// _.thottle(콜백 함수, 시간(밀리초))
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 시간, 옵션(객체 타입))
      gsap.to(badgesElement, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      gsap.to(badgesElement, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// Visual Section 영역 Fade-in 효과 지정
const fadeElements = document.querySelectorAll(".visual .fade-in");

fadeElements.forEach((element, index) => {
  gsap.to(element, 1, {
    delay: (index + 1) * 0.7, // GSAP 라이브러리에서 제공되는 딜레이 시간 옵션
    opacity: 1,
  });
});

// new Swiper( 'CSS 선택자', 옵션(Object) )
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  autoplay: { // 자동 재생 기능도 옵션을 줄 수 있음
    delay: 5000,
  },

  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },

  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  }
});