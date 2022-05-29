document.addEventListener("DOMContentLoaded", () => {
  hamburger();
});

function hamburger() {
  let hamburger;
  let spNav;
  // セレクタが取得できなかった場合は何もしない
  if (!(hamburger = document.querySelector(".js-hamburger"))) {
    return;
  }
  if (!(spNav = document.querySelector(".js-nav"))) {
    return;
  }

  hamburger.addEventListener("click", () => {
    spNav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}
