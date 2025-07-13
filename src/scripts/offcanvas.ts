export default function setOffcanvasEvents() {
  const navToggle = document.getElementById("sidebar-toggler-btn");
  const navClose = document.getElementById("sidebar-close-btn");
  const offcanvas = document.getElementById("nav-offcanvas");
  const backdrop = document.getElementById("nav-backdrop");

  function openOffcanvas() {
    offcanvas?.classList.remove("-translate-x-full");
    offcanvas?.classList.add("translate-x-0");
    backdrop?.classList.remove("hidden");
  }

  function closeOffcanvas() {
    offcanvas?.classList.remove("translate-x-0");
    offcanvas?.classList.add("-translate-x-full");
    backdrop?.classList.add("hidden");
  }

  navToggle?.addEventListener("click", openOffcanvas);
  navClose?.addEventListener("click", closeOffcanvas);
  backdrop?.addEventListener("click", closeOffcanvas);
}
