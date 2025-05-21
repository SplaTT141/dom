import { header } from "./header.js";

header();

document.querySelector('title').textContent = 'Cars';
const listDOM = document.querySelector('.list');

const data = [
    {
        imgSrc: 'car1.jpg',
        imgAlt: 'Car 1',
        title: 'Car 1 title',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem fuga animi sequi obcaecati. Iusto impedit exercitationem iure enim voluptatem veniam.',
        link: '#',
    },
    {
        imgSrc: 'car2.jpg',
        imgAlt: 'Car 2',
        title: 'Car 2 title',
        desc: 'Lorem amet consectetur adipisicing elit. Rem fuga animi sequi obcaecati. Iusto impedit exercitationem iure enim voluptatem veniam.',
        link: '#',
    },
    {
        imgSrc: 'car3.jpg',
        imgAlt: 'Car 3',
        title: 'Car 3 title',
        desc: 'Loremobcaecati. Iusto impedit exercitationem iure enim voluptatem veniam.',
        link: '#',
    },
    {
        imgSrc: 'car4.jpg',
        imgAlt: 'Car 4',
        title: 'Car 4 title',
        desc: 'Lorem amet consectetur adipisicing elit. Rem fuga animi sequi adipisicing elit. Rem fuga animi sequi obcaecati. Iusto impedit exercitationem iure enim voluptatem veniam.',
        link: '#',
    },
];

let HTML = '';

for (const item of data) {
    HTML += `
    <div class="card">
        <img class="card-img" src="../img/${item.imgSrc}" alt="${item.imgAlt}" />
        <h2 class="card-title">${item.title}</h2>
        <p class="card-desc">${item.desc}</p>
        <a class="card-link" href="${item.link}">Read more...</a>
    </div > `;
}

listDOM.innerHTML = HTML;