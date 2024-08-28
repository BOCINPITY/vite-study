import componentACSS from './styles/componentACSS.module.css';
const div = document.createElement('div');
console.log(componentACSS);
document.body.appendChild(div);
div.className = componentACSS.card;