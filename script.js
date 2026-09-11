const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav");
const menuLabel = menuButton?.querySelector(".sr-only");

function setMenuOpen(open) {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  if (menuLabel) menuLabel.textContent = open ? "メニューを閉じる" : "メニューを開く";
}

menuButton?.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});
menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (menuButton && menu && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    setMenuOpen(false);
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) setMenuOpen(false);
});
