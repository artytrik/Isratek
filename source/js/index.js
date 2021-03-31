import Map from './map.js';
import onToggleClick from './mobile-menu.js';
import onContactButtonClick from './modal.js';

const toggle = document.querySelector(`.page-header__toggle`);
const contactButtons = document.querySelector(`.contacts__about-button`);

contactButtons.addEventListener(`click`, onContactButtonClick);

toggle.addEventListener(`click`, onToggleClick);
ymaps.ready(Map);
