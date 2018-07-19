import renderToDom from './render-to-dom.js';
import makeMessage from './make-message';

const waitTime = new Promise((ret, mal) =>{
    setTimeout(()=>{
        ret('Mensaje con retraso de 3seg')
    }, 3000)
})
module.exports = {
    firstMessage: 'Mensaje JS con babel-loader',
    delayedMessage: async () => {
        const message = await waitTime;
        console.log(message);
        //const element = document.createElement('p')
        //element.textContent = message;
        renderToDom(makeMessage(message));
    },
}