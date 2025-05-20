const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    listDOM.innerHTML += `        
    <div class="item">
          <div class="header">
            <div class="index">${++count}</div>
            <button type="button" class="btn">Delete</button>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci incidunt beatae vel velit ut. Nisi similique quam odit doloribus explicabo rerum, iste sapiente facilis distinctio tempora ipsum totam temporibus eum corrupti vel eligendi, voluptate, dolore perferendis magnam laudantium!
            Rem, dignissimos.
          </div>
        </div>`;

    const deleteBtnListDOM = document.querySelectorAll('.btn');

    for (const btnDOM of deleteBtnListDOM) {
        btnDOM.addEventListener('click', () => {
            btnDOM.parentNode.parentNode.remove();
        });
    }
});
