const pageHeader = document.querySelector(`.page-header`);

const onToggleClick = (evt) => {
  evt.preventDefault();

  pageHeader.classList.toggle(`page-header--opened`);
};

export default onToggleClick;

