export default function articleNavigation() {
  const articleNav = document.getElementById("article-navigation");
  if (!articleNav) return;

  const articleView = document.getElementById("article-view");
  if (!articleView) return;

  const navContainer = document.getElementById("article-navigation-container");
  if (!navContainer) return;

  // h2~를 이용해 목자를 만드는 코드
  const hn = articleView.querySelectorAll("h2, h3, h4, h5, h6");
  if (hn.length === 0) {
    navContainer.classList.remove("md:flex");
    return;
  } else {
    navContainer.classList.add("md:flex");
  }

  hn.forEach((el, index) => {
    el.id = `s-${index}`;

    const level = parseInt(el.tagName.charAt(1)) - 2;
    const link = document.createElement("a");
    link.href = `#s-${index}`;
    link.classList = `h-fit w-full bg-gray-100 flex pl-${level * 4} hover:translate-x-1 dark:bg-gray-700 transition-all duration-300`;

    const p = document.createElement("p");
    p.textContent = el.textContent;
    p.classList = `pl-2 hover:underline truncate text-black dark:text-white transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-300`;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = el.id;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;

        const offset = 100;

        const scrollToPos = targetPosition - offset;

        window.scrollTo({
          top: scrollToPos,
          behavior: "smooth",
        });
      }
    });

    link.appendChild(p);
    articleNav.appendChild(link);
  });
}
