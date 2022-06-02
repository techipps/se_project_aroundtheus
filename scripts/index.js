const editModalEl = document.querySelector(".button-edit");
const editModalNameInput = document.querySelector(".js-modal-name");
const editModalTitleInput = document.querySelector(".js-modal-title");
const saveModalEl = document.querySelector(".modal__save");

const modalCloseBtnEl = document.querySelector(".modal__close");

const modalEl = document.querySelector(".modal");

const profileNameEl = document.querySelector(".profile__name");
const profileTitleEl = document.querySelector(".profile__about");

function modalClose() {
  modalEl.classList.remove("modal__open");
}
console.log(modalClose);

editModalEl.addEventListener("click", function () {
  modalEl.classList.add("modal__open");
});

modalCloseBtnEl.addEventListener("click", function () {
  modalClose();
});

editModalNameInput.value = profileNameEl.textContent;
editModalTitleInput.value = profileTitleEl.textContent;

saveModalEl.addEventListener("click", function (event) {
  event.preventDefault();
  profileNameEl.textContent = editModalNameInput.value;
  profileTitleEl.textContent = editModalTitleInput.value;
  modalClose();
});
