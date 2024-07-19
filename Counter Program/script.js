const decElement = document.getElementById('decreaseBtn')
const incElement = document.getElementById('increaseBtn')
const resetElement = document.getElementById('resetBtn')
const counter = document.getElementById('counterLabel')

let count = 0;

decElement.onclick = () => {
    count--;
    counter.textContent = count;
}
incElement.onclick = () => {
    count++;
    counter.textContent = count;
}
resetElement.onclick = () => {
    count = 0;
    counter.textContent = count;
}