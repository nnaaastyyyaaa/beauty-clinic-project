const modalBtnClose = document.querySelector(".modal-btn-close");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modal = document.querySelector(".backdrop");

const buttonToggle = () => modal.classList.toggle("is-hidden");

modalBtnClose.addEventListener("click", buttonToggle);
modalBtnOpen.addEventListener("click", buttonToggle);
