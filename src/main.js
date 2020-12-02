
//Fetch the items from JSON file
function loadItems() {  //data/data.json파일내의 데이터를 js로 가져오는과정
    return fetch('data/data.json')
    // fetch: 해당파일의 경로나 UI를 지정하면 데이터를 가져옴.
    .then(response => response.json())  //받아온 데이터를 json파일로 변경함.
    .then(json => json.items);      //json파일내의 아이템을 return하는 함수.
}

// Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons')
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items)
})
.catch(console.log)