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
