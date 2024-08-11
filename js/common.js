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

const thisYear = document.querySelector("footer .this-year");
thisYear.textContent = new Date().getFullYear();
