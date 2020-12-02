
//Fetch the items from JSON file
function loadItems() {  //data/data.json파일내의 데이터를 js로 가져오는과정
    return fetch('data/data.json')
    // fetch: 해당파일의 경로나 UI를 지정하면 데이터를 가져옴.
    .then(response => response.json())  //받아온 데이터를 json파일로 변경함.
    .then(json => json.items);      //json파일내의 아이템을 return하는 함수.
}

// main
loadItems()
    .then(items => {
    //    displayItems(items);
    //    setEventListeners(items)
})
.catch(console.log)