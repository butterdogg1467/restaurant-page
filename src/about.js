import { currentPage } from "./homepage";

let aboutBackground;
let aboutMainText;
let aboutParagraph;

export default function createAbout() {
    if (currentPage.about === true) {
        return
    }

    aboutMainText = document.createElement('h1')
    aboutMainText.classList.add('abouth1')
    aboutMainText.textContent = 'About'
    content.appendChild(aboutMainText)

    aboutBackground = document.createElement('div')
    aboutBackground.classList.add('aboutbackground')
    content.appendChild(aboutBackground)

    aboutParagraph = document.createElement('p')
    aboutParagraph.classList.add('aboutparagraph')
    aboutParagraph.textContent = "Indulge in the rich flavors of Italy at our authentic restaurant. Our passion for Italian cuisine is reflected in every dish we prepare, from traditional pasta favorites to mouthwatering pizzas baked to perfection. Using only the finest ingredients and time-honored recipes, we offer a culinary journey that captures the essence of Italy's diverse regions. Whether you're savoring our homemade sauces or experiencing the aromatic blend of fresh herbs and cheeses, each bite tells a story of culinary excellence. Join us for an unforgettable dining experience where every meal is a celebration of Italian culture, warmth, and hospitality."
    aboutBackground.appendChild(aboutParagraph)

}

export function aboutRemove() {
    content.removeChild(aboutMainText)
    content.removeChild(aboutBackground)
}