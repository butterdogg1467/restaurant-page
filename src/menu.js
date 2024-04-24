
import { mainText, secondaryText } from "./homepage";

let menuBackground;
let menuMainText;
let menuItems;

export default function createMenu() {
    let menuButton = document.querySelector('#button2')
    menuButton.addEventListener('click', function(){
        content.removeChild(mainText)
        content.removeChild(secondaryText)

        menuMainText = document.createElement('h1')
        menuMainText.classList.add('menuh1')
        menuMainText.textContent = 'Menu'
        content.appendChild(menuMainText)

        menuBackground = document.createElement('div')
        menuBackground.classList.add('menubackground')
        content.appendChild(menuBackground)
    })
}