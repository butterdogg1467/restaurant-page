import createHome, { homePageCreated, mainText, currentPage, homeRemove } from "./homepage"
import createMenu, { menuRemove } from "./menu";
import './homestyles.css';
document.addEventListener('DOMContentLoaded', function() {
    let button1 = document.querySelector('#button1')
    let button2 = document.querySelector('#button2')
    let button3 = document.querySelector('#button3')


    createHome()

    button1.addEventListener('click', function() {
        menuRemove()
        createHome()
        currentPage.home = true
        currentPage.menu = false
        currentPage.about = false
    })

    button2.addEventListener('click', function(){
        homeRemove()
        createMenu()
        currentPage.menu = true
        currentPage.home = false
        currentPage.about = false
    })
    
    button3.addEventListener('click', function(){
        menuRemove()
        currentPage.about = true
        currentPage.menu = false
        currentPage.home = false
    })









































































































})