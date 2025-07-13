// NavBar 스크롤 시 독 형태 변경 처리
// docked 상태를 나타내는 변수
// navbarRef는 HTML 요소
let isDocked: Boolean = false;
const navbarRef: HTMLElement | null = document.getElementById("navbar");

// 스크롤 이벤트 핸들러
export default function handleScroll() {
  // 배너 섹션이 있는지 확인하고, 그 위치에 따라 독 상태를 결정
  const bannerSection = document.getElementById("banner-section");
  if (bannerSection) {
    // 배너 섹션의 최하단을 기준으로 독 상태를 결정
    const bannerBottom = bannerSection.getBoundingClientRect().bottom;

    // 배너 섹션의 높이가 70px 이하인 경우 독 상태로 설정
    isDocked = bannerBottom < 70;
  } else {
    // 배너 섹션이 없으면 스크롤 위치를 기준으로 독 상태 결정
    // 스크롤 위치가 200px 이상이면 독 상태로 설정
    isDocked = window.scrollY > 200;
  }

  if (navbarRef) {
    // 스크롤 위치에 따라 navbar 클래스 추가/제거
    // docked 상태에 따른 형태는 css로 처리
    if (window.scrollY > 50) navbarRef.classList.add("shadow-sm");
    else navbarRef.classList.remove("shadow-sm");

    if (isDocked) navbarRef.classList.add("navbar-docked");
    else navbarRef.classList.remove("navbar-docked");
  }
}
