// 드롭다운 메뉴 이벤트 처리
function handleDropdown(event: Event) {
  // 드롭다운 타겟 요소
  const target = event.target as HTMLElement;

  // 드롭다운 메뉴를 찾기
  const dropdownDiv = target.id + "Div";
  const dropdownMenu = document.getElementById(dropdownDiv);
  if (dropdownMenu) {
    // 드롭다운 메뉴가 보이지 않으면 표시
    if (!dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.add("show");
    } else {
      // 이미 보이는 경우에는 아무 작업도 하지 않음
      return;
    }

    // 드롭다운 메뉴 외부 클릭 시 숨김 처리
    const hideDropdown = () => {
      dropdownMenu.classList.remove("show");
      document.removeEventListener("click", hideDropdown);
      document.removeEventListener("scroll", hideDropdown);
      target.removeEventListener("mouseleave", hideDropdown);
    };

    // 문서 전체에 클릭 이벤트 리스너 등록
    document.addEventListener("click", hideDropdown);
    // 스크롤 이벤트 리스너 등록
    document.addEventListener("scroll", hideDropdown);
    target.addEventListener("mouseleave", hideDropdown);
  }
}

export default function setEventListenersOnDropdown(dropdown: HTMLElement) {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation(); // 기본 동작 방지
    handleDropdown(e);
  });
  dropdown.addEventListener("mouseenter", handleDropdown);
}
