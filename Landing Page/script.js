//for toggle btn
const toggle = document.getElementById("toggle");
//for close btn
const close = document.getElementById("close");
//for open btn
const open = document.getElementById("open");
//for modal
const modal = document.getElementById("modal");
//for the toggle navigation
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);
//for the show model
open.addEventListener("click", () => modal.classList.add("show-modal"));
//for the close btn to hide the modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
