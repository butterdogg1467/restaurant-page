
import { homePageCreated, mainText, secondaryText } from "./homepage";

let menuBackground;
let menuMainText;
let menuItems;
let menuCreated;
menuCreated = false

export default function createMenu() {
    if (menuCreated === true) {
        return
    }

    menuCreated = true

    if (homePageCreated === true) {
        content.removeChild(mainText)
        content.removeChild(secondaryText)

        menuMainText = document.createElement('h1')
        menuMainText.classList.add('menuh1')
        menuMainText.textContent = 'Menu'
        content.appendChild(menuMainText)

        menuBackground = document.createElement('div')
        menuBackground.classList.add('menubackground')
        content.appendChild(menuBackground)

    }
    
}

export function menuRemove() {
    content.removeChild(menuBackground)
    content.removeChild(menuMainText)
}

export { menuCreated, menuBackground, menuItems, menuMainText }