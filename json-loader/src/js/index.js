import '../css/estilos.css'
import {firstMessage, delayedMessage} from './message.js';
import foto from '../images/400x400.png';
import data from './tester.json';
import renderToDom from './render-to-dom.js';

console.log(data)

data.nombres.forEach((nombres) => {
    const element = document.createElement('li');
    element.textContent = nombres.name;
    renderToDom(element);
});

document.write(firstMessage)
delayedMessage();
const img = document.createElement('img');
img.setAttribute('src', foto);
//img.setAttribute('width', 50);
//img.setAttribute('height', 50);
document.body.append(img);
//console,console.log("Test de webpack");
console,console.log("Test de webpack desde bundle");
