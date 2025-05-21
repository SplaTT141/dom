import { header } from "./header.js";

header();

const footerPDOM = document.querySelectorAll('main > p:nth-child(3)');

console.log(footerPDOM[0].textContent);


