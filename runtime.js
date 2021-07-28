// Broken... Not currently working

const header = document.getElementById('header');
const runtime = document.createElement('h4');

const date = new Date().toUTCString;
runtime.textContent = date;

window.addEventListener("load", () => {
    const date = new Date();
    console.log(date);
    const formatDate = date.toUTCString();
    console.log(formatDate);
    runtime.innerHTML = `<h4>${formatDate}</h4>`;
    header.appendChild = runtime;
});