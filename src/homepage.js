let mainText;
let secondaryText;

export default function createHome() {

    let content = document.querySelector('#content')

    let backgroundImg = document.createElement('img')
    backgroundImg.src = '../images/pexels-janetrangdoan-769969.jpg'

    document.body.style.backgroundImage = `url('${backgroundImg.src}')`;   
    document.body.style.backgroundSize = '105vw 100vh';
    document.body.style.backgroundRepeat = 'no-repeat';

    mainText = document.createElement('h1')
    mainText.textContent = 'Restaurant'
    mainText.classList.add('homepageh1')
    content.appendChild(mainText)

    secondaryText = document.createElement('h2')
    secondaryText.textContent = 'Restaurant is good'
    secondaryText.classList.add('homepageh2')
    content.appendChild(secondaryText)
}

export { mainText, secondaryText };