import createHome, { homePageCreated, mainText } from "./homepage"
import createMenu, { menuRemove } from "./menu";
import './homestyles.css';
document.addEventListener('DOMContentLoaded', function() {
    let button1 = document.querySelector('#button1')
    let button2 = document.querySelector('#button2')
    let button3 = document.querySelector('#button3')


    createHome()

    button1.addEventListener('click', createHome)

    button2.addEventListener('click', createMenu)
    
    button3.addEventListener('click', menuRemove)









































































































})