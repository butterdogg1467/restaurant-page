export default function initialPageLoad() {
    let content = document.querySelector('#content')

    let backgroundImg = document.createElement('img')
    backgroundImg.src = '../images/pexels-janetrangdoan-769969.jpg'
    backgroundImg.classList.add('')
    content.append(backgroundImg)

    let mainText = document.createElement('h1')
    mainText.textContent = 'Restaurant'
    mainText.classList.add('')
    content.appendChild(mainText)

    let secondaryText = document.createElement('h2')
    secondaryText.textContent = 'Restaurant is good'
    secondaryText.classList.add('')
    content.appendChild(secondaryText)
}