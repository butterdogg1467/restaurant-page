
import { currentPage } from "./homepage";

let menuBackground;
let menuMainText;
let menuItems;
let menuItem1;
let menuItem2;
let menuItem3;
let menuItem1h1;
let menuItem2h1;
let menuItem3h1;
let menuItem1paragraph;
let menuItem2paragraph;
let menuItem3paragraph;

export default function createMenu() {
    if (currentPage.menu === true) {
        return
    }

    currentPage.menu = true

        menuMainText = document.createElement('h1')
        menuMainText.classList.add('menuh1')
        menuMainText.textContent = 'Menu'
        content.appendChild(menuMainText)

        menuBackground = document.createElement('div')
        menuBackground.classList.add('menubackground')
        content.appendChild(menuBackground)

        menuItem1 = document.createElement ('div')
        menuItem1.classList.add('menuitem')
        menuItem1.classList.add('menuitem1')
        menuBackground.appendChild(menuItem1)

        menuItem1h1 = document.createElement('h1')
        menuItem1h1.classList.add('menuitemh1')
        menuItem1h1.textContent = 'Spaghetti Carbonara'
        menuBackground.appendChild(menuItem1h1)

        menuItem1paragraph = document.createElement('p')
        menuItem1paragraph.classList.add('menuitemparagraph')
        menuItem1.textContent = "Description: A classic Roman pasta dish featuring spaghetti tossed in a creamy sauce made with eggs, Pecorino Romano cheese, crispy pancetta, and black pepper. $12.99"
        menuItem1.appendChild(menuItem1paragraph)

        menuItem2 = document.createElement ('div')
        menuItem2.classList.add('menuitem')
        menuItem2.classList.add('menuitem2')
        menuBackground.appendChild(menuItem2)

        menuItem2h1 = document.createElement('h1')
        menuItem2h1.classList.add('menuitemh2')
        menuItem2h1.textContent = 'Margherita Pizza'
        menuBackground.appendChild(menuItem2h1)

        menuItem2paragraph = document.createElement('p')
        menuItem2paragraph.classList.add('menuitemparagraph')
        menuItem2.textContent = "Description: A traditional Neapolitan pizza topped with fresh tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil. $10.99"
        menuItem2.appendChild(menuItem2paragraph)

        menuItem3 = document.createElement ('div')
        menuItem3.classList.add('menuitem')
        menuItem3.classList.add('menuitem3')
        menuBackground.appendChild(menuItem3)

        menuItem3h1 = document.createElement('h1')
        menuItem3h1.classList.add('menuitemh3')
        menuItem3h1.textContent = 'Chicken Parmigiana'
        menuBackground.appendChild(menuItem3h1)

        menuItem3paragraph = document.createElement('p')
        menuItem3paragraph.classList.add('menuitemparagraph')
        menuItem3.textContent = "Description: Breaded and pan-fried chicken breast topped with marinara sauce, melted mozzarella cheese, and grated Parmesan cheese, served with a side of spaghetti or vegetables. $14.99"
        menuItem3.appendChild(menuItem3paragraph)
    
}

export function menuRemove() {
    content.removeChild(menuBackground)
    content.removeChild(menuMainText)
}

export { menuBackground, menuItems, menuMainText }