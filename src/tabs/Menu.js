import goofyPizza from '../resources/cartoon-foods/a goofy movie cheesy pizza.jpg';
import gumbo from '../resources/cartoon-foods/gumbo - princess and the frog.jpg';
import baconAndEggs from '../resources/cartoon-foods/Howl\'s Moving Castle Bacon and Eggs.jpg';
import krabbyPatty from '../resources/cartoon-foods/krabby patty.jpg';
import kungFuBuns from '../resources/cartoon-foods/Kung Fu Panda The buns.jpg';
import ambrosia from '../resources/cartoon-foods/legendary journeys of hercules ambrosia.jpg';
import ramen from '../resources/cartoon-foods/naruto ramen.jpg';
import drumStick from '../resources/cartoon-foods/one piece giant chicken leg.jpg';
import ratatouilleSoup from '../resources/cartoon-foods/ratatouille soup.jpg';
import ratatouilleDish from '../resources/cartoon-foods/Ratatouille_dish.jpg';
import deadSandWich from '../resources/cartoon-foods/the regular show sandwich of death.jpg';
export default function loadMenu() {
    let menu = document.createElement('div');
    menu.classList.add('menu');
    addItemToMenu.call(menu,'Oozy Gooey Cheese Pizza',goofyPizza);
    addItemToMenu.call(menu,"Gumbo",gumbo);
    addItemToMenu.call(menu,'Bacon and Eggs',baconAndEggs);
    addItemToMenu.call(menu,'A Krabby Patty',krabbyPatty);
    addItemToMenu.call(menu,'Kung Fu Buns',kungFuBuns);
    addItemToMenu.call(menu,'Food of The Gods - Ambrosia',ambrosia);
    addItemToMenu.call(menu,'Naruto Ramen',ramen);
    addItemToMenu.call(menu,"A chicken leg fit for a pirate",drumStick);
    addItemToMenu.call(menu,"Famous Soup from Ratatouille",ratatouilleSoup);
    addItemToMenu.call(menu,"The Famous Dish from Ratatouille",ratatouilleDish);
    addItemToMenu.call(menu,"The Death Sandwich - only the toughest can handle it's spice",deadSandWich);
    this.appendChild(menu); 
}

function addItemToMenu(description,image) {
    let img = document.createElement('img');
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('item-img-container')
    let pContainer = document.createElement('div');
    let p = document.createElement('p');
    pContainer.classList.add('item-desc-container')
    p.innerText = description;
    p.classList.add('item-desc');
    img.classList.add('item-img');
    img.src = image;
    imgContainer.appendChild(img);
    pContainer.appendChild(p);
    this.appendChild(pContainer);
    this.appendChild(imgContainer);
}