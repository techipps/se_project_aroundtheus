const editModalEl = document.querySelector(".button__edit") ;
const editModalNameInput = document. querySelector(".js-modal-name" );
const editModalTitleInput = document. querySelector(".js-modal-title");

const modalCloseBtnEl = document.querySelector(".button__close");

const modalEl = document.querySelector(".modal");

const profileNameEl = document.querySelector(".profile__name");
const profileTitleEl = document.querySelector(".profile__title");

function(modalCloseBtnEl) {
    modalEl.classList.remove("modal__open");

}

cardEditBtnEl.addEventListener("click", function () {
modalEl.classList.add("modal__open");
});
modalCloseBtnEl. addEventListener("click", function () {
});

editModalNameInput.value = profileNameEl.textContent;
editModalTitleInput. value = profileTitleEl.textContent;

editModalEl addEventlistener("submit", function (event) {
event.preventDefault();
profileNameEl.textContent = editFormNameInput.value;
profileTitleEl.textContent = editFormTitleInput.value;
});