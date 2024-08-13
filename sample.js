const q1Num = document.getElementById('q1_num');
const q1Result = document.getElementById('q1_result');
const q1Inputs = document.getElementById('q1_inputs');

function createIp() {
    q1Inputs.innerHTML = '';
    let number = q1Num.value;

    for (let i = 1; i <= number; i++) {
        q1Inputs.innerHTML += `<input type="number" id="q1_inputs-${i}" placeholder="Enter number ${i}">`;
    }
    q1Inputs.innerHTML += `<button onclick="arsrt()">Sort</button>`;
}

function arsrt() {
    let number = q1Num.value;
    let arr = [];
    for (let i = 1; i <= number; i++) {
        arr.push(parseInt(document.getElementById(`q1_inputs-${i}`).value));
    }

    for (let i = 0; i < number - 1; i++) {
        for (let j = 0; j < number - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }

    q1Result.innerText = `Sorted array is: ${arr}`;
}