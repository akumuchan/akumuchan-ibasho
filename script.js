const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav");
const menuLabel = menuButton?.querySelector(".sr-only");

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  if (menuLabel) menuLabel.textContent = "メニューを開く";
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menu?.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  if (menuLabel) menuLabel.textContent = willOpen ? "メニューを閉じる" : "メニューを開く";
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) closeMenu();
});

const reviewToggle = document.querySelector(".review-toggle");
const extraReviews = document.querySelectorAll(".review-extra");

reviewToggle?.addEventListener("click", () => {
  const willShow = reviewToggle.getAttribute("aria-expanded") !== "true";
  reviewToggle.setAttribute("aria-expanded", String(willShow));
  extraReviews.forEach((review) => {
    review.hidden = !willShow;
  });
  reviewToggle.textContent = willShow ? "感想を閉じる" : "すべての感想を見る（5件）";
});
