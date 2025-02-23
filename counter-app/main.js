
let count = 0;

function updateCount() {
    document.getElementById('count').innerText = count;
}

function increase() {
    count++;
    updateCount();
}

function decrease() {
    if (count <= 0) {
        count = 0;
    } else {
        count--;
    }
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}
