document.getElementById("year").textContent = new Date().getFullYear();
document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.flexDirection = "column";
    nav.style.padding = "20px 8vw";
    nav.style.background = "var(--paper)";
    nav.style.borderBottom = "1px solid var(--line)";
  }
});
