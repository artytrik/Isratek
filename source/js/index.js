import Map from './map.js';
import onToggleClick from './mobile-menu.js';

const toggle = document.querySelector(`.page-header__toggle`);

toggle.addEventListener(`click`, onToggleClick);
ymaps.ready(Map);
