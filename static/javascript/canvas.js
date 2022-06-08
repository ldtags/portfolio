
let BTree = new BTree(5);

function insertClick() {
    let insertVal = document.getElementById("insert").value;
    if(insertVal) {
        BTree.insert(insertVal);
        alert(insertVal);
    }
    alert(BTree.toString(BTree.root));
}

function deleteClick() {
    let deleteVal = document.getElementById("delete").value;
    if(deleteVal) {
        BTree.delete(deleteVal);
    }
}