let sortAlgo = "selection";
let ARR_SIZE = 5;

function setMerge() {
    sortAlgo = "merge";
}

function setInsertion() {
    sortAlgo = "insertion";
}

function setQuick() {
    sortAlgo = "quick";
}

function setSelection() {
    sortAlgo = "selection";
}

function sortArray() {
    alert(sortAlgo);
}

function generateArray() {
    newArr = [];
    for(let i = 0; i < ARR_SIZE; i++) {
        newArr[i] = Math.floor(Math.random() * ARR_SIZE);
    }
}