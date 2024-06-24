const searchEl = document.querySelector(".search");

// document는 현재 문서의 DOM 트리에서 해당 값을 찾지만, searchEl과 같이 해당 태그 위치의 DOM Tree의 하위 후손을 선택할 수 있다.
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
