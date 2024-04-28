
import { mainText, secondaryText, currentPage, homeRemove } from "./homepage";

let menuBackground;
let menuMainText;
let menuItems;


export default function createMenu() {
    if (currentPage.menu === true) {
        return
    }

    currentPage.menu = true


    if (currentPage.home === true) {

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

export { menuBackground, menuItems, menuMainText }