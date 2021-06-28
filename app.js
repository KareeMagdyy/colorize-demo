const container = document.querySelector('section');
const body = document.querySelector('body');

for (let i = 1; i <= 30; i++){
    const btn = document.createElement('button');
    btn.innerText = `Click Me!`;
    container.appendChild(btn);
}

for (let i = 1; i <= 10; i++){
    const h1Container = document.createElement('div');
    const h1s = document.createElement('h1');
    h1s.innerText = `Click Me!`;
    body.appendChild(h1Container);
    h1Container.appendChild(h1s);
}

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
        this.style.backgroundColor = randomColor();
        this.style.color = randomColor();
        this.style.borderColor = randomColor();
}



for (let button of buttons){
    button.addEventListener('click' , colorize);
}

for (let h1 of h1s){
    h1.addEventListener('click', colorize);
}

