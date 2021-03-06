document.addEventListener("DOMContentLoaded", () => {
  hamburger();
  scrollPage();
  closeSpNav();
  scrollTrigger();
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

function scrollPage() {
  const fileFullName = window.location.href.split("/").pop();
  // WPにも対応できるように拡張子は除外する
  const fileName = fileFullName.split(".").shift();

  // ファイル名がindex以外であれば何もしない
  if (fileName != "index") {
    console.log(fileName);
    return;
  }

  let spNavLinks = document.querySelectorAll("a[data-target]");
  spNavLinks.forEach(function (element) {
    element.addEventListener("click", (e) => {
      // aタグをクリックした際のリンクジャンプをキャンセルする
      e.preventDefault();
      // クリックされたナビアイテムのclass名を取得する
      className = element.getAttribute("data-target");
      pos = document.querySelector(className).offsetTop - 90;
      $("html,body").animate({ scrollTop: pos }, 400);
    });
  });
}

function closeSpNav() {
  let spNavLinks = document.querySelectorAll(".l-drawer__sp-nav-link");
  for (var i = 0; i < spNavLinks.length; i++) {
    spNavLinks[i].addEventListener("click", function () {
      document.querySelector(".js-nav").classList.remove("active");
      document.querySelector(".js-hamburger").classList.remove("active");
    });
  }
}

function scrollTrigger() {
  const trigger = new ScrollTrigger.default();
  trigger.add("[data-trigger]");
}
