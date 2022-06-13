let sortAlgo = '';
let ARR_SIZE = 20;
let ANIMATION_SPEED = 30;

window.onload = setTimeout(() => {
                    generateBars();
                }, 50);

async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    let key, j;
    for(let i = 0; i < bars.length; i++) {
        key = parseInt(bars[i].childNodes[0].innerHTML);
        bars[i].style.backgroundColor = "darkBlue";
        j = i - 1;
        while(j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
            // To pause the execution of code
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, ANIMATION_SPEED)
            );

            swap(bars, j, j+1);

            j = j - 1;
        }
        bars[j+1].childNodes[0].innerHTML = key;
        bars[j+1].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();
}


async function selectionSort() {
    let bars = document.querySelectorAll(".bar");

    var min = 0;
    for(let i = 0; i < bars.length; i++) {
        min = i;
        bars[i].style.backgroundColor = "darkBlue";

        for(let j = i+1; j < bars.length; j++) {
            bars[j].style.backgroundColor = "red";
            // To pause the execution of code
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, ANIMATION_SPEED)
            );

            let minVal = parseInt(bars[min].childNodes[0].innerHTML);
            let temp = parseInt(bars[j].childNodes[0].innerHTML);

            if(temp < minVal) {
                if(min !== i) {
                    bars[min].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min = j;
            }  else {
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        }

        //swaps the values (if no lower values are found, nothing needs to be swapped)
        if(min != i) {swap(bars, min, i);}
        // To pause the execution of code
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, ANIMATION_SPEED)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min].style.backgroundColor = "  rgb(24, 190, 255)";
    
        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();
}

function swap(arr, ind1, ind2) {
    //Creates the temp values for swapping
    let tempHeight = arr[ind1].style.height;
    let tempColor = arr[ind1].style.backgroundColor;
    let tempVal = arr[ind1].childNodes[0].innerText;

    //loads ind1 with data from ind2
    arr[ind1].style.height = arr[ind2].style.height;
    arr[ind1].style.backgroundColor = arr[ind2].style.backgroundColor;
    arr[ind1].childNodes[0].innerText = arr[ind2].childNodes[0].innerText;

    //loads ind2 with the data originally from ind1
    arr[ind2].style.height = tempHeight;
    arr[ind2].style.backgroundColor = tempColor;
    arr[ind2].childNodes[0].innerText = tempVal;
}

function generateBars(num = ARR_SIZE) {
    clearBars();
    for(let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * (ARR_SIZE * 5)) + 1;
        const container = document.getElementById("sorting-container");

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = (value * 3) + 'px';
        bar.style.transform = 'translateX(' + (i * 30) + 'px)';
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

function clearBars() {
    let bars = document.querySelectorAll(".bar");
    for(let i = 0; i < bars.length; i++) {
        bars[i].parentNode.removeChild(bars[i]);
    }
}


function sortArray() {
    switch(sortAlgo) {
        case "merge":
            mergeSort();
            break;
        case "insertion":
            insertionSort();
            break;
        case "quick":
            quicksort();
            break;
        case "selection":
            selectionSort();
            break;
        default:
            alert("Please select a sorting algorithm");
            break;
    }
}

function disable() {
    // To disable the button "Generate New Array"
    document.getElementById("new-array-btn").disabled = true;
    document.getElementById("new-array-btn").style.backgroundColor = "#d8b6ff";

    // To disable the button "Selection Sort"
    document.getElementById("sort-btn").disabled = true;
    document.getElementById("sort-btn").style.backgroundColor = "#d8b6ff";
}

function enable() {
    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("new-array-btn").disabled = false;
    document.getElementById("new-array-btn").style.backgroundColor = "#6f459e";

    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("sort-btn").disabled = false;
    document.getElementById("sort-btn").style.backgroundColor = "#6f459e";
}

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

function setSize(size) {
    ARR_SIZE = size;
}

function setSpeed(milliseconds) {
    ANIMATION_SPEED = milliseconds;
}

function printArray(arr) { 
    let toPrint = "";
    let i; 
    for (i = 0; i < arr.length; i++) 
        toPrint += arr[i].childNodes[0].innerHTML + " ";
    alert(toPrint);
} 
