let sortAlgo = "selection";
let ARR_SIZE = 20;
let ARR = [];
const container = document.getElementById("sorting-container");


function generateBars(num = ARR_SIZE) {
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

async function selectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");

    var min_idx = 0;
    for(let i = 0; i < bars.length; i++) {
        mid_idx = i;
        bars[i].style.backgroundColor = "darkblue"

        for(let j = i + 1; j < bars.length; j++) {

            bars[j].style.backgroundColor = "red";
            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 30)
            );

            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            if(val1 < val2) {
                if(min_idx !== i) {
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 30)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
    
        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("new-array-btn").disabled = false;
    document.getElementById("new-array-btn").style.backgroundColor = "#6f459e";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("sort-btn").disabled = false;
    document.getElementById("sort-btn").style.backgroundColor = "#6f459e";
}

function clearBars() {
    
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

function generate() {
    window.location.reload();
}

function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("new-array-btn").disabled = true;
  document.getElementById("new-array-btn").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.getElementById("sort-btn").disabled = true;
  document.getElementById("sort-btn").style.backgroundColor = "#d8b6ff";
}
