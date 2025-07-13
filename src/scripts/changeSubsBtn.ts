export default function changeSubsBtnIco() {
  const subsBtn = document.querySelector(
    "div.tt_box_namecard > .tt_cont > .tt_btn_subscribe > .tt_ico_cross",
  ) as HTMLElement;

  if (!subsBtn) {
    return;
  }

  subsBtn.classList.remove("tt_img_area_reply");

  subsBtn.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M4 12H20M12 4V20"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
</svg>`;
}
