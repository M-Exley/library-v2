import imageTacoFile from './taco.jpg'
import imageDrinkFile from './drink.jpg'

export default function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.classList.remove('content');
    content.classList.add('menucont');

    const divTaco = document.createElement('div');
    divTaco.classList.add('menudivs')
    const imageTaco = document.createElement('img');
    imageTaco.src = imageTacoFile;
    imageTaco.style.height = '300px';
    divTaco.appendChild(imageTaco);
    const para = document.createElement('p');
    para.textContent = `Our tacos de pastor are world famous`;
    divTaco.appendChild(para);
    content.appendChild(divTaco)
    
    const divDrink = document.createElement('div');
    divDrink.classList.add('menudivs')
    const imageDrink = document.createElement('img');
    imageDrink.src = imageDrinkFile;
    imageDrink.style.height = '300px';
    divDrink.appendChild(imageDrink);
    const para2 = document.createElement('p');
    para2.textContent = `Our drinks taste of Mexico`;
    divDrink.appendChild(para2);
    content.appendChild(divDrink)

    
    
}