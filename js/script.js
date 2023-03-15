const list = [
    "pane",
    "latte",
    "uova",
    "formaggio",
    "prosciutto",
    "insalata",
    "pomodori",
    "cetrioli",
    "zucchine",
    "peperoni",
    "carote",
    "patate",
    "cipolle",
    "aglio",
    "limoni",
    "arance",
    "mele",
    "pere",
    "banane",
    "ananas"
];

let i = 0;
let itemList;
const printlist = document.querySelector("ul");

while (i < list.length) {
    itemList = `<li class="list-item">${list[i]}</li>`;
    printlist.innerHTML += itemList;
    i++;
}