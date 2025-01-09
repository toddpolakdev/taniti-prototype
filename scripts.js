document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("open");
    menuToggle.checked = menu.classList.contains("open");
  });

  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("open") &&
      !menu.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      console.log("Click outside detected. Closing menu.");
      menu.classList.remove("open");
    }
  });

  menu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
