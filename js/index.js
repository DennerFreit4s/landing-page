const menu = document.querySelector("#menuNav");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");

document.querySelector("#open").addEventListener("click", function () {
  menu.style.display = "flex";
  closeButton.style.display = "inline";
  menu.style.animation = "animarMenuAbrir 2s"
  menu.addEventListener("animationend", function () {
  menu.style.display = "flex";
  closeButton.style.display = "inline";
  });
});
document.querySelector("#close").addEventListener("click", function () {
  menu.style.animation = "animarMenuFechar 2s";
  menu.addEventListener("animationend", function () {
  menu.style.display = "none";
  closeButton.style.display = "none";
});
});