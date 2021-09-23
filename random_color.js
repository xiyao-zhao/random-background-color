// ONE WAY
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
function bgcolor() {
    let num1 = Math.floor(Math.random() * 256); 
    let num2 = Math.floor(Math.random() * 256); 
    let num3 = Math.floor(Math.random() * 256); 
    let color = `rgb(${num1}, ${num2}, ${num3})`;
     // ANOTHER WAY: document.body.style.backgroundColor = `${color}`;
    document.querySelector("body").style.backgroundColor = `${color}`;
    h1.innerText = color;
    if (num1 <= 150 && num2 <= 150 && num3 <=150) {
        h1.style.color = "white";
    } else h1.style.color = "black";
}
button.addEventListener("click", bgcolor);

// ANOTHER WAY 
// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");

// function bgcolor() {
//     let num1 = Math.floor(Math.random() * 256); 
//     let num2 = Math.floor(Math.random() * 256); 
//     let num3 = Math.floor(Math.random() * 256); 
//     return `rgb(${num1}, ${num2}, ${num3})`;
//      // ANOTHER WAY: document.body.style.backgroundColor = `${color}`;
// }
// button.addEventListener("click", () => {
//     const color = bgcolor();
//     document.body.style.backgroundColor = `${color}`;
//     h1.innerText = color;
// });