import { header } from "./header.js";

header();

const h1DOM = document.querySelector('h1');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;
let deleteCount = 0

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    listDOM.insertAdjacentHTML('afterbegin', `        
    <div class="item">
          <div class="header">
            <div class="index">${++count}</div>
            <button type="button" class="btn">Delete</button>
          </div>
          <div class="content">${inputDOM.value}</div>
        </div>`);

    inputDOM.value = '';
    inputDOM.focus();
    const deleteBtnListDOM = document.querySelector('.btn');

    deleteBtnListDOM.addEventListener('click', () => {
        deleteBtnListDOM.parentNode.parentNode.remove();
        deleteCount++;
        h1DOM.textContent = `Task planner (${count - deleteCount})`;
    });

    h1DOM.textContent = `Task planner (${count - deleteCount})`;
});
