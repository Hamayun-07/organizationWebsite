let nav = document.querySelector(".nav");
let menu = document.querySelector(".fa-bars");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("fa-times");
});
