function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.display = "none";
}
