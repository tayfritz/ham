const header = document.getElementById('header');
const runtime = document.createElement('h4');

// const date = new Date().toUTCString;
// runtime.textContent = date;

window.addEventListener("load", () => {
    const date = new Date();
    console.log(date);
    const formatDate = date.toLocaleDateString();
    const formatTime = date.toLocaleTimeString();
    console.log(formatDate);
    console.log(formatTime);
    header.insertAdjacentHTML('beforeend', `This script ran on: ${formatDate} at ${formatTime}`);
});