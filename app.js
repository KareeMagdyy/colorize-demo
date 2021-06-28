const container = document.querySelector('section');

for (let i = 1; i <= 30; i++){
    const btn = document.createElement('button');
    btn.innerText = `Click Me!`;
    container.appendChild(btn);
}

const buttons = document.querySelectorAll('button');

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
    button.addEventListener('click' , colorize)
}

