const menu = document.querySelector("#menu");
const ul = document.querySelector("ul");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  if (menu.classList.toggle("fa-bars")) {
    ul.style.left = "-200px";
  } else {
    ul.style.left = "10px";
  }
});
