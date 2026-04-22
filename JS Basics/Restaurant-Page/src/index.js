import "./style.css";
import { home, menu, about } from "./content.js";

home();

const home_button = document.querySelector('.home');
home_button.addEventListener('click', (e) => {
    e.preventDefault();
    home();
});

const menu_button = document.querySelector('.menu');
menu_button.addEventListener('click', (e) => {
    e.preventDefault();
    menu();
});

const about_button = document.querySelector('.about');
about_button.addEventListener('click', (e) => {
    e.preventDefault();
    about();
});

