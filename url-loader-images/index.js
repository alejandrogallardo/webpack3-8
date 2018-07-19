import './estilos.css'
import {firstMessage, delayedMessage} from './message.js';
import foto from './400x400.png';

document.write(firstMessage)
delayedMessage();
const img = document.createElement('img');
img.setAttribute('src', foto);
//img.setAttribute('width', 50);
//img.setAttribute('height', 50);
document.body.append(img);
//console,console.log("Test de webpack");
console,console.log("Test de webpack desde bundle");
