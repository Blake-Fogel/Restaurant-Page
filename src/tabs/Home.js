import loadMenu from './Menu.js'
export default function loadHome() {
    this.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('description','home');
    let h1 = document.createElement('h1');
    h1.innerText = 'Come dine at the Cartoon Cafe!';
    let p = document.createElement('p');
    p.innerText = 'Here at the Cartoon Cafe we serve dishes from your favorite childhood cartoons! Want a Krabby Patty? We got it. Ambrosia? We got it. Ratatouille? We got it. Wondering what else we have? See ';
    let a = document.createElement('a');
    a.innerText = 'here';
    let handlerFunction = function(event) {
        event.preventDefault();
        this.innerHTML = '';
        loadMenu.call(this);
    };
    a.addEventListener('click',handlerFunction.bind(this));
    p.appendChild(a);
    p.insertAdjacentText('beforeend','!');
    div.appendChild(h1);
    div.appendChild(p);
    this.appendChild(div);
}