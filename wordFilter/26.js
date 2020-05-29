const arr = ['пантеренок', 'пантера', 'папоротник', 'параноик', 'паравоз', 'пингпонг', 'параплан'],
    inputSearch = document.querySelector('.i-search'),
    searchBtn = document.querySelector('.btn-search'),
    resultBlock = document.querySelector('.result');

searchBtn.addEventListener('click', () => {
    findWord(arr, inputSearch.value);
});

function findWord(arr, str) {
    let resultArr = arr.map((item, i) => item.indexOf(str) >= 0 ? i : -1).filter(item => item >= 0);

    cleanList();

    for(let i = 0; i < resultArr.length; i++) {
        displayList(arr[resultArr[i]]);
    }
}

function displayList(word) {
    let li = document.createElement('li');

    li.innerHTML = word;

    resultBlock.append(li);
}

function cleanList() {
    let list = document.querySelectorAll('.result li');

    for(let i = list.length - 1; i >= 0; i--) {
        list[i].remove();
    }
}