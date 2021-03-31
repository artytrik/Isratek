const modalCall = document.querySelector(`.modal-call`);
const modalInput = modalCall.querySelectorAll('.modal-call__input');
const overlay = document.querySelector(`.modal-overlay`);
const closeButton = modalCall.querySelector(`.modal-call__cross`);
const modalSuccess = document.querySelector(`.modal-success`);
const modalSuccessCross = modalSuccess.querySelector(`.modal-success__cross`);

const onContactButtonClick = (evt) => {
  evt.preventDefault();

  modalCall.classList.add(`modal-call--show`);
  overlay.classList.add(`modal-overlay--show`);
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();

  modalInput.forEach((input) => input.value = "");
  modalCall.classList.remove(`modal-call--show`);
  overlay.classList.remove(`modal-overlay--show`);
  modalSuccess.classList.remove('modal-success__opened');
};

const onSendSuccess = () => {
  modalCall.classList.remove('modal-call--show');
  modalSuccess.classList.add('modal-success__opened');
};

closeButton.addEventListener(`click`, onCloseButtonClick);
overlay.addEventListener(`click`, onCloseButtonClick);
modalSuccessCross.addEventListener(`click`, onCloseButtonClick);

$("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
  e.preventDefault();
   var form_data = $(this).serialize();
   $.ajax({
       type: "POST", // Метод отправки
       url: "send.php", // Путь до php файла отправителя
       data: form_data,
       dataType: 'json', // what type of data do we expect back from the server
       encode: true
   })
   .done(function(data) {
    onSendSuccess();
   });
});

export default onContactButtonClick;
